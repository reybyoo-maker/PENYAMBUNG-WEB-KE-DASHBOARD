export const DIVISION_CATALOG = [
  {
    "slug": "sales_crm",
    "name": "Sales & CRM",
    "sort_order": 1,
    "category": "Revenue",
    "mission": "Mengubah prospek berkualitas menjadi percakapan, peluang, dan klien.",
    "responsibilities": [
      "Lead validation",
      "scoring",
      "pipeline",
      "scheduled follow-up",
      "reply tracking"
    ],
    "inputs": [
      "Verified leads",
      "Outreach/reply history",
      "Service offer and ICP"
    ],
    "outputs": [
      "Scored leads",
      "Pipeline and next action",
      "Follow-up schedule",
      "Win/loss analysis"
    ],
    "kpis": [
      "Qualified leads",
      "Response rate",
      "Meeting rate",
      "Win rate",
      "Speed to lead"
    ],
    "automation_level": "assisted",
    "approval_policy": "Outreach follows consent, opt-out and sending limits; unsent campaigns require approval.",
    "integrations": [
      {
        "key": "crm_database",
        "label": "CRM / D1",
        "required": true,
        "notes": "Verify binding and CRM schema."
      },
      {
        "key": "email_inbox",
        "label": "Email inbox and outbound provider",
        "required": true,
        "notes": "Official provider, opt-out and daily caps."
      },
      {
        "key": "lead_sources",
        "label": "Lead source connectors",
        "required": true,
        "notes": "Keep provenance and deduplicate records."
      }
    ]
  },
  {
    "slug": "sales_outsourcing_multi_platform",
    "name": "Sales Outsourcing Multi-Platform",
    "sort_order": 2,
    "category": "Revenue",
    "mission": "Menemukan dan mengelola peluang proyek lintas platform freelance, vendor directory, dan kanal profesional secara patuh.",
    "responsibilities": [
      "Discover opportunities",
      "qualify budget/fit",
      "deduplicate",
      "draft proposals",
      "track status"
    ],
    "inputs": [
      "Platform registry",
      "Service/pricing/availability",
      "Public project opportunities"
    ],
    "outputs": [
      "Opportunity pipeline",
      "Priority score",
      "Proposal drafts",
      "Source and status log"
    ],
    "kpis": [
      "Qualified opportunities",
      "Approved proposals",
      "Win rate",
      "Acquisition cost",
      "Duplicate prevention"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "Respect platform terms, login protections, CAPTCHA and rate limits; do not auto-submit proposals without approval.",
    "integrations": [
      {
        "key": "platform_connectors",
        "label": "Official platform connectors",
        "required": true,
        "notes": "Enable only supported, permitted methods per platform."
      },
      {
        "key": "opportunity_db",
        "label": "Opportunity registry",
        "required": true,
        "notes": "Deduplicate cross-platform opportunities."
      },
      {
        "key": "proposal_approval",
        "label": "Proposal approval",
        "required": true,
        "notes": "Owner approves external submissions."
      }
    ]
  },
  {
    "slug": "marketing_intelligence",
    "name": "Marketing Intelligence",
    "sort_order": 3,
    "category": "Research",
    "mission": "Memberikan intel pasar dan rekomendasi pemasaran berbasis bukti; tidak membuat atau menerbitkan konten otomatis.",
    "responsibilities": [
      "Research niches and competitors",
      "compare public offers",
      "identify intent",
      "recommend experiments"
    ],
    "inputs": [
      "Public search/research sources",
      "CRM outcomes",
      "Competitor websites/directories"
    ],
    "outputs": [
      "Source-backed market briefs",
      "Opportunity scoring",
      "Competitor snapshots",
      "Experiment recommendations"
    ],
    "kpis": [
      "Source freshness",
      "Evidence-backed briefs",
      "Opportunity acceptance",
      "Decision time"
    ],
    "automation_level": "assisted",
    "approval_policy": "Research and analysis only; no automated content production or publishing.",
    "integrations": [
      {
        "key": "research_sources",
        "label": "Search / research sources",
        "required": true,
        "notes": "Approved sources and access rules required."
      },
      {
        "key": "crm_feedback",
        "label": "CRM outcomes",
        "required": false,
        "notes": "Use sales outcomes to refine priorities."
      }
    ]
  },
  {
    "slug": "client_success",
    "name": "Client Success",
    "sort_order": 4,
    "category": "Delivery",
    "mission": "Menjaga pengalaman klien dari onboarding sampai retensi berdasarkan status proyek yang nyata.",
    "responsibilities": [
      "Onboarding checklist",
      "feedback and risks",
      "progress updates",
      "retention signals"
    ],
    "inputs": [
      "Approved contract/scope",
      "Delivery milestones",
      "Feedback and communication history"
    ],
    "outputs": [
      "Client health status",
      "Onboarding checklist",
      "Draft status updates",
      "Retention risks"
    ],
    "kpis": [
      "Time to onboard",
      "Milestones on time",
      "Satisfaction",
      "Retention rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Scope changes, deadlines, pricing commitments and refunds require Owner approval.",
    "integrations": [
      {
        "key": "client_crm",
        "label": "Client CRM",
        "required": true,
        "notes": "Limit access to approved client records."
      },
      {
        "key": "project_status",
        "label": "Project/task tracker",
        "required": true,
        "notes": "Delivery team is source of truth."
      },
      {
        "key": "client_messaging",
        "label": "Client messaging channel",
        "required": false,
        "notes": "Only approved contacts and scopes."
      }
    ]
  },
  {
    "slug": "operations_service_delivery",
    "name": "Operations & Service Delivery",
    "sort_order": 5,
    "category": "Delivery",
    "mission": "Mengubah pekerjaan yang terjual menjadi delivery terencana, terassign, teruji, dan selesai tepat waktu.",
    "responsibilities": [
      "Break scope into tasks",
      "schedule dependencies",
      "coordinate handoffs",
      "check acceptance criteria"
    ],
    "inputs": [
      "Approved scope",
      "Team capacity and backlog",
      "Acceptance criteria and deadlines"
    ],
    "outputs": [
      "Delivery plan",
      "Task breakdown",
      "Milestone status",
      "Handover checklist"
    ],
    "kpis": [
      "On-time delivery",
      "Milestone completion",
      "Rework rate",
      "SLA breaches"
    ],
    "automation_level": "assisted",
    "approval_policy": "Scope changes, new spend and external commitments need approval.",
    "integrations": [
      {
        "key": "project_store",
        "label": "Project/task storage",
        "required": true,
        "notes": "Official store for tasks and milestones."
      },
      {
        "key": "approval_queue",
        "label": "Owner approval queue",
        "required": true,
        "notes": "Hold costly or scope-changing actions."
      },
      {
        "key": "client_success_handoff",
        "label": "Client Success handoff",
        "required": true,
        "notes": "Share consistent milestone state."
      }
    ]
  },
  {
    "slug": "technology_automation",
    "name": "Technology & Automation",
    "sort_order": 6,
    "category": "Platform",
    "mission": "Membangun dan memelihara otomasi yang aman, terdokumentasi, dapat dipulihkan, dan hemat biaya.",
    "responsibilities": [
      "Manage workflows/APIs",
      "retries and idempotency",
      "server-side secrets",
      "releases and rollback"
    ],
    "inputs": [
      "Process specs",
      "Controlled credentials",
      "Approved change requests"
    ],
    "outputs": [
      "Versioned workflows",
      "Integration health",
      "Release notes",
      "Rollback plans"
    ],
    "kpis": [
      "Successful run rate",
      "MTTR",
      "Automation coverage",
      "Cost per successful run"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "Production deploys, destructive schema changes, new spend and secrets access need approval.",
    "integrations": [
      {
        "key": "cloudflare_workers",
        "label": "Cloudflare Workers",
        "required": true,
        "notes": "Verify account and deployment permissions."
      },
      {
        "key": "d1_storage",
        "label": "Cloudflare D1",
        "required": true,
        "notes": "Versioned migrations and rollback checks."
      },
      {
        "key": "source_control",
        "label": "GitHub repository",
        "required": false,
        "notes": "CI/CD with least privilege."
      }
    ]
  },
  {
    "slug": "qa_reliability",
    "name": "Quality Assurance & Reliability",
    "sort_order": 7,
    "category": "Platform",
    "mission": "Menguji fungsi nyata dan mendeteksi kegagalan sebelum berdampak ke klien atau pendapatan.",
    "responsibilities": [
      "Health checks",
      "API/data validation",
      "regression tests",
      "incidents and root cause"
    ],
    "inputs": [
      "Test cases",
      "Health endpoints/logs",
      "Release history"
    ],
    "outputs": [
      "Test results",
      "Incident records",
      "Root cause analysis",
      "Release readiness"
    ],
    "kpis": [
      "Defect escape rate",
      "Time to detect",
      "Time to recover",
      "Test coverage"
    ],
    "automation_level": "assisted",
    "approval_policy": "Restart, rollback or production repair only through approved runbooks.",
    "integrations": [
      {
        "key": "health_targets",
        "label": "Website/API health endpoints",
        "required": true,
        "notes": "Register target and expected status."
      },
      {
        "key": "test_runner",
        "label": "CI / smoke test runner",
        "required": true,
        "notes": "Specify tests and accepted results."
      },
      {
        "key": "incident_sink",
        "label": "Incident logging",
        "required": true,
        "notes": "Persist actionable incident records."
      }
    ]
  },
  {
    "slug": "data_integration_intelligence",
    "name": "Data & Integration Intelligence",
    "sort_order": 8,
    "category": "Platform",
    "mission": "Menjaga data lintas sistem konsisten, terlacak asalnya, dan layak dipakai untuk keputusan.",
    "responsibilities": [
      "Schema mapping",
      "deduplication",
      "stale/conflict detection",
      "sync and reconciliation"
    ],
    "inputs": [
      "Databases/API sources",
      "Schema mappings",
      "Sync logs and dedupe rules"
    ],
    "outputs": [
      "Validated records",
      "Sync error report",
      "Data quality score",
      "Reconciliation report"
    ],
    "kpis": [
      "Sync success rate",
      "Duplicate rate",
      "Data freshness",
      "Schema drift"
    ],
    "automation_level": "assisted",
    "approval_policy": "Schema changes, bulk merges/deletes and large backfills need approval.",
    "integrations": [
      {
        "key": "core_d1",
        "label": "AIGROWTH D1",
        "required": true,
        "notes": "Verify database name, binding and schema on deploy."
      },
      {
        "key": "source_contracts",
        "label": "Source API contracts",
        "required": true,
        "notes": "Document schema/auth for each source."
      },
      {
        "key": "sync_logs",
        "label": "Sync logs",
        "required": true,
        "notes": "Store run time, counts and errors without secrets."
      }
    ]
  },
  {
    "slug": "finance_analytics",
    "name": "Finance Analytics",
    "sort_order": 9,
    "category": "Governance",
    "mission": "Memberi Owner data akurat pendapatan, biaya, margin, arus kas, dan penggunaan tools.",
    "responsibilities": [
      "Reconcile confirmed income",
      "monitor tool/API costs",
      "calculate margins",
      "forecast budgets"
    ],
    "inputs": [
      "Confirmed transactions",
      "Tool costs/invoices",
      "Project, billing and budget records"
    ],
    "outputs": [
      "Revenue/cost/margin reports",
      "Cashflow forecast",
      "Budget alerts",
      "Project profitability"
    ],
    "kpis": [
      "Gross margin",
      "Operating cost",
      "Cash runway",
      "Forecast variance"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "Analytics only; payments, refunds, purchases and money transfers are never auto-executed.",
    "integrations": [
      {
        "key": "transaction_source",
        "label": "Payment / transaction source",
        "required": true,
        "notes": "Use confirmed transactions, not clicks or estimates."
      },
      {
        "key": "expense_source",
        "label": "Expense and tool usage data",
        "required": true,
        "notes": "Explicit currency, source and period."
      },
      {
        "key": "project_finance",
        "label": "Project/billing records",
        "required": true,
        "notes": "Map revenue to project and invoice IDs."
      }
    ]
  },
  {
    "slug": "owner_control",
    "name": "Owner Control",
    "sort_order": 10,
    "category": "Governance",
    "mission": "Memberi Owner satu titik kendali untuk status divisi, prioritas, risiko, dan persetujuan.",
    "responsibilities": [
      "Executive summary",
      "approvals/escalations",
      "cross-division priorities",
      "decision and audit log"
    ],
    "inputs": [
      "Division KPIs",
      "Task queue, approvals, incidents",
      "Finance and delivery data"
    ],
    "outputs": [
      "Executive dashboard",
      "Approval decisions",
      "Prioritized backlog",
      "Audit trail"
    ],
    "kpis": [
      "Approval age",
      "Priority SLA",
      "Critical incidents open",
      "Cross-division completion"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "Owner is final authority for high-risk, budget-changing and sensitive external actions.",
    "integrations": [
      {
        "key": "division_registry",
        "label": "Division registry",
        "required": true,
        "notes": "Single registry of all divisions."
      },
      {
        "key": "approvals_auth",
        "label": "Owner authentication/approvals",
        "required": true,
        "notes": "Write actions require server-side auth."
      },
      {
        "key": "audit_logs",
        "label": "Audit/event logs",
        "required": true,
        "notes": "Record actor, time and outcome; never secrets."
      }
    ]
  },
  {
    "slug": "website_system_monitoring",
    "name": "Website & System Monitoring",
    "sort_order": 11,
    "category": "Platform",
    "mission": "Memantau website, Worker, endpoint, dan job terjadwal agar gangguan cepat diketahui.",
    "responsibilities": [
      "Check uptime/HTTP/latency",
      "inspect Worker and cron health",
      "detect availability changes",
      "escalate incidents"
    ],
    "inputs": [
      "Domains/endpoints",
      "Expected status and latency",
      "Worker logs and scheduled results"
    ],
    "outputs": [
      "Uptime timeline",
      "Alerts/incidents",
      "Availability report",
      "Escalation status"
    ],
    "kpis": [
      "Uptime",
      "Time to detect",
      "False positive rate",
      "Incident resolution"
    ],
    "automation_level": "assisted",
    "approval_policy": "Monitoring and alerts may run automatically; DNS, deploy and production restart require approval/runbook.",
    "integrations": [
      {
        "key": "monitor_targets",
        "label": "Website/API targets",
        "required": true,
        "notes": "Register each target and expected response."
      },
      {
        "key": "scheduled_monitor",
        "label": "Cloudflare Cron",
        "required": true,
        "notes": "Fit cadence to quotas and rate limits."
      },
      {
        "key": "incident_notifications",
        "label": "Incident notification channel",
        "required": true,
        "notes": "Use Owner-approved notification path."
      }
    ]
  },
  {
    "slug": "icp_offer_strategy",
    "name": "ICP & Offer Strategy",
    "sort_order": 12,
    "category": "Revenue",
    "mission": "Menetapkan ideal customer profile dan penawaran yang paling cocok dengan kapabilitas AIGROWTH.",
    "responsibilities": [
      "Membandingkan segmen, pain point, anggaran, dan bukti kebutuhan sebelum menetapkan prioritas target.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "CRM outcomes dan service catalog",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "ICP scorecard dan offer-fit brief",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Offer acceptance",
      "qualified-segment rate"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "icp_offer_strategy_source",
        "label": "ICP & Offer Strategy — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "icp_offer_strategy_validation",
        "label": "ICP & Offer Strategy — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "account_based_prospecting",
    "name": "Account-Based Prospecting",
    "sort_order": 13,
    "category": "Revenue",
    "mission": "Membangun daftar akun sasaran bernilai tinggi dengan konteks yang relevan.",
    "responsibilities": [
      "Memetakan akun, stakeholder publik, sinyal kebutuhan, dan alasan pendekatan yang dapat diverifikasi.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Account directories dan public company pages",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Target account lists dan account plans",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Account fit",
      "verified-contact coverage"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "account_based_prospecting_source",
        "label": "Account-Based Prospecting — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "account_based_prospecting_validation",
        "label": "Account-Based Prospecting — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "lead_enrichment",
    "name": "Lead Enrichment",
    "sort_order": 14,
    "category": "Revenue",
    "mission": "Melengkapi rekaman lead dengan data bisnis yang relevan, seperlunya, dan bersumber jelas.",
    "responsibilities": [
      "Menormalkan perusahaan, domain, industri, ukuran publik, dan provenance; tandai ketidakpastian.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Lead records dan permitted public sources",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Enriched lead records dengan confidence/source",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Field completeness",
      "evidence freshness"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "lead_enrichment_source",
        "label": "Lead Enrichment — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "lead_enrichment_validation",
        "label": "Lead Enrichment — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "lead_qualification",
    "name": "Lead Qualification",
    "sort_order": 15,
    "category": "Revenue",
    "mission": "Menyaring lead berdasarkan fit, kebutuhan, urgensi, dan kesiapan berkomunikasi.",
    "responsibilities": [
      "Menghitung qualification criteria, menulis alasan skor, dan mengembalikan lead yang belum cukup bukti.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "CRM lead records dan ICP",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Qualified/disqualified decisions dengan alasan",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Qualification precision",
      "sales acceptance"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "lead_qualification_source",
        "label": "Lead Qualification — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "lead_qualification_validation",
        "label": "Lead Qualification — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "email_deliverability",
    "name": "Email Deliverability",
    "sort_order": 16,
    "category": "Revenue",
    "mission": "Menjaga reputasi dan keterkiriman email outbound pada kanal resmi.",
    "responsibilities": [
      "Memantau bounce, complaint, domain authentication, suppression lists, dan kesehatan pengiriman.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Provider delivery logs dan domain DNS",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Deliverability report dan corrective checklist",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Bounce rate",
      "complaint rate",
      "inbox placement signals"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "email_deliverability_source",
        "label": "Email Deliverability — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "email_deliverability_validation",
        "label": "Email Deliverability — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "outreach_sequence_intelligence",
    "name": "Outreach Sequence Intelligence",
    "sort_order": 17,
    "category": "Revenue",
    "mission": "Menentukan waktu dan urutan tindak lanjut yang wajar tanpa mengirim pesan di luar kebijakan.",
    "responsibilities": [
      "Menyusun jadwal, suppression checks, frequency caps, dan stop condition setelah balasan atau opt-out.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "CRM timeline dan approved outreach policy",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Sequence schedule dan follow-up queue",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Follow-up compliance",
      "reply rate"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "outreach_sequence_intelligence_source",
        "label": "Outreach Sequence Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "outreach_sequence_intelligence_validation",
        "label": "Outreach Sequence Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "sales_enablement",
    "name": "Sales Enablement",
    "sort_order": 18,
    "category": "Revenue",
    "mission": "Menyediakan bukti layanan, studi kasus, dan materi referensi yang membantu percakapan sales.",
    "responsibilities": [
      "Memetakan pertanyaan prospek ke bukti portfolio, batas layanan, harga yang disetujui, dan jawaban standar.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Service catalog, portfolio, FAQs",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Sales reference kit dan objection map",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Evidence coverage",
      "answer usefulness"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "sales_enablement_source",
        "label": "Sales Enablement — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "sales_enablement_validation",
        "label": "Sales Enablement — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "proposal_rfp_operations",
    "name": "Proposal & RFP Operations",
    "sort_order": 19,
    "category": "Revenue",
    "mission": "Mengelola kelengkapan, persyaratan, dan proses review proposal serta permintaan penawaran.",
    "responsibilities": [
      "Mengurai requirements, deadline, eligibility, evidence needed, dan approval checklist sebelum submission.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Opportunity briefs dan procurement requirements",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "RFP compliance matrix dan proposal draft pack",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Requirement coverage",
      "on-time review"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "proposal_rfp_operations_source",
        "label": "Proposal & RFP Operations — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "proposal_rfp_operations_validation",
        "label": "Proposal & RFP Operations — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "pricing_packaging_intelligence",
    "name": "Pricing & Packaging Intelligence",
    "sort_order": 20,
    "category": "Revenue",
    "mission": "Membantu menetapkan paket dan harga berdasarkan biaya, kompleksitas, serta nilai yang ditawarkan.",
    "responsibilities": [
      "Membandingkan public price signals, delivery cost, scope limits, and margin floor.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Cost data, offer catalog, public price signals",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Pricing comparison dan package recommendations",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Gross-margin floor compliance",
      "quote acceptance"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "pricing_packaging_intelligence_source",
        "label": "Pricing & Packaging Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "pricing_packaging_intelligence_validation",
        "label": "Pricing & Packaging Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "partnerships_affiliates",
    "name": "Partnerships & Affiliates",
    "sort_order": 21,
    "category": "Revenue",
    "mission": "Menilai peluang partnership dan afiliasi yang relevan dengan layanan AIGROWTH.",
    "responsibilities": [
      "Mencari kecocokan audiens, terms, attribution, incentive cost, dan conflict risks.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Partner directories dan partnership terms",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Partner shortlist dan due-diligence notes",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Partner fit",
      "qualified referrals"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "partnerships_affiliates_source",
        "label": "Partnerships & Affiliates — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "partnerships_affiliates_validation",
        "label": "Partnerships & Affiliates — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "channel_partnerships",
    "name": "Channel Partnerships",
    "sort_order": 22,
    "category": "Revenue",
    "mission": "Mengembangkan kanal rujukan melalui konsultan, agensi, dan penyedia layanan komplementer.",
    "responsibilities": [
      "Membangun partner map, mutual fit, referral process, and co-selling handoff.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Partner profiles dan referral history",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Channel plan dan partner pipeline",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Referral conversion",
      "active partner rate"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "channel_partnerships_source",
        "label": "Channel Partnerships — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "channel_partnerships_validation",
        "label": "Channel Partnerships — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "revenue_operations",
    "name": "Revenue Operations",
    "sort_order": 23,
    "category": "Revenue",
    "mission": "Menjaga konsistensi definisi funnel, forecast, dan laporan performa pendapatan.",
    "responsibilities": [
      "Menyelaraskan lifecycle stages, source attribution, pipeline hygiene, dan forecast assumptions.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "CRM pipeline dan confirmed sales outcomes",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Revenue dashboard definitions dan forecast inputs",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Pipeline hygiene",
      "forecast variance"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "revenue_operations_source",
        "label": "Revenue Operations — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "revenue_operations_validation",
        "label": "Revenue Operations — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "seo_intelligence",
    "name": "SEO Intelligence",
    "sort_order": 24,
    "category": "Research",
    "mission": "Menganalisis visibilitas pencarian, kompetisi keyword, dan peluang organic discovery.",
    "responsibilities": [
      "Memetakan query, intent, SERP features, competitor visibility, dan prioritas teknis; tidak memproduksi konten.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Search console/approved SEO tools dan public SERPs",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "SEO opportunity map dan technical findings",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Query coverage",
      "visibility change"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "seo_intelligence_source",
        "label": "SEO Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "seo_intelligence_validation",
        "label": "SEO Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "search_intent_intelligence",
    "name": "Search Intent Intelligence",
    "sort_order": 25,
    "category": "Research",
    "mission": "Mengelompokkan intent pencarian untuk memahami kebutuhan pasar dan kesiapan membeli.",
    "responsibilities": [
      "Mengklasifikasi pertanyaan, perbandingan, dan purchase-intent signals berdasarkan sumber.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Search query datasets dan public results",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Search-intent taxonomy dan demand brief",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Intent classification accuracy",
      "buyer-intent coverage"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "search_intent_intelligence_source",
        "label": "Search Intent Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "search_intent_intelligence_validation",
        "label": "Search Intent Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "competitor_pricing_intelligence",
    "name": "Competitor Pricing Intelligence",
    "sort_order": 26,
    "category": "Research",
    "mission": "Memantau harga dan paket kompetitor yang tersedia secara publik.",
    "responsibilities": [
      "Merekam harga, scope, syarat, tanggal pengamatan, serta perbedaan yang dapat diverifikasi.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Public competitor pricing pages",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Dated pricing matrix dan variance alerts",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Price-data freshness",
      "source coverage"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "competitor_pricing_intelligence_source",
        "label": "Competitor Pricing Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "competitor_pricing_intelligence_validation",
        "label": "Competitor Pricing Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "market_demand_intelligence",
    "name": "Market Demand Intelligence",
    "sort_order": 27,
    "category": "Research",
    "mission": "Memperkirakan permintaan layanan dari sinyal publik dan hasil penjualan yang terukur.",
    "responsibilities": [
      "Menggabungkan volume sinyal, kebutuhan industri, conversion evidence, dan confidence level.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Public search trends, CRM outcomes, industry reports",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Market demand and confidence brief",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Forecast error",
      "evidence-backed opportunities"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "market_demand_intelligence_source",
        "label": "Market Demand Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "market_demand_intelligence_validation",
        "label": "Market Demand Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "customer_voice_intelligence",
    "name": "Customer Voice Intelligence",
    "sort_order": 28,
    "category": "Research",
    "mission": "Merangkum kebutuhan, keberatan, dan bahasa pelanggan dari feedback yang berizin.",
    "responsibilities": [
      "Mengelompokkan feedback yang telah diizinkan, memberi tema, dan menjaga anonimisasi seperlunya.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Approved feedback, reviews, support tags",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Voice-of-customer insights dan theme trend",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Theme consistency",
      "traceable evidence"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "customer_voice_intelligence_source",
        "label": "Customer Voice Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "customer_voice_intelligence_validation",
        "label": "Customer Voice Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "industry_trend_intelligence",
    "name": "Industry Trend Intelligence",
    "sort_order": 29,
    "category": "Research",
    "mission": "Mendeteksi perubahan industri yang dapat memengaruhi permintaan, risiko, atau positioning.",
    "responsibilities": [
      "Mengevaluasi tanggal publikasi, tanggal peristiwa, kualitas sumber, dan relevansi bisnis.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Industry sources dan announcements",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Trend brief dengan sumber dan impact rating",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Freshness",
      "verified-source ratio"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "industry_trend_intelligence_source",
        "label": "Industry Trend Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "industry_trend_intelligence_validation",
        "label": "Industry Trend Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "campaign_performance_intelligence",
    "name": "Campaign Performance Intelligence",
    "sort_order": 30,
    "category": "Research",
    "mission": "Mengevaluasi hasil kampanye berdasarkan metrik dan atribusi yang tersedia.",
    "responsibilities": [
      "Membandingkan channel, cost, conversion, UTM, dan data window tanpa mengarang atribusi.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Campaign metrics dan CRM outcomes",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Campaign performance analysis dan tests to consider",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Attribution coverage",
      "CAC data quality"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "campaign_performance_intelligence_source",
        "label": "Campaign Performance Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "campaign_performance_intelligence_validation",
        "label": "Campaign Performance Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "brand_reputation_intelligence",
    "name": "Brand Reputation Intelligence",
    "sort_order": 31,
    "category": "Research",
    "mission": "Memantau reputasi brand dan sinyal publik yang memerlukan respons manusia.",
    "responsibilities": [
      "Mendeteksi review/mention yang relevan, mengelompokkan sentimen dengan confidence, dan mengeskalasi risiko.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Public reviews and permitted brand mentions",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Reputation digest dan response recommendations",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Mention coverage",
      "classification precision"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "brand_reputation_intelligence_source",
        "label": "Brand Reputation Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "brand_reputation_intelligence_validation",
        "label": "Brand Reputation Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "client_onboarding_operations",
    "name": "Client Onboarding Operations",
    "sort_order": 32,
    "category": "Delivery",
    "mission": "Memastikan klien baru memiliki akses, tujuan, scope, dan acceptance criteria yang jelas.",
    "responsibilities": [
      "Melacak checklist, pemilik keputusan, dependency, akses minimal, dan kickoff readiness.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Approved contract and onboarding answers",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Onboarding readiness and missing-item list",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Time to onboard",
      "checklist completion"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "client_onboarding_operations_source",
        "label": "Client Onboarding Operations — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "client_onboarding_operations_validation",
        "label": "Client Onboarding Operations — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "customer_support_triage",
    "name": "Customer Support Triage",
    "sort_order": 33,
    "category": "Delivery",
    "mission": "Mengklasifikasikan pertanyaan klien serta mengarahkan masalah ke pemilik yang tepat.",
    "responsibilities": [
      "Mengelompokkan topik, urgensi, impact, SLA, dan kebutuhan eskalasi tanpa mengirim jawaban berisiko otomatis.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Support inbox/tickets and client SLAs",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Ticket classification and routing recommendation",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Routing accuracy",
      "first response time"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "customer_support_triage_source",
        "label": "Customer Support Triage — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "customer_support_triage_validation",
        "label": "Customer Support Triage — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "sla_escalation_management",
    "name": "SLA & Escalation Management",
    "sort_order": 34,
    "category": "Delivery",
    "mission": "Mendeteksi risiko pelanggaran SLA dan mengeskalasi hambatan berdasarkan aturan.",
    "responsibilities": [
      "Mengukur elapsed time, severity, impact, dependency, assignee, dan escalation matrix.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Task tracker and agreed SLA definitions",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "SLA risk queue and escalation events",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "SLA attainment",
      "escalation lead time"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "sla_escalation_management_source",
        "label": "SLA & Escalation Management — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "sla_escalation_management_validation",
        "label": "SLA & Escalation Management — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "retention_churn_intelligence",
    "name": "Retention & Churn Intelligence",
    "sort_order": 35,
    "category": "Delivery",
    "mission": "Mendeteksi sinyal risiko churn dari penggunaan, feedback, dan kesehatan hubungan klien.",
    "responsibilities": [
      "Menyusun indikator risiko dengan evidence and confidence, lalu merekomendasikan intervensi manusia.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Client health history and feedback",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Churn risk score with evidence",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Risk precision",
      "save rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "retention_churn_intelligence_source",
        "label": "Retention & Churn Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "retention_churn_intelligence_validation",
        "label": "Retention & Churn Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "renewals_expansion",
    "name": "Renewals & Expansion",
    "sort_order": 36,
    "category": "Delivery",
    "mission": "Menemukan peluang renewal dan perluasan layanan berdasarkan hasil nyata.",
    "responsibilities": [
      "Melacak renewal dates, service outcomes, capacity, and scope fit; menyiapkan opsi tanpa mengubah kontrak sendiri.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Contracts, delivery outcomes, client health",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Renewal timeline and expansion opportunity list",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Renewal rate",
      "expansion-qualified rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "renewals_expansion_source",
        "label": "Renewals & Expansion — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "renewals_expansion_validation",
        "label": "Renewals & Expansion — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "account_health_intelligence",
    "name": "Account Health Intelligence",
    "sort_order": 37,
    "category": "Delivery",
    "mission": "Menyatukan indikator kesehatan akun untuk prioritas Client Success.",
    "responsibilities": [
      "Menggabungkan delivery, response, feedback, unresolved issues, and commercial context.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "CRM, project milestones and support tickets",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Account health summary with drivers",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Health-data completeness",
      "risk detection"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "account_health_intelligence_source",
        "label": "Account Health Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "account_health_intelligence_validation",
        "label": "Account Health Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "client_feedback_loop",
    "name": "Client Feedback Loop",
    "sort_order": 38,
    "category": "Delivery",
    "mission": "Mengubah feedback klien menjadi isu, pemilik, tindakan, dan bukti penyelesaian.",
    "responsibilities": [
      "Mengaitkan feedback ke project/task, menghindari duplikasi, dan memverifikasi closure.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Approved client feedback and project tasks",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Feedback action register",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Closure rate",
      "repeat-issue rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "client_feedback_loop_source",
        "label": "Client Feedback Loop — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "client_feedback_loop_validation",
        "label": "Client Feedback Loop — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "service_scope_catalog",
    "name": "Service Scope & Catalog",
    "sort_order": 39,
    "category": "Delivery",
    "mission": "Menjaga katalog layanan, batas scope, asumsi, dan acceptance criteria tetap konsisten.",
    "responsibilities": [
      "Mengelola service IDs, inclusions/exclusions, dependencies, and change-request rules.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Owner-approved service catalog",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Versioned service definitions and scope matrix",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Scope clarity",
      "change-request frequency"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "service_scope_catalog_source",
        "label": "Service Scope & Catalog — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "service_scope_catalog_validation",
        "label": "Service Scope & Catalog — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "workflow_orchestration",
    "name": "Workflow Orchestration",
    "sort_order": 40,
    "category": "Platform",
    "mission": "Mengoordinasikan ketergantungan workflow dan menegakkan transisi status yang sah.",
    "responsibilities": [
      "Mengecek prerequisite, idempotency, retry policy, timeout, and compensating actions.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Workflow definitions and runtime events",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Workflow graphs and safe execution plans",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Successful run rate",
      "duplicate execution rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "workflow_orchestration_source",
        "label": "Workflow Orchestration — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "workflow_orchestration_validation",
        "label": "Workflow Orchestration — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "api_integration_engineering",
    "name": "API Integration Engineering",
    "sort_order": 41,
    "category": "Platform",
    "mission": "Membangun koneksi API yang tervalidasi, terukur, dan aman dipulihkan.",
    "responsibilities": [
      "Mengelola schema, authentication, retries, pagination, quotas, and response validation.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "API specifications and approved credentials",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Versioned API adapters and contract tests",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Contract pass rate",
      "integration error rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "api_integration_engineering_source",
        "label": "API Integration Engineering — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "api_integration_engineering_validation",
        "label": "API Integration Engineering — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "webhook_event_routing",
    "name": "Webhook Event Routing",
    "sort_order": 42,
    "category": "Platform",
    "mission": "Menerima dan merutekan webhook dengan validasi signature dan deduplikasi.",
    "responsibilities": [
      "Memverifikasi signature, timestamp, replay windows, idempotency keys, and event ordering.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Webhook provider events and secret bindings",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Validated event routes and delivery log",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Signature validation",
      "retry success"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "webhook_event_routing_source",
        "label": "Webhook Event Routing — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "webhook_event_routing_validation",
        "label": "Webhook Event Routing — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "scheduler_cron_operations",
    "name": "Scheduler & Cron Operations",
    "sort_order": 43,
    "category": "Platform",
    "mission": "Mengatur jadwal job berdasarkan dependensi, rate limit, dan jendela pemeliharaan.",
    "responsibilities": [
      "Mengelola cadence, missed-run recovery, concurrency limits, and job locks.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Cloudflare Cron and job inventory",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Schedule registry and missed-run report",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "On-time run rate",
      "overlap prevention"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "scheduler_cron_operations_source",
        "label": "Scheduler & Cron Operations — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "scheduler_cron_operations_validation",
        "label": "Scheduler & Cron Operations — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "secrets_access_management",
    "name": "Secrets & Access Management",
    "sort_order": 44,
    "category": "Security",
    "mission": "Menjaga kredensial, binding, dan hak akses berdasarkan prinsip least privilege.",
    "responsibilities": [
      "Mencatat secret owners, rotation schedule, access scopes, and exposure checks without revealing values.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Secret metadata and permission inventory",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Access matrix and rotation checklist",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Overprivileged access count",
      "rotation compliance"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "secrets_access_management_source",
        "label": "Secrets & Access Management — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "secrets_access_management_validation",
        "label": "Secrets & Access Management — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "cloudflare_release_engineering",
    "name": "Cloudflare Release Engineering",
    "sort_order": 45,
    "category": "Platform",
    "mission": "Mengelola deployment Worker secara terkontrol dan dapat di-rollback.",
    "responsibilities": [
      "Memvalidasi tests, bindings, compatibility dates, environments, and post-deploy smoke checks.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Git commit, Wrangler configuration and test evidence",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Release plan, deployment result and rollback notes",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Deploy success",
      "rollback readiness"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "cloudflare_release_engineering_source",
        "label": "Cloudflare Release Engineering — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "cloudflare_release_engineering_validation",
        "label": "Cloudflare Release Engineering — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "database_schema_migration",
    "name": "Database Schema & Migration",
    "sort_order": 46,
    "category": "Platform",
    "mission": "Menjaga skema D1 dan migrasi tetap kompatibel, idempotent, dan dapat diaudit.",
    "responsibilities": [
      "Memvalidasi migration order, indexes, constraints, seed counts, and backward compatibility.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "SQL migrations and schema inventory",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Migration plan and schema validation report",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Migration pass rate",
      "schema drift"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "database_schema_migration_source",
        "label": "Database Schema & Migration — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "database_schema_migration_validation",
        "label": "Database Schema & Migration — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "backup_recovery_operations",
    "name": "Backup & Recovery Operations",
    "sort_order": 47,
    "category": "Platform",
    "mission": "Menyiapkan cadangan dan prosedur pemulihan untuk data dan konfigurasi kritis.",
    "responsibilities": [
      "Menjadwalkan backup sesuai kemampuan provider, memeriksa restore evidence, dan mendokumentasikan recovery steps.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Database/export policies and system configuration",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Backup status and recovery drill report",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Backup freshness",
      "recovery objective performance"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "backup_recovery_operations_source",
        "label": "Backup & Recovery Operations — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "backup_recovery_operations_validation",
        "label": "Backup & Recovery Operations — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "automation_cost_optimization",
    "name": "Automation Cost Optimization",
    "sort_order": 48,
    "category": "Platform",
    "mission": "Mengurangi biaya otomasi tanpa menurunkan keandalan atau kualitas hasil.",
    "responsibilities": [
      "Mengukur invocation, API usage, model/token spend, idle schedules, and retry waste.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Cloudflare usage, provider billing and workflow logs",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Cost-saving recommendations and budget alerts",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Cost per successful task",
      "waste reduction"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "automation_cost_optimization_source",
        "label": "Automation Cost Optimization — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "automation_cost_optimization_validation",
        "label": "Automation Cost Optimization — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "ai_model_routing",
    "name": "AI Model Routing",
    "sort_order": 49,
    "category": "Platform",
    "mission": "Memilih model sesuai kualitas, biaya, latency, dan sensitivitas data.",
    "responsibilities": [
      "Menentukan task tiers, fallback order, evaluation thresholds, and budget ceilings.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Model availability/pricing and approved eval results",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Routing policy and fallback map",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Quality at budget",
      "latency",
      "fallback rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "ai_model_routing_source",
        "label": "AI Model Routing — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "ai_model_routing_validation",
        "label": "AI Model Routing — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "agent_prompt_evaluation",
    "name": "Agent & Prompt Evaluation",
    "sort_order": 50,
    "category": "Platform",
    "mission": "Mengevaluasi hasil agent dan prompt memakai skenario uji yang dapat diulang.",
    "responsibilities": [
      "Mengelola benchmark, regression cases, scoring rubric, and failure examples.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Approved test datasets and prompt versions",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Evaluation scorecards and regression report",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Eval pass rate",
      "regression detection"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "agent_prompt_evaluation_source",
        "label": "Agent & Prompt Evaluation — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "agent_prompt_evaluation_validation",
        "label": "Agent & Prompt Evaluation — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "ai_guardrails_policy",
    "name": "AI Guardrails & Policy",
    "sort_order": 51,
    "category": "Security",
    "mission": "Memastikan agent mematuhi kebijakan data, izin, approval, dan batas tindakan.",
    "responsibilities": [
      "Memvalidasi tool permissions, output schemas, sensitive-data handling, and action allowlists.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Division policies and tool inventory",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Policy checks and exception queue",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Policy violation rate",
      "blocked-risk coverage"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "ai_guardrails_policy_source",
        "label": "AI Guardrails & Policy — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "ai_guardrails_policy_validation",
        "label": "AI Guardrails & Policy — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "runtime_performance_engineering",
    "name": "Runtime Performance Engineering",
    "sort_order": 52,
    "category": "Platform",
    "mission": "Mengukur latency, throughput, memory, and runtime bottlenecks untuk worker dan workflows.",
    "responsibilities": [
      "Memantau p95 latency, concurrency, payload size, timeouts, and hot paths.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Worker observability and benchmark results",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Performance profile and optimization backlog",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "p95 latency",
      "timeout rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "runtime_performance_engineering_source",
        "label": "Runtime Performance Engineering — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "runtime_performance_engineering_validation",
        "label": "Runtime Performance Engineering — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "regression_testing",
    "name": "Regression Testing",
    "sort_order": 53,
    "category": "Quality",
    "mission": "Mencegah fitur baru merusak perilaku yang sebelumnya valid.",
    "responsibilities": [
      "Menjalankan test matrix untuk API, event schemas, routing, permissions, and migrations.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Test suite and release diff",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Regression test results and blockers",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Regression escape rate",
      "test pass rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "regression_testing_source",
        "label": "Regression Testing — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "regression_testing_validation",
        "label": "Regression Testing — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "end_to_end_testing",
    "name": "End-to-End Testing",
    "sort_order": 54,
    "category": "Quality",
    "mission": "Memverifikasi perjalanan lengkap dari sumber event sampai hasil terlihat di dashboard.",
    "responsibilities": [
      "Menguji website event, Worker collection, D1 write, aggregation and UI render.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Test environments and end-to-end scenarios",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "End-to-end test evidence and defects",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "End-to-end pass rate",
      "time to detect"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "end_to_end_testing_source",
        "label": "End-to-End Testing — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "end_to_end_testing_validation",
        "label": "End-to-End Testing — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "data_quality_assurance",
    "name": "Data Quality Assurance",
    "sort_order": 55,
    "category": "Data",
    "mission": "Mendeteksi field kosong, nilai tidak valid, duplikasi, dan data outlier.",
    "responsibilities": [
      "Menerapkan quality rules, freshness checks, null rates, and referential consistency checks.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Operational records and data rules",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Data quality score and exception report",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Completeness",
      "validity",
      "duplicate rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "data_quality_assurance_source",
        "label": "Data Quality Assurance — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "data_quality_assurance_validation",
        "label": "Data Quality Assurance — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "integration_contract_testing",
    "name": "Integration Contract Testing",
    "sort_order": 56,
    "category": "Quality",
    "mission": "Memastikan API antar-divisi tetap cocok saat schema atau provider berubah.",
    "responsibilities": [
      "Menguji request/response schemas, auth behavior, rate limits, and backward-compatible changes.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "API/schema contracts and mock responses",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Contract test reports and drift alerts",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Contract conformance",
      "breaking changes detected"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "integration_contract_testing_source",
        "label": "Integration Contract Testing — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "integration_contract_testing_validation",
        "label": "Integration Contract Testing — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "observability_log_intelligence",
    "name": "Observability & Log Intelligence",
    "sort_order": 57,
    "category": "Platform",
    "mission": "Menyediakan log terstruktur untuk memahami status, error, dan dampak tanpa membocorkan secret.",
    "responsibilities": [
      "Menormalkan error codes, correlation IDs, retention and redaction rules.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Worker logs and task execution metadata",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Searchable event summaries and diagnostic trails",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Diagnostic coverage",
      "secret-redaction pass rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "observability_log_intelligence_source",
        "label": "Observability & Log Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "observability_log_intelligence_validation",
        "label": "Observability & Log Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "incident_command",
    "name": "Incident Command",
    "sort_order": 58,
    "category": "Reliability",
    "mission": "Mengoordinasikan respon insiden sesuai severity, impact, owner, dan runbook.",
    "responsibilities": [
      "Membuka incident, mencatat timeline, memelihara status, dan mengatur post-incident review.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Alerts, monitoring results and incident runbooks",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Incident timeline and action register",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Time to acknowledge",
      "MTTR"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "incident_command_source",
        "label": "Incident Command — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "incident_command_validation",
        "label": "Incident Command — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "site_reliability_engineering",
    "name": "Site Reliability Engineering",
    "sort_order": 59,
    "category": "Reliability",
    "mission": "Menetapkan service objectives, error budgets, dan praktik reliability lintas sistem.",
    "responsibilities": [
      "Mengukur availability, alert quality, capacity headroom, and toil.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Service endpoints, metrics and incident history",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "SLO dashboard and reliability backlog",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Availability",
      "error-budget burn",
      "toil"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "site_reliability_engineering_source",
        "label": "Site Reliability Engineering — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "site_reliability_engineering_validation",
        "label": "Site Reliability Engineering — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "security_posture_monitoring",
    "name": "Security Posture Monitoring",
    "sort_order": 60,
    "category": "Security",
    "mission": "Mendeteksi konfigurasi sistem berisiko dan dependency yang perlu diperiksa.",
    "responsibilities": [
      "Menilai exposed routes, security headers, known dependency alerts, and policy drift.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Approved security scan outputs and config snapshots",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Security findings ranked by severity",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Critical finding age",
      "remediation rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "security_posture_monitoring_source",
        "label": "Security Posture Monitoring — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "security_posture_monitoring_validation",
        "label": "Security Posture Monitoring — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "privacy_consent_operations",
    "name": "Privacy & Consent Operations",
    "sort_order": 61,
    "category": "Governance",
    "mission": "Menjaga pengumpulan data dan komunikasi sesuai consent, tujuan, serta permintaan opt-out.",
    "responsibilities": [
      "Melacak purpose, retention, consent evidence, deletion requests and collection minimization.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Privacy notice, consent preferences and data inventory",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Privacy control register and exception queue",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Consent coverage",
      "request SLA"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "privacy_consent_operations_source",
        "label": "Privacy & Consent Operations — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "privacy_consent_operations_validation",
        "label": "Privacy & Consent Operations — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "access_audit_identity",
    "name": "Access Audit & Identity",
    "sort_order": 62,
    "category": "Security",
    "mission": "Memantau siapa atau service apa yang memiliki akses ke sistem dan tindakan sensitif.",
    "responsibilities": [
      "Meninjau roles, stale credentials metadata, access reviews, and privileged operations.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Identity roles, audit events and connector scopes",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Access review report and least-privilege changes proposed",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Review completion",
      "stale access findings"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "access_audit_identity_source",
        "label": "Access Audit & Identity — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "access_audit_identity_validation",
        "label": "Access Audit & Identity — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "data_governance_lineage",
    "name": "Data Governance & Lineage",
    "sort_order": 63,
    "category": "Data",
    "mission": "Mendefinisikan arti field, pemilik data, sumber kebenaran, dan lineage.",
    "responsibilities": [
      "Memelihara data dictionary, source authority, retention, and field-level provenance.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Data schemas, process owners and source maps",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Data dictionary and lineage map",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Field ownership coverage",
      "lineage completeness"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "data_governance_lineage_source",
        "label": "Data Governance & Lineage — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "data_governance_lineage_validation",
        "label": "Data Governance & Lineage — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "data_pipeline_engineering",
    "name": "Data Pipeline Engineering",
    "sort_order": 64,
    "category": "Data",
    "mission": "Membangun pipeline ETL/ELT yang idempotent dan dapat direkonsiliasi.",
    "responsibilities": [
      "Mengekstrak, mentransformasi, memuat, menguji count checks and replay safety.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Source APIs, schemas and sync schedules",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Versioned sync jobs and reconciliation results",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Pipeline success",
      "lag",
      "source-to-target variance"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "data_pipeline_engineering_source",
        "label": "Data Pipeline Engineering — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "data_pipeline_engineering_validation",
        "label": "Data Pipeline Engineering — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "business_intelligence_reporting",
    "name": "Business Intelligence & Reporting",
    "sort_order": 65,
    "category": "Analytics",
    "mission": "Menyediakan metrik bisnis dengan definisi konsisten untuk keputusan Owner.",
    "responsibilities": [
      "Memvalidasi metric definitions, cohort/time windows, filters and source freshness.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "CRM, delivery, finance and website analytics",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Trusted KPI tables and decision reports",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Metric reconciliation",
      "report freshness"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "business_intelligence_reporting_source",
        "label": "Business Intelligence & Reporting — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "business_intelligence_reporting_validation",
        "label": "Business Intelligence & Reporting — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "experimentation_measurement",
    "name": "Experimentation & Measurement",
    "sort_order": 66,
    "category": "Analytics",
    "mission": "Merancang evaluasi eksperimen dengan hipotesis dan kriteria keputusan yang jelas.",
    "responsibilities": [
      "Menetapkan baseline, metric, sample limits, guardrails and readout approach.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Approved experiments and measured outcomes",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Experiment plan and evidence-based result",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Measurement completeness",
      "decision usefulness"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "experimentation_measurement_source",
        "label": "Experimentation & Measurement — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "experimentation_measurement_validation",
        "label": "Experimentation & Measurement — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "billing_invoicing_operations",
    "name": "Billing & Invoicing Operations",
    "sort_order": 67,
    "category": "Finance",
    "mission": "Menyiapkan kelengkapan invoice dan status billing dari kontrak yang disetujui.",
    "responsibilities": [
      "Memetakan deliverables, billing milestones, due dates and required evidence.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Approved contract, delivery milestones and invoice records",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Invoice readiness checklist and due-date queue",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "On-time invoice readiness",
      "billing completeness"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "billing_invoicing_operations_source",
        "label": "Billing & Invoicing Operations — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "billing_invoicing_operations_validation",
        "label": "Billing & Invoicing Operations — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "accounts_receivable_tracking",
    "name": "Accounts Receivable Tracking",
    "sort_order": 68,
    "category": "Finance",
    "mission": "Memantau invoice outstanding dan jadwal follow-up tagihan secara tertib.",
    "responsibilities": [
      "Menghubungkan invoice status, due date, confirmed receipts, and dispute flags.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Invoice and confirmed payment records",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Receivables aging and collection reminders for review",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Days sales outstanding",
      "overdue balance"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "accounts_receivable_tracking_source",
        "label": "Accounts Receivable Tracking — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "accounts_receivable_tracking_validation",
        "label": "Accounts Receivable Tracking — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "expense_subscription_tracking",
    "name": "Expense & Subscription Tracking",
    "sort_order": 69,
    "category": "Finance",
    "mission": "Mencatat dan memantau biaya tools, langganan, dan pengeluaran operasional.",
    "responsibilities": [
      "Mengkategorikan transactions, renewal dates, usage, owner and cancellation terms.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Provider billing and approved expense records",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Expense register and renewal calendar",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Cost completeness",
      "unused subscription spend"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "expense_subscription_tracking_source",
        "label": "Expense & Subscription Tracking — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "expense_subscription_tracking_validation",
        "label": "Expense & Subscription Tracking — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "budget_guard_spend_approvals",
    "name": "Budget Guard & Spend Approvals",
    "sort_order": 70,
    "category": "Governance",
    "mission": "Mengawasi penggunaan budget dan menahan tindakan ketika ambang biaya tercapai.",
    "responsibilities": [
      "Membandingkan usage to caps, estimate total cost, alert and request approval.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Budget limits, billing telemetry and owner decisions",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Budget variance alerts and approval requests",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Budget overrun prevention",
      "forecast variance"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "budget_guard_spend_approvals_source",
        "label": "Budget Guard & Spend Approvals — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "budget_guard_spend_approvals_validation",
        "label": "Budget Guard & Spend Approvals — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "project_profitability_intelligence",
    "name": "Project Profitability Intelligence",
    "sort_order": 71,
    "category": "Finance",
    "mission": "Mengukur profitabilitas proyek berdasarkan pendapatan terkonfirmasi dan biaya tercatat.",
    "responsibilities": [
      "Reconcile project revenue, delivery hours, provider fees, rework and overhead assumptions.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Project billing, delivery logs and expense data",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Project margin report and margin-risk alert",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Gross margin accuracy",
      "unallocated costs"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "project_profitability_intelligence_source",
        "label": "Project Profitability Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "project_profitability_intelligence_validation",
        "label": "Project Profitability Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "cash_flow_forecasting",
    "name": "Cash Flow Forecasting",
    "sort_order": 72,
    "category": "Finance",
    "mission": "Memperkirakan kebutuhan kas menggunakan invoice, pembayaran terkonfirmasi, dan kewajiban yang tercatat.",
    "responsibilities": [
      "Forecast inflow/outflow windows with scenarios and uncertainty labels.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Receivables, payables and confirmed cash transactions",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Cashflow projection and liquidity warnings",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Forecast variance",
      "data completeness"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "cash_flow_forecasting_source",
        "label": "Cash Flow Forecasting — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "cash_flow_forecasting_validation",
        "label": "Cash Flow Forecasting — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "procurement_vendor_spend",
    "name": "Procurement & Vendor Spend",
    "sort_order": 73,
    "category": "Governance",
    "mission": "Menilai kebutuhan vendor dan membandingkan biaya sebelum pembelian disetujui.",
    "responsibilities": [
      "Collect quotes, compare scope/terms, track renewals, and prepare approval packet.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Approved needs, vendor quotes and spend policy",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Vendor comparison and procurement request",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Savings vs comparable quote",
      "approval completeness"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "procurement_vendor_spend_source",
        "label": "Procurement & Vendor Spend — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "procurement_vendor_spend_validation",
        "label": "Procurement & Vendor Spend — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "contract_operations",
    "name": "Contract Operations",
    "sort_order": 74,
    "category": "Governance",
    "mission": "Mengelola status dokumen kontrak, tenggat, kewajiban, dan approval perubahan.",
    "responsibilities": [
      "Track version, parties, deliverable, renewal date, signatures and change requests.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Owner-approved contracts and document repository",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Contract register and obligation calendar",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Obligation tracking coverage",
      "renewal alert lead time"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "contract_operations_source",
        "label": "Contract Operations — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "contract_operations_validation",
        "label": "Contract Operations — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "business_risk_compliance",
    "name": "Business Risk & Compliance",
    "sort_order": 75,
    "category": "Governance",
    "mission": "Memetakan risiko operasional dan kepatuhan menjadi kontrol serta tindakan yang dapat diaudit.",
    "responsibilities": [
      "Score impact/likelihood, assign owners, track mitigation, and review control evidence.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Policies, incident records and risk register",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Risk register and mitigation status",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "High-risk open age",
      "control evidence coverage"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "business_risk_compliance_source",
        "label": "Business Risk & Compliance — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "business_risk_compliance_validation",
        "label": "Business Risk & Compliance — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "vendor_intelligence",
    "name": "Vendor Intelligence",
    "sort_order": 76,
    "category": "Research",
    "mission": "Mengevaluasi provider dan vendor berdasarkan kesesuaian, dependability, biaya, dan bukti.",
    "responsibilities": [
      "Compare vendor offerings, availability, terms, service limits and source confidence.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Vendor sites, provider docs and usage history",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Vendor matrix and recommendation brief",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Vendor evidence freshness",
      "fit score"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "vendor_intelligence_source",
        "label": "Vendor Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "vendor_intelligence_validation",
        "label": "Vendor Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "platform_terms_compliance",
    "name": "Platform Terms Compliance",
    "sort_order": 77,
    "category": "Governance",
    "mission": "Memelihara aturan penggunaan tiap platform agar otomasi sales tetap patuh.",
    "responsibilities": [
      "Track official terms/API guidance, approved access method, rate limits, and review date.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Official platform policies and connector inventory",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Platform compliance matrix and change alerts",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Policy review freshness",
      "compliance exceptions"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "platform_terms_compliance_source",
        "label": "Platform Terms Compliance — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "platform_terms_compliance_validation",
        "label": "Platform Terms Compliance — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "platform_connector_certification",
    "name": "Platform Connector Certification",
    "sort_order": 78,
    "category": "Platform",
    "mission": "Memverifikasi setiap konektor platform sebelum diizinkan pada workflow produksi.",
    "responsibilities": [
      "Test auth, pagination, rate limits, error handling, schema, and permitted access scope.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Official docs and connector test environment",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Connector readiness certification and limitations",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Connector contract pass",
      "failed run rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "platform_connector_certification_source",
        "label": "Platform Connector Certification — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "platform_connector_certification_validation",
        "label": "Platform Connector Certification — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "freelance_market_intelligence",
    "name": "Freelance Market Intelligence",
    "sort_order": 79,
    "category": "Research",
    "mission": "Mengukur niche, anggaran, kompetisi, dan demand pada pasar freelance.",
    "responsibilities": [
      "Review public project samples, categories, competition signals and platform fees.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Permitted marketplace listings and opportunity history",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Freelance market map and priority sectors",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Qualified opportunity yield",
      "data freshness"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "freelance_market_intelligence_source",
        "label": "Freelance Market Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "freelance_market_intelligence_validation",
        "label": "Freelance Market Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "partner_qualification",
    "name": "Partner Qualification",
    "sort_order": 80,
    "category": "Revenue",
    "mission": "Menyaring calon partner menurut reputasi, kemampuan, keselarasan layanan, dan risiko.",
    "responsibilities": [
      "Verify public evidence, capability fit, referral incentives and conflict checks.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Partner profiles, references and public records",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Partner qualification scorecard",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Qualification acceptance",
      "due-diligence completeness"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "partner_qualification_source",
        "label": "Partner Qualification — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "partner_qualification_validation",
        "label": "Partner Qualification — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "proposal_research",
    "name": "Proposal Research",
    "sort_order": 81,
    "category": "Revenue",
    "mission": "Mengumpulkan fakta, requirement, dan referensi untuk menyokong proposal yang akan ditinjau manusia.",
    "responsibilities": [
      "Map client context, scope, constraints, success criteria, and portfolio evidence.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Public customer context and approved portfolio",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Evidence pack and proposal research brief",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Source traceability",
      "requirement coverage"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "proposal_research_source",
        "label": "Proposal Research — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "proposal_research_validation",
        "label": "Proposal Research — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "public_tender_intelligence",
    "name": "Public Tender Intelligence",
    "sort_order": 82,
    "category": "Research",
    "mission": "Menemukan pengumuman tender publik yang relevan serta tenggat dan eligibility-nya.",
    "responsibilities": [
      "Monitor official tender pages, qualification criteria, timelines and submission requirements.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Official public procurement notices",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Tender shortlist and compliance calendar",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Eligibility accuracy",
      "missed-deadline prevention"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "public_tender_intelligence_source",
        "label": "Public Tender Intelligence — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "public_tender_intelligence_validation",
        "label": "Public Tender Intelligence — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "service_opportunity_research",
    "name": "Service Opportunity Research",
    "sort_order": 83,
    "category": "Research",
    "mission": "Menemukan kebutuhan pasar yang cocok dengan layanan otomasi AIGROWTH.",
    "responsibilities": [
      "Combine workflow pain signals, public job requests, service capability, and unit economics.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Public job descriptions and service catalog",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Service opportunity map and demand evidence",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Evidence-backed opportunities",
      "fit accuracy"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "service_opportunity_research_source",
        "label": "Service Opportunity Research — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "service_opportunity_research_validation",
        "label": "Service Opportunity Research — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "workforce_orchestration",
    "name": "Workforce Orchestration",
    "sort_order": 84,
    "category": "Operations",
    "mission": "Membagi pekerjaan ke divisi atau executor yang tepat dengan dependensi yang jelas.",
    "responsibilities": [
      "Route tasks by capability, load, permissions and state; prevent cyclic or duplicate assignment.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Division registry, task queue and capacity data",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Assignment plan and dependency graph",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Task routing accuracy",
      "blocked-task age"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "workforce_orchestration_source",
        "label": "Workforce Orchestration — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "workforce_orchestration_validation",
        "label": "Workforce Orchestration — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "capacity_planning",
    "name": "Capacity Planning",
    "sort_order": 85,
    "category": "Operations",
    "mission": "Membandingkan backlog dengan kapasitas dan tenggat sebelum menyetujui pekerjaan baru.",
    "responsibilities": [
      "Estimate effort bands, concurrency, skill constraints and deadline feasibility.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Backlog, historical runtimes and availability",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Capacity forecast and overload alerts",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "On-time forecast",
      "overload hours"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "capacity_planning_source",
        "label": "Capacity Planning — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "capacity_planning_validation",
        "label": "Capacity Planning — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "task_prioritization",
    "name": "Task Prioritization",
    "sort_order": 86,
    "category": "Operations",
    "mission": "Mengurutkan pekerjaan berdasar nilai, urgensi, risiko, dependensi, dan biaya.",
    "responsibilities": [
      "Apply transparent scorecard and surface trade-offs for Owner review.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Tasks, OKRs, deadlines and incidents",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Ranked backlog with rationale",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Priority acceptance",
      "urgent-task SLA"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "task_prioritization_source",
        "label": "Task Prioritization — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "task_prioritization_validation",
        "label": "Task Prioritization — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "process_documentation",
    "name": "Process Documentation",
    "sort_order": 87,
    "category": "Knowledge",
    "mission": "Menjaga peta proses dan definisi handoff tetap terdokumentasi dan mudah diaudit.",
    "responsibilities": [
      "Record trigger, owner, systems, exceptions, outputs and approved changes.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Process owners and workflow definitions",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Process maps and control points",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Process coverage",
      "stale-document rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "process_documentation_source",
        "label": "Process Documentation — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "process_documentation_validation",
        "label": "Process Documentation — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "knowledge_base_operations",
    "name": "Knowledge Base Operations",
    "sort_order": 88,
    "category": "Knowledge",
    "mission": "Mengelola sumber pengetahuan internal agar mudah dicari, memiliki pemilik, dan tidak kedaluwarsa.",
    "responsibilities": [
      "Index trusted docs, metadata, version/date, access scope, and update owner.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Approved internal docs and runbooks",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Searchable knowledge index and freshness report",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Retrieval relevance",
      "stale-reference rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "knowledge_base_operations_source",
        "label": "Knowledge Base Operations — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "knowledge_base_operations_validation",
        "label": "Knowledge Base Operations — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "runbook_sop_management",
    "name": "Runbook & SOP Management",
    "sort_order": 89,
    "category": "Operations",
    "mission": "Menyimpan prosedur operasional yang dapat dijalankan dengan aman saat normal maupun insiden.",
    "responsibilities": [
      "Define preconditions, steps, rollback, permission requirements and verification signals.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Approved process maps and incident learnings",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Versioned SOP/runbooks and drill checklist",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Runbook coverage",
      "drill pass rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "runbook_sop_management_source",
        "label": "Runbook & SOP Management — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "runbook_sop_management_validation",
        "label": "Runbook & SOP Management — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "automation_inventory",
    "name": "Automation Inventory",
    "sort_order": 90,
    "category": "Platform",
    "mission": "Menyediakan daftar seluruh workflow, pemilik, dependensi, schedule, dan risiko.",
    "responsibilities": [
      "Catalog triggers, secrets references, endpoints, owners, deprecation and impact.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Cloudflare Workers, automation tool metadata and repositories",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Automation catalog and dependency map",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Inventory coverage",
      "unknown-owner count"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "automation_inventory_source",
        "label": "Automation Inventory — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "automation_inventory_validation",
        "label": "Automation Inventory — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "incident_communications",
    "name": "Incident Communications",
    "sort_order": 91,
    "category": "Operations",
    "mission": "Menyiapkan update insiden yang akurat dan konsisten untuk Owner serta pihak terdampak.",
    "responsibilities": [
      "Summarize verified impact, timeline, workarounds and next update time; require human review for external notices.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Incident records and approved comms policy",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Internal incident update drafts and status log",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Update timeliness",
      "factual correction rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "incident_communications_source",
        "label": "Incident Communications — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "incident_communications_validation",
        "label": "Incident Communications — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "meeting_decision_registry",
    "name": "Meeting & Decision Registry",
    "sort_order": 92,
    "category": "Knowledge",
    "mission": "Mencatat keputusan, pemilik tindakan, tenggat, dan bukti tindak lanjut dari rapat.",
    "responsibilities": [
      "Structure notes into decision/action records and track closure without inventing outcomes.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Owner-approved meeting notes and tasks",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Decision log and action register",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Action closure",
      "decision traceability"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "meeting_decision_registry_source",
        "label": "Meeting & Decision Registry — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "meeting_decision_registry_validation",
        "label": "Meeting & Decision Registry — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "approval_workflow_operations",
    "name": "Approval Workflow Operations",
    "sort_order": 93,
    "category": "Governance",
    "mission": "Mengelola permintaan persetujuan berdasarkan risiko, biaya, dan kewenangan.",
    "responsibilities": [
      "Validate requester, payload, evidence, expiry, approver and immutable decision log.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Task queue, approval rules and Owner identity",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Approval queue, status, and audit trail",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Approval SLA",
      "unauthorized action prevention"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "approval_workflow_operations_source",
        "label": "Approval Workflow Operations — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "approval_workflow_operations_validation",
        "label": "Approval Workflow Operations — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "internal_administration",
    "name": "Internal Administration",
    "sort_order": 94,
    "category": "Operations",
    "mission": "Mengelola checklist administrasi internal, tenggat, dan permintaan rutin.",
    "responsibilities": [
      "Track recurring obligations, ownership, documents and status.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Internal task register and approved policies",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Admin calendar and completion report",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "On-time completion",
      "overdue actions"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "internal_administration_source",
        "label": "Internal Administration — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "internal_administration_validation",
        "label": "Internal Administration — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "asset_license_inventory",
    "name": "Asset & License Inventory",
    "sort_order": 95,
    "category": "Operations",
    "mission": "Memantau aset digital, lisensi, domain, dan tanggal perpanjangan.",
    "responsibilities": [
      "Track owner, license seat, expiry, criticality and renewal approval.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Provider account inventories and purchase records",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Asset register and renewal warnings",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Inventory coverage",
      "missed-renewal rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "asset_license_inventory_source",
        "label": "Asset & License Inventory — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "asset_license_inventory_validation",
        "label": "Asset & License Inventory — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "feedback_learning_loop",
    "name": "Feedback & Learning Loop",
    "sort_order": 96,
    "category": "Knowledge",
    "mission": "Mengubah hasil eksperimen, insiden, dan review menjadi perubahan proses yang terukur.",
    "responsibilities": [
      "Record hypothesis, evidence, action owner, expected result and post-change review.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "QA reports, sales outcomes and incident reviews",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Lessons register and improvement experiments",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Lessons applied",
      "recurrence reduction"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "feedback_learning_loop_source",
        "label": "Feedback & Learning Loop — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "feedback_learning_loop_validation",
        "label": "Feedback & Learning Loop — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "cross_division_coordination",
    "name": "Cross-Division Coordination",
    "sort_order": 97,
    "category": "Operations",
    "mission": "Mengelola handoff, dependency, dan konflik prioritas antar-divisi.",
    "responsibilities": [
      "Track owner-to-owner handoffs, acceptance, blocked dependencies and escalation deadlines.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Division registry and task links",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Cross-division dependency board",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Handoff acceptance time",
      "dependency blockage"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.",
    "integrations": [
      {
        "key": "cross_division_coordination_source",
        "label": "Cross-Division Coordination — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "cross_division_coordination_validation",
        "label": "Cross-Division Coordination — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "kpi_executive_reporting",
    "name": "KPI & Executive Reporting",
    "sort_order": 98,
    "category": "Governance",
    "mission": "Menyatukan KPI lintas divisi dengan definisi dan periode yang konsisten.",
    "responsibilities": [
      "Check metric source, data freshness, variance and confidence before reporting.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Validated division KPI records",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Executive scorecard and exception summaries",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "KPI completeness",
      "metric reconciliation"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "kpi_executive_reporting_source",
        "label": "KPI & Executive Reporting — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "kpi_executive_reporting_validation",
        "label": "KPI & Executive Reporting — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "audit_change_management",
    "name": "Audit & Change Management",
    "sort_order": 99,
    "category": "Governance",
    "mission": "Mencatat perubahan konfigurasi, proses, dan hak akses berikut alasan serta hasilnya.",
    "responsibilities": [
      "Require change request, risk assessment, reviewer, version, and validation evidence.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Git changes, Worker deployments and access events",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Change log and review checklist",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Change traceability",
      "unauthorized changes"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External commitments, financial decisions and material changes require Owner approval; keep an audit trail.",
    "integrations": [
      {
        "key": "audit_change_management_source",
        "label": "Audit & Change Management — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "audit_change_management_validation",
        "label": "Audit & Change Management — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  },
  {
    "slug": "business_continuity_disaster_recovery",
    "name": "Business Continuity & Disaster Recovery",
    "sort_order": 100,
    "category": "Reliability",
    "mission": "Menyiapkan respons terhadap gangguan besar serta pemulihan layanan prioritas.",
    "responsibilities": [
      "Define critical services, dependencies, recovery roles, backup evidence and exercise schedule.",
      "Record owner, status, SLA, source evidence, and next action.",
      "Validate outputs, log exceptions, and escalate blocked work."
    ],
    "inputs": [
      "Service inventory, backups and continuity requirements",
      "Approved requests, scope, and operating policies",
      "Historical outcomes, timestamps, and audit records"
    ],
    "outputs": [
      "Continuity plan and recovery drill results",
      "Prioritized exception queue and actionable recommendations",
      "Auditable result with evidence and a named next action"
    ],
    "kpis": [
      "Recovery test pass",
      "critical dependency coverage"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.",
    "integrations": [
      {
        "key": "business_continuity_disaster_recovery_source",
        "label": "Business Continuity & Disaster Recovery — primary data/source",
        "required": true,
        "notes": "Connect an approved source/provider and verify its auth, schema, permitted access, and data freshness."
      },
      {
        "key": "business_continuity_disaster_recovery_validation",
        "label": "Business Continuity & Disaster Recovery — validation and logs",
        "required": true,
        "notes": "Configure validation rules, failure logs, last-check timestamps, and a tested escalation route."
      }
    ]
  }
];
