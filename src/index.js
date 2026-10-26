import { TRACKER_JS } from "./tracker.js";
import { MANIFEST } from "./modules.js";
import { DASHBOARD_PANEL_JS } from "./dashboard-panel.js";
import { DIVISIONS_PANEL_JS } from "./divisions-panel.js";
import { DIVISION_SETUP_PANEL_JS } from "./division-setup-panel.js";

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
  const configured = String(env.ALLOWED_ORIGINS || "https://aigrowth.my.id,https://dashboard.aigrowth.my.id")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return new Set(configured);
}

function corsHeaders(origin, env) {
  const headers = new Headers({
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
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


const ANALYTICS_COLUMNS = [
  "event_id", "event_type", "event_name", "occurred_at", "received_at",
  "page_url", "page_title", "referrer_domain", "utm_source", "utm_medium",
  "utm_campaign", "utm_content", "utm_term", "visitor_id", "session_id",
  "device_type", "device_model", "os", "browser", "language", "timezone",
  "screen_width", "screen_height", "element_tag", "element_text", "element_id",
  "track_name", "link_domain", "product_hint", "country", "region", "city",
  "continent", "user_agent_family"
];

async function storeEvents(events, env) {
  if (!env.DB) return { ok: false, status: 503, code: "d1_not_configured" };
  const placeholders = ANALYTICS_COLUMNS.map(() => "?").join(", ");
  const sql = "INSERT INTO website_analytics_events (" + ANALYTICS_COLUMNS.join(", ") +
    ") VALUES (" + placeholders + ") ON CONFLICT(event_id) DO NOTHING";
  try {
    const statements = events.map((event) =>
      env.DB.prepare(sql).bind(...ANALYTICS_COLUMNS.map((column) => event[column]))
    );
    await env.DB.batch(statements);
    return { ok: true, status: 202, code: "stored", stored_count: events.length };
  } catch {
    return { ok: false, status: 503, code: "d1_write_failed" };
  }
}

async function websiteAnalytics(request, env, origin) {
  if (!env.DB) return jsonResponse({ ok: false, error: "d1_not_configured" }, 503, origin, env);
  const url = new URL(request.url);
  const requestedDays = Number(url.searchParams.get("days") || 30);
  const days = [7, 14, 30, 90].includes(requestedDays) ? requestedDays : 30;
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
  const activeSince = new Date(Date.now() - 5 * 60 * 1000).toISOString();

  try {
    const [summary, daily, topPages, topClicks, sources, devices, geography] = await Promise.all([
      env.DB.prepare(
        "SELECT COUNT(*) AS total_events, " +
        "SUM(CASE WHEN event_type = 'page_view' THEN 1 ELSE 0 END) AS page_views, " +
        "COUNT(DISTINCT CASE WHEN event_type = 'page_view' THEN visitor_id END) AS unique_visitors, " +
        "COUNT(DISTINCT CASE WHEN event_type = 'active_ping' AND received_at >= ? THEN visitor_id END) AS active_visitors " +
        "FROM website_analytics_events WHERE occurred_at >= ?"
      ).bind(activeSince, since).first(),
      env.DB.prepare(
        "SELECT substr(occurred_at, 1, 10) AS day, COUNT(*) AS page_views, " +
        "COUNT(DISTINCT visitor_id) AS visitors FROM website_analytics_events " +
        "WHERE event_type = 'page_view' AND occurred_at >= ? " +
        "GROUP BY substr(occurred_at, 1, 10) ORDER BY day ASC LIMIT 90"
      ).bind(since).all(),
      env.DB.prepare(
        "SELECT page_url, MAX(page_title) AS page_title, COUNT(*) AS visits, " +
        "COUNT(DISTINCT visitor_id) AS visitors FROM website_analytics_events " +
        "WHERE event_type = 'page_view' AND occurred_at >= ? " +
        "GROUP BY page_url ORDER BY visits DESC LIMIT 10"
      ).bind(since).all(),
      env.DB.prepare(
        "SELECT COALESCE(NULLIF(track_name, ''), NULLIF(event_name, ''), element_text, event_type) AS label, " +
        "event_type, COUNT(*) AS clicks FROM website_analytics_events " +
        "WHERE event_type IN ('click', 'ebook_click', 'custom_event') AND occurred_at >= ? " +
        "GROUP BY label, event_type ORDER BY clicks DESC LIMIT 10"
      ).bind(since).all(),
      env.DB.prepare(
        "SELECT COALESCE(NULLIF(utm_source, ''), NULLIF(referrer_domain, ''), 'Direct') AS source, " +
        "COUNT(*) AS visits FROM website_analytics_events WHERE event_type = 'page_view' " +
        "AND occurred_at >= ? GROUP BY source ORDER BY visits DESC LIMIT 10"
      ).bind(since).all(),
      env.DB.prepare(
        "SELECT COALESCE(NULLIF(device_type, ''), 'unknown') AS device, COUNT(*) AS visits " +
        "FROM website_analytics_events WHERE event_type = 'page_view' AND occurred_at >= ? " +
        "GROUP BY device ORDER BY visits DESC"
      ).bind(since).all(),
      env.DB.prepare(
        "SELECT COALESCE(NULLIF(country, ''), 'unknown') AS country, " +
        "COALESCE(NULLIF(city, ''), 'unknown') AS city, COUNT(*) AS visits " +
        "FROM website_analytics_events WHERE event_type = 'page_view' AND occurred_at >= ? " +
        "GROUP BY country, city ORDER BY visits DESC LIMIT 10"
      ).bind(since).all()
    ]);
    return jsonResponse({
      ok: true,
      source: "cloudflare-d1",
      range_days: days,
      generated_at: new Date().toISOString(),
      summary: {
        total_events: Number(summary?.total_events || 0),
        page_views: Number(summary?.page_views || 0),
        unique_visitors: Number(summary?.unique_visitors || 0),
        active_visitors: Number(summary?.active_visitors || 0)
      },
      daily: daily.results || [],
      top_pages: topPages.results || [],
      top_clicks: topClicks.results || [],
      traffic_sources: sources.results || [],
      devices: devices.results || [],
      geography: geography.results || []
    }, 200, origin, env);
  } catch {
    return jsonResponse({ ok: false, error: "analytics_schema_not_ready" }, 503, origin, env);
  }
}


function parseJsonColumn(value, fallback = []) {
  try {
    const parsed = JSON.parse(String(value || ""));
    return parsed;
  } catch {
    return fallback;
  }
}


function safeHttpsUrl(value) {
  try {
    const url = new URL(String(value || ""));
    return url.protocol === "https:" ? url.toString().slice(0, 1000) : "";
  } catch {
    return "";
  }
}

function publicResearchView(row) {
  const output = parseJsonColumn(row.output_json, {});
  const sources = (Array.isArray(output.sources) ? output.sources : []).map((source) => ({
    title: clip(source.title, 200),
    domain: clip(source.domain, 160),
    url: safeHttpsUrl(source.url),
    snippet: clip(source.snippet, 700),
    published_date: clip(source.published_date, 40)
  })).filter((source) => source.url).slice(0, 5);
  return {
    task_id: row.task_id,
    status: row.status,
    title: clip(row.title, 160),
    summary: clip(output.summary || row.error_text || "", 1200),
    query: clip(output.query || "", 240),
    sources,
    created_at: row.created_at,
    completed_at: row.completed_at || null,
    outcome: clip(output.outcome || (row.status === "failed" ? "failed" : row.status), 40)
  };
}

async function getDivisions(request, env, origin) {
  if (!env.DB) {
    return jsonResponse({ ok: false, error: "d1_not_configured" }, 503, origin, env);
  }
  try {
    const dayStart = new Date();
    dayStart.setUTCHours(0, 0, 0, 0);
    const dayStartIso = dayStart.toISOString();
    const [divisionRows, integrationRows, operationRows, taskSummary, latestResearchRows, researchDaily, executorState, runtimeAuditRows] = await Promise.all([
      env.DB.prepare(
        "SELECT d.*, " +
        "COALESCE((SELECT s.setup_stage FROM aga_division_setup s WHERE s.division_slug=d.slug), 'not_started') AS setup_stage, " +
        "(SELECT COUNT(*) FROM aga_division_tasks t WHERE t.division_slug=d.slug " +
        "AND t.status IN ('awaiting_approval','queued','running')) AS open_tasks " +
        "FROM aga_division_registry d ORDER BY d.sort_order ASC"
      ).all(),
      env.DB.prepare(
        "SELECT id, division_slug, integration_key, label, required, status, notes, last_checked_at " +
        "FROM aga_division_integrations ORDER BY division_slug, required DESC, label"
      ).all(),
      env.DB.prepare(
        "SELECT division_slug, " +
        "SUM(CASE WHEN status='completed' THEN 1 ELSE 0 END) AS completed, " +
        "SUM(CASE WHEN status='failed' THEN 1 ELSE 0 END) AS failed, " +
        "SUM(CASE WHEN status IN ('awaiting_approval','queued','running') THEN 1 ELSE 0 END) AS open, " +
        "COUNT(*) AS total, MAX(COALESCE(completed_at, updated_at, created_at)) AS last_activity " +
        "FROM aga_division_tasks WHERE COALESCE(task_type,'general') <> 'public_research' GROUP BY division_slug"
      ).all(),
      env.DB.prepare(
        "SELECT COUNT(*) AS open_tasks FROM aga_division_tasks " +
        "WHERE status IN ('awaiting_approval','queued','running')"
      ).first(),
      env.DB.prepare(
        "SELECT task_id, division_slug, title, status, output_json, error_text, created_at, completed_at " +
        "FROM (" +
        " SELECT t.*, ROW_NUMBER() OVER (PARTITION BY t.division_slug ORDER BY t.created_at DESC, t.task_id DESC) AS rn " +
        " FROM aga_division_tasks t WHERE t.task_type='public_research' AND t.requested_by='system_scheduler'" +
        ") WHERE rn=1"
      ).all(),
      env.DB.prepare(
        "SELECT " +
        "SUM(CASE WHEN status='completed' THEN 1 ELSE 0 END) AS completed_today, " +
        "SUM(CASE WHEN status='failed' THEN 1 ELSE 0 END) AS failed_today, " +
        "SUM(CASE WHEN status IN ('queued','running','awaiting_approval') THEN 1 ELSE 0 END) AS open_today " +
        "FROM aga_division_tasks WHERE task_type='public_research' AND requested_by='system_scheduler' AND created_at >= ?"
      ).bind(dayStartIso).first(),
      env.DB.prepare(
        "SELECT enabled, last_division_sort_order, last_cycle_at, last_completed_at, last_error, paused_reason, paused_until, total_completed, total_failed " +
        "FROM aga_division_executor_state WHERE singleton_id=1"
      ).first(),
      env.DB.prepare(
        "SELECT division_slug, supervisor_enabled, readiness_state, readiness_percent, required_integrations, verified_required_integrations, " +
        "completed_operations, failed_operations, open_operations, total_operations, latest_research_status, latest_research_at, " +
        "blockers_json, last_checked_at, last_error FROM aga_division_runtime_audit ORDER BY division_slug"
      ).all()
    ]);

    const latestResearchByDivision = new Map((latestResearchRows.results || []).map((row) => [row.division_slug, publicResearchView(row)]));
    const operationsByDivision = new Map((operationRows.results || []).map((row) => [row.division_slug, {
      completed: Number(row.completed || 0),
      failed: Number(row.failed || 0),
      open: Number(row.open || 0),
      total: Number(row.total || 0),
      last_activity: row.last_activity || null
    }]));
    const runtimeAuditByDivision = new Map((runtimeAuditRows.results || []).map((row) => [row.division_slug, {
      supervisor_enabled: Number(row.supervisor_enabled) === 1,
      readiness_state: row.readiness_state || "not_audited",
      readiness_percent: Number(row.readiness_percent || 0),
      required_integrations: Number(row.required_integrations || 0),
      verified_required_integrations: Number(row.verified_required_integrations || 0),
      operations: {
        completed: Number(row.completed_operations || 0),
        failed: Number(row.failed_operations || 0),
        open: Number(row.open_operations || 0),
        total: Number(row.total_operations || 0)
      },
      latest_research_status: row.latest_research_status || "no_result",
      latest_research_at: row.latest_research_at || null,
      blockers: parseJsonColumn(row.blockers_json, []),
      last_checked_at: row.last_checked_at || null,
      last_error: row.last_error || ""
    }]));
    const workerProfiles = new Map((MANIFEST.divisions || []).map((item) => [item.slug, item.workers || []]));
    const divisions = (divisionRows.results || []).map((row) => ({
      slug: row.slug,
      name: row.name,
      sort_order: row.sort_order,
      category: row.category,
      mission: row.mission,
      responsibilities: parseJsonColumn(row.responsibilities_json, []),
      inputs: parseJsonColumn(row.inputs_json, []),
      outputs: parseJsonColumn(row.outputs_json, []),
      workers: workerProfiles.get(row.slug) || [],
      worker_count: (workerProfiles.get(row.slug) || []).length,
      kpis: parseJsonColumn(row.kpis_json, []),
      automation_level: row.automation_level,
      approval_policy: row.approval_policy,
      catalog_enabled: Boolean(row.catalog_enabled),
      runtime_status: row.runtime_status,
      setup_stage: row.setup_stage || "not_started",
      open_tasks: Number(row.open_tasks || 0),
      operations: operationsByDivision.get(row.slug) || { completed: 0, failed: 0, open: 0, total: 0, last_activity: null },
      runtime_audit: runtimeAuditByDivision.get(row.slug) || null,
      latest_public_research: latestResearchByDivision.get(row.slug) || null,
      created_at: row.created_at,
      updated_at: row.updated_at
    }));
    const integrations = (integrationRows.results || []).map((row) => ({
      id: row.id,
      division_slug: row.division_slug,
      integration_key: row.integration_key,
      label: row.label,
      required: Number(row.required) === 1,
      status: row.status,
      notes: row.notes,
      last_checked_at: row.last_checked_at
    }));

    return jsonResponse({
      ok: true,
      source: "cloudflare-d1",
      generated_at: new Date().toISOString(),
      summary: {
        total_divisions: divisions.length,
        connected_integrations: integrations.filter((item) => item.status === "connected" || item.status === "verified").length,
        total_integrations: integrations.length,
        open_tasks: Number(taskSummary?.open_tasks || 0),
        operational_divisions: divisions.filter((item) => item.runtime_status === "active").length,
        runtime_supervisor: {
          enabled: runtimeAuditRows.results?.length === divisions.length && divisions.length > 0,
          monitored_divisions: runtimeAuditRows.results?.length || 0,
          blocked_integrations: (runtimeAuditRows.results || []).filter((item) => item.readiness_state === "blocked_integrations").length,
          connectors_ready_runtime_missing: (runtimeAuditRows.results || []).filter((item) => item.readiness_state === "connectors_ready_runtime_missing").length,
          last_check_at: (runtimeAuditRows.results || []).reduce((latest, item) => !latest || String(item.last_checked_at || "") > latest ? item.last_checked_at : latest, null)
        },
        public_research: {
          completed_today: Number(researchDaily?.completed_today || 0),
          failed_today: Number(researchDaily?.failed_today || 0),
          open_today: Number(researchDaily?.open_today || 0),
          daily_target: divisions.length,
          completed_total: Number(executorState?.total_completed || 0),
          failed_total: Number(executorState?.total_failed || 0)
        },
        executor: {
          provider: "TinyFish Search API",
          configured: Boolean(String(env.TINYFISH_API_KEY || "").trim()),
          enabled: Number(executorState?.enabled || 0) === 1,
          paused_reason: clip(executorState?.paused_reason || "", 80),
          paused_until: executorState?.paused_until || null,
          last_cycle_at: executorState?.last_cycle_at || null,
          last_completed_at: executorState?.last_completed_at || null,
          last_error: clip(executorState?.last_error || "", 180),
          last_division_sort_order: Number(executorState?.last_division_sort_order || 0)
        }
      },
      divisions,
      integrations
    }, 200, origin, env);
  } catch {
    return jsonResponse({
      ok: false,
      error: "division_registry_not_ready",
      message: "Apply the registered division and executor-state migrations, then redeploy."
    }, 503, origin, env);
  }
}

async function tinyfishKeyFingerprint(apiKey) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(apiKey));
  return Array.from(new Uint8Array(digest).slice(0, 8)).map((v) => v.toString(16).padStart(2, "0")).join("");
}

function nextUtcMidnight() {
  const date = new Date();
  date.setUTCHours(24, 0, 0, 0);
  return date.toISOString();
}

async function setExecutorPause(env, reason, until, keyFingerprint, message) {
  await env.DB.prepare(
    "UPDATE aga_division_executor_state SET paused_reason=?, paused_until=?, last_key_fingerprint=?, last_error=?, updated_at=? WHERE singleton_id=1"
  ).bind(reason, until || null, keyFingerprint || "", clip(message, 240), new Date().toISOString()).run();
}

async function runPublicResearchCycle(env) {
  if (!env.DB) return;
  const now = new Date();
  const nowIso = now.toISOString();
  const apiKey = String(env.TINYFISH_API_KEY || "").trim();
  if (!apiKey) {
    await env.DB.prepare(
      "UPDATE aga_division_executor_state SET last_error='TINYFISH_API_KEY secret is missing', updated_at=? WHERE singleton_id=1"
    ).bind(nowIso).run();
    return;
  }

  const keyFingerprint = await tinyfishKeyFingerprint(apiKey);
  let state = await env.DB.prepare("SELECT * FROM aga_division_executor_state WHERE singleton_id=1").first();
  if (!state || Number(state.enabled) !== 1) return;

  if (state.paused_reason) {
    const pauseExpired = state.paused_until && Date.parse(state.paused_until) <= now.getTime();
    const keyChanged = state.paused_reason === "tinyfish_api_key_invalid" &&
      state.last_key_fingerprint && state.last_key_fingerprint !== keyFingerprint;
    if (pauseExpired || keyChanged) {
      await env.DB.prepare(
        "UPDATE aga_division_executor_state SET paused_reason='', paused_until=NULL, last_error='', last_key_fingerprint=?, updated_at=? WHERE singleton_id=1"
      ).bind(keyFingerprint, nowIso).run();
      state = await env.DB.prepare("SELECT * FROM aga_division_executor_state WHERE singleton_id=1").first();
    } else {
      return;
    }
  }

  const dayStart = new Date();
  dayStart.setUTCHours(0, 0, 0, 0);
  const dayStartIso = dayStart.toISOString();
  const cursor = Number(state.last_division_sort_order || 0);
  const divisionRows = await env.DB.prepare(
    "SELECT d.slug, d.name, d.sort_order, d.mission, d.responsibilities_json, d.inputs_json, d.outputs_json, d.kpis_json " +
    "FROM aga_division_registry d WHERE d.catalog_enabled=1 AND NOT EXISTS (" +
    " SELECT 1 FROM aga_division_tasks t WHERE t.division_slug=d.slug AND t.task_type='public_research' " +
    " AND t.requested_by='system_scheduler' AND t.status='completed' AND t.created_at >= ?" +
    ") ORDER BY CASE WHEN d.sort_order > ? THEN 0 ELSE 1 END, d.sort_order ASC LIMIT 25"
  ).bind(dayStartIso, cursor).all();
  const divisions = divisionRows.results || [];
  if (!divisions.length) {
    await env.DB.prepare(
      "UPDATE aga_division_executor_state SET last_cycle_at=?, last_error='', updated_at=? WHERE singleton_id=1"
    ).bind(nowIso, nowIso).run();
    return;
  }

  for (const division of divisions) {
    const query = clip(division.name + " " + division.mission + " current best practices examples and benchmarks", 300);
    const purpose = clip(
      "Collect public, source-linked evidence to inform the AIGROWTH division mission: " +
      division.mission + ". Research only. Do not log in, submit forms, message anyone, publish, purchase, or change data.",
      900
    );
    const taskId = crypto.randomUUID();
    const input = {
      provider: "TinyFish Search API",
      query,
      purpose,
      research_scope: "public_web_search",
      division_name: division.name,
      division_mission: division.mission,
      expected_outputs: parseJsonColumn(division.outputs_json, []).slice(0, 5),
      kpis: parseJsonColumn(division.kpis_json, []).slice(0, 5)
    };
    const startedAt = new Date().toISOString();
    await env.DB.prepare(
      "INSERT INTO aga_division_tasks " +
      "(task_id, division_slug, title, description, task_type, priority, status, approval_required, requested_by, input_json, output_json, error_text, started_at) " +
      "VALUES (?, ?, ?, ?, 'public_research', 3, 'running', 0, 'system_scheduler', ?, '{}', '', ?)"
    ).bind(
      taskId,
      division.slug,
      "Public research brief — " + division.name,
      "Scheduled, read-only public-web research for the registered division mission.",
      JSON.stringify(input),
      startedAt
    ).run();

    const searchUrl = new URL("https://api.search.tinyfish.ai/");
    searchUrl.searchParams.set("query", query);
    searchUrl.searchParams.set("purpose", purpose);
    searchUrl.searchParams.set("location", "ID");
    searchUrl.searchParams.set("language", "en");
    let response;
    let payload = {};
    try {
      response = await fetch(searchUrl.toString(), {
        method: "GET",
        headers: { "X-API-Key": apiKey, "Accept": "application/json" },
        cache: "no-store",
        signal: AbortSignal.timeout(12000)
      });
      try { payload = await response.json(); } catch { payload = {}; }
    } catch (error) {
      const message = "TinyFish Search API request failed: " + clip(error && error.message || "network error", 160);
      await env.DB.prepare(
        "UPDATE aga_division_tasks SET status='failed', error_text=?, completed_at=?, updated_at=? WHERE task_id=?"
      ).bind(message, new Date().toISOString(), new Date().toISOString(), taskId).run();
      await env.DB.prepare(
        "UPDATE aga_division_executor_state SET total_failed=total_failed+1, paused_reason='tinyfish_search_temporarily_unavailable', paused_until=?, last_error=?, updated_at=? WHERE singleton_id=1"
      ).bind(new Date(Date.now() + 10 * 60 * 1000).toISOString(), message, new Date().toISOString()).run();
      return;
    }

    if (!response.ok) {
      const apiMessage = clip(payload.error || payload.message || payload.code || ("HTTP " + response.status), 180);
      const failedAt = new Date().toISOString();
      await env.DB.prepare(
        "UPDATE aga_division_tasks SET status='failed', error_text=?, completed_at=?, updated_at=? WHERE task_id=?"
      ).bind("TinyFish Search API error: " + apiMessage, failedAt, failedAt, taskId).run();
      const status = response.status;
      if (status === 401 || status === 403) {
        await setExecutorPause(env, "tinyfish_api_key_invalid", null, keyFingerprint, "TinyFish rejected the API key or account access.");
      } else if (status === 402) {
        await setExecutorPause(env, "tinyfish_daily_quota_exhausted", nextUtcMidnight(), keyFingerprint, "TinyFish Search quota or available credits were exhausted; retry after UTC midnight.");
      } else if (status === 429) {
        await setExecutorPause(env, "tinyfish_rate_limited", new Date(Date.now() + 10 * 60 * 1000).toISOString(), keyFingerprint, "TinyFish rate limit; retrying after a cooldown.");
      } else {
        await setExecutorPause(env, "tinyfish_search_temporarily_unavailable", new Date(Date.now() + 10 * 60 * 1000).toISOString(), keyFingerprint, "TinyFish Search API returned HTTP " + status + ".");
      }
      await env.DB.prepare(
        "UPDATE aga_division_executor_state SET total_failed=total_failed+1, updated_at=? WHERE singleton_id=1"
      ).bind(failedAt).run();
      return;
    }

    const rawResults = Array.isArray(payload.results) ? payload.results : [];
    const sources = rawResults.slice(0, 5).map((item) => ({
      title: clip(item.title, 200),
      domain: clip(item.site_name || item.domain || "", 160),
      url: safeHttpsUrl(item.url),
      snippet: clip(item.snippet, 700),
      published_date: clip(item.date || "", 40)
    })).filter((item) => item.url);
    const finishedAt = new Date().toISOString();
    const summary = sources.length
      ? "TinyFish found " + sources.length + " public source snippets for this division’s mission. Review the linked evidence before using it for a business decision. This is public research only—not a verified connector, delivery task, or proof that the division is operational."
      : "The search completed but returned no usable HTTPS source results. The division remains registered, not operational.";
    const output = {
      provider: "TinyFish Search API",
      outcome: sources.length ? "sources_found" : "no_results",
      query,
      summary,
      sources,
      research_scope: "public_web_search",
      expected_outputs: input.expected_outputs,
      kpis_for_review: input.kpis,
      notice: "Public snippets only. No login, messaging, publishing, purchases, or external changes were performed.",
      completed_at: finishedAt
    };
    await env.DB.prepare(
      "UPDATE aga_division_tasks SET status='completed', output_json=?, error_text='', completed_at=?, updated_at=? WHERE task_id=?"
    ).bind(JSON.stringify(output), finishedAt, finishedAt, taskId).run();
    await env.DB.prepare(
      "UPDATE aga_division_executor_state SET last_division_sort_order=?, last_cycle_at=?, last_completed_at=?, last_error='', total_completed=total_completed+1, updated_at=? WHERE singleton_id=1"
    ).bind(Number(division.sort_order), finishedAt, finishedAt, finishedAt).run();
  }
  await env.DB.prepare(
    "UPDATE aga_division_executor_state SET last_cycle_at=?, updated_at=? WHERE singleton_id=1"
  ).bind(new Date().toISOString(), new Date().toISOString()).run();
}


async function runDivisionRuntimeAudit(env) {
  if (!env.DB) return { monitored: 0, failed: true, error: "d1_not_configured" };
  const nowIso = new Date().toISOString();
  try {
    const [divisionRows, integrationRows, operationsRows, researchRows] = await Promise.all([
      env.DB.prepare(
        "SELECT slug, runtime_status FROM aga_division_registry WHERE catalog_enabled=1 ORDER BY sort_order ASC"
      ).all(),
      env.DB.prepare(
        "SELECT division_slug, integration_key, label, required, status FROM aga_division_integrations"
      ).all(),
      env.DB.prepare(
        "SELECT division_slug, " +
        "SUM(CASE WHEN status='completed' THEN 1 ELSE 0 END) AS completed, " +
        "SUM(CASE WHEN status='failed' THEN 1 ELSE 0 END) AS failed, " +
        "SUM(CASE WHEN status IN ('awaiting_approval','queued','running') THEN 1 ELSE 0 END) AS open, " +
        "COUNT(*) AS total " +
        "FROM aga_division_tasks WHERE COALESCE(task_type,'general') <> 'public_research' GROUP BY division_slug"
      ).all(),
      env.DB.prepare(
        "SELECT division_slug, status, created_at, completed_at FROM (" +
        " SELECT t.*, ROW_NUMBER() OVER (PARTITION BY t.division_slug ORDER BY t.created_at DESC, t.task_id DESC) AS rn " +
        " FROM aga_division_tasks t WHERE t.task_type='public_research' AND t.requested_by='system_scheduler'" +
        ") WHERE rn=1"
      ).all()
    ]);

    const divisions = divisionRows.results || [];
    const integrationsByDivision = new Map();
    for (const item of integrationRows.results || []) {
      if (!integrationsByDivision.has(item.division_slug)) integrationsByDivision.set(item.division_slug, []);
      integrationsByDivision.get(item.division_slug).push(item);
    }
    const opsByDivision = new Map((operationsRows.results || []).map((row) => [row.division_slug, row]));
    const researchByDivision = new Map((researchRows.results || []).map((row) => [row.division_slug, row]));
    const statements = [];
    const summary = { monitored: 0, blocked_integrations: 0, connectors_ready_runtime_missing: 0, active: 0 };

    for (const division of divisions) {
      const integrations = integrationsByDivision.get(division.slug) || [];
      const required = integrations.filter((item) => Number(item.required) === 1 || item.required === true);
      const verifiedRequired = required.filter((item) => item.status === "verified" || item.status === "connected");
      const missing = required
        .filter((item) => item.status !== "verified" && item.status !== "connected")
        .map((item) => ({
          integration_key: clip(item.integration_key, 100),
          label: clip(item.label, 160),
          status: clip(item.status || "not_connected", 40)
        }))
        .slice(0, 30);
      const readinessPercent = required.length ? Math.round(verifiedRequired.length * 100 / required.length) : 100;
      const ops = opsByDivision.get(division.slug) || {};
      const research = researchByDivision.get(division.slug) || null;
      let state;
      const blockers = missing.slice();
      if (division.runtime_status === "active") {
        state = "active";
        summary.active++;
      } else if (missing.length) {
        state = "blocked_integrations";
        summary.blocked_integrations++;
      } else {
        state = "connectors_ready_runtime_missing";
        summary.connectors_ready_runtime_missing++;
        blockers.push({
          integration_key: "worker_runtime",
          label: "Operational AI worker runtime",
          status: "not_activated"
        });
      }
      const blockersJson = JSON.stringify(blockers);
      statements.push(
        env.DB.prepare(
          "INSERT INTO aga_division_runtime_audit " +
          "(division_slug, supervisor_enabled, readiness_state, readiness_percent, required_integrations, verified_required_integrations, " +
          "completed_operations, failed_operations, open_operations, total_operations, latest_research_status, latest_research_at, " +
          "blockers_json, last_checked_at, last_error, updated_at) " +
          "VALUES (?, 1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, '', ?) " +
          "ON CONFLICT(division_slug) DO UPDATE SET supervisor_enabled=1, readiness_state=excluded.readiness_state, " +
          "readiness_percent=excluded.readiness_percent, required_integrations=excluded.required_integrations, " +
          "verified_required_integrations=excluded.verified_required_integrations, completed_operations=excluded.completed_operations, " +
          "failed_operations=excluded.failed_operations, open_operations=excluded.open_operations, total_operations=excluded.total_operations, " +
          "latest_research_status=excluded.latest_research_status, latest_research_at=excluded.latest_research_at, blockers_json=excluded.blockers_json, " +
          "last_checked_at=excluded.last_checked_at, last_error='', updated_at=excluded.updated_at"
        ).bind(
          division.slug,
          state,
          readinessPercent,
          required.length,
          verifiedRequired.length,
          Number(ops.completed || 0),
          Number(ops.failed || 0),
          Number(ops.open || 0),
          Number(ops.total || 0),
          research ? clip(research.status || "unknown", 40) : "no_result",
          research ? (research.completed_at || research.created_at || null) : null,
          blockersJson,
          nowIso,
          nowIso
        )
      );
      summary.monitored++;
    }

    if (statements.length) await env.DB.batch(statements);
    return summary;
  } catch (error) {
    const message = clip(error && error.message || "runtime_audit_failed", 180);
    try {
      await env.DB.prepare(
        "UPDATE aga_division_runtime_audit SET last_error=?, updated_at=?"
      ).bind(message, nowIso).run();
    } catch (_) {}
    return { monitored: 0, failed: true, error: message };
  }
}

async function createDivisionTask(request, env, origin, slug) {
  if (origin && !allowedOrigins(env).has(origin)) {
    return jsonResponse({ ok: false, error: "origin_not_allowed" }, 403, origin, env);
  }
  const token = String(env.AGA_OWNER_API_TOKEN || "");
  if (!token) {
    return jsonResponse({ ok: false, error: "task_api_not_configured" }, 503, origin, env);
  }
  if (request.headers.get("authorization") !== "Bearer " + token) {
    return jsonResponse({ ok: false, error: "unauthorized" }, 401, origin, env);
  }
  if (!env.DB) return jsonResponse({ ok: false, error: "d1_not_configured" }, 503, origin, env);

  let input;
  try {
    input = await readJsonLimited(request);
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message === "body_too_large" ? "body_too_large" : "invalid_json" },
      error.message === "body_too_large" ? 413 : 400, origin, env);
  }
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return jsonResponse({ ok: false, error: "invalid_payload" }, 400, origin, env);
  }
  const title = clip(input.title, 160);
  const description = clip(input.description, 1500);
  const taskType = clip(input.task_type || "general", 40);
  const priority = Math.max(1, Math.min(5, Math.floor(Number(input.priority) || 3)));
  const requestedBy = clip(input.requested_by || "owner", 80);
  const payload = input.payload && typeof input.payload === "object" && !Array.isArray(input.payload) ? input.payload : {};
  if (!title) return jsonResponse({ ok: false, error: "title_required" }, 400, origin, env);
  if (!/^[a-z0-9_-]{2,80}$/.test(slug)) return jsonResponse({ ok: false, error: "invalid_division_slug" }, 400, origin, env);

  try {
    const division = await env.DB.prepare(
      "SELECT slug, runtime_status FROM aga_division_registry WHERE slug = ? AND catalog_enabled = 1"
    ).bind(slug).first();
    if (!division) return jsonResponse({ ok: false, error: "division_not_found" }, 404, origin, env);
    const taskId = crypto.randomUUID();
    const payloadText = JSON.stringify(payload);
    if (new TextEncoder().encode(payloadText).byteLength > 12000) {
      return jsonResponse({ ok: false, error: "payload_too_large" }, 413, origin, env);
    }
    await env.DB.prepare(
      "INSERT INTO aga_division_tasks " +
      "(task_id, division_slug, title, description, task_type, priority, status, approval_required, requested_by, input_json) " +
      "VALUES (?, ?, ?, ?, ?, ?, 'awaiting_approval', 1, ?, ?)"
    ).bind(taskId, slug, title, description, taskType, priority, requestedBy, payloadText).run();

    return jsonResponse({
      ok: true,
      task_id: taskId,
      division_slug: slug,
      status: "awaiting_approval",
      executed: false,
      message: "Task tersimpan di antrean dan menunggu approval Owner. Eksekusi AI tidak dimulai sampai approval dan adapter integrasi tersedia."
    }, 202, origin, env);
  } catch {
    return jsonResponse({ ok: false, error: "task_insert_failed" }, 503, origin, env);
  }
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

  const result = env.DB ? await storeEvents(events, env) : await forwardEvents(events, env);
  if (!result.ok) {
    return jsonResponse({
      ok: false,
      error: result.code,
      upstream_status: result.upstream_status || undefined,
      accepted_count: 0
    }, result.status, origin, env);
  }
  return jsonResponse({ ok: true, forwarded: !env.DB, stored: Boolean(env.DB), accepted_count: events.length }, 202, origin, env);
}

