CREATE TABLE IF NOT EXISTS aga_division_registry (
  slug TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  sort_order INTEGER NOT NULL UNIQUE,
  category TEXT NOT NULL,
  mission TEXT NOT NULL,
  responsibilities_json TEXT NOT NULL DEFAULT '[]',
  inputs_json TEXT NOT NULL DEFAULT '[]',
  outputs_json TEXT NOT NULL DEFAULT '[]',
  kpis_json TEXT NOT NULL DEFAULT '[]',
  automation_level TEXT NOT NULL DEFAULT 'assisted',
  approval_policy TEXT NOT NULL,
  catalog_enabled INTEGER NOT NULL DEFAULT 1,
  runtime_status TEXT NOT NULL DEFAULT 'needs_integrations',
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS aga_division_integrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  division_slug TEXT NOT NULL REFERENCES aga_division_registry(slug) ON DELETE CASCADE,
  integration_key TEXT NOT NULL,
  label TEXT NOT NULL,
  required INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'not_connected',
  notes TEXT NOT NULL DEFAULT '',
  last_checked_at TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  UNIQUE(division_slug, integration_key)
);

CREATE TABLE IF NOT EXISTS aga_division_tasks (
  task_id TEXT PRIMARY KEY NOT NULL,
  division_slug TEXT NOT NULL REFERENCES aga_division_registry(slug),
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  task_type TEXT NOT NULL DEFAULT 'general',
  priority INTEGER NOT NULL DEFAULT 3 CHECK(priority BETWEEN 1 AND 5),
  status TEXT NOT NULL DEFAULT 'awaiting_approval'
    CHECK(status IN ('awaiting_approval','queued','running','completed','failed','cancelled')),
  approval_required INTEGER NOT NULL DEFAULT 1,
  requested_by TEXT NOT NULL DEFAULT 'owner',
  input_json TEXT NOT NULL DEFAULT '{}',
  output_json TEXT NOT NULL DEFAULT '{}',
  error_text TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  started_at TEXT,
  completed_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_aga_division_tasks_division_status
  ON aga_division_tasks(division_slug, status, priority, created_at);
CREATE INDEX IF NOT EXISTS idx_aga_division_integrations_status
  ON aga_division_integrations(status, required);

INSERT OR IGNORE INTO aga_division_registry
(slug,name,sort_order,category,mission,responsibilities_json,inputs_json,outputs_json,kpis_json,automation_level,approval_policy)
VALUES ('sales_crm','Sales & CRM','1','Revenue','Mengubah prospek berkualitas menjadi percakapan, peluang, dan klien.','["Lead validation","scoring","pipeline","scheduled follow-up","reply tracking"]','["Verified leads","Outreach/reply history","Service offer and ICP"]','["Scored leads","Pipeline and next action","Follow-up schedule","Win/loss analysis"]','["Qualified leads","Response rate","Meeting rate","Win rate","Speed to lead"]','assisted','Outreach follows consent, opt-out and sending limits; unsent campaigns require approval.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('sales_crm','crm_database','CRM / D1','1','not_connected','Verify binding and CRM schema.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('sales_crm','email_inbox','Email inbox and outbound provider','1','not_connected','Official provider, opt-out and daily caps.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('sales_crm','lead_sources','Lead source connectors','1','not_connected','Keep provenance and deduplicate records.');
INSERT OR IGNORE INTO aga_division_registry
(slug,name,sort_order,category,mission,responsibilities_json,inputs_json,outputs_json,kpis_json,automation_level,approval_policy)
VALUES ('sales_outsourcing_multi_platform','Sales Outsourcing Multi-Platform','2','Revenue','Menemukan dan mengelola peluang proyek lintas platform freelance, vendor directory, dan kanal profesional secara patuh.','["Discover opportunities","qualify budget/fit","deduplicate","draft proposals","track status"]','["Platform registry","Service/pricing/availability","Public project opportunities"]','["Opportunity pipeline","Priority score","Proposal drafts","Source and status log"]','["Qualified opportunities","Approved proposals","Win rate","Acquisition cost","Duplicate prevention"]','approval_gated','Respect platform terms, login protections, CAPTCHA and rate limits; do not auto-submit proposals without approval.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('sales_outsourcing_multi_platform','platform_connectors','Official platform connectors','1','not_connected','Enable only supported, permitted methods per platform.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('sales_outsourcing_multi_platform','opportunity_db','Opportunity registry','1','not_connected','Deduplicate cross-platform opportunities.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('sales_outsourcing_multi_platform','proposal_approval','Proposal approval','1','not_connected','Owner approves external submissions.');
INSERT OR IGNORE INTO aga_division_registry
(slug,name,sort_order,category,mission,responsibilities_json,inputs_json,outputs_json,kpis_json,automation_level,approval_policy)
VALUES ('marketing_intelligence','Marketing Intelligence','3','Research','Memberikan intel pasar dan rekomendasi pemasaran berbasis bukti; tidak membuat atau menerbitkan konten otomatis.','["Research niches and competitors","compare public offers","identify intent","recommend experiments"]','["Public search/research sources","CRM outcomes","Competitor websites/directories"]','["Source-backed market briefs","Opportunity scoring","Competitor snapshots","Experiment recommendations"]','["Source freshness","Evidence-backed briefs","Opportunity acceptance","Decision time"]','assisted','Research and analysis only; no automated content production or publishing.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('marketing_intelligence','research_sources','Search / research sources','1','not_connected','Approved sources and access rules required.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('marketing_intelligence','crm_feedback','CRM outcomes','0','not_connected','Use sales outcomes to refine priorities.');
INSERT OR IGNORE INTO aga_division_registry
(slug,name,sort_order,category,mission,responsibilities_json,inputs_json,outputs_json,kpis_json,automation_level,approval_policy)
VALUES ('client_success','Client Success','4','Delivery','Menjaga pengalaman klien dari onboarding sampai retensi berdasarkan status proyek yang nyata.','["Onboarding checklist","feedback and risks","progress updates","retention signals"]','["Approved contract/scope","Delivery milestones","Feedback and communication history"]','["Client health status","Onboarding checklist","Draft status updates","Retention risks"]','["Time to onboard","Milestones on time","Satisfaction","Retention rate"]','assisted','Scope changes, deadlines, pricing commitments and refunds require Owner approval.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('client_success','client_crm','Client CRM','1','not_connected','Limit access to approved client records.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('client_success','project_status','Project/task tracker','1','not_connected','Delivery team is source of truth.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('client_success','client_messaging','Client messaging channel','0','not_connected','Only approved contacts and scopes.');
INSERT OR IGNORE INTO aga_division_registry
(slug,name,sort_order,category,mission,responsibilities_json,inputs_json,outputs_json,kpis_json,automation_level,approval_policy)
VALUES ('operations_service_delivery','Operations & Service Delivery','5','Delivery','Mengubah pekerjaan yang terjual menjadi delivery terencana, terassign, teruji, dan selesai tepat waktu.','["Break scope into tasks","schedule dependencies","coordinate handoffs","check acceptance criteria"]','["Approved scope","Team capacity and backlog","Acceptance criteria and deadlines"]','["Delivery plan","Task breakdown","Milestone status","Handover checklist"]','["On-time delivery","Milestone completion","Rework rate","SLA breaches"]','assisted','Scope changes, new spend and external commitments need approval.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('operations_service_delivery','project_store','Project/task storage','1','not_connected','Official store for tasks and milestones.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('operations_service_delivery','approval_queue','Owner approval queue','1','not_connected','Hold costly or scope-changing actions.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('operations_service_delivery','client_success_handoff','Client Success handoff','1','not_connected','Share consistent milestone state.');
INSERT OR IGNORE INTO aga_division_registry
(slug,name,sort_order,category,mission,responsibilities_json,inputs_json,outputs_json,kpis_json,automation_level,approval_policy)
VALUES ('technology_automation','Technology & Automation','6','Platform','Membangun dan memelihara otomasi yang aman, terdokumentasi, dapat dipulihkan, dan hemat biaya.','["Manage workflows/APIs","retries and idempotency","server-side secrets","releases and rollback"]','["Process specs","Controlled credentials","Approved change requests"]','["Versioned workflows","Integration health","Release notes","Rollback plans"]','["Successful run rate","MTTR","Automation coverage","Cost per successful run"]','approval_gated','Production deploys, destructive schema changes, new spend and secrets access need approval.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('technology_automation','cloudflare_workers','Cloudflare Workers','1','not_connected','Verify account and deployment permissions.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('technology_automation','d1_storage','Cloudflare D1','1','not_connected','Versioned migrations and rollback checks.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('technology_automation','source_control','GitHub repository','0','not_connected','CI/CD with least privilege.');
INSERT OR IGNORE INTO aga_division_registry
(slug,name,sort_order,category,mission,responsibilities_json,inputs_json,outputs_json,kpis_json,automation_level,approval_policy)
VALUES ('qa_reliability','Quality Assurance & Reliability','7','Platform','Menguji fungsi nyata dan mendeteksi kegagalan sebelum berdampak ke klien atau pendapatan.','["Health checks","API/data validation","regression tests","incidents and root cause"]','["Test cases","Health endpoints/logs","Release history"]','["Test results","Incident records","Root cause analysis","Release readiness"]','["Defect escape rate","Time to detect","Time to recover","Test coverage"]','assisted','Restart, rollback or production repair only through approved runbooks.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('qa_reliability','health_targets','Website/API health endpoints','1','not_connected','Register target and expected status.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('qa_reliability','test_runner','CI / smoke test runner','1','not_connected','Specify tests and accepted results.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('qa_reliability','incident_sink','Incident logging','1','not_connected','Persist actionable incident records.');
INSERT OR IGNORE INTO aga_division_registry
(slug,name,sort_order,category,mission,responsibilities_json,inputs_json,outputs_json,kpis_json,automation_level,approval_policy)
VALUES ('data_integration_intelligence','Data & Integration Intelligence','8','Platform','Menjaga data lintas sistem konsisten, terlacak asalnya, dan layak dipakai untuk keputusan.','["Schema mapping","deduplication","stale/conflict detection","sync and reconciliation"]','["Databases/API sources","Schema mappings","Sync logs and dedupe rules"]','["Validated records","Sync error report","Data quality score","Reconciliation report"]','["Sync success rate","Duplicate rate","Data freshness","Schema drift"]','assisted','Schema changes, bulk merges/deletes and large backfills need approval.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('data_integration_intelligence','core_d1','AIGROWTH D1','1','not_connected','Verify database name, binding and schema on deploy.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('data_integration_intelligence','source_contracts','Source API contracts','1','not_connected','Document schema/auth for each source.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('data_integration_intelligence','sync_logs','Sync logs','1','not_connected','Store run time, counts and errors without secrets.');
INSERT OR IGNORE INTO aga_division_registry
(slug,name,sort_order,category,mission,responsibilities_json,inputs_json,outputs_json,kpis_json,automation_level,approval_policy)
VALUES ('finance_analytics','Finance Analytics','9','Governance','Memberi Owner data akurat pendapatan, biaya, margin, arus kas, dan penggunaan tools.','["Reconcile confirmed income","monitor tool/API costs","calculate margins","forecast budgets"]','["Confirmed transactions","Tool costs/invoices","Project, billing and budget records"]','["Revenue/cost/margin reports","Cashflow forecast","Budget alerts","Project profitability"]','["Gross margin","Operating cost","Cash runway","Forecast variance"]','approval_gated','Analytics only; payments, refunds, purchases and money transfers are never auto-executed.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('finance_analytics','transaction_source','Payment / transaction source','1','not_connected','Use confirmed transactions, not clicks or estimates.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('finance_analytics','expense_source','Expense and tool usage data','1','not_connected','Explicit currency, source and period.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('finance_analytics','project_finance','Project/billing records','1','not_connected','Map revenue to project and invoice IDs.');
INSERT OR IGNORE INTO aga_division_registry
(slug,name,sort_order,category,mission,responsibilities_json,inputs_json,outputs_json,kpis_json,automation_level,approval_policy)
VALUES ('owner_control','Owner Control','10','Governance','Memberi Owner satu titik kendali untuk status divisi, prioritas, risiko, dan persetujuan.','["Executive summary","approvals/escalations","cross-division priorities","decision and audit log"]','["Division KPIs","Task queue, approvals, incidents","Finance and delivery data"]','["Executive dashboard","Approval decisions","Prioritized backlog","Audit trail"]','["Approval age","Priority SLA","Critical incidents open","Cross-division completion"]','approval_gated','Owner is final authority for high-risk, budget-changing and sensitive external actions.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('owner_control','division_registry','Division registry','1','not_connected','Single registry of all divisions.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('owner_control','approvals_auth','Owner authentication/approvals','1','not_connected','Write actions require server-side auth.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('owner_control','audit_logs','Audit/event logs','1','not_connected','Record actor, time and outcome; never secrets.');
INSERT OR IGNORE INTO aga_division_registry
(slug,name,sort_order,category,mission,responsibilities_json,inputs_json,outputs_json,kpis_json,automation_level,approval_policy)
VALUES ('website_system_monitoring','Website & System Monitoring','11','Platform','Memantau website, Worker, endpoint, dan job terjadwal agar gangguan cepat diketahui.','["Check uptime/HTTP/latency","inspect Worker and cron health","detect availability changes","escalate incidents"]','["Domains/endpoints","Expected status and latency","Worker logs and scheduled results"]','["Uptime timeline","Alerts/incidents","Availability report","Escalation status"]','["Uptime","Time to detect","False positive rate","Incident resolution"]','assisted','Monitoring and alerts may run automatically; DNS, deploy and production restart require approval/runbook.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('website_system_monitoring','monitor_targets','Website/API targets','1','not_connected','Register each target and expected response.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('website_system_monitoring','scheduled_monitor','Cloudflare Cron','1','not_connected','Fit cadence to quotas and rate limits.');
INSERT OR IGNORE INTO aga_division_integrations (division_slug,integration_key,label,required,status,notes)
VALUES ('website_system_monitoring','incident_notifications','Incident notification channel','1','not_connected','Use Owner-approved notification path.');
