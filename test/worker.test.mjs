import test from "node:test";
import assert from "node:assert/strict";
import worker from "../src/index.js";
import { MANIFEST } from "../src/modules.js";

const origin = "https://aigrowth.my.id";
const configuredEnv = {
  ALLOWED_ORIGINS: origin,
  DASHBOARD_TRACKING_URL: "https://dashboard.aigrowth.my.id/api/test-ingest",
  DASHBOARD_INGEST_TOKEN: "test-only-secret",
  DASHBOARD_PAYLOAD_MODE: "records"
};

function makeEvent(overrides = {}) {
  return {
    event_id: "event-test-1",
    event_type: "page_view",
    occurred_at: "2026-10-23T10:00:00.000Z",
    page_url: "/products?private=should-not-be-sent",
    page_title: "Test page",
    referrer_domain: "https://search.example",
    visitor_id: "visitor-test",
    session_id: "session-test",
    device_type: "desktop",
    browser: "Chrome",
    os: "macOS",
    ...overrides
  };
}

test("health reports not ready until real endpoint and token are configured", async () => {
  const response = await worker.fetch(new Request("https://bridge.test/health"), {
    ALLOWED_ORIGINS: origin
  });
  const data = await response.json();
  assert.equal(response.status, 200);
  assert.equal(data.ok, true);
  assert.equal(data.ready, false);
});

test("manifest lists website analytics features and non-website panels honestly", () => {
  assert.ok(MANIFEST.websiteTrackingFeatures.some((feature) => feature.id === "geography"));
  assert.ok(MANIFEST.websiteTrackingFeatures.some((feature) => feature.id === "ebook_clicks"));
  assert.ok(MANIFEST.dashboardPanels.some((panel) => panel.id === "crm_leads" && panel.status === "external_source_required"));
});

test("collect rejects requests from origins outside the allowlist", async () => {
  const response = await worker.fetch(new Request("https://bridge.test/collect", {
    method: "POST",
    headers: { Origin: "https://attacker.example", "Content-Type": "application/json" },
    body: JSON.stringify({ events: [makeEvent()] })
  }), configuredEnv);
  assert.equal(response.status, 403);
  assert.equal((await response.json()).error, "origin_not_allowed");
});

test("collect forwards normalized records server-side without exposing token to browser", async (t) => {
  const originalFetch = globalThis.fetch;
  let upstreamRequest;
  globalThis.fetch = async (input, init) => {
    upstreamRequest = { url: String(input), init };
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
  };
  t.after(() => { globalThis.fetch = originalFetch; });

  const request = new Request("https://bridge.test/collect", {
    method: "POST",
    headers: { Origin: origin, "Content-Type": "application/json" },
    body: JSON.stringify({ events: [makeEvent()] })
  });
  const response = await worker.fetch(request, configuredEnv);
  const result = await response.json();

  assert.equal(response.status, 202);
  assert.equal(result.forwarded, true);
  assert.equal(result.accepted_count, 1);
  assert.equal(upstreamRequest.url, configuredEnv.DASHBOARD_TRACKING_URL);
  assert.equal(upstreamRequest.init.headers.Authorization, "Bearer test-only-secret");

  const payload = JSON.parse(upstreamRequest.init.body);
  assert.equal(payload.records.length, 1);
  assert.equal(payload.records[0].page_url, "/products");
  assert.equal(payload.records[0].country, "");
  assert.ok(!JSON.stringify(payload).includes("private=should-not-be-sent"));
});

test("collect fails closed when endpoint URL points outside the dashboard host", async () => {
  const response = await worker.fetch(new Request("https://bridge.test/collect", {
    method: "POST",
    headers: { Origin: origin, "Content-Type": "application/json" },
    body: JSON.stringify({ events: [makeEvent()] })
  }), {
    ...configuredEnv,
    DASHBOARD_TRACKING_URL: "https://evil.example/collect"
  });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).error, "bridge_not_configured");
});

test("collect rejects unsupported event types", async () => {
  const response = await worker.fetch(new Request("https://bridge.test/collect", {
    method: "POST",
    headers: { Origin: origin, "Content-Type": "application/json" },
    body: JSON.stringify({ events: [makeEvent({ event_type: "password_capture" })] })
  }), configuredEnv);
  assert.equal(response.status, 400);
  assert.equal((await response.json()).error, "invalid_event_type_or_shape");
});


function makeFakeD1() {
  const written = [];
  return {
    written,
    prepare(sql) {
      const statement = { sql, values: [] };
      statement.bind = (...values) => { statement.values = values; return statement; };
      statement.first = async () => {
        if (sql.includes("AS total_events")) {
          return { total_events: written.length, page_views: 1, unique_visitors: 1, active_visitors: 0 };
        }
        return null;
      };
      statement.all = async () => ({ results: [] });
      return statement;
    },
    async batch(statements) {
      written.push(...statements);
      return statements.map(() => ({ success: true }));
    }
  };
}

test("collect writes events directly to the shared D1 binding without an ingest URL", async () => {
  const DB = makeFakeD1();
  const response = await worker.fetch(new Request("https://bridge.test/collect", {
    method: "POST",
    headers: { Origin: origin, "Content-Type": "application/json" },
    body: JSON.stringify({ events: [makeEvent()] })
  }), { ALLOWED_ORIGINS: origin, DB });
  const result = await response.json();

  assert.equal(response.status, 202);
  assert.equal(result.ok, true);
  assert.equal(result.stored, true);
  assert.equal(result.forwarded, false);
  assert.equal(DB.written.length, 1);
  assert.match(DB.written[0].sql, /INSERT INTO website_analytics_events/);
  assert.match(DB.written[0].sql, /ON CONFLICT\(event_id\) DO NOTHING/);
  assert.equal(DB.written[0].values[1], "page_view");
});

test("analytics endpoint returns aggregated D1 metrics", async () => {
  const DB = makeFakeD1();
  const response = await worker.fetch(new Request("https://bridge.test/api/website-analytics?days=7", {
    headers: { Origin: "https://dashboard.aigrowth.my.id" }
  }), { DB, ALLOWED_ORIGINS: "https://dashboard.aigrowth.my.id" });
  const result = await response.json();

  assert.equal(response.status, 200);
  assert.equal(result.ok, true);
  assert.equal(result.source, "cloudflare-d1");
  assert.equal(result.range_days, 7);
  assert.equal(result.summary.page_views, 1);
  assert.ok(Array.isArray(result.top_pages));
});

test("dashboard analytics panel script is served without exposing secrets", async () => {
  const response = await worker.fetch(new Request("https://bridge.test/dashboard-panel.js"));
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /javascript/);
  assert.match(body, /Live Website Analytics/);
  assert.match(body, /api\/website-analytics/);
  assert.doesNotMatch(body, /DASHBOARD_INGEST_TOKEN|test-only-secret/);
});

test("tracker source is served with JavaScript content type", async () => {
  const response = await worker.fetch(new Request("https://bridge.test/tracker.js", {
    headers: { Origin: origin }
  }), configuredEnv);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /javascript/);
  assert.match(await response.text(), /page_view/);
});