export default {
  async scheduled(controller, env, ctx) {
    ctx.waitUntil(Promise.all([runPublicResearchCycle(env), runDivisionRuntimeAudit(env)]));
  },
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
      let databaseSchemaReady = false;
      let divisionsSchemaReady = false;
      if (env.DB) {
        try {
          await env.DB.prepare("SELECT 1 FROM website_analytics_events LIMIT 1").first();
          databaseSchemaReady = true;
        } catch {}
        try {
          await env.DB.prepare("SELECT 1 FROM aga_division_registry LIMIT 1").first();
          await env.DB.prepare("SELECT 1 FROM aga_division_integrations LIMIT 1").first();
          await env.DB.prepare("SELECT 1 FROM aga_division_tasks LIMIT 1").first();
          divisionsSchemaReady = true;
        } catch {}
      }
      const sharedD1Ready = databaseSchemaReady && divisionsSchemaReady;
      const forwardingReady = Boolean(endpoint && env.DASHBOARD_INGEST_TOKEN);
      return jsonResponse({
        ok: true,
        service: "aga-dashboard-bridge",
        version: "1.3.0",
        ready: sharedD1Ready || forwardingReady,
        configuration: {
          storageMode: sharedD1Ready ? "shared_d1" : (databaseSchemaReady ? "partial_d1" : (forwardingReady ? "dashboard_forwarder" : "not_configured")),
          databaseConfigured: Boolean(env.DB),
          databaseSchemaReady,
          divisionsSchemaReady,
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

    if (request.method === "GET" && url.pathname === "/api/website-analytics") {
      return websiteAnalytics(request, env, origin);
    }

    if (request.method === "GET" && url.pathname === "/api/divisions") {
      return getDivisions(request, env, origin);
    }

    const divisionTaskParts = url.pathname.split("/");
    if (request.method === "POST" && divisionTaskParts.length === 5 && divisionTaskParts[1] === "api" && divisionTaskParts[2] === "divisions" && divisionTaskParts[4] === "tasks") {
      return createDivisionTask(request, env, origin, divisionTaskParts[3]);
    }

    if (request.method === "GET" && url.pathname === "/dashboard-panel.js") {
      const loadDivisionPanel = `
;(function () {
        var dashboardScript = document.querySelector('script[src*="/dashboard-panel.js"]');
        if (!dashboardScript) return;
        var panelScript = document.createElement("script");
        panelScript.defer = true;
        panelScript.src = new URL("/divisions-panel.js", dashboardScript.src).toString();
        document.head.appendChild(panelScript);
      })();`;
      return new Response(DASHBOARD_PANEL_JS + loadDivisionPanel, {
        status: 200,
        headers: {
          ...Object.fromEntries(corsHeaders(origin, env)),
          "Content-Type": "application/javascript; charset=utf-8",
          "Cache-Control": "public, max-age=300",
          "X-Content-Type-Options": "nosniff"
        }
      });
    }

    if (request.method === "GET" && url.pathname === "/divisions-panel.js") {
      return new Response(DIVISIONS_PANEL_JS, {
        status: 200,
        headers: {
          ...Object.fromEntries(corsHeaders(origin, env)),
          "Content-Type": "application/javascript; charset=utf-8",
          "Cache-Control": "public, max-age=300",
          "X-Content-Type-Options": "nosniff"
        }
      });
    }

    if (request.method === "GET" && url.pathname === "/division-setup-panel.js") {
      return new Response(DIVISION_SETUP_PANEL_JS, {
        status: 200,
        headers: {
          ...Object.fromEntries(corsHeaders(origin, env)),
          "Content-Type": "application/javascript; charset=utf-8",
          "Cache-Control": "public, max-age=300",
          "X-Content-Type-Options": "nosniff"
        }
      });
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
