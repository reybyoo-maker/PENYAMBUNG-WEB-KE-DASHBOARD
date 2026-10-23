import { TRACKER_JS } from "./tracker.js";
import { MANIFEST } from "./modules.js";

const MAX_BODY_BYTES = 32 * 1024;
const MAX_EVENTS_PER_REQUEST = 25;
const ALLOWED_EVENT_TYPES = new Set([
  "page_view",
  "active_ping",
  "click",
  "ebook_click",
  "custom_event",
  "form_submit"
]);
const ALLOWED_DASHBOARD_HOSTS = new Set([
  "dashboard.aigrowth.my.id",
  "aigrowth-owner-dashboard.reybyoo.workers.dev"
]);

function allowedOrigins(env) {
  const configured = String(env.ALLOWED_ORIGINS || "https://aigrowth.my.id")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return new Set(configured);
}

function corsHeaders(origin, env) {
  const headers = new Headers({
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  });
  if (origin && allowedOrigins(env).has(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
  }
  return headers;
}

function jsonResponse(data, status, origin, env, extraHeaders = {}) {
  const headers = corsHeaders(origin, env);
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Cache-Control", "no-store");
  for (const [key, value] of Object.entries(extraHeaders)) headers.set(key, value);
  return new Response(JSON.stringify(data), { status, headers });
}

function parseDashboardUrl(raw) {
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") return null;
    if (!ALLOWED_DASHBOARD_HOSTS.has(url.hostname)) return null;
    return url;
  } catch {
    return null;
  }
}

function clip(value, max = 160) {
  return String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function safePagePath(value, origin) {
  try {
    const url = new URL(String(value || "/"), origin);
    if (url.origin !== origin) return "/";
    return (url.pathname || "/").slice(0, 512);
  } catch {
    return "/";
  }
}

function safeReferrer(value) {
  try {
    if (!value) return "";
    const url = new URL(String(value));
    return url.protocol === "https:" || url.protocol === "http:" ? url.origin : "";
  } catch {
    return "";
  }
}

function countryCity(request) {
  const cf = request.cf || {};
  return {
    country: clip(cf.country, 8),
    region: clip(cf.region, 100),
    city: clip(cf.city, 100),
    continent: clip(cf.continent, 8)
  };
}

function normalizeEvent(input, request, origin) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const eventType = clip(input.event_type, 40);
  if (!ALLOWED_EVENT_TYPES.has(eventType)) return null;

  let occurredAt = new Date().toISOString();
  if (typeof input.occurred_at === "string") {
    const parsed = new Date(input.occurred_at);
    if (Number.isFinite(parsed.getTime())) occurredAt = parsed.toISOString();
  }

  const geo = countryCity(request);
  const ua = request.headers.get("user-agent") || "";
  const event = {
    schema_version: 1,
    event_id: clip(input.event_id, 100) || crypto.randomUUID(),
    event_type: eventType,
    event_name: clip(input.event_name, 100),
    occurred_at: occurredAt,
    received_at: new Date().toISOString(),
    page_url: safePagePath(input.page_url, origin),
    page_title: clip(input.page_title, 180),
    referrer_domain: safeReferrer(input.referrer_domain),
    utm_source: clip(input.utm_source, 120),
    utm_medium: clip(input.utm_medium, 120),
    utm_campaign: clip(input.utm_campaign, 120),
    utm_content: clip(input.utm_content, 120),
    utm_term: clip(input.utm_term, 120),
    visitor_id: clip(input.visitor_id, 100),
    session_id: clip(input.session_id, 100),
    device_type: clip(input.device_type, 24),
    device_model: clip(input.device_model, 80),
    os: clip(input.os, 50),
    browser: clip(input.browser, 50),
    language: clip(input.language, 24),
    timezone: clip(input.timezone, 80),
    screen_width: Math.max(0, Math.min(20000, Number(input.screen_width) || 0)),
    screen_height: Math.max(0, Math.min(20000, Number(input.screen_height) || 0)),
    element_tag: clip(input.element_tag, 24),
    element_text: clip(input.element_text, 120),
    element_id: clip(input.element_id, 100),
    track_name: clip(input.track_name, 100),
    link_domain: clip(input.link_domain, 253),
    product_hint: clip(input.product_hint, 100),
    country: geo.country,
    region: geo.region,
    city: geo.city,
    continent: geo.continent,
    user_agent_family: guessBrowser(ua)
  };
  return event;
}

