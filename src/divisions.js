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
  }
];
