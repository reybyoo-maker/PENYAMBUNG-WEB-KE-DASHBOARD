import { DIVISION_CATALOG } from "./divisions.js";

export const WEBSITE_TRACKING_FEATURES = [
  { id: "page_views", label: "Kunjungan halaman", eventTypes: ["page_view"] },
  { id: "active_sessions", label: "Aktivitas langsung", eventTypes: ["active_ping", "page_view"] },
  { id: "top_clicks", label: "Klik terbanyak", eventTypes: ["click", "ebook_click", "custom_event"] },
  { id: "top_pages", label: "Halaman teratas", eventTypes: ["page_view"] },
  { id: "geography", label: "Negara dan kota", source: "Cloudflare request metadata", eventTypes: ["page_view", "active_ping"] },
  { id: "device_type", label: "Tipe perangkat", eventTypes: ["page_view", "active_ping"] },
  { id: "device_model", label: "HP/model jika tersedia", eventTypes: ["page_view", "active_ping"] },
  { id: "os_browser", label: "Sistem operasi dan browser", eventTypes: ["page_view", "active_ping"] },
  { id: "traffic_sources", label: "Referrer dan UTM", eventTypes: ["page_view"] },
  { id: "peak_hours", label: "Jam ramai (WIB di dashboard)", eventTypes: ["page_view", "active_ping"] },
  { id: "ebook_clicks", label: "Klik e-book", eventTypes: ["ebook_click"] },
  { id: "custom_events", label: "Event khusus via data-track", eventTypes: ["custom_event", "click"] }
];

export const DASHBOARD_PANEL_MANIFEST = [
  {
    id: "website_analytics",
    label: "Analitik Website",
    status: "bridge_supported",
    sourceRequired: "Website tracker",
    note: "Event website ditulis langsung ke D1 bersama; dashboard panel membaca ringkasan melalui endpoint analytics bridge."
  },
  {
    id: "ebook_sales",
    label: "Closing e-book",
    status: "click_signal_only",
    knownContract: "POST /api/ingest/ebook_sales",
    note: "Klik e-book bukan bukti pembelian; data closing harus berasal dari sumber transaksi."
  },
  {
    id: "scrape",
    label: "Database Scraping dan status pengiriman",
    status: "external_source_required",
    knownContract: "POST /api/ingest/scrape"
  },
  {
    id: "crm_leads",
    label: "CRM Pipeline dan follow-up",
    status: "external_source_required",
    knownContract: "Modul crm_leads disebut pada dashboard; kontrak lengkap perlu dicocokkan dengan Worker aktual."
  },
  {
    id: "workforce",
    label: "AI Workforce, tugas dan log aktivitas",
    status: "external_source_required",
    knownContract: "POST /api/ingest/workforce"
  },
  {
    id: "incidents",
    label: "Automation Monitoring dan insiden",
    status: "external_source_required",
    knownContract: "POST /api/ingest/incidents"
  },
  {
    id: "projects",
    label: "Project dan keuangan",
    status: "external_source_required",
    knownContract: "Modul projects disebut pada dashboard; kontrak lengkap perlu dicocokkan dengan Worker aktual."
  },
  {
    id: "content_prompts",
    label: "Content Prompt dan Library",
    status: "external_source_required",
    knownContract: "POST /api/ingest/content_prompts"
  },
  {
    id: "content_refs",
    label: "Referensi konten",
    status: "external_source_required",
    knownContract: "POST /api/ingest/content_refs"
  },
  {
    id: "quota",
    label: "Kuota API dan token",
    status: "external_source_required",
    knownContract: "POST /api/ingest/quota"
  },
  {
    id: "approval_requests",
    label: "Persetujuan Owner",
    status: "external_source_required",
    knownContract: "POST /api/ingest/approval_requests"
  },
  {
    id: "meetings",
    label: "Rapat, evaluasi dan rencana AI",
    status: "external_source_required",
    knownContract: "POST /api/ingest/meetings"
  }
];

export const MANIFEST = {
  service: "AIGROWTH Website-to-Dashboard Bridge",
  version: "1.3.0",
  websiteOrigins: ["https://aigrowth.my.id"],
  routes: [
    { method: "GET", path: "/health", purpose: "Readiness check" },
    { method: "GET", path: "/manifest", purpose: "Feature and dashboard panel coverage" },
    { method: "GET", path: "/tracker.js", purpose: "Browser tracking script" },
    { method: "POST", path: "/collect", purpose: "Validate and store website events directly in shared D1" },
    { method: "GET", path: "/api/website-analytics", purpose: "Aggregated website metrics for the dashboard panel" },
    { method: "GET", path: "/api/divisions", purpose: "Read all 150 configured divisions, required integrations and task counts" },
    { method: "POST", path: "/api/divisions/:slug/tasks", purpose: "Create an owner-authenticated task waiting for approval" },
    { method: "GET", path: "/dashboard-panel.js", purpose: "Live website analytics and division panel loader for the Owner Dashboard" },
    { method: "GET", path: "/divisions-panel.js", purpose: "Render all AIGROWTH divisions and integration readiness" },
    { method: "GET", path: "/division-setup-panel.js", purpose: "Owner-authenticated division and integration setup manager" }
  ],
  websiteTrackingFeatures: WEBSITE_TRACKING_FEATURES,
  divisions: DIVISION_CATALOG,
  dashboardPanels: DASHBOARD_PANEL_MANIFEST
};
