import test from "node:test";
import assert from "node:assert/strict";
import worker from "../src/index.js";
import { MANIFEST } from "../src/modules.js";
import { DIVISION_CATALOG } from "../src/divisions.js";

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
  assert.match(body, /divisions-panel\.js/);
  assert.doesNotMatch(body, /DASHBOARD_INGEST_TOKEN|test-only-secret/);
});


test("division catalog defines the full 150-division AIGROWTH structure", () => {
  assert.equal(DIVISION_CATALOG.length, 150);
  assert.equal(new Set(DIVISION_CATALOG.map((d) => d.slug)).size, 150);
  assert.ok(DIVISION_CATALOG.some((d) => d.slug === "sales_outsourcing_multi_platform"));
  assert.ok(DIVISION_CATALOG.some((d) => d.slug === "outbound_prospecting_intelligence"));
  assert.ok(DIVISION_CATALOG.some((d) => d.slug === "sales_pricing_packaging_intelligence"));
  assert.ok(DIVISION_CATALOG.some((d) => d.slug === "marketing_intelligence"));
  assert.ok(DIVISION_CATALOG.some((d) => d.slug === "operations_service_delivery"));
  assert.ok(DIVISION_CATALOG.some((d) => d.slug === "qa_reliability"));
  assert.ok(DIVISION_CATALOG.some((d) => d.slug === "data_integration_intelligence"));
  assert.ok(DIVISION_CATALOG.some((d) => d.slug === "website_system_monitoring"));
  assert.ok(DIVISION_CATALOG.every((d) => d.mission && d.responsibilities.length && d.inputs.length && d.outputs.length && d.kpis.length));
  assert.ok(DIVISION_CATALOG.every((d) => d.workers.length === 4 && d.workers.every((w) => w.role && w.outputs.length && w.status === "planned")));
  assert.equal(new Set(DIVISION_CATALOG.flatMap((d) => d.workers.map((w) => w.key))).size, 600);
});

test("manifest exposes all division contracts", () => {
  assert.equal(MANIFEST.divisions.length, 150);
  assert.ok(MANIFEST.routes.some((route) => route.path === "/api/divisions"));
  assert.ok(MANIFEST.routes.some((route) => route.path === "/divisions-panel.js"));
});

test("division panel script is served as JavaScript", async () => {
  const response = await worker.fetch(new Request("https://bridge.test/divisions-panel.js"));
  const body = await response.text();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /javascript/);
  assert.match(body, /AIGROWTH Division Control/);
  assert.match(body, /needs integrations|SETUP NEEDED/i);
});

test("division task endpoint requires a server-side Owner token", async () => {
  const response = await worker.fetch(new Request("https://bridge.test/api/divisions/sales_crm/tasks", {
    method: "POST",
    headers: { Origin: origin, "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Test task" })
  }), { ALLOWED_ORIGINS: origin, DB: makeFakeD1() });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).error, "task_api_not_configured");
});

test("division task endpoint never claims that a queued task was executed", async () => {
  let inserted = null;
  const DB = {
    prepare(sql) {
      const statement = { sql, values: [] };
      statement.bind = (...values) => { statement.values = values; return statement; };
      statement.first = async () => sql.includes("FROM aga_division_registry")
        ? { slug: "sales_crm", runtime_status: "needs_integrations" }
        : null;
      statement.run = async () => { inserted = { sql, values: statement.values }; return { success: true }; };
      return statement;
    }
  };
  const response = await worker.fetch(new Request("https://bridge.test/api/divisions/sales_crm/tasks", {
    method: "POST",
    headers: {
      Origin: origin,
      "Content-Type": "application/json",
      Authorization: "Bearer owner-test-token"
    },
    body: JSON.stringify({ title: "Audit pipeline", priority: 2, payload: { source: "test" } })
  }), { ALLOWED_ORIGINS: origin, AGA_OWNER_API_TOKEN: "owner-test-token", DB });
  const result = await response.json();
  assert.equal(response.status, 202);
  assert.equal(result.status, "awaiting_approval");
  assert.equal(result.executed, false);
  assert.ok(inserted);
  assert.match(inserted.sql, /INSERT INTO aga_division_tasks/);
  assert.equal(inserted.values[1], "sales_crm");
  assert.equal(inserted.values[2], "Audit pipeline");
});

test("GET divisions returns registry and integration readiness from D1", async () => {
  const registryRows = DIVISION_CATALOG.map((d) => ({
    slug: d.slug,
    name: d.name,
    sort_order: d.sort_order,
    category: d.category,
    mission: d.mission,
    responsibilities_json: JSON.stringify(d.responsibilities),
    inputs_json: JSON.stringify(d.inputs),
    outputs_json: JSON.stringify(d.outputs),
    kpis_json: JSON.stringify(d.kpis),
    automation_level: d.automation_level,
    approval_policy: d.approval_policy,
    catalog_enabled: 1,
    runtime_status: "needs_integrations",
    open_tasks: 0,
    created_at: "2026-10-23T00:00:00.000Z",
    updated_at: "2026-10-23T00:00:00.000Z"
  }));
  const integrationRows = DIVISION_CATALOG.flatMap((d) => d.integrations.map((i, n) => ({
    id: n + 1,
    division_slug: d.slug,
    integration_key: i.key,
    label: i.label,
    required: i.required ? 1 : 0,
    status: "not_connected",
    notes: i.notes,
    last_checked_at: null
  })));
  const DB = {
    prepare(sql) {
      const statement = { sql, values: [] };
      statement.bind = (...values) => { statement.values = values; return statement; };
      statement.all = async () => ({
        results: sql.includes("FROM aga_division_registry d") ? registryRows :
          (sql.includes("FROM aga_division_integrations") ? integrationRows : [])
      });
      statement.first = async () => ({ open_tasks: 0 });
      return statement;
    }
  };
  const response = await worker.fetch(new Request("https://bridge.test/api/divisions", {
    headers: { Origin: "https://dashboard.aigrowth.my.id" }
  }), { ALLOWED_ORIGINS: "https://dashboard.aigrowth.my.id", DB });
  const result = await response.json();
  assert.equal(response.status, 200);
  assert.equal(result.ok, true);
  assert.equal(result.divisions.length, 150);
  assert.equal(result.summary.total_divisions, 150);
  assert.equal(result.integrations.length, DIVISION_CATALOG.reduce((count, d) => count + d.integrations.length, 0));
  assert.equal(result.integrations.length, 310);
  assert.equal(result.summary.connected_integrations, 0);
  assert.equal(result.divisions[0].responsibilities.length > 0, true);
  assert.equal(result.divisions[0].workers.length, 4);
  assert.equal(result.divisions[0].worker_count, 4);
  assert.equal(result.divisions[0].workers[0].status, "planned");
});

test("tracker source is served with JavaScript content type", async () => {
  const response = await worker.fetch(new Request("https://bridge.test/tracker.js", {
    headers: { Origin: origin }
  }), configuredEnv);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /javascript/);
  assert.match(await response.text(), /page_view/);
});