function guessBrowser(ua) {
  if (/Edg\//i.test(ua)) return "Edge";
  if (/OPR\//i.test(ua)) return "Opera";
  if (/Firefox\//i.test(ua)) return "Firefox";
  if (/Chrome\//i.test(ua)) return "Chrome";
  if (/Safari\//i.test(ua)) return "Safari";
  return "Other";
}

async function readJsonLimited(request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) throw new Error("body_too_large");
  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > MAX_BODY_BYTES) throw new Error("body_too_large");
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("invalid_json");
  }
}

async function forwardEvents(events, env) {
  const dashboardUrl = parseDashboardUrl(env.DASHBOARD_TRACKING_URL);
  const token = String(env.DASHBOARD_INGEST_TOKEN || "");
  if (!dashboardUrl || !token) {
    return { ok: false, status: 503, code: "bridge_not_configured" };
  }

  const mode = String(env.DASHBOARD_PAYLOAD_MODE || "records");
  const batches = mode === "single" ? events.map((event) => [event]) : [events];
  for (const batch of batches) {
    let body;
    if (mode === "events") body = JSON.stringify({ events: batch });
    else if (mode === "single") body = JSON.stringify(batch[0]);
    else body = JSON.stringify({ records: batch });

    let upstream;
    try {
      upstream = await fetch(dashboardUrl.toString(), {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + token,
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body,
        signal: AbortSignal.timeout(8000)
      });
    } catch {
      return { ok: false, status: 502, code: "dashboard_unreachable" };
    }
    if (!upstream.ok) {
      return { ok: false, status: 502, code: "dashboard_rejected", upstream_status: upstream.status };
    }
  }
  return { ok: true, status: 202, code: "forwarded" };
}

async function handleCollect(request, env, origin) {
  if (!origin || !allowedOrigins(env).has(origin)) {
    return jsonResponse({ ok: false, error: "origin_not_allowed" }, 403, origin, env);
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonResponse({ ok: false, error: "application_json_required" }, 415, origin, env);
  }

  let input;
  try {
    input = await readJsonLimited(request);
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message === "body_too_large" ? "body_too_large" : "invalid_json" },
      error.message === "body_too_large" ? 413 : 400, origin, env);
  }

  let rawEvents;
  if (Array.isArray(input)) rawEvents = input;
  else if (input && Array.isArray(input.events)) rawEvents = input.events;
  else if (input && Array.isArray(input.records)) rawEvents = input.records;
  else rawEvents = [input];

  if (!rawEvents.length || rawEvents.length > MAX_EVENTS_PER_REQUEST) {
    return jsonResponse({ ok: false, error: "invalid_event_count", maximum: MAX_EVENTS_PER_REQUEST }, 400, origin, env);
  }

  const events = rawEvents.map((item) => normalizeEvent(item, request, origin));
  if (events.some((event) => !event)) {
    return jsonResponse({ ok: false, error: "invalid_event_type_or_shape" }, 400, origin, env);
  }

  const result = await forwardEvents(events, env);
  if (!result.ok) {
    return jsonResponse({
      ok: false,
      error: result.code,
      upstream_status: result.upstream_status || undefined,
      accepted_count: 0
    }, result.status, origin, env);
  }
  return jsonResponse({ ok: true, forwarded: true, accepted_count: events.length }, 202, origin, env);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get("origin") || "";

    if (request.method === "OPTIONS") {
      if (origin && !allowedOrigins(env).has(origin)) {
        return jsonResponse({ ok: false, error: "origin_not_allowed" }, 403, origin, env);
      }
      return new Response(null, { status: 204, headers: corsHeaders(origin, env) });
    }

    if (request.method === "GET" && url.pathname === "/health") {
      const endpoint = parseDashboardUrl(env.DASHBOARD_TRACKING_URL);
      const ready = Boolean(endpoint && env.DASHBOARD_INGEST_TOKEN);
      return jsonResponse({
        ok: true,
        service: "aga-dashboard-bridge",
        version: "1.0.0",
        ready,
        configuration: {
          dashboardEndpointConfigured: Boolean(endpoint),
          ingestTokenConfigured: Boolean(env.DASHBOARD_INGEST_TOKEN),
          payloadMode: String(env.DASHBOARD_PAYLOAD_MODE || "records"),
          allowedOrigins: Array.from(allowedOrigins(env))
        }
      }, 200, origin, env);
    }

    if (request.method === "GET" && url.pathname === "/manifest") {
      return jsonResponse(MANIFEST, 200, origin, env);
    }

    if (request.method === "GET" && url.pathname === "/tracker.js") {
      return new Response(TRACKER_JS, {
        status: 200,
        headers: {
          ...Object.fromEntries(corsHeaders(origin, env)),
          "Content-Type": "application/javascript; charset=utf-8",
          "Cache-Control": "public, max-age=300",
          "X-Content-Type-Options": "nosniff"
        }
      });
    }

    if (request.method === "POST" && url.pathname === "/collect") {
      return handleCollect(request, env, origin);
    }

    return jsonResponse({ ok: false, error: "not_found" }, 404, origin, env);
  }
};
