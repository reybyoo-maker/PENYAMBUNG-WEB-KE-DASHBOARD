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
    ],
    "workers": [
      {
        "key": "sales_crm_worker_intake",
        "name": "Sales & CRM — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales & CRM."
        ],
        "inputs": [
          "Verified leads",
          "Outreach/reply history"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_crm_worker_analysis",
        "name": "Sales & CRM — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales & CRM."
        ],
        "inputs": [
          "Verified leads",
          "Scored leads",
          "Qualified leads",
          "Response rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_crm_worker_workflow",
        "name": "Sales & CRM — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales & CRM."
        ],
        "inputs": [
          "Scored leads",
          "Outreach follows consent, opt-out and sending limits; unsent campaigns require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sales_crm_worker_qa",
        "name": "Sales & CRM — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales & CRM."
        ],
        "inputs": [
          "Scored leads",
          "Qualified leads",
          "Response rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "sales_outsourcing_multi_platform_worker_intake",
        "name": "Sales Outsourcing Multi-Platform — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Outsourcing Multi-Platform."
        ],
        "inputs": [
          "Platform registry",
          "Service/pricing/availability"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_outsourcing_multi_platform_worker_analysis",
        "name": "Sales Outsourcing Multi-Platform — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Outsourcing Multi-Platform."
        ],
        "inputs": [
          "Platform registry",
          "Opportunity pipeline",
          "Qualified opportunities",
          "Approved proposals"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_outsourcing_multi_platform_worker_workflow",
        "name": "Sales Outsourcing Multi-Platform — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Outsourcing Multi-Platform."
        ],
        "inputs": [
          "Opportunity pipeline",
          "Respect platform terms, login protections, CAPTCHA and rate limits; do not auto-submit proposals without approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sales_outsourcing_multi_platform_worker_qa",
        "name": "Sales Outsourcing Multi-Platform — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Outsourcing Multi-Platform."
        ],
        "inputs": [
          "Opportunity pipeline",
          "Qualified opportunities",
          "Approved proposals"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "marketing_intelligence_worker_intake",
        "name": "Marketing Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Marketing Intelligence."
        ],
        "inputs": [
          "Public search/research sources",
          "CRM outcomes"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "marketing_intelligence_worker_analysis",
        "name": "Marketing Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Marketing Intelligence."
        ],
        "inputs": [
          "Public search/research sources",
          "Source-backed market briefs",
          "Source freshness",
          "Evidence-backed briefs"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "marketing_intelligence_worker_workflow",
        "name": "Marketing Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Marketing Intelligence."
        ],
        "inputs": [
          "Source-backed market briefs",
          "Research and analysis only; no automated content production or publishing."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "marketing_intelligence_worker_qa",
        "name": "Marketing Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Marketing Intelligence."
        ],
        "inputs": [
          "Source-backed market briefs",
          "Source freshness",
          "Evidence-backed briefs"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "client_success_worker_intake",
        "name": "Client Success — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Success."
        ],
        "inputs": [
          "Approved contract/scope",
          "Delivery milestones"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "client_success_worker_analysis",
        "name": "Client Success — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Success."
        ],
        "inputs": [
          "Approved contract/scope",
          "Client health status",
          "Time to onboard",
          "Milestones on time"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "client_success_worker_workflow",
        "name": "Client Success — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Success."
        ],
        "inputs": [
          "Client health status",
          "Scope changes, deadlines, pricing commitments and refunds require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "client_success_worker_qa",
        "name": "Client Success — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Success."
        ],
        "inputs": [
          "Client health status",
          "Time to onboard",
          "Milestones on time"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "operations_service_delivery_worker_intake",
        "name": "Operations & Service Delivery — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Operations & Service Delivery."
        ],
        "inputs": [
          "Approved scope",
          "Team capacity and backlog"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "operations_service_delivery_worker_analysis",
        "name": "Operations & Service Delivery — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Operations & Service Delivery."
        ],
        "inputs": [
          "Approved scope",
          "Delivery plan",
          "On-time delivery",
          "Milestone completion"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "operations_service_delivery_worker_workflow",
        "name": "Operations & Service Delivery — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Operations & Service Delivery."
        ],
        "inputs": [
          "Delivery plan",
          "Scope changes, new spend and external commitments need approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "operations_service_delivery_worker_qa",
        "name": "Operations & Service Delivery — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Operations & Service Delivery."
        ],
        "inputs": [
          "Delivery plan",
          "On-time delivery",
          "Milestone completion"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "technology_automation_worker_intake",
        "name": "Technology & Automation — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Technology & Automation."
        ],
        "inputs": [
          "Process specs",
          "Controlled credentials"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "technology_automation_worker_analysis",
        "name": "Technology & Automation — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Technology & Automation."
        ],
        "inputs": [
          "Process specs",
          "Versioned workflows",
          "Successful run rate",
          "MTTR"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "technology_automation_worker_workflow",
        "name": "Technology & Automation — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Technology & Automation."
        ],
        "inputs": [
          "Versioned workflows",
          "Production deploys, destructive schema changes, new spend and secrets access need approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "technology_automation_worker_qa",
        "name": "Technology & Automation — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Technology & Automation."
        ],
        "inputs": [
          "Versioned workflows",
          "Successful run rate",
          "MTTR"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "qa_reliability_worker_intake",
        "name": "Quality Assurance & Reliability — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Quality Assurance & Reliability."
        ],
        "inputs": [
          "Test cases",
          "Health endpoints/logs"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "qa_reliability_worker_analysis",
        "name": "Quality Assurance & Reliability — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Quality Assurance & Reliability."
        ],
        "inputs": [
          "Test cases",
          "Test results",
          "Defect escape rate",
          "Time to detect"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "qa_reliability_worker_workflow",
        "name": "Quality Assurance & Reliability — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Quality Assurance & Reliability."
        ],
        "inputs": [
          "Test results",
          "Restart, rollback or production repair only through approved runbooks."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "qa_reliability_worker_qa",
        "name": "Quality Assurance & Reliability — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Quality Assurance & Reliability."
        ],
        "inputs": [
          "Test results",
          "Defect escape rate",
          "Time to detect"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "data_integration_intelligence_worker_intake",
        "name": "Data & Integration Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data & Integration Intelligence."
        ],
        "inputs": [
          "Databases/API sources",
          "Schema mappings"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "data_integration_intelligence_worker_analysis",
        "name": "Data & Integration Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data & Integration Intelligence."
        ],
        "inputs": [
          "Databases/API sources",
          "Validated records",
          "Sync success rate",
          "Duplicate rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "data_integration_intelligence_worker_workflow",
        "name": "Data & Integration Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data & Integration Intelligence."
        ],
        "inputs": [
          "Validated records",
          "Schema changes, bulk merges/deletes and large backfills need approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "data_integration_intelligence_worker_qa",
        "name": "Data & Integration Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data & Integration Intelligence."
        ],
        "inputs": [
          "Validated records",
          "Sync success rate",
          "Duplicate rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "finance_analytics_worker_intake",
        "name": "Finance Analytics — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Finance Analytics."
        ],
        "inputs": [
          "Confirmed transactions",
          "Tool costs/invoices"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "finance_analytics_worker_analysis",
        "name": "Finance Analytics — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Finance Analytics."
        ],
        "inputs": [
          "Confirmed transactions",
          "Revenue/cost/margin reports",
          "Gross margin",
          "Operating cost"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "finance_analytics_worker_workflow",
        "name": "Finance Analytics — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Finance Analytics."
        ],
        "inputs": [
          "Revenue/cost/margin reports",
          "Analytics only; payments, refunds, purchases and money transfers are never auto-executed."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "finance_analytics_worker_qa",
        "name": "Finance Analytics — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Finance Analytics."
        ],
        "inputs": [
          "Revenue/cost/margin reports",
          "Gross margin",
          "Operating cost"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "owner_control_worker_intake",
        "name": "Owner Control — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Owner Control."
        ],
        "inputs": [
          "Division KPIs",
          "Task queue, approvals, incidents"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "owner_control_worker_analysis",
        "name": "Owner Control — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Owner Control."
        ],
        "inputs": [
          "Division KPIs",
          "Executive dashboard",
          "Approval age",
          "Priority SLA"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "owner_control_worker_workflow",
        "name": "Owner Control — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Owner Control."
        ],
        "inputs": [
          "Executive dashboard",
          "Owner is final authority for high-risk, budget-changing and sensitive external actions."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "owner_control_worker_qa",
        "name": "Owner Control — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Owner Control."
        ],
        "inputs": [
          "Executive dashboard",
          "Approval age",
          "Priority SLA"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "website_system_monitoring_worker_intake",
        "name": "Website & System Monitoring — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Website & System Monitoring."
        ],
        "inputs": [
          "Domains/endpoints",
          "Expected status and latency"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "website_system_monitoring_worker_analysis",
        "name": "Website & System Monitoring — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Website & System Monitoring."
        ],
        "inputs": [
          "Domains/endpoints",
          "Uptime timeline",
          "Uptime",
          "Time to detect"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "website_system_monitoring_worker_workflow",
        "name": "Website & System Monitoring — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Website & System Monitoring."
        ],
        "inputs": [
          "Uptime timeline",
          "Monitoring and alerts may run automatically; DNS, deploy and production restart require approval/runbook."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "website_system_monitoring_worker_qa",
        "name": "Website & System Monitoring — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Website & System Monitoring."
        ],
        "inputs": [
          "Uptime timeline",
          "Uptime",
          "Time to detect"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "icp_offer_strategy_worker_intake",
        "name": "ICP & Offer Strategy — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to ICP & Offer Strategy."
        ],
        "inputs": [
          "CRM outcomes dan service catalog",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "icp_offer_strategy_worker_analysis",
        "name": "ICP & Offer Strategy — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to ICP & Offer Strategy."
        ],
        "inputs": [
          "CRM outcomes dan service catalog",
          "ICP scorecard dan offer-fit brief",
          "Offer acceptance",
          "qualified-segment rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "icp_offer_strategy_worker_workflow",
        "name": "ICP & Offer Strategy — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to ICP & Offer Strategy."
        ],
        "inputs": [
          "ICP scorecard dan offer-fit brief",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "icp_offer_strategy_worker_qa",
        "name": "ICP & Offer Strategy — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to ICP & Offer Strategy."
        ],
        "inputs": [
          "ICP scorecard dan offer-fit brief",
          "Offer acceptance",
          "qualified-segment rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "account_based_prospecting_worker_intake",
        "name": "Account-Based Prospecting — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account-Based Prospecting."
        ],
        "inputs": [
          "Account directories dan public company pages",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "account_based_prospecting_worker_analysis",
        "name": "Account-Based Prospecting — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account-Based Prospecting."
        ],
        "inputs": [
          "Account directories dan public company pages",
          "Target account lists dan account plans",
          "Account fit",
          "verified-contact coverage"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "account_based_prospecting_worker_workflow",
        "name": "Account-Based Prospecting — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account-Based Prospecting."
        ],
        "inputs": [
          "Target account lists dan account plans",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "account_based_prospecting_worker_qa",
        "name": "Account-Based Prospecting — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account-Based Prospecting."
        ],
        "inputs": [
          "Target account lists dan account plans",
          "Account fit",
          "verified-contact coverage"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "lead_enrichment_worker_intake",
        "name": "Lead Enrichment — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Enrichment."
        ],
        "inputs": [
          "Lead records dan permitted public sources",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "lead_enrichment_worker_analysis",
        "name": "Lead Enrichment — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Enrichment."
        ],
        "inputs": [
          "Lead records dan permitted public sources",
          "Enriched lead records dengan confidence/source",
          "Field completeness",
          "evidence freshness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "lead_enrichment_worker_workflow",
        "name": "Lead Enrichment — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Enrichment."
        ],
        "inputs": [
          "Enriched lead records dengan confidence/source",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "lead_enrichment_worker_qa",
        "name": "Lead Enrichment — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Enrichment."
        ],
        "inputs": [
          "Enriched lead records dengan confidence/source",
          "Field completeness",
          "evidence freshness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "lead_qualification_worker_intake",
        "name": "Lead Qualification — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Qualification."
        ],
        "inputs": [
          "CRM lead records dan ICP",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "lead_qualification_worker_analysis",
        "name": "Lead Qualification — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Qualification."
        ],
        "inputs": [
          "CRM lead records dan ICP",
          "Qualified/disqualified decisions dengan alasan",
          "Qualification precision",
          "sales acceptance"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "lead_qualification_worker_workflow",
        "name": "Lead Qualification — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Qualification."
        ],
        "inputs": [
          "Qualified/disqualified decisions dengan alasan",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "lead_qualification_worker_qa",
        "name": "Lead Qualification — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Qualification."
        ],
        "inputs": [
          "Qualified/disqualified decisions dengan alasan",
          "Qualification precision",
          "sales acceptance"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "email_deliverability_worker_intake",
        "name": "Email Deliverability — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Email Deliverability."
        ],
        "inputs": [
          "Provider delivery logs dan domain DNS",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "email_deliverability_worker_analysis",
        "name": "Email Deliverability — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Email Deliverability."
        ],
        "inputs": [
          "Provider delivery logs dan domain DNS",
          "Deliverability report dan corrective checklist",
          "Bounce rate",
          "complaint rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "email_deliverability_worker_workflow",
        "name": "Email Deliverability — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Email Deliverability."
        ],
        "inputs": [
          "Deliverability report dan corrective checklist",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "email_deliverability_worker_qa",
        "name": "Email Deliverability — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Email Deliverability."
        ],
        "inputs": [
          "Deliverability report dan corrective checklist",
          "Bounce rate",
          "complaint rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "outreach_sequence_intelligence_worker_intake",
        "name": "Outreach Sequence Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Outreach Sequence Intelligence."
        ],
        "inputs": [
          "CRM timeline dan approved outreach policy",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "outreach_sequence_intelligence_worker_analysis",
        "name": "Outreach Sequence Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Outreach Sequence Intelligence."
        ],
        "inputs": [
          "CRM timeline dan approved outreach policy",
          "Sequence schedule dan follow-up queue",
          "Follow-up compliance",
          "reply rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "outreach_sequence_intelligence_worker_workflow",
        "name": "Outreach Sequence Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Outreach Sequence Intelligence."
        ],
        "inputs": [
          "Sequence schedule dan follow-up queue",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "outreach_sequence_intelligence_worker_qa",
        "name": "Outreach Sequence Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Outreach Sequence Intelligence."
        ],
        "inputs": [
          "Sequence schedule dan follow-up queue",
          "Follow-up compliance",
          "reply rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "sales_enablement_worker_intake",
        "name": "Sales Enablement — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Enablement."
        ],
        "inputs": [
          "Service catalog, portfolio, FAQs",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_enablement_worker_analysis",
        "name": "Sales Enablement — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Enablement."
        ],
        "inputs": [
          "Service catalog, portfolio, FAQs",
          "Sales reference kit dan objection map",
          "Evidence coverage",
          "answer usefulness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_enablement_worker_workflow",
        "name": "Sales Enablement — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Enablement."
        ],
        "inputs": [
          "Sales reference kit dan objection map",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sales_enablement_worker_qa",
        "name": "Sales Enablement — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Enablement."
        ],
        "inputs": [
          "Sales reference kit dan objection map",
          "Evidence coverage",
          "answer usefulness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "proposal_rfp_operations_worker_intake",
        "name": "Proposal & RFP Operations — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal & RFP Operations."
        ],
        "inputs": [
          "Opportunity briefs dan procurement requirements",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "proposal_rfp_operations_worker_analysis",
        "name": "Proposal & RFP Operations — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal & RFP Operations."
        ],
        "inputs": [
          "Opportunity briefs dan procurement requirements",
          "RFP compliance matrix dan proposal draft pack",
          "Requirement coverage",
          "on-time review"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "proposal_rfp_operations_worker_workflow",
        "name": "Proposal & RFP Operations — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal & RFP Operations."
        ],
        "inputs": [
          "RFP compliance matrix dan proposal draft pack",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "proposal_rfp_operations_worker_qa",
        "name": "Proposal & RFP Operations — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal & RFP Operations."
        ],
        "inputs": [
          "RFP compliance matrix dan proposal draft pack",
          "Requirement coverage",
          "on-time review"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "pricing_packaging_intelligence_worker_intake",
        "name": "Pricing & Packaging Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing & Packaging Intelligence."
        ],
        "inputs": [
          "Cost data, offer catalog, public price signals",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "pricing_packaging_intelligence_worker_analysis",
        "name": "Pricing & Packaging Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing & Packaging Intelligence."
        ],
        "inputs": [
          "Cost data, offer catalog, public price signals",
          "Pricing comparison dan package recommendations",
          "Gross-margin floor compliance",
          "quote acceptance"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "pricing_packaging_intelligence_worker_workflow",
        "name": "Pricing & Packaging Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing & Packaging Intelligence."
        ],
        "inputs": [
          "Pricing comparison dan package recommendations",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "pricing_packaging_intelligence_worker_qa",
        "name": "Pricing & Packaging Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing & Packaging Intelligence."
        ],
        "inputs": [
          "Pricing comparison dan package recommendations",
          "Gross-margin floor compliance",
          "quote acceptance"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "partnerships_affiliates_worker_intake",
        "name": "Partnerships & Affiliates — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Partnerships & Affiliates."
        ],
        "inputs": [
          "Partner directories dan partnership terms",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "partnerships_affiliates_worker_analysis",
        "name": "Partnerships & Affiliates — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Partnerships & Affiliates."
        ],
        "inputs": [
          "Partner directories dan partnership terms",
          "Partner shortlist dan due-diligence notes",
          "Partner fit",
          "qualified referrals"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "partnerships_affiliates_worker_workflow",
        "name": "Partnerships & Affiliates — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Partnerships & Affiliates."
        ],
        "inputs": [
          "Partner shortlist dan due-diligence notes",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "partnerships_affiliates_worker_qa",
        "name": "Partnerships & Affiliates — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Partnerships & Affiliates."
        ],
        "inputs": [
          "Partner shortlist dan due-diligence notes",
          "Partner fit",
          "qualified referrals"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "channel_partnerships_worker_intake",
        "name": "Channel Partnerships — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Channel Partnerships."
        ],
        "inputs": [
          "Partner profiles dan referral history",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "channel_partnerships_worker_analysis",
        "name": "Channel Partnerships — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Channel Partnerships."
        ],
        "inputs": [
          "Partner profiles dan referral history",
          "Channel plan dan partner pipeline",
          "Referral conversion",
          "active partner rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "channel_partnerships_worker_workflow",
        "name": "Channel Partnerships — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Channel Partnerships."
        ],
        "inputs": [
          "Channel plan dan partner pipeline",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "channel_partnerships_worker_qa",
        "name": "Channel Partnerships — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Channel Partnerships."
        ],
        "inputs": [
          "Channel plan dan partner pipeline",
          "Referral conversion",
          "active partner rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "revenue_operations_worker_intake",
        "name": "Revenue Operations — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Revenue Operations."
        ],
        "inputs": [
          "CRM pipeline dan confirmed sales outcomes",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "revenue_operations_worker_analysis",
        "name": "Revenue Operations — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Revenue Operations."
        ],
        "inputs": [
          "CRM pipeline dan confirmed sales outcomes",
          "Revenue dashboard definitions dan forecast inputs",
          "Pipeline hygiene",
          "forecast variance"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "revenue_operations_worker_workflow",
        "name": "Revenue Operations — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Revenue Operations."
        ],
        "inputs": [
          "Revenue dashboard definitions dan forecast inputs",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "revenue_operations_worker_qa",
        "name": "Revenue Operations — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Revenue Operations."
        ],
        "inputs": [
          "Revenue dashboard definitions dan forecast inputs",
          "Pipeline hygiene",
          "forecast variance"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "seo_intelligence_worker_intake",
        "name": "SEO Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SEO Intelligence."
        ],
        "inputs": [
          "Search console/approved SEO tools dan public SERPs",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "seo_intelligence_worker_analysis",
        "name": "SEO Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SEO Intelligence."
        ],
        "inputs": [
          "Search console/approved SEO tools dan public SERPs",
          "SEO opportunity map dan technical findings",
          "Query coverage",
          "visibility change"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "seo_intelligence_worker_workflow",
        "name": "SEO Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SEO Intelligence."
        ],
        "inputs": [
          "SEO opportunity map dan technical findings",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "seo_intelligence_worker_qa",
        "name": "SEO Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SEO Intelligence."
        ],
        "inputs": [
          "SEO opportunity map dan technical findings",
          "Query coverage",
          "visibility change"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "search_intent_intelligence_worker_intake",
        "name": "Search Intent Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Search Intent Intelligence."
        ],
        "inputs": [
          "Search query datasets dan public results",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "search_intent_intelligence_worker_analysis",
        "name": "Search Intent Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Search Intent Intelligence."
        ],
        "inputs": [
          "Search query datasets dan public results",
          "Search-intent taxonomy dan demand brief",
          "Intent classification accuracy",
          "buyer-intent coverage"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "search_intent_intelligence_worker_workflow",
        "name": "Search Intent Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Search Intent Intelligence."
        ],
        "inputs": [
          "Search-intent taxonomy dan demand brief",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "search_intent_intelligence_worker_qa",
        "name": "Search Intent Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Search Intent Intelligence."
        ],
        "inputs": [
          "Search-intent taxonomy dan demand brief",
          "Intent classification accuracy",
          "buyer-intent coverage"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "competitor_pricing_intelligence_worker_intake",
        "name": "Competitor Pricing Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Competitor Pricing Intelligence."
        ],
        "inputs": [
          "Public competitor pricing pages",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "competitor_pricing_intelligence_worker_analysis",
        "name": "Competitor Pricing Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Competitor Pricing Intelligence."
        ],
        "inputs": [
          "Public competitor pricing pages",
          "Dated pricing matrix dan variance alerts",
          "Price-data freshness",
          "source coverage"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "competitor_pricing_intelligence_worker_workflow",
        "name": "Competitor Pricing Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Competitor Pricing Intelligence."
        ],
        "inputs": [
          "Dated pricing matrix dan variance alerts",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "competitor_pricing_intelligence_worker_qa",
        "name": "Competitor Pricing Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Competitor Pricing Intelligence."
        ],
        "inputs": [
          "Dated pricing matrix dan variance alerts",
          "Price-data freshness",
          "source coverage"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "market_demand_intelligence_worker_intake",
        "name": "Market Demand Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Market Demand Intelligence."
        ],
        "inputs": [
          "Public search trends, CRM outcomes, industry reports",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "market_demand_intelligence_worker_analysis",
        "name": "Market Demand Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Market Demand Intelligence."
        ],
        "inputs": [
          "Public search trends, CRM outcomes, industry reports",
          "Market demand and confidence brief",
          "Forecast error",
          "evidence-backed opportunities"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "market_demand_intelligence_worker_workflow",
        "name": "Market Demand Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Market Demand Intelligence."
        ],
        "inputs": [
          "Market demand and confidence brief",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "market_demand_intelligence_worker_qa",
        "name": "Market Demand Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Market Demand Intelligence."
        ],
        "inputs": [
          "Market demand and confidence brief",
          "Forecast error",
          "evidence-backed opportunities"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "customer_voice_intelligence_worker_intake",
        "name": "Customer Voice Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Voice Intelligence."
        ],
        "inputs": [
          "Approved feedback, reviews, support tags",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "customer_voice_intelligence_worker_analysis",
        "name": "Customer Voice Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Voice Intelligence."
        ],
        "inputs": [
          "Approved feedback, reviews, support tags",
          "Voice-of-customer insights dan theme trend",
          "Theme consistency",
          "traceable evidence"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "customer_voice_intelligence_worker_workflow",
        "name": "Customer Voice Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Voice Intelligence."
        ],
        "inputs": [
          "Voice-of-customer insights dan theme trend",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "customer_voice_intelligence_worker_qa",
        "name": "Customer Voice Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Voice Intelligence."
        ],
        "inputs": [
          "Voice-of-customer insights dan theme trend",
          "Theme consistency",
          "traceable evidence"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "industry_trend_intelligence_worker_intake",
        "name": "Industry Trend Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Industry Trend Intelligence."
        ],
        "inputs": [
          "Industry sources dan announcements",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "industry_trend_intelligence_worker_analysis",
        "name": "Industry Trend Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Industry Trend Intelligence."
        ],
        "inputs": [
          "Industry sources dan announcements",
          "Trend brief dengan sumber dan impact rating",
          "Freshness",
          "verified-source ratio"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "industry_trend_intelligence_worker_workflow",
        "name": "Industry Trend Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Industry Trend Intelligence."
        ],
        "inputs": [
          "Trend brief dengan sumber dan impact rating",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "industry_trend_intelligence_worker_qa",
        "name": "Industry Trend Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Industry Trend Intelligence."
        ],
        "inputs": [
          "Trend brief dengan sumber dan impact rating",
          "Freshness",
          "verified-source ratio"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "campaign_performance_intelligence_worker_intake",
        "name": "Campaign Performance Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Campaign Performance Intelligence."
        ],
        "inputs": [
          "Campaign metrics dan CRM outcomes",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "campaign_performance_intelligence_worker_analysis",
        "name": "Campaign Performance Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Campaign Performance Intelligence."
        ],
        "inputs": [
          "Campaign metrics dan CRM outcomes",
          "Campaign performance analysis dan tests to consider",
          "Attribution coverage",
          "CAC data quality"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "campaign_performance_intelligence_worker_workflow",
        "name": "Campaign Performance Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Campaign Performance Intelligence."
        ],
        "inputs": [
          "Campaign performance analysis dan tests to consider",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "campaign_performance_intelligence_worker_qa",
        "name": "Campaign Performance Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Campaign Performance Intelligence."
        ],
        "inputs": [
          "Campaign performance analysis dan tests to consider",
          "Attribution coverage",
          "CAC data quality"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "brand_reputation_intelligence_worker_intake",
        "name": "Brand Reputation Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Brand Reputation Intelligence."
        ],
        "inputs": [
          "Public reviews and permitted brand mentions",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "brand_reputation_intelligence_worker_analysis",
        "name": "Brand Reputation Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Brand Reputation Intelligence."
        ],
        "inputs": [
          "Public reviews and permitted brand mentions",
          "Reputation digest dan response recommendations",
          "Mention coverage",
          "classification precision"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "brand_reputation_intelligence_worker_workflow",
        "name": "Brand Reputation Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Brand Reputation Intelligence."
        ],
        "inputs": [
          "Reputation digest dan response recommendations",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "brand_reputation_intelligence_worker_qa",
        "name": "Brand Reputation Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Brand Reputation Intelligence."
        ],
        "inputs": [
          "Reputation digest dan response recommendations",
          "Mention coverage",
          "classification precision"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "client_onboarding_operations_worker_intake",
        "name": "Client Onboarding Operations — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Onboarding Operations."
        ],
        "inputs": [
          "Approved contract and onboarding answers",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "client_onboarding_operations_worker_analysis",
        "name": "Client Onboarding Operations — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Onboarding Operations."
        ],
        "inputs": [
          "Approved contract and onboarding answers",
          "Onboarding readiness and missing-item list",
          "Time to onboard",
          "checklist completion"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "client_onboarding_operations_worker_workflow",
        "name": "Client Onboarding Operations — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Onboarding Operations."
        ],
        "inputs": [
          "Onboarding readiness and missing-item list",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "client_onboarding_operations_worker_qa",
        "name": "Client Onboarding Operations — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Onboarding Operations."
        ],
        "inputs": [
          "Onboarding readiness and missing-item list",
          "Time to onboard",
          "checklist completion"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "customer_support_triage_worker_intake",
        "name": "Customer Support Triage — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Support Triage."
        ],
        "inputs": [
          "Support inbox/tickets and client SLAs",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "customer_support_triage_worker_analysis",
        "name": "Customer Support Triage — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Support Triage."
        ],
        "inputs": [
          "Support inbox/tickets and client SLAs",
          "Ticket classification and routing recommendation",
          "Routing accuracy",
          "first response time"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "customer_support_triage_worker_workflow",
        "name": "Customer Support Triage — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Support Triage."
        ],
        "inputs": [
          "Ticket classification and routing recommendation",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "customer_support_triage_worker_qa",
        "name": "Customer Support Triage — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Support Triage."
        ],
        "inputs": [
          "Ticket classification and routing recommendation",
          "Routing accuracy",
          "first response time"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "sla_escalation_management_worker_intake",
        "name": "SLA & Escalation Management — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SLA & Escalation Management."
        ],
        "inputs": [
          "Task tracker and agreed SLA definitions",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sla_escalation_management_worker_analysis",
        "name": "SLA & Escalation Management — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SLA & Escalation Management."
        ],
        "inputs": [
          "Task tracker and agreed SLA definitions",
          "SLA risk queue and escalation events",
          "SLA attainment",
          "escalation lead time"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sla_escalation_management_worker_workflow",
        "name": "SLA & Escalation Management — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SLA & Escalation Management."
        ],
        "inputs": [
          "SLA risk queue and escalation events",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sla_escalation_management_worker_qa",
        "name": "SLA & Escalation Management — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SLA & Escalation Management."
        ],
        "inputs": [
          "SLA risk queue and escalation events",
          "SLA attainment",
          "escalation lead time"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "retention_churn_intelligence_worker_intake",
        "name": "Retention & Churn Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Retention & Churn Intelligence."
        ],
        "inputs": [
          "Client health history and feedback",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "retention_churn_intelligence_worker_analysis",
        "name": "Retention & Churn Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Retention & Churn Intelligence."
        ],
        "inputs": [
          "Client health history and feedback",
          "Churn risk score with evidence",
          "Risk precision",
          "save rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "retention_churn_intelligence_worker_workflow",
        "name": "Retention & Churn Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Retention & Churn Intelligence."
        ],
        "inputs": [
          "Churn risk score with evidence",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "retention_churn_intelligence_worker_qa",
        "name": "Retention & Churn Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Retention & Churn Intelligence."
        ],
        "inputs": [
          "Churn risk score with evidence",
          "Risk precision",
          "save rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "renewals_expansion_worker_intake",
        "name": "Renewals & Expansion — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Renewals & Expansion."
        ],
        "inputs": [
          "Contracts, delivery outcomes, client health",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "renewals_expansion_worker_analysis",
        "name": "Renewals & Expansion — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Renewals & Expansion."
        ],
        "inputs": [
          "Contracts, delivery outcomes, client health",
          "Renewal timeline and expansion opportunity list",
          "Renewal rate",
          "expansion-qualified rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "renewals_expansion_worker_workflow",
        "name": "Renewals & Expansion — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Renewals & Expansion."
        ],
        "inputs": [
          "Renewal timeline and expansion opportunity list",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "renewals_expansion_worker_qa",
        "name": "Renewals & Expansion — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Renewals & Expansion."
        ],
        "inputs": [
          "Renewal timeline and expansion opportunity list",
          "Renewal rate",
          "expansion-qualified rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "account_health_intelligence_worker_intake",
        "name": "Account Health Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account Health Intelligence."
        ],
        "inputs": [
          "CRM, project milestones and support tickets",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "account_health_intelligence_worker_analysis",
        "name": "Account Health Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account Health Intelligence."
        ],
        "inputs": [
          "CRM, project milestones and support tickets",
          "Account health summary with drivers",
          "Health-data completeness",
          "risk detection"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "account_health_intelligence_worker_workflow",
        "name": "Account Health Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account Health Intelligence."
        ],
        "inputs": [
          "Account health summary with drivers",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "account_health_intelligence_worker_qa",
        "name": "Account Health Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account Health Intelligence."
        ],
        "inputs": [
          "Account health summary with drivers",
          "Health-data completeness",
          "risk detection"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "client_feedback_loop_worker_intake",
        "name": "Client Feedback Loop — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Feedback Loop."
        ],
        "inputs": [
          "Approved client feedback and project tasks",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "client_feedback_loop_worker_analysis",
        "name": "Client Feedback Loop — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Feedback Loop."
        ],
        "inputs": [
          "Approved client feedback and project tasks",
          "Feedback action register",
          "Closure rate",
          "repeat-issue rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "client_feedback_loop_worker_workflow",
        "name": "Client Feedback Loop — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Feedback Loop."
        ],
        "inputs": [
          "Feedback action register",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "client_feedback_loop_worker_qa",
        "name": "Client Feedback Loop — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Client Feedback Loop."
        ],
        "inputs": [
          "Feedback action register",
          "Closure rate",
          "repeat-issue rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "service_scope_catalog_worker_intake",
        "name": "Service Scope & Catalog — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Service Scope & Catalog."
        ],
        "inputs": [
          "Owner-approved service catalog",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "service_scope_catalog_worker_analysis",
        "name": "Service Scope & Catalog — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Service Scope & Catalog."
        ],
        "inputs": [
          "Owner-approved service catalog",
          "Versioned service definitions and scope matrix",
          "Scope clarity",
          "change-request frequency"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "service_scope_catalog_worker_workflow",
        "name": "Service Scope & Catalog — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Service Scope & Catalog."
        ],
        "inputs": [
          "Versioned service definitions and scope matrix",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "service_scope_catalog_worker_qa",
        "name": "Service Scope & Catalog — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Service Scope & Catalog."
        ],
        "inputs": [
          "Versioned service definitions and scope matrix",
          "Scope clarity",
          "change-request frequency"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "workflow_orchestration_worker_intake",
        "name": "Workflow Orchestration — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Workflow Orchestration."
        ],
        "inputs": [
          "Workflow definitions and runtime events",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "workflow_orchestration_worker_analysis",
        "name": "Workflow Orchestration — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Workflow Orchestration."
        ],
        "inputs": [
          "Workflow definitions and runtime events",
          "Workflow graphs and safe execution plans",
          "Successful run rate",
          "duplicate execution rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "workflow_orchestration_worker_workflow",
        "name": "Workflow Orchestration — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Workflow Orchestration."
        ],
        "inputs": [
          "Workflow graphs and safe execution plans",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "workflow_orchestration_worker_qa",
        "name": "Workflow Orchestration — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Workflow Orchestration."
        ],
        "inputs": [
          "Workflow graphs and safe execution plans",
          "Successful run rate",
          "duplicate execution rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "api_integration_engineering_worker_intake",
        "name": "API Integration Engineering — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to API Integration Engineering."
        ],
        "inputs": [
          "API specifications and approved credentials",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "api_integration_engineering_worker_analysis",
        "name": "API Integration Engineering — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to API Integration Engineering."
        ],
        "inputs": [
          "API specifications and approved credentials",
          "Versioned API adapters and contract tests",
          "Contract pass rate",
          "integration error rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "api_integration_engineering_worker_workflow",
        "name": "API Integration Engineering — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to API Integration Engineering."
        ],
        "inputs": [
          "Versioned API adapters and contract tests",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "api_integration_engineering_worker_qa",
        "name": "API Integration Engineering — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to API Integration Engineering."
        ],
        "inputs": [
          "Versioned API adapters and contract tests",
          "Contract pass rate",
          "integration error rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "webhook_event_routing_worker_intake",
        "name": "Webhook Event Routing — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Webhook Event Routing."
        ],
        "inputs": [
          "Webhook provider events and secret bindings",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "webhook_event_routing_worker_analysis",
        "name": "Webhook Event Routing — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Webhook Event Routing."
        ],
        "inputs": [
          "Webhook provider events and secret bindings",
          "Validated event routes and delivery log",
          "Signature validation",
          "retry success"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "webhook_event_routing_worker_workflow",
        "name": "Webhook Event Routing — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Webhook Event Routing."
        ],
        "inputs": [
          "Validated event routes and delivery log",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "webhook_event_routing_worker_qa",
        "name": "Webhook Event Routing — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Webhook Event Routing."
        ],
        "inputs": [
          "Validated event routes and delivery log",
          "Signature validation",
          "retry success"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "scheduler_cron_operations_worker_intake",
        "name": "Scheduler & Cron Operations — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Scheduler & Cron Operations."
        ],
        "inputs": [
          "Cloudflare Cron and job inventory",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "scheduler_cron_operations_worker_analysis",
        "name": "Scheduler & Cron Operations — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Scheduler & Cron Operations."
        ],
        "inputs": [
          "Cloudflare Cron and job inventory",
          "Schedule registry and missed-run report",
          "On-time run rate",
          "overlap prevention"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "scheduler_cron_operations_worker_workflow",
        "name": "Scheduler & Cron Operations — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Scheduler & Cron Operations."
        ],
        "inputs": [
          "Schedule registry and missed-run report",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "scheduler_cron_operations_worker_qa",
        "name": "Scheduler & Cron Operations — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Scheduler & Cron Operations."
        ],
        "inputs": [
          "Schedule registry and missed-run report",
          "On-time run rate",
          "overlap prevention"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "secrets_access_management_worker_intake",
        "name": "Secrets & Access Management — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Secrets & Access Management."
        ],
        "inputs": [
          "Secret metadata and permission inventory",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "secrets_access_management_worker_analysis",
        "name": "Secrets & Access Management — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Secrets & Access Management."
        ],
        "inputs": [
          "Secret metadata and permission inventory",
          "Access matrix and rotation checklist",
          "Overprivileged access count",
          "rotation compliance"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "secrets_access_management_worker_workflow",
        "name": "Secrets & Access Management — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Secrets & Access Management."
        ],
        "inputs": [
          "Access matrix and rotation checklist",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "secrets_access_management_worker_qa",
        "name": "Secrets & Access Management — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Secrets & Access Management."
        ],
        "inputs": [
          "Access matrix and rotation checklist",
          "Overprivileged access count",
          "rotation compliance"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "cloudflare_release_engineering_worker_intake",
        "name": "Cloudflare Release Engineering — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cloudflare Release Engineering."
        ],
        "inputs": [
          "Git commit, Wrangler configuration and test evidence",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "cloudflare_release_engineering_worker_analysis",
        "name": "Cloudflare Release Engineering — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cloudflare Release Engineering."
        ],
        "inputs": [
          "Git commit, Wrangler configuration and test evidence",
          "Release plan, deployment result and rollback notes",
          "Deploy success",
          "rollback readiness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "cloudflare_release_engineering_worker_workflow",
        "name": "Cloudflare Release Engineering — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cloudflare Release Engineering."
        ],
        "inputs": [
          "Release plan, deployment result and rollback notes",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "cloudflare_release_engineering_worker_qa",
        "name": "Cloudflare Release Engineering — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cloudflare Release Engineering."
        ],
        "inputs": [
          "Release plan, deployment result and rollback notes",
          "Deploy success",
          "rollback readiness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "database_schema_migration_worker_intake",
        "name": "Database Schema & Migration — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Database Schema & Migration."
        ],
        "inputs": [
          "SQL migrations and schema inventory",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "database_schema_migration_worker_analysis",
        "name": "Database Schema & Migration — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Database Schema & Migration."
        ],
        "inputs": [
          "SQL migrations and schema inventory",
          "Migration plan and schema validation report",
          "Migration pass rate",
          "schema drift"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "database_schema_migration_worker_workflow",
        "name": "Database Schema & Migration — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Database Schema & Migration."
        ],
        "inputs": [
          "Migration plan and schema validation report",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "database_schema_migration_worker_qa",
        "name": "Database Schema & Migration — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Database Schema & Migration."
        ],
        "inputs": [
          "Migration plan and schema validation report",
          "Migration pass rate",
          "schema drift"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "backup_recovery_operations_worker_intake",
        "name": "Backup & Recovery Operations — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Backup & Recovery Operations."
        ],
        "inputs": [
          "Database/export policies and system configuration",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "backup_recovery_operations_worker_analysis",
        "name": "Backup & Recovery Operations — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Backup & Recovery Operations."
        ],
        "inputs": [
          "Database/export policies and system configuration",
          "Backup status and recovery drill report",
          "Backup freshness",
          "recovery objective performance"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "backup_recovery_operations_worker_workflow",
        "name": "Backup & Recovery Operations — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Backup & Recovery Operations."
        ],
        "inputs": [
          "Backup status and recovery drill report",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "backup_recovery_operations_worker_qa",
        "name": "Backup & Recovery Operations — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Backup & Recovery Operations."
        ],
        "inputs": [
          "Backup status and recovery drill report",
          "Backup freshness",
          "recovery objective performance"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "automation_cost_optimization_worker_intake",
        "name": "Automation Cost Optimization — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Automation Cost Optimization."
        ],
        "inputs": [
          "Cloudflare usage, provider billing and workflow logs",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "automation_cost_optimization_worker_analysis",
        "name": "Automation Cost Optimization — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Automation Cost Optimization."
        ],
        "inputs": [
          "Cloudflare usage, provider billing and workflow logs",
          "Cost-saving recommendations and budget alerts",
          "Cost per successful task",
          "waste reduction"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "automation_cost_optimization_worker_workflow",
        "name": "Automation Cost Optimization — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Automation Cost Optimization."
        ],
        "inputs": [
          "Cost-saving recommendations and budget alerts",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "automation_cost_optimization_worker_qa",
        "name": "Automation Cost Optimization — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Automation Cost Optimization."
        ],
        "inputs": [
          "Cost-saving recommendations and budget alerts",
          "Cost per successful task",
          "waste reduction"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "ai_model_routing_worker_intake",
        "name": "AI Model Routing — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to AI Model Routing."
        ],
        "inputs": [
          "Model availability/pricing and approved eval results",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "ai_model_routing_worker_analysis",
        "name": "AI Model Routing — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to AI Model Routing."
        ],
        "inputs": [
          "Model availability/pricing and approved eval results",
          "Routing policy and fallback map",
          "Quality at budget",
          "latency"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "ai_model_routing_worker_workflow",
        "name": "AI Model Routing — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to AI Model Routing."
        ],
        "inputs": [
          "Routing policy and fallback map",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "ai_model_routing_worker_qa",
        "name": "AI Model Routing — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to AI Model Routing."
        ],
        "inputs": [
          "Routing policy and fallback map",
          "Quality at budget",
          "latency"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "agent_prompt_evaluation_worker_intake",
        "name": "Agent & Prompt Evaluation — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Agent & Prompt Evaluation."
        ],
        "inputs": [
          "Approved test datasets and prompt versions",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "agent_prompt_evaluation_worker_analysis",
        "name": "Agent & Prompt Evaluation — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Agent & Prompt Evaluation."
        ],
        "inputs": [
          "Approved test datasets and prompt versions",
          "Evaluation scorecards and regression report",
          "Eval pass rate",
          "regression detection"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "agent_prompt_evaluation_worker_workflow",
        "name": "Agent & Prompt Evaluation — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Agent & Prompt Evaluation."
        ],
        "inputs": [
          "Evaluation scorecards and regression report",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "agent_prompt_evaluation_worker_qa",
        "name": "Agent & Prompt Evaluation — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Agent & Prompt Evaluation."
        ],
        "inputs": [
          "Evaluation scorecards and regression report",
          "Eval pass rate",
          "regression detection"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "ai_guardrails_policy_worker_intake",
        "name": "AI Guardrails & Policy — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to AI Guardrails & Policy."
        ],
        "inputs": [
          "Division policies and tool inventory",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "ai_guardrails_policy_worker_analysis",
        "name": "AI Guardrails & Policy — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to AI Guardrails & Policy."
        ],
        "inputs": [
          "Division policies and tool inventory",
          "Policy checks and exception queue",
          "Policy violation rate",
          "blocked-risk coverage"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "ai_guardrails_policy_worker_workflow",
        "name": "AI Guardrails & Policy — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to AI Guardrails & Policy."
        ],
        "inputs": [
          "Policy checks and exception queue",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "ai_guardrails_policy_worker_qa",
        "name": "AI Guardrails & Policy — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to AI Guardrails & Policy."
        ],
        "inputs": [
          "Policy checks and exception queue",
          "Policy violation rate",
          "blocked-risk coverage"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "runtime_performance_engineering_worker_intake",
        "name": "Runtime Performance Engineering — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Runtime Performance Engineering."
        ],
        "inputs": [
          "Worker observability and benchmark results",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "runtime_performance_engineering_worker_analysis",
        "name": "Runtime Performance Engineering — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Runtime Performance Engineering."
        ],
        "inputs": [
          "Worker observability and benchmark results",
          "Performance profile and optimization backlog",
          "p95 latency",
          "timeout rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "runtime_performance_engineering_worker_workflow",
        "name": "Runtime Performance Engineering — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Runtime Performance Engineering."
        ],
        "inputs": [
          "Performance profile and optimization backlog",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "runtime_performance_engineering_worker_qa",
        "name": "Runtime Performance Engineering — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Runtime Performance Engineering."
        ],
        "inputs": [
          "Performance profile and optimization backlog",
          "p95 latency",
          "timeout rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "regression_testing_worker_intake",
        "name": "Regression Testing — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Regression Testing."
        ],
        "inputs": [
          "Test suite and release diff",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "regression_testing_worker_analysis",
        "name": "Regression Testing — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Regression Testing."
        ],
        "inputs": [
          "Test suite and release diff",
          "Regression test results and blockers",
          "Regression escape rate",
          "test pass rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "regression_testing_worker_workflow",
        "name": "Regression Testing — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Regression Testing."
        ],
        "inputs": [
          "Regression test results and blockers",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "regression_testing_worker_qa",
        "name": "Regression Testing — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Regression Testing."
        ],
        "inputs": [
          "Regression test results and blockers",
          "Regression escape rate",
          "test pass rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "end_to_end_testing_worker_intake",
        "name": "End-to-End Testing — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to End-to-End Testing."
        ],
        "inputs": [
          "Test environments and end-to-end scenarios",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "end_to_end_testing_worker_analysis",
        "name": "End-to-End Testing — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to End-to-End Testing."
        ],
        "inputs": [
          "Test environments and end-to-end scenarios",
          "End-to-end test evidence and defects",
          "End-to-end pass rate",
          "time to detect"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "end_to_end_testing_worker_workflow",
        "name": "End-to-End Testing — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to End-to-End Testing."
        ],
        "inputs": [
          "End-to-end test evidence and defects",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "end_to_end_testing_worker_qa",
        "name": "End-to-End Testing — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to End-to-End Testing."
        ],
        "inputs": [
          "End-to-end test evidence and defects",
          "End-to-end pass rate",
          "time to detect"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "data_quality_assurance_worker_intake",
        "name": "Data Quality Assurance — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Quality Assurance."
        ],
        "inputs": [
          "Operational records and data rules",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "data_quality_assurance_worker_analysis",
        "name": "Data Quality Assurance — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Quality Assurance."
        ],
        "inputs": [
          "Operational records and data rules",
          "Data quality score and exception report",
          "Completeness",
          "validity"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "data_quality_assurance_worker_workflow",
        "name": "Data Quality Assurance — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Quality Assurance."
        ],
        "inputs": [
          "Data quality score and exception report",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "data_quality_assurance_worker_qa",
        "name": "Data Quality Assurance — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Quality Assurance."
        ],
        "inputs": [
          "Data quality score and exception report",
          "Completeness",
          "validity"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "integration_contract_testing_worker_intake",
        "name": "Integration Contract Testing — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Integration Contract Testing."
        ],
        "inputs": [
          "API/schema contracts and mock responses",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "integration_contract_testing_worker_analysis",
        "name": "Integration Contract Testing — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Integration Contract Testing."
        ],
        "inputs": [
          "API/schema contracts and mock responses",
          "Contract test reports and drift alerts",
          "Contract conformance",
          "breaking changes detected"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "integration_contract_testing_worker_workflow",
        "name": "Integration Contract Testing — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Integration Contract Testing."
        ],
        "inputs": [
          "Contract test reports and drift alerts",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "integration_contract_testing_worker_qa",
        "name": "Integration Contract Testing — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Integration Contract Testing."
        ],
        "inputs": [
          "Contract test reports and drift alerts",
          "Contract conformance",
          "breaking changes detected"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "observability_log_intelligence_worker_intake",
        "name": "Observability & Log Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Observability & Log Intelligence."
        ],
        "inputs": [
          "Worker logs and task execution metadata",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "observability_log_intelligence_worker_analysis",
        "name": "Observability & Log Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Observability & Log Intelligence."
        ],
        "inputs": [
          "Worker logs and task execution metadata",
          "Searchable event summaries and diagnostic trails",
          "Diagnostic coverage",
          "secret-redaction pass rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "observability_log_intelligence_worker_workflow",
        "name": "Observability & Log Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Observability & Log Intelligence."
        ],
        "inputs": [
          "Searchable event summaries and diagnostic trails",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "observability_log_intelligence_worker_qa",
        "name": "Observability & Log Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Observability & Log Intelligence."
        ],
        "inputs": [
          "Searchable event summaries and diagnostic trails",
          "Diagnostic coverage",
          "secret-redaction pass rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "incident_command_worker_intake",
        "name": "Incident Command — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Incident Command."
        ],
        "inputs": [
          "Alerts, monitoring results and incident runbooks",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "incident_command_worker_analysis",
        "name": "Incident Command — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Incident Command."
        ],
        "inputs": [
          "Alerts, monitoring results and incident runbooks",
          "Incident timeline and action register",
          "Time to acknowledge",
          "MTTR"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "incident_command_worker_workflow",
        "name": "Incident Command — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Incident Command."
        ],
        "inputs": [
          "Incident timeline and action register",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "incident_command_worker_qa",
        "name": "Incident Command — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Incident Command."
        ],
        "inputs": [
          "Incident timeline and action register",
          "Time to acknowledge",
          "MTTR"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "site_reliability_engineering_worker_intake",
        "name": "Site Reliability Engineering — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Site Reliability Engineering."
        ],
        "inputs": [
          "Service endpoints, metrics and incident history",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "site_reliability_engineering_worker_analysis",
        "name": "Site Reliability Engineering — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Site Reliability Engineering."
        ],
        "inputs": [
          "Service endpoints, metrics and incident history",
          "SLO dashboard and reliability backlog",
          "Availability",
          "error-budget burn"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "site_reliability_engineering_worker_workflow",
        "name": "Site Reliability Engineering — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Site Reliability Engineering."
        ],
        "inputs": [
          "SLO dashboard and reliability backlog",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "site_reliability_engineering_worker_qa",
        "name": "Site Reliability Engineering — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Site Reliability Engineering."
        ],
        "inputs": [
          "SLO dashboard and reliability backlog",
          "Availability",
          "error-budget burn"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "security_posture_monitoring_worker_intake",
        "name": "Security Posture Monitoring — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Security Posture Monitoring."
        ],
        "inputs": [
          "Approved security scan outputs and config snapshots",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "security_posture_monitoring_worker_analysis",
        "name": "Security Posture Monitoring — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Security Posture Monitoring."
        ],
        "inputs": [
          "Approved security scan outputs and config snapshots",
          "Security findings ranked by severity",
          "Critical finding age",
          "remediation rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "security_posture_monitoring_worker_workflow",
        "name": "Security Posture Monitoring — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Security Posture Monitoring."
        ],
        "inputs": [
          "Security findings ranked by severity",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "security_posture_monitoring_worker_qa",
        "name": "Security Posture Monitoring — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Security Posture Monitoring."
        ],
        "inputs": [
          "Security findings ranked by severity",
          "Critical finding age",
          "remediation rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "privacy_consent_operations_worker_intake",
        "name": "Privacy & Consent Operations — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Privacy & Consent Operations."
        ],
        "inputs": [
          "Privacy notice, consent preferences and data inventory",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "privacy_consent_operations_worker_analysis",
        "name": "Privacy & Consent Operations — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Privacy & Consent Operations."
        ],
        "inputs": [
          "Privacy notice, consent preferences and data inventory",
          "Privacy control register and exception queue",
          "Consent coverage",
          "request SLA"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "privacy_consent_operations_worker_workflow",
        "name": "Privacy & Consent Operations — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Privacy & Consent Operations."
        ],
        "inputs": [
          "Privacy control register and exception queue",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "privacy_consent_operations_worker_qa",
        "name": "Privacy & Consent Operations — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Privacy & Consent Operations."
        ],
        "inputs": [
          "Privacy control register and exception queue",
          "Consent coverage",
          "request SLA"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "access_audit_identity_worker_intake",
        "name": "Access Audit & Identity — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Access Audit & Identity."
        ],
        "inputs": [
          "Identity roles, audit events and connector scopes",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "access_audit_identity_worker_analysis",
        "name": "Access Audit & Identity — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Access Audit & Identity."
        ],
        "inputs": [
          "Identity roles, audit events and connector scopes",
          "Access review report and least-privilege changes proposed",
          "Review completion",
          "stale access findings"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "access_audit_identity_worker_workflow",
        "name": "Access Audit & Identity — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Access Audit & Identity."
        ],
        "inputs": [
          "Access review report and least-privilege changes proposed",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "access_audit_identity_worker_qa",
        "name": "Access Audit & Identity — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Access Audit & Identity."
        ],
        "inputs": [
          "Access review report and least-privilege changes proposed",
          "Review completion",
          "stale access findings"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "data_governance_lineage_worker_intake",
        "name": "Data Governance & Lineage — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Governance & Lineage."
        ],
        "inputs": [
          "Data schemas, process owners and source maps",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "data_governance_lineage_worker_analysis",
        "name": "Data Governance & Lineage — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Governance & Lineage."
        ],
        "inputs": [
          "Data schemas, process owners and source maps",
          "Data dictionary and lineage map",
          "Field ownership coverage",
          "lineage completeness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "data_governance_lineage_worker_workflow",
        "name": "Data Governance & Lineage — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Governance & Lineage."
        ],
        "inputs": [
          "Data dictionary and lineage map",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "data_governance_lineage_worker_qa",
        "name": "Data Governance & Lineage — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Governance & Lineage."
        ],
        "inputs": [
          "Data dictionary and lineage map",
          "Field ownership coverage",
          "lineage completeness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "data_pipeline_engineering_worker_intake",
        "name": "Data Pipeline Engineering — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Pipeline Engineering."
        ],
        "inputs": [
          "Source APIs, schemas and sync schedules",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "data_pipeline_engineering_worker_analysis",
        "name": "Data Pipeline Engineering — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Pipeline Engineering."
        ],
        "inputs": [
          "Source APIs, schemas and sync schedules",
          "Versioned sync jobs and reconciliation results",
          "Pipeline success",
          "lag"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "data_pipeline_engineering_worker_workflow",
        "name": "Data Pipeline Engineering — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Pipeline Engineering."
        ],
        "inputs": [
          "Versioned sync jobs and reconciliation results",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "data_pipeline_engineering_worker_qa",
        "name": "Data Pipeline Engineering — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Data Pipeline Engineering."
        ],
        "inputs": [
          "Versioned sync jobs and reconciliation results",
          "Pipeline success",
          "lag"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "business_intelligence_reporting_worker_intake",
        "name": "Business Intelligence & Reporting — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Intelligence & Reporting."
        ],
        "inputs": [
          "CRM, delivery, finance and website analytics",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "business_intelligence_reporting_worker_analysis",
        "name": "Business Intelligence & Reporting — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Intelligence & Reporting."
        ],
        "inputs": [
          "CRM, delivery, finance and website analytics",
          "Trusted KPI tables and decision reports",
          "Metric reconciliation",
          "report freshness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "business_intelligence_reporting_worker_workflow",
        "name": "Business Intelligence & Reporting — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Intelligence & Reporting."
        ],
        "inputs": [
          "Trusted KPI tables and decision reports",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "business_intelligence_reporting_worker_qa",
        "name": "Business Intelligence & Reporting — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Intelligence & Reporting."
        ],
        "inputs": [
          "Trusted KPI tables and decision reports",
          "Metric reconciliation",
          "report freshness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "experimentation_measurement_worker_intake",
        "name": "Experimentation & Measurement — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Experimentation & Measurement."
        ],
        "inputs": [
          "Approved experiments and measured outcomes",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "experimentation_measurement_worker_analysis",
        "name": "Experimentation & Measurement — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Experimentation & Measurement."
        ],
        "inputs": [
          "Approved experiments and measured outcomes",
          "Experiment plan and evidence-based result",
          "Measurement completeness",
          "decision usefulness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "experimentation_measurement_worker_workflow",
        "name": "Experimentation & Measurement — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Experimentation & Measurement."
        ],
        "inputs": [
          "Experiment plan and evidence-based result",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "experimentation_measurement_worker_qa",
        "name": "Experimentation & Measurement — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Experimentation & Measurement."
        ],
        "inputs": [
          "Experiment plan and evidence-based result",
          "Measurement completeness",
          "decision usefulness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "billing_invoicing_operations_worker_intake",
        "name": "Billing & Invoicing Operations — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Billing & Invoicing Operations."
        ],
        "inputs": [
          "Approved contract, delivery milestones and invoice records",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "billing_invoicing_operations_worker_analysis",
        "name": "Billing & Invoicing Operations — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Billing & Invoicing Operations."
        ],
        "inputs": [
          "Approved contract, delivery milestones and invoice records",
          "Invoice readiness checklist and due-date queue",
          "On-time invoice readiness",
          "billing completeness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "billing_invoicing_operations_worker_workflow",
        "name": "Billing & Invoicing Operations — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Billing & Invoicing Operations."
        ],
        "inputs": [
          "Invoice readiness checklist and due-date queue",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "billing_invoicing_operations_worker_qa",
        "name": "Billing & Invoicing Operations — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Billing & Invoicing Operations."
        ],
        "inputs": [
          "Invoice readiness checklist and due-date queue",
          "On-time invoice readiness",
          "billing completeness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "accounts_receivable_tracking_worker_intake",
        "name": "Accounts Receivable Tracking — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Accounts Receivable Tracking."
        ],
        "inputs": [
          "Invoice and confirmed payment records",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "accounts_receivable_tracking_worker_analysis",
        "name": "Accounts Receivable Tracking — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Accounts Receivable Tracking."
        ],
        "inputs": [
          "Invoice and confirmed payment records",
          "Receivables aging and collection reminders for review",
          "Days sales outstanding",
          "overdue balance"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "accounts_receivable_tracking_worker_workflow",
        "name": "Accounts Receivable Tracking — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Accounts Receivable Tracking."
        ],
        "inputs": [
          "Receivables aging and collection reminders for review",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "accounts_receivable_tracking_worker_qa",
        "name": "Accounts Receivable Tracking — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Accounts Receivable Tracking."
        ],
        "inputs": [
          "Receivables aging and collection reminders for review",
          "Days sales outstanding",
          "overdue balance"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "expense_subscription_tracking_worker_intake",
        "name": "Expense & Subscription Tracking — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Expense & Subscription Tracking."
        ],
        "inputs": [
          "Provider billing and approved expense records",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "expense_subscription_tracking_worker_analysis",
        "name": "Expense & Subscription Tracking — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Expense & Subscription Tracking."
        ],
        "inputs": [
          "Provider billing and approved expense records",
          "Expense register and renewal calendar",
          "Cost completeness",
          "unused subscription spend"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "expense_subscription_tracking_worker_workflow",
        "name": "Expense & Subscription Tracking — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Expense & Subscription Tracking."
        ],
        "inputs": [
          "Expense register and renewal calendar",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "expense_subscription_tracking_worker_qa",
        "name": "Expense & Subscription Tracking — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Expense & Subscription Tracking."
        ],
        "inputs": [
          "Expense register and renewal calendar",
          "Cost completeness",
          "unused subscription spend"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "budget_guard_spend_approvals_worker_intake",
        "name": "Budget Guard & Spend Approvals — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Budget Guard & Spend Approvals."
        ],
        "inputs": [
          "Budget limits, billing telemetry and owner decisions",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "budget_guard_spend_approvals_worker_analysis",
        "name": "Budget Guard & Spend Approvals — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Budget Guard & Spend Approvals."
        ],
        "inputs": [
          "Budget limits, billing telemetry and owner decisions",
          "Budget variance alerts and approval requests",
          "Budget overrun prevention",
          "forecast variance"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "budget_guard_spend_approvals_worker_workflow",
        "name": "Budget Guard & Spend Approvals — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Budget Guard & Spend Approvals."
        ],
        "inputs": [
          "Budget variance alerts and approval requests",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "budget_guard_spend_approvals_worker_qa",
        "name": "Budget Guard & Spend Approvals — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Budget Guard & Spend Approvals."
        ],
        "inputs": [
          "Budget variance alerts and approval requests",
          "Budget overrun prevention",
          "forecast variance"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "project_profitability_intelligence_worker_intake",
        "name": "Project Profitability Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Project Profitability Intelligence."
        ],
        "inputs": [
          "Project billing, delivery logs and expense data",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "project_profitability_intelligence_worker_analysis",
        "name": "Project Profitability Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Project Profitability Intelligence."
        ],
        "inputs": [
          "Project billing, delivery logs and expense data",
          "Project margin report and margin-risk alert",
          "Gross margin accuracy",
          "unallocated costs"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "project_profitability_intelligence_worker_workflow",
        "name": "Project Profitability Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Project Profitability Intelligence."
        ],
        "inputs": [
          "Project margin report and margin-risk alert",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "project_profitability_intelligence_worker_qa",
        "name": "Project Profitability Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Project Profitability Intelligence."
        ],
        "inputs": [
          "Project margin report and margin-risk alert",
          "Gross margin accuracy",
          "unallocated costs"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "cash_flow_forecasting_worker_intake",
        "name": "Cash Flow Forecasting — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cash Flow Forecasting."
        ],
        "inputs": [
          "Receivables, payables and confirmed cash transactions",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "cash_flow_forecasting_worker_analysis",
        "name": "Cash Flow Forecasting — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cash Flow Forecasting."
        ],
        "inputs": [
          "Receivables, payables and confirmed cash transactions",
          "Cashflow projection and liquidity warnings",
          "Forecast variance",
          "data completeness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "cash_flow_forecasting_worker_workflow",
        "name": "Cash Flow Forecasting — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cash Flow Forecasting."
        ],
        "inputs": [
          "Cashflow projection and liquidity warnings",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "cash_flow_forecasting_worker_qa",
        "name": "Cash Flow Forecasting — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cash Flow Forecasting."
        ],
        "inputs": [
          "Cashflow projection and liquidity warnings",
          "Forecast variance",
          "data completeness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "procurement_vendor_spend_worker_intake",
        "name": "Procurement & Vendor Spend — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Procurement & Vendor Spend."
        ],
        "inputs": [
          "Approved needs, vendor quotes and spend policy",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "procurement_vendor_spend_worker_analysis",
        "name": "Procurement & Vendor Spend — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Procurement & Vendor Spend."
        ],
        "inputs": [
          "Approved needs, vendor quotes and spend policy",
          "Vendor comparison and procurement request",
          "Savings vs comparable quote",
          "approval completeness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "procurement_vendor_spend_worker_workflow",
        "name": "Procurement & Vendor Spend — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Procurement & Vendor Spend."
        ],
        "inputs": [
          "Vendor comparison and procurement request",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "procurement_vendor_spend_worker_qa",
        "name": "Procurement & Vendor Spend — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Procurement & Vendor Spend."
        ],
        "inputs": [
          "Vendor comparison and procurement request",
          "Savings vs comparable quote",
          "approval completeness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "contract_operations_worker_intake",
        "name": "Contract Operations — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Contract Operations."
        ],
        "inputs": [
          "Owner-approved contracts and document repository",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "contract_operations_worker_analysis",
        "name": "Contract Operations — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Contract Operations."
        ],
        "inputs": [
          "Owner-approved contracts and document repository",
          "Contract register and obligation calendar",
          "Obligation tracking coverage",
          "renewal alert lead time"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "contract_operations_worker_workflow",
        "name": "Contract Operations — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Contract Operations."
        ],
        "inputs": [
          "Contract register and obligation calendar",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "contract_operations_worker_qa",
        "name": "Contract Operations — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Contract Operations."
        ],
        "inputs": [
          "Contract register and obligation calendar",
          "Obligation tracking coverage",
          "renewal alert lead time"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "business_risk_compliance_worker_intake",
        "name": "Business Risk & Compliance — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Risk & Compliance."
        ],
        "inputs": [
          "Policies, incident records and risk register",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "business_risk_compliance_worker_analysis",
        "name": "Business Risk & Compliance — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Risk & Compliance."
        ],
        "inputs": [
          "Policies, incident records and risk register",
          "Risk register and mitigation status",
          "High-risk open age",
          "control evidence coverage"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "business_risk_compliance_worker_workflow",
        "name": "Business Risk & Compliance — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Risk & Compliance."
        ],
        "inputs": [
          "Risk register and mitigation status",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "business_risk_compliance_worker_qa",
        "name": "Business Risk & Compliance — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Risk & Compliance."
        ],
        "inputs": [
          "Risk register and mitigation status",
          "High-risk open age",
          "control evidence coverage"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "vendor_intelligence_worker_intake",
        "name": "Vendor Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Vendor Intelligence."
        ],
        "inputs": [
          "Vendor sites, provider docs and usage history",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "vendor_intelligence_worker_analysis",
        "name": "Vendor Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Vendor Intelligence."
        ],
        "inputs": [
          "Vendor sites, provider docs and usage history",
          "Vendor matrix and recommendation brief",
          "Vendor evidence freshness",
          "fit score"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "vendor_intelligence_worker_workflow",
        "name": "Vendor Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Vendor Intelligence."
        ],
        "inputs": [
          "Vendor matrix and recommendation brief",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "vendor_intelligence_worker_qa",
        "name": "Vendor Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Vendor Intelligence."
        ],
        "inputs": [
          "Vendor matrix and recommendation brief",
          "Vendor evidence freshness",
          "fit score"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "platform_terms_compliance_worker_intake",
        "name": "Platform Terms Compliance — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Platform Terms Compliance."
        ],
        "inputs": [
          "Official platform policies and connector inventory",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "platform_terms_compliance_worker_analysis",
        "name": "Platform Terms Compliance — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Platform Terms Compliance."
        ],
        "inputs": [
          "Official platform policies and connector inventory",
          "Platform compliance matrix and change alerts",
          "Policy review freshness",
          "compliance exceptions"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "platform_terms_compliance_worker_workflow",
        "name": "Platform Terms Compliance — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Platform Terms Compliance."
        ],
        "inputs": [
          "Platform compliance matrix and change alerts",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "platform_terms_compliance_worker_qa",
        "name": "Platform Terms Compliance — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Platform Terms Compliance."
        ],
        "inputs": [
          "Platform compliance matrix and change alerts",
          "Policy review freshness",
          "compliance exceptions"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "platform_connector_certification_worker_intake",
        "name": "Platform Connector Certification — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Platform Connector Certification."
        ],
        "inputs": [
          "Official docs and connector test environment",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "platform_connector_certification_worker_analysis",
        "name": "Platform Connector Certification — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Platform Connector Certification."
        ],
        "inputs": [
          "Official docs and connector test environment",
          "Connector readiness certification and limitations",
          "Connector contract pass",
          "failed run rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "platform_connector_certification_worker_workflow",
        "name": "Platform Connector Certification — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Platform Connector Certification."
        ],
        "inputs": [
          "Connector readiness certification and limitations",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "platform_connector_certification_worker_qa",
        "name": "Platform Connector Certification — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Platform Connector Certification."
        ],
        "inputs": [
          "Connector readiness certification and limitations",
          "Connector contract pass",
          "failed run rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "freelance_market_intelligence_worker_intake",
        "name": "Freelance Market Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Freelance Market Intelligence."
        ],
        "inputs": [
          "Permitted marketplace listings and opportunity history",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "freelance_market_intelligence_worker_analysis",
        "name": "Freelance Market Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Freelance Market Intelligence."
        ],
        "inputs": [
          "Permitted marketplace listings and opportunity history",
          "Freelance market map and priority sectors",
          "Qualified opportunity yield",
          "data freshness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "freelance_market_intelligence_worker_workflow",
        "name": "Freelance Market Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Freelance Market Intelligence."
        ],
        "inputs": [
          "Freelance market map and priority sectors",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "freelance_market_intelligence_worker_qa",
        "name": "Freelance Market Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Freelance Market Intelligence."
        ],
        "inputs": [
          "Freelance market map and priority sectors",
          "Qualified opportunity yield",
          "data freshness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "partner_qualification_worker_intake",
        "name": "Partner Qualification — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Partner Qualification."
        ],
        "inputs": [
          "Partner profiles, references and public records",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "partner_qualification_worker_analysis",
        "name": "Partner Qualification — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Partner Qualification."
        ],
        "inputs": [
          "Partner profiles, references and public records",
          "Partner qualification scorecard",
          "Qualification acceptance",
          "due-diligence completeness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "partner_qualification_worker_workflow",
        "name": "Partner Qualification — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Partner Qualification."
        ],
        "inputs": [
          "Partner qualification scorecard",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "partner_qualification_worker_qa",
        "name": "Partner Qualification — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Partner Qualification."
        ],
        "inputs": [
          "Partner qualification scorecard",
          "Qualification acceptance",
          "due-diligence completeness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "proposal_research_worker_intake",
        "name": "Proposal Research — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Research."
        ],
        "inputs": [
          "Public customer context and approved portfolio",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "proposal_research_worker_analysis",
        "name": "Proposal Research — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Research."
        ],
        "inputs": [
          "Public customer context and approved portfolio",
          "Evidence pack and proposal research brief",
          "Source traceability",
          "requirement coverage"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "proposal_research_worker_workflow",
        "name": "Proposal Research — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Research."
        ],
        "inputs": [
          "Evidence pack and proposal research brief",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "proposal_research_worker_qa",
        "name": "Proposal Research — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Research."
        ],
        "inputs": [
          "Evidence pack and proposal research brief",
          "Source traceability",
          "requirement coverage"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "public_tender_intelligence_worker_intake",
        "name": "Public Tender Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Public Tender Intelligence."
        ],
        "inputs": [
          "Official public procurement notices",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "public_tender_intelligence_worker_analysis",
        "name": "Public Tender Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Public Tender Intelligence."
        ],
        "inputs": [
          "Official public procurement notices",
          "Tender shortlist and compliance calendar",
          "Eligibility accuracy",
          "missed-deadline prevention"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "public_tender_intelligence_worker_workflow",
        "name": "Public Tender Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Public Tender Intelligence."
        ],
        "inputs": [
          "Tender shortlist and compliance calendar",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "public_tender_intelligence_worker_qa",
        "name": "Public Tender Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Public Tender Intelligence."
        ],
        "inputs": [
          "Tender shortlist and compliance calendar",
          "Eligibility accuracy",
          "missed-deadline prevention"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "service_opportunity_research_worker_intake",
        "name": "Service Opportunity Research — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Service Opportunity Research."
        ],
        "inputs": [
          "Public job descriptions and service catalog",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "service_opportunity_research_worker_analysis",
        "name": "Service Opportunity Research — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Service Opportunity Research."
        ],
        "inputs": [
          "Public job descriptions and service catalog",
          "Service opportunity map and demand evidence",
          "Evidence-backed opportunities",
          "fit accuracy"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "service_opportunity_research_worker_workflow",
        "name": "Service Opportunity Research — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Service Opportunity Research."
        ],
        "inputs": [
          "Service opportunity map and demand evidence",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "service_opportunity_research_worker_qa",
        "name": "Service Opportunity Research — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Service Opportunity Research."
        ],
        "inputs": [
          "Service opportunity map and demand evidence",
          "Evidence-backed opportunities",
          "fit accuracy"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "workforce_orchestration_worker_intake",
        "name": "Workforce Orchestration — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Workforce Orchestration."
        ],
        "inputs": [
          "Division registry, task queue and capacity data",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "workforce_orchestration_worker_analysis",
        "name": "Workforce Orchestration — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Workforce Orchestration."
        ],
        "inputs": [
          "Division registry, task queue and capacity data",
          "Assignment plan and dependency graph",
          "Task routing accuracy",
          "blocked-task age"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "workforce_orchestration_worker_workflow",
        "name": "Workforce Orchestration — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Workforce Orchestration."
        ],
        "inputs": [
          "Assignment plan and dependency graph",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "workforce_orchestration_worker_qa",
        "name": "Workforce Orchestration — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Workforce Orchestration."
        ],
        "inputs": [
          "Assignment plan and dependency graph",
          "Task routing accuracy",
          "blocked-task age"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "capacity_planning_worker_intake",
        "name": "Capacity Planning — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Capacity Planning."
        ],
        "inputs": [
          "Backlog, historical runtimes and availability",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "capacity_planning_worker_analysis",
        "name": "Capacity Planning — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Capacity Planning."
        ],
        "inputs": [
          "Backlog, historical runtimes and availability",
          "Capacity forecast and overload alerts",
          "On-time forecast",
          "overload hours"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "capacity_planning_worker_workflow",
        "name": "Capacity Planning — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Capacity Planning."
        ],
        "inputs": [
          "Capacity forecast and overload alerts",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "capacity_planning_worker_qa",
        "name": "Capacity Planning — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Capacity Planning."
        ],
        "inputs": [
          "Capacity forecast and overload alerts",
          "On-time forecast",
          "overload hours"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "task_prioritization_worker_intake",
        "name": "Task Prioritization — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Task Prioritization."
        ],
        "inputs": [
          "Tasks, OKRs, deadlines and incidents",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "task_prioritization_worker_analysis",
        "name": "Task Prioritization — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Task Prioritization."
        ],
        "inputs": [
          "Tasks, OKRs, deadlines and incidents",
          "Ranked backlog with rationale",
          "Priority acceptance",
          "urgent-task SLA"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "task_prioritization_worker_workflow",
        "name": "Task Prioritization — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Task Prioritization."
        ],
        "inputs": [
          "Ranked backlog with rationale",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "task_prioritization_worker_qa",
        "name": "Task Prioritization — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Task Prioritization."
        ],
        "inputs": [
          "Ranked backlog with rationale",
          "Priority acceptance",
          "urgent-task SLA"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "process_documentation_worker_intake",
        "name": "Process Documentation — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Process Documentation."
        ],
        "inputs": [
          "Process owners and workflow definitions",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "process_documentation_worker_analysis",
        "name": "Process Documentation — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Process Documentation."
        ],
        "inputs": [
          "Process owners and workflow definitions",
          "Process maps and control points",
          "Process coverage",
          "stale-document rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "process_documentation_worker_workflow",
        "name": "Process Documentation — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Process Documentation."
        ],
        "inputs": [
          "Process maps and control points",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "process_documentation_worker_qa",
        "name": "Process Documentation — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Process Documentation."
        ],
        "inputs": [
          "Process maps and control points",
          "Process coverage",
          "stale-document rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "knowledge_base_operations_worker_intake",
        "name": "Knowledge Base Operations — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Knowledge Base Operations."
        ],
        "inputs": [
          "Approved internal docs and runbooks",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "knowledge_base_operations_worker_analysis",
        "name": "Knowledge Base Operations — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Knowledge Base Operations."
        ],
        "inputs": [
          "Approved internal docs and runbooks",
          "Searchable knowledge index and freshness report",
          "Retrieval relevance",
          "stale-reference rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "knowledge_base_operations_worker_workflow",
        "name": "Knowledge Base Operations — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Knowledge Base Operations."
        ],
        "inputs": [
          "Searchable knowledge index and freshness report",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "knowledge_base_operations_worker_qa",
        "name": "Knowledge Base Operations — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Knowledge Base Operations."
        ],
        "inputs": [
          "Searchable knowledge index and freshness report",
          "Retrieval relevance",
          "stale-reference rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "runbook_sop_management_worker_intake",
        "name": "Runbook & SOP Management — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Runbook & SOP Management."
        ],
        "inputs": [
          "Approved process maps and incident learnings",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "runbook_sop_management_worker_analysis",
        "name": "Runbook & SOP Management — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Runbook & SOP Management."
        ],
        "inputs": [
          "Approved process maps and incident learnings",
          "Versioned SOP/runbooks and drill checklist",
          "Runbook coverage",
          "drill pass rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "runbook_sop_management_worker_workflow",
        "name": "Runbook & SOP Management — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Runbook & SOP Management."
        ],
        "inputs": [
          "Versioned SOP/runbooks and drill checklist",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "runbook_sop_management_worker_qa",
        "name": "Runbook & SOP Management — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Runbook & SOP Management."
        ],
        "inputs": [
          "Versioned SOP/runbooks and drill checklist",
          "Runbook coverage",
          "drill pass rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "automation_inventory_worker_intake",
        "name": "Automation Inventory — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Automation Inventory."
        ],
        "inputs": [
          "Cloudflare Workers, automation tool metadata and repositories",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "automation_inventory_worker_analysis",
        "name": "Automation Inventory — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Automation Inventory."
        ],
        "inputs": [
          "Cloudflare Workers, automation tool metadata and repositories",
          "Automation catalog and dependency map",
          "Inventory coverage",
          "unknown-owner count"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "automation_inventory_worker_workflow",
        "name": "Automation Inventory — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Automation Inventory."
        ],
        "inputs": [
          "Automation catalog and dependency map",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "automation_inventory_worker_qa",
        "name": "Automation Inventory — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Automation Inventory."
        ],
        "inputs": [
          "Automation catalog and dependency map",
          "Inventory coverage",
          "unknown-owner count"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "incident_communications_worker_intake",
        "name": "Incident Communications — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Incident Communications."
        ],
        "inputs": [
          "Incident records and approved comms policy",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "incident_communications_worker_analysis",
        "name": "Incident Communications — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Incident Communications."
        ],
        "inputs": [
          "Incident records and approved comms policy",
          "Internal incident update drafts and status log",
          "Update timeliness",
          "factual correction rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "incident_communications_worker_workflow",
        "name": "Incident Communications — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Incident Communications."
        ],
        "inputs": [
          "Internal incident update drafts and status log",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "incident_communications_worker_qa",
        "name": "Incident Communications — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Incident Communications."
        ],
        "inputs": [
          "Internal incident update drafts and status log",
          "Update timeliness",
          "factual correction rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "meeting_decision_registry_worker_intake",
        "name": "Meeting & Decision Registry — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Meeting & Decision Registry."
        ],
        "inputs": [
          "Owner-approved meeting notes and tasks",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "meeting_decision_registry_worker_analysis",
        "name": "Meeting & Decision Registry — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Meeting & Decision Registry."
        ],
        "inputs": [
          "Owner-approved meeting notes and tasks",
          "Decision log and action register",
          "Action closure",
          "decision traceability"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "meeting_decision_registry_worker_workflow",
        "name": "Meeting & Decision Registry — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Meeting & Decision Registry."
        ],
        "inputs": [
          "Decision log and action register",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "meeting_decision_registry_worker_qa",
        "name": "Meeting & Decision Registry — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Meeting & Decision Registry."
        ],
        "inputs": [
          "Decision log and action register",
          "Action closure",
          "decision traceability"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "approval_workflow_operations_worker_intake",
        "name": "Approval Workflow Operations — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Approval Workflow Operations."
        ],
        "inputs": [
          "Task queue, approval rules and Owner identity",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "approval_workflow_operations_worker_analysis",
        "name": "Approval Workflow Operations — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Approval Workflow Operations."
        ],
        "inputs": [
          "Task queue, approval rules and Owner identity",
          "Approval queue, status, and audit trail",
          "Approval SLA",
          "unauthorized action prevention"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "approval_workflow_operations_worker_workflow",
        "name": "Approval Workflow Operations — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Approval Workflow Operations."
        ],
        "inputs": [
          "Approval queue, status, and audit trail",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "approval_workflow_operations_worker_qa",
        "name": "Approval Workflow Operations — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Approval Workflow Operations."
        ],
        "inputs": [
          "Approval queue, status, and audit trail",
          "Approval SLA",
          "unauthorized action prevention"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "internal_administration_worker_intake",
        "name": "Internal Administration — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Internal Administration."
        ],
        "inputs": [
          "Internal task register and approved policies",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "internal_administration_worker_analysis",
        "name": "Internal Administration — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Internal Administration."
        ],
        "inputs": [
          "Internal task register and approved policies",
          "Admin calendar and completion report",
          "On-time completion",
          "overdue actions"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "internal_administration_worker_workflow",
        "name": "Internal Administration — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Internal Administration."
        ],
        "inputs": [
          "Admin calendar and completion report",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "internal_administration_worker_qa",
        "name": "Internal Administration — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Internal Administration."
        ],
        "inputs": [
          "Admin calendar and completion report",
          "On-time completion",
          "overdue actions"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "asset_license_inventory_worker_intake",
        "name": "Asset & License Inventory — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Asset & License Inventory."
        ],
        "inputs": [
          "Provider account inventories and purchase records",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "asset_license_inventory_worker_analysis",
        "name": "Asset & License Inventory — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Asset & License Inventory."
        ],
        "inputs": [
          "Provider account inventories and purchase records",
          "Asset register and renewal warnings",
          "Inventory coverage",
          "missed-renewal rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "asset_license_inventory_worker_workflow",
        "name": "Asset & License Inventory — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Asset & License Inventory."
        ],
        "inputs": [
          "Asset register and renewal warnings",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "asset_license_inventory_worker_qa",
        "name": "Asset & License Inventory — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Asset & License Inventory."
        ],
        "inputs": [
          "Asset register and renewal warnings",
          "Inventory coverage",
          "missed-renewal rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "feedback_learning_loop_worker_intake",
        "name": "Feedback & Learning Loop — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Feedback & Learning Loop."
        ],
        "inputs": [
          "QA reports, sales outcomes and incident reviews",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "feedback_learning_loop_worker_analysis",
        "name": "Feedback & Learning Loop — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Feedback & Learning Loop."
        ],
        "inputs": [
          "QA reports, sales outcomes and incident reviews",
          "Lessons register and improvement experiments",
          "Lessons applied",
          "recurrence reduction"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "feedback_learning_loop_worker_workflow",
        "name": "Feedback & Learning Loop — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Feedback & Learning Loop."
        ],
        "inputs": [
          "Lessons register and improvement experiments",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "feedback_learning_loop_worker_qa",
        "name": "Feedback & Learning Loop — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Feedback & Learning Loop."
        ],
        "inputs": [
          "Lessons register and improvement experiments",
          "Lessons applied",
          "recurrence reduction"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "cross_division_coordination_worker_intake",
        "name": "Cross-Division Coordination — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cross-Division Coordination."
        ],
        "inputs": [
          "Division registry and task links",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "cross_division_coordination_worker_analysis",
        "name": "Cross-Division Coordination — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cross-Division Coordination."
        ],
        "inputs": [
          "Division registry and task links",
          "Cross-division dependency board",
          "Handoff acceptance time",
          "dependency blockage"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "cross_division_coordination_worker_workflow",
        "name": "Cross-Division Coordination — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cross-Division Coordination."
        ],
        "inputs": [
          "Cross-division dependency board",
          "Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "cross_division_coordination_worker_qa",
        "name": "Cross-Division Coordination — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cross-Division Coordination."
        ],
        "inputs": [
          "Cross-division dependency board",
          "Handoff acceptance time",
          "dependency blockage"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "kpi_executive_reporting_worker_intake",
        "name": "KPI & Executive Reporting — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to KPI & Executive Reporting."
        ],
        "inputs": [
          "Validated division KPI records",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "kpi_executive_reporting_worker_analysis",
        "name": "KPI & Executive Reporting — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to KPI & Executive Reporting."
        ],
        "inputs": [
          "Validated division KPI records",
          "Executive scorecard and exception summaries",
          "KPI completeness",
          "metric reconciliation"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "kpi_executive_reporting_worker_workflow",
        "name": "KPI & Executive Reporting — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to KPI & Executive Reporting."
        ],
        "inputs": [
          "Executive scorecard and exception summaries",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "kpi_executive_reporting_worker_qa",
        "name": "KPI & Executive Reporting — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to KPI & Executive Reporting."
        ],
        "inputs": [
          "Executive scorecard and exception summaries",
          "KPI completeness",
          "metric reconciliation"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "audit_change_management_worker_intake",
        "name": "Audit & Change Management — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Audit & Change Management."
        ],
        "inputs": [
          "Git changes, Worker deployments and access events",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "audit_change_management_worker_analysis",
        "name": "Audit & Change Management — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Audit & Change Management."
        ],
        "inputs": [
          "Git changes, Worker deployments and access events",
          "Change log and review checklist",
          "Change traceability",
          "unauthorized changes"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "audit_change_management_worker_workflow",
        "name": "Audit & Change Management — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Audit & Change Management."
        ],
        "inputs": [
          "Change log and review checklist",
          "External commitments, financial decisions and material changes require Owner approval; keep an audit trail."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "audit_change_management_worker_qa",
        "name": "Audit & Change Management — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Audit & Change Management."
        ],
        "inputs": [
          "Change log and review checklist",
          "Change traceability",
          "unauthorized changes"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
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
    ],
    "workers": [
      {
        "key": "business_continuity_disaster_recovery_worker_intake",
        "name": "Business Continuity & Disaster Recovery — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Continuity & Disaster Recovery."
        ],
        "inputs": [
          "Service inventory, backups and continuity requirements",
          "Approved requests, scope, and operating policies"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "business_continuity_disaster_recovery_worker_analysis",
        "name": "Business Continuity & Disaster Recovery — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Continuity & Disaster Recovery."
        ],
        "inputs": [
          "Service inventory, backups and continuity requirements",
          "Continuity plan and recovery drill results",
          "Recovery test pass",
          "critical dependency coverage"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "business_continuity_disaster_recovery_worker_workflow",
        "name": "Business Continuity & Disaster Recovery — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Continuity & Disaster Recovery."
        ],
        "inputs": [
          "Continuity plan and recovery drill results",
          "Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "business_continuity_disaster_recovery_worker_qa",
        "name": "Business Continuity & Disaster Recovery — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Business Continuity & Disaster Recovery."
        ],
        "inputs": [
          "Continuity plan and recovery drill results",
          "Recovery test pass",
          "critical dependency coverage"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "outbound_prospecting_intelligence",
    "name": "Outbound Prospecting Intelligence",
    "sort_order": 101,
    "category": "Sales Intelligence",
    "mission": "Memprioritaskan akun target untuk outreach berdasarkan kecocokan layanan dan bukti kebutuhan.",
    "responsibilities": [
      "Memprioritaskan akun target untuk outreach berdasarkan kecocokan layanan dan bukti kebutuhan.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Outbound Prospecting Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Ranked target accounts with fit score, evidence, public contact route, and next action",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified targets",
      "contact validity",
      "positive reply rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "outbound_prospecting_intelligence_source",
        "label": "Outbound Prospecting Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "outbound_prospecting_intelligence_workflow",
        "label": "Outbound Prospecting Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "outbound_prospecting_intelligence_worker_intake",
        "name": "Outbound Prospecting Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Outbound Prospecting Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Outbound Prospecting Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "outbound_prospecting_intelligence_worker_analysis",
        "name": "Outbound Prospecting Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Outbound Prospecting Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Ranked target accounts with fit score, evidence, public contact route, and next action",
          "Qualified targets",
          "contact validity"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "outbound_prospecting_intelligence_worker_workflow",
        "name": "Outbound Prospecting Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Outbound Prospecting Intelligence."
        ],
        "inputs": [
          "Ranked target accounts with fit score, evidence, public contact route, and next action",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "outbound_prospecting_intelligence_worker_qa",
        "name": "Outbound Prospecting Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Outbound Prospecting Intelligence."
        ],
        "inputs": [
          "Ranked target accounts with fit score, evidence, public contact route, and next action",
          "Qualified targets",
          "contact validity"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "inbound_lead_conversion",
    "name": "Inbound Lead Conversion",
    "sort_order": 102,
    "category": "Sales Intelligence",
    "mission": "Mengubah inquiry dari website dan kanal resmi menjadi prospek yang layak ditindaklanjuti.",
    "responsibilities": [
      "Mengubah inquiry dari website dan kanal resmi menjadi prospek yang layak ditindaklanjuti.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Inbound Lead Conversion",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Qualified inquiry queue with intent, urgency, owner, SLA, and next action",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Inquiry qualification rate",
      "response time",
      "routing accuracy"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "inbound_lead_conversion_source",
        "label": "Inbound Lead Conversion — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "inbound_lead_conversion_workflow",
        "label": "Inbound Lead Conversion — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "inbound_lead_conversion_worker_intake",
        "name": "Inbound Lead Conversion — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Inbound Lead Conversion."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Inbound Lead Conversion"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "inbound_lead_conversion_worker_analysis",
        "name": "Inbound Lead Conversion — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Inbound Lead Conversion."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Qualified inquiry queue with intent, urgency, owner, SLA, and next action",
          "Inquiry qualification rate",
          "response time"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "inbound_lead_conversion_worker_workflow",
        "name": "Inbound Lead Conversion — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Inbound Lead Conversion."
        ],
        "inputs": [
          "Qualified inquiry queue with intent, urgency, owner, SLA, and next action",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "inbound_lead_conversion_worker_qa",
        "name": "Inbound Lead Conversion — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Inbound Lead Conversion."
        ],
        "inputs": [
          "Qualified inquiry queue with intent, urgency, owner, SLA, and next action",
          "Inquiry qualification rate",
          "response time"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "account_based_sales",
    "name": "Account-Based Sales",
    "sort_order": 103,
    "category": "Sales Intelligence",
    "mission": "Menyusun rencana sales khusus akun bernilai tinggi dan para pengambil keputusan.",
    "responsibilities": [
      "Menyusun rencana sales khusus akun bernilai tinggi dan para pengambil keputusan.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Account-Based Sales",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Account plans with stakeholder map, needs, opportunity map, and next steps",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Account coverage",
      "opportunity creation",
      "engagement"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "account_based_sales_source",
        "label": "Account-Based Sales — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "account_based_sales_workflow",
        "label": "Account-Based Sales — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "account_based_sales_worker_intake",
        "name": "Account-Based Sales — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account-Based Sales."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Account-Based Sales"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "account_based_sales_worker_analysis",
        "name": "Account-Based Sales — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account-Based Sales."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Account plans with stakeholder map, needs, opportunity map, and next steps",
          "Account coverage",
          "opportunity creation"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "account_based_sales_worker_workflow",
        "name": "Account-Based Sales — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account-Based Sales."
        ],
        "inputs": [
          "Account plans with stakeholder map, needs, opportunity map, and next steps",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "account_based_sales_worker_qa",
        "name": "Account-Based Sales — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Account-Based Sales."
        ],
        "inputs": [
          "Account plans with stakeholder map, needs, opportunity map, and next steps",
          "Account coverage",
          "opportunity creation"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "sales_signal_intelligence",
    "name": "Sales Signal Intelligence",
    "sort_order": 104,
    "category": "Sales Intelligence",
    "mission": "Mendeteksi perubahan bisnis yang menjadi sinyal waktu terbaik menghubungi prospek.",
    "responsibilities": [
      "Mendeteksi perubahan bisnis yang menjadi sinyal waktu terbaik menghubungi prospek.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Sales Signal Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Time-stamped buying-signal feed with source, confidence, and suggested action",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Verified signals",
      "signal-to-opportunity rate",
      "false positives"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "sales_signal_intelligence_source",
        "label": "Sales Signal Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "sales_signal_intelligence_workflow",
        "label": "Sales Signal Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "sales_signal_intelligence_worker_intake",
        "name": "Sales Signal Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Signal Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Sales Signal Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_signal_intelligence_worker_analysis",
        "name": "Sales Signal Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Signal Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Time-stamped buying-signal feed with source, confidence, and suggested action",
          "Verified signals",
          "signal-to-opportunity rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_signal_intelligence_worker_workflow",
        "name": "Sales Signal Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Signal Intelligence."
        ],
        "inputs": [
          "Time-stamped buying-signal feed with source, confidence, and suggested action",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sales_signal_intelligence_worker_qa",
        "name": "Sales Signal Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Signal Intelligence."
        ],
        "inputs": [
          "Time-stamped buying-signal feed with source, confidence, and suggested action",
          "Verified signals",
          "signal-to-opportunity rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "lead_enrichment_verification",
    "name": "Lead Enrichment & Verification",
    "sort_order": 105,
    "category": "Sales Intelligence",
    "mission": "Memvalidasi dan memperkaya data CRM agar prospek tidak dinilai dari data usang.",
    "responsibilities": [
      "Memvalidasi dan memperkaya data CRM agar prospek tidak dinilai dari data usang.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Lead Enrichment & Verification",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Deduplicated lead records with verified fields, freshness, and provenance",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Record completeness",
      "validity",
      "duplicate rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "lead_enrichment_verification_source",
        "label": "Lead Enrichment & Verification — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "lead_enrichment_verification_workflow",
        "label": "Lead Enrichment & Verification — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "lead_enrichment_verification_worker_intake",
        "name": "Lead Enrichment & Verification — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Enrichment & Verification."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Lead Enrichment & Verification"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "lead_enrichment_verification_worker_analysis",
        "name": "Lead Enrichment & Verification — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Enrichment & Verification."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Deduplicated lead records with verified fields, freshness, and provenance",
          "Record completeness",
          "validity"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "lead_enrichment_verification_worker_workflow",
        "name": "Lead Enrichment & Verification — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Enrichment & Verification."
        ],
        "inputs": [
          "Deduplicated lead records with verified fields, freshness, and provenance",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "lead_enrichment_verification_worker_qa",
        "name": "Lead Enrichment & Verification — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Enrichment & Verification."
        ],
        "inputs": [
          "Deduplicated lead records with verified fields, freshness, and provenance",
          "Record completeness",
          "validity"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "contact_discovery_compliance",
    "name": "Contact Discovery & Compliance",
    "sort_order": 106,
    "category": "Sales Intelligence",
    "mission": "Menemukan jalur kontak bisnis yang sah dan menghormati consent serta opt-out.",
    "responsibilities": [
      "Menemukan jalur kontak bisnis yang sah dan menghormati consent serta opt-out.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Contact Discovery & Compliance",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Contact-route records with public source evidence and suppression-list status",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Usable contact routes",
      "invalid-contact rate",
      "opt-out compliance"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "contact_discovery_compliance_source",
        "label": "Contact Discovery & Compliance — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "contact_discovery_compliance_workflow",
        "label": "Contact Discovery & Compliance — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "contact_discovery_compliance_worker_intake",
        "name": "Contact Discovery & Compliance — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Contact Discovery & Compliance."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Contact Discovery & Compliance"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "contact_discovery_compliance_worker_analysis",
        "name": "Contact Discovery & Compliance — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Contact Discovery & Compliance."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Contact-route records with public source evidence and suppression-list status",
          "Usable contact routes",
          "invalid-contact rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "contact_discovery_compliance_worker_workflow",
        "name": "Contact Discovery & Compliance — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Contact Discovery & Compliance."
        ],
        "inputs": [
          "Contact-route records with public source evidence and suppression-list status",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "contact_discovery_compliance_worker_qa",
        "name": "Contact Discovery & Compliance — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Contact Discovery & Compliance."
        ],
        "inputs": [
          "Contact-route records with public source evidence and suppression-list status",
          "Usable contact routes",
          "invalid-contact rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "multi_channel_outreach_orchestration",
    "name": "Multi-Channel Outreach Orchestration",
    "sort_order": 107,
    "category": "Sales Intelligence",
    "mission": "Mengoordinasikan tindak lanjut lintas kanal agar tidak ganda atau berlebihan.",
    "responsibilities": [
      "Mengoordinasikan tindak lanjut lintas kanal agar tidak ganda atau berlebihan.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Multi-Channel Outreach Orchestration",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Approved touch schedule with channel, timing, suppression state, and outcomes",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Positive replies",
      "duplicate-touch rate",
      "opt-out rate"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "multi_channel_outreach_orchestration_source",
        "label": "Multi-Channel Outreach Orchestration — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "multi_channel_outreach_orchestration_workflow",
        "label": "Multi-Channel Outreach Orchestration — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "multi_channel_outreach_orchestration_worker_intake",
        "name": "Multi-Channel Outreach Orchestration — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Multi-Channel Outreach Orchestration."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Multi-Channel Outreach Orchestration"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "multi_channel_outreach_orchestration_worker_analysis",
        "name": "Multi-Channel Outreach Orchestration — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Multi-Channel Outreach Orchestration."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Approved touch schedule with channel, timing, suppression state, and outcomes",
          "Positive replies",
          "duplicate-touch rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "multi_channel_outreach_orchestration_worker_workflow",
        "name": "Multi-Channel Outreach Orchestration — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Multi-Channel Outreach Orchestration."
        ],
        "inputs": [
          "Approved touch schedule with channel, timing, suppression state, and outcomes",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "multi_channel_outreach_orchestration_worker_qa",
        "name": "Multi-Channel Outreach Orchestration — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Multi-Channel Outreach Orchestration."
        ],
        "inputs": [
          "Approved touch schedule with channel, timing, suppression state, and outcomes",
          "Positive replies",
          "duplicate-touch rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "email_deliverability_intelligence",
    "name": "Email Deliverability Intelligence",
    "sort_order": 108,
    "category": "Sales Intelligence",
    "mission": "Memantau kesehatan pengiriman email sebelum reputasi pengirim menurun.",
    "responsibilities": [
      "Memantau kesehatan pengiriman email sebelum reputasi pengirim menurun.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Email Deliverability Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Deliverability report with bounce causes, sender health, risks, and fixes",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Delivery rate",
      "bounce rate",
      "complaint rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "email_deliverability_intelligence_source",
        "label": "Email Deliverability Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "email_deliverability_intelligence_workflow",
        "label": "Email Deliverability Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "email_deliverability_intelligence_worker_intake",
        "name": "Email Deliverability Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Email Deliverability Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Email Deliverability Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "email_deliverability_intelligence_worker_analysis",
        "name": "Email Deliverability Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Email Deliverability Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Deliverability report with bounce causes, sender health, risks, and fixes",
          "Delivery rate",
          "bounce rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "email_deliverability_intelligence_worker_workflow",
        "name": "Email Deliverability Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Email Deliverability Intelligence."
        ],
        "inputs": [
          "Deliverability report with bounce causes, sender health, risks, and fixes",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "email_deliverability_intelligence_worker_qa",
        "name": "Email Deliverability Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Email Deliverability Intelligence."
        ],
        "inputs": [
          "Deliverability report with bounce causes, sender health, risks, and fixes",
          "Delivery rate",
          "bounce rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "linkedin_social_selling",
    "name": "LinkedIn Social Selling",
    "sort_order": 109,
    "category": "Sales Intelligence",
    "mission": "Mencari interaksi profesional relevan dari informasi bisnis yang tersedia secara sah.",
    "responsibilities": [
      "Mencari interaksi profesional relevan dari informasi bisnis yang tersedia secara sah.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for LinkedIn Social Selling",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Social-selling queue with company context, relationship path, and next action",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified conversations",
      "relevant interactions",
      "policy-safe activity"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "linkedin_social_selling_source",
        "label": "LinkedIn Social Selling — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "linkedin_social_selling_workflow",
        "label": "LinkedIn Social Selling — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "linkedin_social_selling_worker_intake",
        "name": "LinkedIn Social Selling — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to LinkedIn Social Selling."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for LinkedIn Social Selling"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "linkedin_social_selling_worker_analysis",
        "name": "LinkedIn Social Selling — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to LinkedIn Social Selling."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Social-selling queue with company context, relationship path, and next action",
          "Qualified conversations",
          "relevant interactions"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "linkedin_social_selling_worker_workflow",
        "name": "LinkedIn Social Selling — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to LinkedIn Social Selling."
        ],
        "inputs": [
          "Social-selling queue with company context, relationship path, and next action",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "linkedin_social_selling_worker_qa",
        "name": "LinkedIn Social Selling — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to LinkedIn Social Selling."
        ],
        "inputs": [
          "Social-selling queue with company context, relationship path, and next action",
          "Qualified conversations",
          "relevant interactions"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "buyer_committee_mapping",
    "name": "Buyer Committee Mapping",
    "sort_order": 110,
    "category": "Sales Intelligence",
    "mission": "Memetakan pembeli, pengguna, pemberi pengaruh, dan pengambil keputusan dalam peluang.",
    "responsibilities": [
      "Memetakan pembeli, pengguna, pemberi pengaruh, dan pengambil keputusan dalam peluang.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Buyer Committee Mapping",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Stakeholder map with roles, evidence, gaps, and meeting objectives",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Stakeholder coverage",
      "multi-threaded deals",
      "missing-role count"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "buyer_committee_mapping_source",
        "label": "Buyer Committee Mapping — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "buyer_committee_mapping_workflow",
        "label": "Buyer Committee Mapping — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "buyer_committee_mapping_worker_intake",
        "name": "Buyer Committee Mapping — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Buyer Committee Mapping."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Buyer Committee Mapping"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "buyer_committee_mapping_worker_analysis",
        "name": "Buyer Committee Mapping — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Buyer Committee Mapping."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Stakeholder map with roles, evidence, gaps, and meeting objectives",
          "Stakeholder coverage",
          "multi-threaded deals"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "buyer_committee_mapping_worker_workflow",
        "name": "Buyer Committee Mapping — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Buyer Committee Mapping."
        ],
        "inputs": [
          "Stakeholder map with roles, evidence, gaps, and meeting objectives",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "buyer_committee_mapping_worker_qa",
        "name": "Buyer Committee Mapping — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Buyer Committee Mapping."
        ],
        "inputs": [
          "Stakeholder map with roles, evidence, gaps, and meeting objectives",
          "Stakeholder coverage",
          "multi-threaded deals"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "meeting_booking_qualification",
    "name": "Meeting Booking & Qualification",
    "sort_order": 111,
    "category": "Sales Execution",
    "mission": "Mengubah respons prospek menjadi meeting yang memenuhi kriteria kualifikasi.",
    "responsibilities": [
      "Mengubah respons prospek menjadi meeting yang memenuhi kriteria kualifikasi.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Meeting Booking & Qualification",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Qualified meeting record with attendee, agenda, need, time, and CRM link",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Meetings booked",
      "show rate",
      "qualified-meeting rate"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "meeting_booking_qualification_source",
        "label": "Meeting Booking & Qualification — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "meeting_booking_qualification_workflow",
        "label": "Meeting Booking & Qualification — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "meeting_booking_qualification_worker_intake",
        "name": "Meeting Booking & Qualification — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Meeting Booking & Qualification."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Meeting Booking & Qualification"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "meeting_booking_qualification_worker_analysis",
        "name": "Meeting Booking & Qualification — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Meeting Booking & Qualification."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Qualified meeting record with attendee, agenda, need, time, and CRM link",
          "Meetings booked",
          "show rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "meeting_booking_qualification_worker_workflow",
        "name": "Meeting Booking & Qualification — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Meeting Booking & Qualification."
        ],
        "inputs": [
          "Qualified meeting record with attendee, agenda, need, time, and CRM link",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "meeting_booking_qualification_worker_qa",
        "name": "Meeting Booking & Qualification — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Meeting Booking & Qualification."
        ],
        "inputs": [
          "Qualified meeting record with attendee, agenda, need, time, and CRM link",
          "Meetings booked",
          "show rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "sales_meeting_preparation",
    "name": "Sales Meeting Preparation",
    "sort_order": 112,
    "category": "Sales Execution",
    "mission": "Menyiapkan ringkasan prospek dan bahan relevan sebelum meeting sales.",
    "responsibilities": [
      "Menyiapkan ringkasan prospek dan bahan relevan sebelum meeting sales.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Sales Meeting Preparation",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Meeting brief, discovery checklist, approved case references, and open questions",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Prep coverage",
      "meeting readiness",
      "next-step completion"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "sales_meeting_preparation_source",
        "label": "Sales Meeting Preparation — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "sales_meeting_preparation_workflow",
        "label": "Sales Meeting Preparation — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "sales_meeting_preparation_worker_intake",
        "name": "Sales Meeting Preparation — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Meeting Preparation."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Sales Meeting Preparation"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_meeting_preparation_worker_analysis",
        "name": "Sales Meeting Preparation — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Meeting Preparation."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Meeting brief, discovery checklist, approved case references, and open questions",
          "Prep coverage",
          "meeting readiness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_meeting_preparation_worker_workflow",
        "name": "Sales Meeting Preparation — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Meeting Preparation."
        ],
        "inputs": [
          "Meeting brief, discovery checklist, approved case references, and open questions",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sales_meeting_preparation_worker_qa",
        "name": "Sales Meeting Preparation — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Meeting Preparation."
        ],
        "inputs": [
          "Meeting brief, discovery checklist, approved case references, and open questions",
          "Prep coverage",
          "meeting readiness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "discovery_call_qualification",
    "name": "Discovery Call Qualification",
    "sort_order": 113,
    "category": "Sales Execution",
    "mission": "Menilai kebutuhan, urgensi, dampak, anggaran, dan proses keputusan dari catatan discovery.",
    "responsibilities": [
      "Menilai kebutuhan, urgensi, dampak, anggaran, dan proses keputusan dari catatan discovery.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Discovery Call Qualification",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Qualification scorecard with needs, urgency, budget status, risks, and recommendation",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualification completeness",
      "progression rate",
      "disqualification accuracy"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "discovery_call_qualification_source",
        "label": "Discovery Call Qualification — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "discovery_call_qualification_workflow",
        "label": "Discovery Call Qualification — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "discovery_call_qualification_worker_intake",
        "name": "Discovery Call Qualification — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Discovery Call Qualification."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Discovery Call Qualification"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "discovery_call_qualification_worker_analysis",
        "name": "Discovery Call Qualification — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Discovery Call Qualification."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Qualification scorecard with needs, urgency, budget status, risks, and recommendation",
          "Qualification completeness",
          "progression rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "discovery_call_qualification_worker_workflow",
        "name": "Discovery Call Qualification — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Discovery Call Qualification."
        ],
        "inputs": [
          "Qualification scorecard with needs, urgency, budget status, risks, and recommendation",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "discovery_call_qualification_worker_qa",
        "name": "Discovery Call Qualification — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Discovery Call Qualification."
        ],
        "inputs": [
          "Qualification scorecard with needs, urgency, budget status, risks, and recommendation",
          "Qualification completeness",
          "progression rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "demo_operations_readiness",
    "name": "Demo Operations & Readiness",
    "sort_order": 114,
    "category": "Sales Execution",
    "mission": "Memastikan demo siap dan sesuai kebutuhan prospek sebelum meeting.",
    "responsibilities": [
      "Memastikan demo siap dan sesuai kebutuhan prospek sebelum meeting.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Demo Operations & Readiness",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Demo readiness checklist, scenario plan, test results, blockers, and owners",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Demo readiness",
      "demo incidents",
      "demo-to-next-step rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "demo_operations_readiness_source",
        "label": "Demo Operations & Readiness — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "demo_operations_readiness_workflow",
        "label": "Demo Operations & Readiness — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "demo_operations_readiness_worker_intake",
        "name": "Demo Operations & Readiness — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Demo Operations & Readiness."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Demo Operations & Readiness"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "demo_operations_readiness_worker_analysis",
        "name": "Demo Operations & Readiness — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Demo Operations & Readiness."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Demo readiness checklist, scenario plan, test results, blockers, and owners",
          "Demo readiness",
          "demo incidents"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "demo_operations_readiness_worker_workflow",
        "name": "Demo Operations & Readiness — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Demo Operations & Readiness."
        ],
        "inputs": [
          "Demo readiness checklist, scenario plan, test results, blockers, and owners",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "demo_operations_readiness_worker_qa",
        "name": "Demo Operations & Readiness — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Demo Operations & Readiness."
        ],
        "inputs": [
          "Demo readiness checklist, scenario plan, test results, blockers, and owners",
          "Demo readiness",
          "demo incidents"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "objection_intelligence",
    "name": "Objection Intelligence",
    "sort_order": 115,
    "category": "Sales Execution",
    "mission": "Mengelompokkan keberatan prospek dan mencari jawaban berbasis bukti yang disetujui.",
    "responsibilities": [
      "Mengelompokkan keberatan prospek dan mencari jawaban berbasis bukti yang disetujui.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Objection Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Objection register with category, frequency, response reference, and escalation need",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Objection resolution",
      "repeated objections",
      "deal progression"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "objection_intelligence_source",
        "label": "Objection Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "objection_intelligence_workflow",
        "label": "Objection Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "objection_intelligence_worker_intake",
        "name": "Objection Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Objection Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Objection Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "objection_intelligence_worker_analysis",
        "name": "Objection Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Objection Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Objection register with category, frequency, response reference, and escalation need",
          "Objection resolution",
          "repeated objections"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "objection_intelligence_worker_workflow",
        "name": "Objection Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Objection Intelligence."
        ],
        "inputs": [
          "Objection register with category, frequency, response reference, and escalation need",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "objection_intelligence_worker_qa",
        "name": "Objection Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Objection Intelligence."
        ],
        "inputs": [
          "Objection register with category, frequency, response reference, and escalation need",
          "Objection resolution",
          "repeated objections"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "sales_conversation_intelligence",
    "name": "Sales Conversation Intelligence",
    "sort_order": 116,
    "category": "Sales Execution",
    "mission": "Meringkas catatan percakapan yang diizinkan menjadi komitmen, risiko, dan tindak lanjut.",
    "responsibilities": [
      "Meringkas catatan percakapan yang diizinkan menjadi komitmen, risiko, dan tindak lanjut.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Sales Conversation Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Conversation summary, buyer commitments, action items, risk flags, and CRM suggestions",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Action capture",
      "next-step completion",
      "record accuracy"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "sales_conversation_intelligence_source",
        "label": "Sales Conversation Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "sales_conversation_intelligence_workflow",
        "label": "Sales Conversation Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "sales_conversation_intelligence_worker_intake",
        "name": "Sales Conversation Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Conversation Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Sales Conversation Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_conversation_intelligence_worker_analysis",
        "name": "Sales Conversation Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Conversation Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Conversation summary, buyer commitments, action items, risk flags, and CRM suggestions",
          "Action capture",
          "next-step completion"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_conversation_intelligence_worker_workflow",
        "name": "Sales Conversation Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Conversation Intelligence."
        ],
        "inputs": [
          "Conversation summary, buyer commitments, action items, risk flags, and CRM suggestions",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sales_conversation_intelligence_worker_qa",
        "name": "Sales Conversation Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Conversation Intelligence."
        ],
        "inputs": [
          "Conversation summary, buyer commitments, action items, risk flags, and CRM suggestions",
          "Action capture",
          "next-step completion"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "proposal_strategy_fit",
    "name": "Proposal Strategy & Fit",
    "sort_order": 117,
    "category": "Sales Execution",
    "mission": "Memilih pendekatan proposal berdasarkan kebutuhan, cakupan, bukti kemampuan, dan nilai proyek.",
    "responsibilities": [
      "Memilih pendekatan proposal berdasarkan kebutuhan, cakupan, bukti kemampuan, dan nilai proyek.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Proposal Strategy & Fit",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Proposal strategy brief with scope, approved proof, assumptions, exclusions, and review points",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Proposal fit",
      "review time",
      "scope-change rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "proposal_strategy_fit_source",
        "label": "Proposal Strategy & Fit — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "proposal_strategy_fit_workflow",
        "label": "Proposal Strategy & Fit — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "proposal_strategy_fit_worker_intake",
        "name": "Proposal Strategy & Fit — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Strategy & Fit."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Proposal Strategy & Fit"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "proposal_strategy_fit_worker_analysis",
        "name": "Proposal Strategy & Fit — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Strategy & Fit."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Proposal strategy brief with scope, approved proof, assumptions, exclusions, and review points",
          "Proposal fit",
          "review time"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "proposal_strategy_fit_worker_workflow",
        "name": "Proposal Strategy & Fit — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Strategy & Fit."
        ],
        "inputs": [
          "Proposal strategy brief with scope, approved proof, assumptions, exclusions, and review points",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "proposal_strategy_fit_worker_qa",
        "name": "Proposal Strategy & Fit — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Strategy & Fit."
        ],
        "inputs": [
          "Proposal strategy brief with scope, approved proof, assumptions, exclusions, and review points",
          "Proposal fit",
          "review time"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "proposal_quality_review",
    "name": "Proposal Quality Review",
    "sort_order": 118,
    "category": "Sales Execution",
    "mission": "Memeriksa konsistensi, kelengkapan, risiko, dan kesesuaian proposal dengan kebutuhan klien.",
    "responsibilities": [
      "Memeriksa konsistensi, kelengkapan, risiko, dan kesesuaian proposal dengan kebutuhan klien.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Proposal Quality Review",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Proposal review report with coverage, errors, commercial risks, and approval status",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "First-pass approval",
      "preventable errors",
      "turnaround time"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "proposal_quality_review_source",
        "label": "Proposal Quality Review — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "proposal_quality_review_workflow",
        "label": "Proposal Quality Review — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "proposal_quality_review_worker_intake",
        "name": "Proposal Quality Review — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Quality Review."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Proposal Quality Review"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "proposal_quality_review_worker_analysis",
        "name": "Proposal Quality Review — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Quality Review."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Proposal review report with coverage, errors, commercial risks, and approval status",
          "First-pass approval",
          "preventable errors"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "proposal_quality_review_worker_workflow",
        "name": "Proposal Quality Review — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Quality Review."
        ],
        "inputs": [
          "Proposal review report with coverage, errors, commercial risks, and approval status",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "proposal_quality_review_worker_qa",
        "name": "Proposal Quality Review — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Proposal Quality Review."
        ],
        "inputs": [
          "Proposal review report with coverage, errors, commercial risks, and approval status",
          "First-pass approval",
          "preventable errors"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "sales_pricing_packaging_intelligence",
    "name": "Pricing & Packaging Intelligence",
    "sort_order": 119,
    "category": "Sales Execution",
    "mission": "Mengevaluasi paket dan harga berdasarkan kebutuhan, nilai, margin, dan batas komersial.",
    "responsibilities": [
      "Mengevaluasi paket dan harga berdasarkan kebutuhan, nilai, margin, dan batas komersial.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Pricing & Packaging Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Pricing scenario comparison with assumptions, margin estimate, package fit, and recommendation",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Estimated margin",
      "approval time",
      "offer acceptance"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "sales_pricing_packaging_intelligence_source",
        "label": "Pricing & Packaging Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "sales_pricing_packaging_intelligence_workflow",
        "label": "Pricing & Packaging Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "sales_pricing_packaging_intelligence_worker_intake",
        "name": "Pricing & Packaging Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing & Packaging Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Pricing & Packaging Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_pricing_packaging_intelligence_worker_analysis",
        "name": "Pricing & Packaging Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing & Packaging Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Pricing scenario comparison with assumptions, margin estimate, package fit, and recommendation",
          "Estimated margin",
          "approval time"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_pricing_packaging_intelligence_worker_workflow",
        "name": "Pricing & Packaging Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing & Packaging Intelligence."
        ],
        "inputs": [
          "Pricing scenario comparison with assumptions, margin estimate, package fit, and recommendation",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sales_pricing_packaging_intelligence_worker_qa",
        "name": "Pricing & Packaging Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing & Packaging Intelligence."
        ],
        "inputs": [
          "Pricing scenario comparison with assumptions, margin estimate, package fit, and recommendation",
          "Estimated margin",
          "approval time"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "negotiation_support",
    "name": "Negotiation Support",
    "sort_order": 120,
    "category": "Sales Execution",
    "mission": "Menyiapkan opsi negosiasi dan mencatat konsesi agar margin tetap terjaga.",
    "responsibilities": [
      "Menyiapkan opsi negosiasi dan mencatat konsesi agar margin tetap terjaga.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Negotiation Support",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Negotiation brief with trade-offs, concession log, and escalation triggers",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Margin retained",
      "concession visibility",
      "negotiation cycle"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "negotiation_support_source",
        "label": "Negotiation Support — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "negotiation_support_workflow",
        "label": "Negotiation Support — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "negotiation_support_worker_intake",
        "name": "Negotiation Support — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Negotiation Support."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Negotiation Support"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "negotiation_support_worker_analysis",
        "name": "Negotiation Support — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Negotiation Support."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Negotiation brief with trade-offs, concession log, and escalation triggers",
          "Margin retained",
          "concession visibility"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "negotiation_support_worker_workflow",
        "name": "Negotiation Support — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Negotiation Support."
        ],
        "inputs": [
          "Negotiation brief with trade-offs, concession log, and escalation triggers",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "negotiation_support_worker_qa",
        "name": "Negotiation Support — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Negotiation Support."
        ],
        "inputs": [
          "Negotiation brief with trade-offs, concession log, and escalation triggers",
          "Margin retained",
          "concession visibility"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "enterprise_account_development",
    "name": "Enterprise Account Development",
    "sort_order": 121,
    "category": "Sales Channels",
    "mission": "Membangun pipeline enterprise dengan pemetaan akun dan proses pembelian yang panjang.",
    "responsibilities": [
      "Membangun pipeline enterprise dengan pemetaan akun dan proses pembelian yang panjang.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Enterprise Account Development",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Enterprise account map with stakeholder coverage, milestones, risks, and next steps",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Enterprise pipeline",
      "stage progression",
      "stakeholder coverage"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "enterprise_account_development_source",
        "label": "Enterprise Account Development — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "enterprise_account_development_workflow",
        "label": "Enterprise Account Development — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "enterprise_account_development_worker_intake",
        "name": "Enterprise Account Development — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Enterprise Account Development."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Enterprise Account Development"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "enterprise_account_development_worker_analysis",
        "name": "Enterprise Account Development — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Enterprise Account Development."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Enterprise account map with stakeholder coverage, milestones, risks, and next steps",
          "Enterprise pipeline",
          "stage progression"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "enterprise_account_development_worker_workflow",
        "name": "Enterprise Account Development — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Enterprise Account Development."
        ],
        "inputs": [
          "Enterprise account map with stakeholder coverage, milestones, risks, and next steps",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "enterprise_account_development_worker_qa",
        "name": "Enterprise Account Development — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Enterprise Account Development."
        ],
        "inputs": [
          "Enterprise account map with stakeholder coverage, milestones, risks, and next steps",
          "Enterprise pipeline",
          "stage progression"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "smb_market_acquisition",
    "name": "SMB Market Acquisition",
    "sort_order": 122,
    "category": "Sales Channels",
    "mission": "Mengembangkan peluang bisnis kecil dan menengah dengan biaya akuisisi terukur.",
    "responsibilities": [
      "Mengembangkan peluang bisnis kecil dan menengah dengan biaya akuisisi terukur.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for SMB Market Acquisition",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "SMB prospect queue with segment, expected value, fit score, and next action",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified SMBs",
      "conversion",
      "acquisition cost"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "smb_market_acquisition_source",
        "label": "SMB Market Acquisition — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "smb_market_acquisition_workflow",
        "label": "SMB Market Acquisition — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "smb_market_acquisition_worker_intake",
        "name": "SMB Market Acquisition — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SMB Market Acquisition."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for SMB Market Acquisition"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "smb_market_acquisition_worker_analysis",
        "name": "SMB Market Acquisition — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SMB Market Acquisition."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "SMB prospect queue with segment, expected value, fit score, and next action",
          "Qualified SMBs",
          "conversion"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "smb_market_acquisition_worker_workflow",
        "name": "SMB Market Acquisition — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SMB Market Acquisition."
        ],
        "inputs": [
          "SMB prospect queue with segment, expected value, fit score, and next action",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "smb_market_acquisition_worker_qa",
        "name": "SMB Market Acquisition — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to SMB Market Acquisition."
        ],
        "inputs": [
          "SMB prospect queue with segment, expected value, fit score, and next action",
          "Qualified SMBs",
          "conversion"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "vertical_market_sales",
    "name": "Vertical Market Sales",
    "sort_order": 123,
    "category": "Sales Channels",
    "mission": "Membentuk pipeline industri prioritas berdasarkan kebutuhan dan siklus beli relevan.",
    "responsibilities": [
      "Membentuk pipeline industri prioritas berdasarkan kebutuhan dan siklus beli relevan.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Vertical Market Sales",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Vertical market scorecard with target list, needs, buying triggers, and pipeline",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified vertical opportunities",
      "win rate by industry"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "vertical_market_sales_source",
        "label": "Vertical Market Sales — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "vertical_market_sales_workflow",
        "label": "Vertical Market Sales — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "vertical_market_sales_worker_intake",
        "name": "Vertical Market Sales — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Vertical Market Sales."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Vertical Market Sales"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "vertical_market_sales_worker_analysis",
        "name": "Vertical Market Sales — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Vertical Market Sales."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Vertical market scorecard with target list, needs, buying triggers, and pipeline",
          "Qualified vertical opportunities",
          "win rate by industry"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "vertical_market_sales_worker_workflow",
        "name": "Vertical Market Sales — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Vertical Market Sales."
        ],
        "inputs": [
          "Vertical market scorecard with target list, needs, buying triggers, and pipeline",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "vertical_market_sales_worker_qa",
        "name": "Vertical Market Sales — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Vertical Market Sales."
        ],
        "inputs": [
          "Vertical market scorecard with target list, needs, buying triggers, and pipeline",
          "Qualified vertical opportunities",
          "win rate by industry"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "geographic_market_expansion",
    "name": "Geographic Market Expansion",
    "sort_order": 124,
    "category": "Sales Channels",
    "mission": "Menilai area baru berdasarkan jumlah target, kecocokan pasar, bahasa, dan biaya jangkauan.",
    "responsibilities": [
      "Menilai area baru berdasarkan jumlah target, kecocokan pasar, bahasa, dan biaya jangkauan.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Geographic Market Expansion",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Market-entry scorecard, target clusters, local constraints, and test plan",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified market size",
      "regional response",
      "cost per opportunity"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "geographic_market_expansion_source",
        "label": "Geographic Market Expansion — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "geographic_market_expansion_workflow",
        "label": "Geographic Market Expansion — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "geographic_market_expansion_worker_intake",
        "name": "Geographic Market Expansion — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Geographic Market Expansion."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Geographic Market Expansion"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "geographic_market_expansion_worker_analysis",
        "name": "Geographic Market Expansion — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Geographic Market Expansion."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Market-entry scorecard, target clusters, local constraints, and test plan",
          "Qualified market size",
          "regional response"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "geographic_market_expansion_worker_workflow",
        "name": "Geographic Market Expansion — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Geographic Market Expansion."
        ],
        "inputs": [
          "Market-entry scorecard, target clusters, local constraints, and test plan",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "geographic_market_expansion_worker_qa",
        "name": "Geographic Market Expansion — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Geographic Market Expansion."
        ],
        "inputs": [
          "Market-entry scorecard, target clusters, local constraints, and test plan",
          "Qualified market size",
          "regional response"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "channel_partner_acquisition",
    "name": "Channel Partner Acquisition",
    "sort_order": 125,
    "category": "Sales Channels",
    "mission": "Menemukan partner kanal yang berpotensi membawa lead atau proyek berulang.",
    "responsibilities": [
      "Menemukan partner kanal yang berpotensi membawa lead atau proyek berulang.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Channel Partner Acquisition",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Ranked partner pipeline with audience fit, requirements, and next action",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified partners",
      "partner-sourced pipeline",
      "activation rate"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "channel_partner_acquisition_source",
        "label": "Channel Partner Acquisition — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "channel_partner_acquisition_workflow",
        "label": "Channel Partner Acquisition — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "channel_partner_acquisition_worker_intake",
        "name": "Channel Partner Acquisition — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Channel Partner Acquisition."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Channel Partner Acquisition"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "channel_partner_acquisition_worker_analysis",
        "name": "Channel Partner Acquisition — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Channel Partner Acquisition."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Ranked partner pipeline with audience fit, requirements, and next action",
          "Qualified partners",
          "partner-sourced pipeline"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "channel_partner_acquisition_worker_workflow",
        "name": "Channel Partner Acquisition — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Channel Partner Acquisition."
        ],
        "inputs": [
          "Ranked partner pipeline with audience fit, requirements, and next action",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "channel_partner_acquisition_worker_qa",
        "name": "Channel Partner Acquisition — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Channel Partner Acquisition."
        ],
        "inputs": [
          "Ranked partner pipeline with audience fit, requirements, and next action",
          "Qualified partners",
          "partner-sourced pipeline"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "strategic_partnership_development",
    "name": "Strategic Partnership Development",
    "sort_order": 126,
    "category": "Sales Channels",
    "mission": "Mengembangkan kolaborasi strategis dengan kontribusi dan target terukur.",
    "responsibilities": [
      "Mengembangkan kolaborasi strategis dengan kontribusi dan target terukur.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Strategic Partnership Development",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Partner brief with mutual value, roles, risks, and joint targets",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Active partnerships",
      "joint pipeline",
      "sourced revenue"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "strategic_partnership_development_source",
        "label": "Strategic Partnership Development — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "strategic_partnership_development_workflow",
        "label": "Strategic Partnership Development — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "strategic_partnership_development_worker_intake",
        "name": "Strategic Partnership Development — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Strategic Partnership Development."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Strategic Partnership Development"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "strategic_partnership_development_worker_analysis",
        "name": "Strategic Partnership Development — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Strategic Partnership Development."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Partner brief with mutual value, roles, risks, and joint targets",
          "Active partnerships",
          "joint pipeline"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "strategic_partnership_development_worker_workflow",
        "name": "Strategic Partnership Development — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Strategic Partnership Development."
        ],
        "inputs": [
          "Partner brief with mutual value, roles, risks, and joint targets",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "strategic_partnership_development_worker_qa",
        "name": "Strategic Partnership Development — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Strategic Partnership Development."
        ],
        "inputs": [
          "Partner brief with mutual value, roles, risks, and joint targets",
          "Active partnerships",
          "joint pipeline"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "referral_program_operations",
    "name": "Referral Program Operations",
    "sort_order": 127,
    "category": "Sales Channels",
    "mission": "Mengelola rujukan klien dan jaringan profesional sampai terukur dan ditindaklanjuti.",
    "responsibilities": [
      "Mengelola rujukan klien dan jaringan profesional sampai terukur dan ditindaklanjuti.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Referral Program Operations",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Referral register with referrer, permission, qualification, and outcome",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified referrals",
      "referral conversion",
      "response time"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "referral_program_operations_source",
        "label": "Referral Program Operations — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "referral_program_operations_workflow",
        "label": "Referral Program Operations — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "referral_program_operations_worker_intake",
        "name": "Referral Program Operations — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Referral Program Operations."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Referral Program Operations"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "referral_program_operations_worker_analysis",
        "name": "Referral Program Operations — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Referral Program Operations."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Referral register with referrer, permission, qualification, and outcome",
          "Qualified referrals",
          "referral conversion"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "referral_program_operations_worker_workflow",
        "name": "Referral Program Operations — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Referral Program Operations."
        ],
        "inputs": [
          "Referral register with referrer, permission, qualification, and outcome",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "referral_program_operations_worker_qa",
        "name": "Referral Program Operations — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Referral Program Operations."
        ],
        "inputs": [
          "Referral register with referrer, permission, qualification, and outcome",
          "Qualified referrals",
          "referral conversion"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "affiliate_channel_management",
    "name": "Affiliate Channel Management",
    "sort_order": 128,
    "category": "Sales Channels",
    "mission": "Memantau kualitas lead dan kontribusi kanal afiliasi tanpa kehilangan atribusi.",
    "responsibilities": [
      "Memantau kualitas lead dan kontribusi kanal afiliasi tanpa kehilangan atribusi.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Affiliate Channel Management",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Affiliate ledger with validated leads, attribution evidence, quality flags, and review inputs",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified affiliate leads",
      "conversion by partner",
      "invalid-lead rate"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "affiliate_channel_management_source",
        "label": "Affiliate Channel Management — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "affiliate_channel_management_workflow",
        "label": "Affiliate Channel Management — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "affiliate_channel_management_worker_intake",
        "name": "Affiliate Channel Management — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Affiliate Channel Management."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Affiliate Channel Management"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "affiliate_channel_management_worker_analysis",
        "name": "Affiliate Channel Management — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Affiliate Channel Management."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Affiliate ledger with validated leads, attribution evidence, quality flags, and review inputs",
          "Qualified affiliate leads",
          "conversion by partner"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "affiliate_channel_management_worker_workflow",
        "name": "Affiliate Channel Management — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Affiliate Channel Management."
        ],
        "inputs": [
          "Affiliate ledger with validated leads, attribution evidence, quality flags, and review inputs",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "affiliate_channel_management_worker_qa",
        "name": "Affiliate Channel Management — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Affiliate Channel Management."
        ],
        "inputs": [
          "Affiliate ledger with validated leads, attribution evidence, quality flags, and review inputs",
          "Qualified affiliate leads",
          "conversion by partner"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "reseller_white_label_sales",
    "name": "Reseller & White-Label Sales",
    "sort_order": 129,
    "category": "Sales Channels",
    "mission": "Mengelola peluang reseller dan white-label dengan batas harga serta tanggung jawab jelas.",
    "responsibilities": [
      "Mengelola peluang reseller dan white-label dengan batas harga serta tanggung jawab jelas.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Reseller & White-Label Sales",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Reseller pipeline with territory, capability fit, commercial assumptions, and approvals",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified reseller pipeline",
      "activation",
      "channel margin"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "reseller_white_label_sales_source",
        "label": "Reseller & White-Label Sales — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "reseller_white_label_sales_workflow",
        "label": "Reseller & White-Label Sales — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "reseller_white_label_sales_worker_intake",
        "name": "Reseller & White-Label Sales — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Reseller & White-Label Sales."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Reseller & White-Label Sales"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "reseller_white_label_sales_worker_analysis",
        "name": "Reseller & White-Label Sales — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Reseller & White-Label Sales."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Reseller pipeline with territory, capability fit, commercial assumptions, and approvals",
          "Qualified reseller pipeline",
          "activation"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "reseller_white_label_sales_worker_workflow",
        "name": "Reseller & White-Label Sales — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Reseller & White-Label Sales."
        ],
        "inputs": [
          "Reseller pipeline with territory, capability fit, commercial assumptions, and approvals",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "reseller_white_label_sales_worker_qa",
        "name": "Reseller & White-Label Sales — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Reseller & White-Label Sales."
        ],
        "inputs": [
          "Reseller pipeline with territory, capability fit, commercial assumptions, and approvals",
          "Qualified reseller pipeline",
          "activation"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "marketplace_opportunity_intelligence",
    "name": "Marketplace Opportunity Intelligence",
    "sort_order": 130,
    "category": "Sales Channels",
    "mission": "Mencari peluang proyek marketplace dan menyaringnya berdasarkan kecocokan serta kelayakan.",
    "responsibilities": [
      "Mencari peluang proyek marketplace dan menyaringnya berdasarkan kecocokan serta kelayakan.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Marketplace Opportunity Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Deduplicated project queue with budget, fit score, deadline, rules, and status",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified opportunities",
      "shortlist precision",
      "win rate"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "marketplace_opportunity_intelligence_source",
        "label": "Marketplace Opportunity Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "marketplace_opportunity_intelligence_workflow",
        "label": "Marketplace Opportunity Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "marketplace_opportunity_intelligence_worker_intake",
        "name": "Marketplace Opportunity Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Marketplace Opportunity Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Marketplace Opportunity Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "marketplace_opportunity_intelligence_worker_analysis",
        "name": "Marketplace Opportunity Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Marketplace Opportunity Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Deduplicated project queue with budget, fit score, deadline, rules, and status",
          "Qualified opportunities",
          "shortlist precision"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "marketplace_opportunity_intelligence_worker_workflow",
        "name": "Marketplace Opportunity Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Marketplace Opportunity Intelligence."
        ],
        "inputs": [
          "Deduplicated project queue with budget, fit score, deadline, rules, and status",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "marketplace_opportunity_intelligence_worker_qa",
        "name": "Marketplace Opportunity Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Marketplace Opportunity Intelligence."
        ],
        "inputs": [
          "Deduplicated project queue with budget, fit score, deadline, rules, and status",
          "Qualified opportunities",
          "shortlist precision"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "rfp_tender_intelligence",
    "name": "RFP & Tender Intelligence",
    "sort_order": 131,
    "category": "Sales Channels",
    "mission": "Mendeteksi RFP/tender relevan dan memeriksa syarat, tenggat, serta kelayakan.",
    "responsibilities": [
      "Mendeteksi RFP/tender relevan dan memeriksa syarat, tenggat, serta kelayakan.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for RFP & Tender Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Tender register with requirements, deadlines, risks, and bid/no-bid recommendation",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Relevant tenders",
      "eligibility pass rate",
      "deadline coverage"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "rfp_tender_intelligence_source",
        "label": "RFP & Tender Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "rfp_tender_intelligence_workflow",
        "label": "RFP & Tender Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "rfp_tender_intelligence_worker_intake",
        "name": "RFP & Tender Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to RFP & Tender Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for RFP & Tender Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "rfp_tender_intelligence_worker_analysis",
        "name": "RFP & Tender Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to RFP & Tender Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Tender register with requirements, deadlines, risks, and bid/no-bid recommendation",
          "Relevant tenders",
          "eligibility pass rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "rfp_tender_intelligence_worker_workflow",
        "name": "RFP & Tender Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to RFP & Tender Intelligence."
        ],
        "inputs": [
          "Tender register with requirements, deadlines, risks, and bid/no-bid recommendation",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "rfp_tender_intelligence_worker_qa",
        "name": "RFP & Tender Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to RFP & Tender Intelligence."
        ],
        "inputs": [
          "Tender register with requirements, deadlines, risks, and bid/no-bid recommendation",
          "Relevant tenders",
          "eligibility pass rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "procurement_vendor_onboarding",
    "name": "Procurement & Vendor Onboarding",
    "sort_order": 132,
    "category": "Sales Channels",
    "mission": "Menyiapkan status dokumen untuk mendaftar sebagai vendor calon klien.",
    "responsibilities": [
      "Menyiapkan status dokumen untuk mendaftar sebagai vendor calon klien.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Procurement & Vendor Onboarding",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Vendor checklist with missing documents, submission status, and owner responsibilities",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Onboarding completion",
      "time to approval",
      "missing-item count"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "procurement_vendor_onboarding_source",
        "label": "Procurement & Vendor Onboarding — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "procurement_vendor_onboarding_workflow",
        "label": "Procurement & Vendor Onboarding — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "procurement_vendor_onboarding_worker_intake",
        "name": "Procurement & Vendor Onboarding — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Procurement & Vendor Onboarding."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Procurement & Vendor Onboarding"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "procurement_vendor_onboarding_worker_analysis",
        "name": "Procurement & Vendor Onboarding — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Procurement & Vendor Onboarding."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Vendor checklist with missing documents, submission status, and owner responsibilities",
          "Onboarding completion",
          "time to approval"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "procurement_vendor_onboarding_worker_workflow",
        "name": "Procurement & Vendor Onboarding — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Procurement & Vendor Onboarding."
        ],
        "inputs": [
          "Vendor checklist with missing documents, submission status, and owner responsibilities",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "procurement_vendor_onboarding_worker_qa",
        "name": "Procurement & Vendor Onboarding — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Procurement & Vendor Onboarding."
        ],
        "inputs": [
          "Vendor checklist with missing documents, submission status, and owner responsibilities",
          "Onboarding completion",
          "time to approval"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "freelance_platform_opportunity_scoring",
    "name": "Freelance Platform Opportunity Scoring",
    "sort_order": 133,
    "category": "Opportunity Growth",
    "mission": "Menilai proyek freelance berdasarkan budget, scope, kemampuan, dan biaya bidding.",
    "responsibilities": [
      "Menilai proyek freelance berdasarkan budget, scope, kemampuan, dan biaya bidding.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Freelance Platform Opportunity Scoring",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Scored shortlist with budget fit, scope risks, effort, platform rules, and next action",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Shortlist precision",
      "bid efficiency",
      "project win rate"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "freelance_platform_opportunity_scoring_source",
        "label": "Freelance Platform Opportunity Scoring — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "freelance_platform_opportunity_scoring_workflow",
        "label": "Freelance Platform Opportunity Scoring — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "freelance_platform_opportunity_scoring_worker_intake",
        "name": "Freelance Platform Opportunity Scoring — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Freelance Platform Opportunity Scoring."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Freelance Platform Opportunity Scoring"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "freelance_platform_opportunity_scoring_worker_analysis",
        "name": "Freelance Platform Opportunity Scoring — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Freelance Platform Opportunity Scoring."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Scored shortlist with budget fit, scope risks, effort, platform rules, and next action",
          "Shortlist precision",
          "bid efficiency"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "freelance_platform_opportunity_scoring_worker_workflow",
        "name": "Freelance Platform Opportunity Scoring — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Freelance Platform Opportunity Scoring."
        ],
        "inputs": [
          "Scored shortlist with budget fit, scope risks, effort, platform rules, and next action",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "freelance_platform_opportunity_scoring_worker_qa",
        "name": "Freelance Platform Opportunity Scoring — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Freelance Platform Opportunity Scoring."
        ],
        "inputs": [
          "Scored shortlist with budget fit, scope risks, effort, platform rules, and next action",
          "Shortlist precision",
          "bid efficiency"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "lost_deal_reactivation",
    "name": "Lost Deal Reactivation",
    "sort_order": 134,
    "category": "Opportunity Growth",
    "mission": "Menemukan deal lama yang patut ditinjau kembali karena alasan kalah atau kondisi berubah.",
    "responsibilities": [
      "Menemukan deal lama yang patut ditinjau kembali karena alasan kalah atau kondisi berubah.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Lost Deal Reactivation",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Reactivation queue with loss reason, changed signal, permission, and next step",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Reactivated opportunities",
      "win-back rate",
      "stale-contact rate"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "lost_deal_reactivation_source",
        "label": "Lost Deal Reactivation — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "lost_deal_reactivation_workflow",
        "label": "Lost Deal Reactivation — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "lost_deal_reactivation_worker_intake",
        "name": "Lost Deal Reactivation — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lost Deal Reactivation."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Lost Deal Reactivation"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "lost_deal_reactivation_worker_analysis",
        "name": "Lost Deal Reactivation — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lost Deal Reactivation."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Reactivation queue with loss reason, changed signal, permission, and next step",
          "Reactivated opportunities",
          "win-back rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "lost_deal_reactivation_worker_workflow",
        "name": "Lost Deal Reactivation — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lost Deal Reactivation."
        ],
        "inputs": [
          "Reactivation queue with loss reason, changed signal, permission, and next step",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "lost_deal_reactivation_worker_qa",
        "name": "Lost Deal Reactivation — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lost Deal Reactivation."
        ],
        "inputs": [
          "Reactivation queue with loss reason, changed signal, permission, and next step",
          "Reactivated opportunities",
          "win-back rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "stalled_deal_recovery",
    "name": "Stalled Deal Recovery",
    "sort_order": 135,
    "category": "Opportunity Growth",
    "mission": "Mendeteksi deal mandek dan memberi rekomendasi pemulihan berdasarkan hambatan.",
    "responsibilities": [
      "Mendeteksi deal mandek dan memberi rekomendasi pemulihan berdasarkan hambatan.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Stalled Deal Recovery",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Stalled-deal report with last activity, blocker, owner, and recovery action",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Recovery rate",
      "days in stage",
      "next-step coverage"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "stalled_deal_recovery_source",
        "label": "Stalled Deal Recovery — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "stalled_deal_recovery_workflow",
        "label": "Stalled Deal Recovery — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "stalled_deal_recovery_worker_intake",
        "name": "Stalled Deal Recovery — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Stalled Deal Recovery."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Stalled Deal Recovery"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "stalled_deal_recovery_worker_analysis",
        "name": "Stalled Deal Recovery — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Stalled Deal Recovery."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Stalled-deal report with last activity, blocker, owner, and recovery action",
          "Recovery rate",
          "days in stage"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "stalled_deal_recovery_worker_workflow",
        "name": "Stalled Deal Recovery — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Stalled Deal Recovery."
        ],
        "inputs": [
          "Stalled-deal report with last activity, blocker, owner, and recovery action",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "stalled_deal_recovery_worker_qa",
        "name": "Stalled Deal Recovery — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Stalled Deal Recovery."
        ],
        "inputs": [
          "Stalled-deal report with last activity, blocker, owner, and recovery action",
          "Recovery rate",
          "days in stage"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "trial_poc_conversion",
    "name": "Trial & POC Conversion",
    "sort_order": 136,
    "category": "Opportunity Growth",
    "mission": "Menghubungkan hasil trial/POC dengan kriteria sukses dan keputusan komersial berikutnya.",
    "responsibilities": [
      "Menghubungkan hasil trial/POC dengan kriteria sukses dan keputusan komersial berikutnya.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Trial & POC Conversion",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Trial scorecard with adoption evidence, blockers, criteria status, and next step",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Trial-to-paid conversion",
      "time to decision",
      "criteria completion"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "trial_poc_conversion_source",
        "label": "Trial & POC Conversion — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "trial_poc_conversion_workflow",
        "label": "Trial & POC Conversion — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "trial_poc_conversion_worker_intake",
        "name": "Trial & POC Conversion — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Trial & POC Conversion."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Trial & POC Conversion"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "trial_poc_conversion_worker_analysis",
        "name": "Trial & POC Conversion — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Trial & POC Conversion."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Trial scorecard with adoption evidence, blockers, criteria status, and next step",
          "Trial-to-paid conversion",
          "time to decision"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "trial_poc_conversion_worker_workflow",
        "name": "Trial & POC Conversion — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Trial & POC Conversion."
        ],
        "inputs": [
          "Trial scorecard with adoption evidence, blockers, criteria status, and next step",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "trial_poc_conversion_worker_qa",
        "name": "Trial & POC Conversion — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Trial & POC Conversion."
        ],
        "inputs": [
          "Trial scorecard with adoption evidence, blockers, criteria status, and next step",
          "Trial-to-paid conversion",
          "time to decision"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "upsell_opportunity_intelligence",
    "name": "Upsell Opportunity Intelligence",
    "sort_order": 137,
    "category": "Opportunity Growth",
    "mission": "Mendeteksi peningkatan paket yang relevan berdasarkan kebutuhan dan penggunaan layanan.",
    "responsibilities": [
      "Mendeteksi peningkatan paket yang relevan berdasarkan kebutuhan dan penggunaan layanan.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Upsell Opportunity Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Upsell opportunities with evidence, value hypothesis, customer fit, and recommendation",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified upsell pipeline",
      "conversion",
      "incremental margin"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "upsell_opportunity_intelligence_source",
        "label": "Upsell Opportunity Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "upsell_opportunity_intelligence_workflow",
        "label": "Upsell Opportunity Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "upsell_opportunity_intelligence_worker_intake",
        "name": "Upsell Opportunity Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Upsell Opportunity Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Upsell Opportunity Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "upsell_opportunity_intelligence_worker_analysis",
        "name": "Upsell Opportunity Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Upsell Opportunity Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Upsell opportunities with evidence, value hypothesis, customer fit, and recommendation",
          "Qualified upsell pipeline",
          "conversion"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "upsell_opportunity_intelligence_worker_workflow",
        "name": "Upsell Opportunity Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Upsell Opportunity Intelligence."
        ],
        "inputs": [
          "Upsell opportunities with evidence, value hypothesis, customer fit, and recommendation",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "upsell_opportunity_intelligence_worker_qa",
        "name": "Upsell Opportunity Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Upsell Opportunity Intelligence."
        ],
        "inputs": [
          "Upsell opportunities with evidence, value hypothesis, customer fit, and recommendation",
          "Qualified upsell pipeline",
          "conversion"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "cross_sell_opportunity_intelligence",
    "name": "Cross-Sell Opportunity Intelligence",
    "sort_order": 138,
    "category": "Opportunity Growth",
    "mission": "Mencocokkan kebutuhan klien dengan layanan lain yang benar-benar relevan.",
    "responsibilities": [
      "Mencocokkan kebutuhan klien dengan layanan lain yang benar-benar relevan.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Cross-Sell Opportunity Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Cross-sell map with unmet need, eligible service, rationale, risks, and next action",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Qualified cross-sell opportunities",
      "attach rate",
      "customer fit"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "cross_sell_opportunity_intelligence_source",
        "label": "Cross-Sell Opportunity Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "cross_sell_opportunity_intelligence_workflow",
        "label": "Cross-Sell Opportunity Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "cross_sell_opportunity_intelligence_worker_intake",
        "name": "Cross-Sell Opportunity Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cross-Sell Opportunity Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Cross-Sell Opportunity Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "cross_sell_opportunity_intelligence_worker_analysis",
        "name": "Cross-Sell Opportunity Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cross-Sell Opportunity Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Cross-sell map with unmet need, eligible service, rationale, risks, and next action",
          "Qualified cross-sell opportunities",
          "attach rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "cross_sell_opportunity_intelligence_worker_workflow",
        "name": "Cross-Sell Opportunity Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cross-Sell Opportunity Intelligence."
        ],
        "inputs": [
          "Cross-sell map with unmet need, eligible service, rationale, risks, and next action",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "cross_sell_opportunity_intelligence_worker_qa",
        "name": "Cross-Sell Opportunity Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Cross-Sell Opportunity Intelligence."
        ],
        "inputs": [
          "Cross-sell map with unmet need, eligible service, rationale, risks, and next action",
          "Qualified cross-sell opportunities",
          "attach rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "renewal_expansion_revenue",
    "name": "Renewal & Expansion Revenue",
    "sort_order": 139,
    "category": "Opportunity Growth",
    "mission": "Memantau pembaruan kontrak dan kebutuhan baru untuk mendukung pendapatan berulang.",
    "responsibilities": [
      "Memantau pembaruan kontrak dan kebutuhan baru untuk mendukung pendapatan berulang.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Renewal & Expansion Revenue",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Renewal calendar with risk, expansion hypotheses, notice periods, and decisions",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Renewal rate",
      "revenue retention",
      "expansion pipeline"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "renewal_expansion_revenue_source",
        "label": "Renewal & Expansion Revenue — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "renewal_expansion_revenue_workflow",
        "label": "Renewal & Expansion Revenue — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "renewal_expansion_revenue_worker_intake",
        "name": "Renewal & Expansion Revenue — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Renewal & Expansion Revenue."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Renewal & Expansion Revenue"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "renewal_expansion_revenue_worker_analysis",
        "name": "Renewal & Expansion Revenue — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Renewal & Expansion Revenue."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Renewal calendar with risk, expansion hypotheses, notice periods, and decisions",
          "Renewal rate",
          "revenue retention"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "renewal_expansion_revenue_worker_workflow",
        "name": "Renewal & Expansion Revenue — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Renewal & Expansion Revenue."
        ],
        "inputs": [
          "Renewal calendar with risk, expansion hypotheses, notice periods, and decisions",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "renewal_expansion_revenue_worker_qa",
        "name": "Renewal & Expansion Revenue — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Renewal & Expansion Revenue."
        ],
        "inputs": [
          "Renewal calendar with risk, expansion hypotheses, notice periods, and decisions",
          "Renewal rate",
          "revenue retention"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "customer_advocacy_referrals",
    "name": "Customer Advocacy & Referrals",
    "sort_order": 140,
    "category": "Opportunity Growth",
    "mission": "Mengidentifikasi klien yang layak dimintai rujukan dengan tetap meminta izin.",
    "responsibilities": [
      "Mengidentifikasi klien yang layak dimintai rujukan dengan tetap meminta izin.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Customer Advocacy & Referrals",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Advocacy shortlist with satisfaction evidence, permission, opportunity, and owner",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Willing advocates",
      "qualified referrals",
      "permission compliance"
    ],
    "automation_level": "approval_gated",
    "approval_policy": "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.",
    "integrations": [
      {
        "key": "customer_advocacy_referrals_source",
        "label": "Customer Advocacy & Referrals — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "customer_advocacy_referrals_workflow",
        "label": "Customer Advocacy & Referrals — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "customer_advocacy_referrals_worker_intake",
        "name": "Customer Advocacy & Referrals — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Advocacy & Referrals."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Customer Advocacy & Referrals"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "customer_advocacy_referrals_worker_analysis",
        "name": "Customer Advocacy & Referrals — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Advocacy & Referrals."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Advocacy shortlist with satisfaction evidence, permission, opportunity, and owner",
          "Willing advocates",
          "qualified referrals"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "customer_advocacy_referrals_worker_workflow",
        "name": "Customer Advocacy & Referrals — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Advocacy & Referrals."
        ],
        "inputs": [
          "Advocacy shortlist with satisfaction evidence, permission, opportunity, and owner",
          "External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "customer_advocacy_referrals_worker_qa",
        "name": "Customer Advocacy & Referrals — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Customer Advocacy & Referrals."
        ],
        "inputs": [
          "Advocacy shortlist with satisfaction evidence, permission, opportunity, and owner",
          "Willing advocates",
          "qualified referrals"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "sales_forecasting_commitments",
    "name": "Sales Forecasting & Commitments",
    "sort_order": 141,
    "category": "Revenue Operations",
    "mission": "Menyusun forecast dari tahap pipeline, bukti buyer, risiko, dan tanggal keputusan.",
    "responsibilities": [
      "Menyusun forecast dari tahap pipeline, bukti buyer, risiko, dan tanggal keputusan.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Sales Forecasting & Commitments",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Forecast by period and stage with assumptions, confidence range, slippage risk, and history",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Forecast accuracy",
      "slippage rate",
      "pipeline coverage"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "sales_forecasting_commitments_source",
        "label": "Sales Forecasting & Commitments — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "sales_forecasting_commitments_workflow",
        "label": "Sales Forecasting & Commitments — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "sales_forecasting_commitments_worker_intake",
        "name": "Sales Forecasting & Commitments — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Forecasting & Commitments."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Sales Forecasting & Commitments"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_forecasting_commitments_worker_analysis",
        "name": "Sales Forecasting & Commitments — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Forecasting & Commitments."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Forecast by period and stage with assumptions, confidence range, slippage risk, and history",
          "Forecast accuracy",
          "slippage rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_forecasting_commitments_worker_workflow",
        "name": "Sales Forecasting & Commitments — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Forecasting & Commitments."
        ],
        "inputs": [
          "Forecast by period and stage with assumptions, confidence range, slippage risk, and history",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sales_forecasting_commitments_worker_qa",
        "name": "Sales Forecasting & Commitments — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Forecasting & Commitments."
        ],
        "inputs": [
          "Forecast by period and stage with assumptions, confidence range, slippage risk, and history",
          "Forecast accuracy",
          "slippage rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "pipeline_hygiene_crm_quality",
    "name": "Pipeline Hygiene & CRM Quality",
    "sort_order": 142,
    "category": "Revenue Operations",
    "mission": "Menemukan deal tidak lengkap, duplikat, usang, atau bertentangan agar pipeline dapat dipercaya.",
    "responsibilities": [
      "Menemukan deal tidak lengkap, duplikat, usang, atau bertentangan agar pipeline dapat dipercaya.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Pipeline Hygiene & CRM Quality",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "CRM hygiene queue with missing fields, duplicates, stale deals, and corrections",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Complete-record rate",
      "stale deals",
      "duplicate rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "pipeline_hygiene_crm_quality_source",
        "label": "Pipeline Hygiene & CRM Quality — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "pipeline_hygiene_crm_quality_workflow",
        "label": "Pipeline Hygiene & CRM Quality — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "pipeline_hygiene_crm_quality_worker_intake",
        "name": "Pipeline Hygiene & CRM Quality — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pipeline Hygiene & CRM Quality."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Pipeline Hygiene & CRM Quality"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "pipeline_hygiene_crm_quality_worker_analysis",
        "name": "Pipeline Hygiene & CRM Quality — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pipeline Hygiene & CRM Quality."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "CRM hygiene queue with missing fields, duplicates, stale deals, and corrections",
          "Complete-record rate",
          "stale deals"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "pipeline_hygiene_crm_quality_worker_workflow",
        "name": "Pipeline Hygiene & CRM Quality — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pipeline Hygiene & CRM Quality."
        ],
        "inputs": [
          "CRM hygiene queue with missing fields, duplicates, stale deals, and corrections",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "pipeline_hygiene_crm_quality_worker_qa",
        "name": "Pipeline Hygiene & CRM Quality — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pipeline Hygiene & CRM Quality."
        ],
        "inputs": [
          "CRM hygiene queue with missing fields, duplicates, stale deals, and corrections",
          "Complete-record rate",
          "stale deals"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "lead_routing_sla_management",
    "name": "Lead Routing & SLA Management",
    "sort_order": 143,
    "category": "Revenue Operations",
    "mission": "Mendistribusikan lead kepada penanggung jawab tepat dan memantau SLA respons.",
    "responsibilities": [
      "Mendistribusikan lead kepada penanggung jawab tepat dan memantau SLA respons.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Lead Routing & SLA Management",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Routing log with owner, rationale, deadline, escalation, and response timestamp",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "SLA compliance",
      "first-response time",
      "misrouting rate"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "lead_routing_sla_management_source",
        "label": "Lead Routing & SLA Management — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "lead_routing_sla_management_workflow",
        "label": "Lead Routing & SLA Management — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "lead_routing_sla_management_worker_intake",
        "name": "Lead Routing & SLA Management — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Routing & SLA Management."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Lead Routing & SLA Management"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "lead_routing_sla_management_worker_analysis",
        "name": "Lead Routing & SLA Management — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Routing & SLA Management."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Routing log with owner, rationale, deadline, escalation, and response timestamp",
          "SLA compliance",
          "first-response time"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "lead_routing_sla_management_worker_workflow",
        "name": "Lead Routing & SLA Management — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Routing & SLA Management."
        ],
        "inputs": [
          "Routing log with owner, rationale, deadline, escalation, and response timestamp",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "lead_routing_sla_management_worker_qa",
        "name": "Lead Routing & SLA Management — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Lead Routing & SLA Management."
        ],
        "inputs": [
          "Routing log with owner, rationale, deadline, escalation, and response timestamp",
          "SLA compliance",
          "first-response time"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "territory_capacity_planning",
    "name": "Territory & Capacity Planning",
    "sort_order": 144,
    "category": "Revenue Operations",
    "mission": "Menyeimbangkan potensi wilayah, jumlah akun, kapasitas tim, dan beban peluang.",
    "responsibilities": [
      "Menyeimbangkan potensi wilayah, jumlah akun, kapasitas tim, dan beban peluang.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Territory & Capacity Planning",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Territory plan with account allocation, workload, capacity gap, and scenarios",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Territory coverage",
      "workload balance",
      "target potential"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "territory_capacity_planning_source",
        "label": "Territory & Capacity Planning — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "territory_capacity_planning_workflow",
        "label": "Territory & Capacity Planning — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "territory_capacity_planning_worker_intake",
        "name": "Territory & Capacity Planning — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Territory & Capacity Planning."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Territory & Capacity Planning"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "territory_capacity_planning_worker_analysis",
        "name": "Territory & Capacity Planning — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Territory & Capacity Planning."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Territory plan with account allocation, workload, capacity gap, and scenarios",
          "Territory coverage",
          "workload balance"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "territory_capacity_planning_worker_workflow",
        "name": "Territory & Capacity Planning — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Territory & Capacity Planning."
        ],
        "inputs": [
          "Territory plan with account allocation, workload, capacity gap, and scenarios",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "territory_capacity_planning_worker_qa",
        "name": "Territory & Capacity Planning — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Territory & Capacity Planning."
        ],
        "inputs": [
          "Territory plan with account allocation, workload, capacity gap, and scenarios",
          "Territory coverage",
          "workload balance"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "sales_performance_coaching",
    "name": "Sales Performance Coaching",
    "sort_order": 145,
    "category": "Revenue Operations",
    "mission": "Menemukan pola kinerja sales dan area perbaikan berbasis metrik nyata.",
    "responsibilities": [
      "Menemukan pola kinerja sales dan area perbaikan berbasis metrik nyata.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Sales Performance Coaching",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Coaching report with funnel bottleneck, evidence, practice focus, and metric",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Stage conversion",
      "baseline improvement",
      "coaching completion"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "sales_performance_coaching_source",
        "label": "Sales Performance Coaching — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "sales_performance_coaching_workflow",
        "label": "Sales Performance Coaching — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "sales_performance_coaching_worker_intake",
        "name": "Sales Performance Coaching — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Performance Coaching."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Sales Performance Coaching"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_performance_coaching_worker_analysis",
        "name": "Sales Performance Coaching — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Performance Coaching."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Coaching report with funnel bottleneck, evidence, practice focus, and metric",
          "Stage conversion",
          "baseline improvement"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_performance_coaching_worker_workflow",
        "name": "Sales Performance Coaching — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Performance Coaching."
        ],
        "inputs": [
          "Coaching report with funnel bottleneck, evidence, practice focus, and metric",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sales_performance_coaching_worker_qa",
        "name": "Sales Performance Coaching — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Performance Coaching."
        ],
        "inputs": [
          "Coaching report with funnel bottleneck, evidence, practice focus, and metric",
          "Stage conversion",
          "baseline improvement"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "sales_representative_assistant",
    "name": "Sales Representative Assistant",
    "sort_order": 146,
    "category": "Revenue Operations",
    "mission": "Menyiapkan daftar kerja harian sales berdasarkan prioritas, CRM, dan playbook disetujui.",
    "responsibilities": [
      "Menyiapkan daftar kerja harian sales berdasarkan prioritas, CRM, dan playbook disetujui.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Sales Representative Assistant",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Daily work queue with next action, CRM context, due time, and policy reminders",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Task completion",
      "follow-up timeliness",
      "CRM accuracy"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "sales_representative_assistant_source",
        "label": "Sales Representative Assistant — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "sales_representative_assistant_workflow",
        "label": "Sales Representative Assistant — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "sales_representative_assistant_worker_intake",
        "name": "Sales Representative Assistant — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Representative Assistant."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Sales Representative Assistant"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_representative_assistant_worker_analysis",
        "name": "Sales Representative Assistant — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Representative Assistant."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Daily work queue with next action, CRM context, due time, and policy reminders",
          "Task completion",
          "follow-up timeliness"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_representative_assistant_worker_workflow",
        "name": "Sales Representative Assistant — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Representative Assistant."
        ],
        "inputs": [
          "Daily work queue with next action, CRM context, due time, and policy reminders",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sales_representative_assistant_worker_qa",
        "name": "Sales Representative Assistant — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Representative Assistant."
        ],
        "inputs": [
          "Daily work queue with next action, CRM context, due time, and policy reminders",
          "Task completion",
          "follow-up timeliness"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "sales_enablement_asset_intelligence",
    "name": "Sales Enablement Asset Intelligence",
    "sort_order": 147,
    "category": "Revenue Operations",
    "mission": "Merekomendasikan materi sales yang sudah disetujui tanpa membuat konten baru.",
    "responsibilities": [
      "Merekomendasikan materi sales yang sudah disetujui tanpa membuat konten baru.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Sales Enablement Asset Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Approved asset shortlist with rationale, version, permissions, and evidence gaps",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Asset relevance",
      "reuse rate",
      "time-to-find evidence"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "sales_enablement_asset_intelligence_source",
        "label": "Sales Enablement Asset Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "sales_enablement_asset_intelligence_workflow",
        "label": "Sales Enablement Asset Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "sales_enablement_asset_intelligence_worker_intake",
        "name": "Sales Enablement Asset Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Enablement Asset Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Sales Enablement Asset Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_enablement_asset_intelligence_worker_analysis",
        "name": "Sales Enablement Asset Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Enablement Asset Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Approved asset shortlist with rationale, version, permissions, and evidence gaps",
          "Asset relevance",
          "reuse rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "sales_enablement_asset_intelligence_worker_workflow",
        "name": "Sales Enablement Asset Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Enablement Asset Intelligence."
        ],
        "inputs": [
          "Approved asset shortlist with rationale, version, permissions, and evidence gaps",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "sales_enablement_asset_intelligence_worker_qa",
        "name": "Sales Enablement Asset Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Sales Enablement Asset Intelligence."
        ],
        "inputs": [
          "Approved asset shortlist with rationale, version, permissions, and evidence gaps",
          "Asset relevance",
          "reuse rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "competitor_deal_intelligence",
    "name": "Competitor Deal Intelligence",
    "sort_order": 148,
    "category": "Revenue Operations",
    "mission": "Menganalisis informasi kompetitor yang sah dan alasan deal kalah untuk memperbaiki strategi.",
    "responsibilities": [
      "Menganalisis informasi kompetitor yang sah dan alasan deal kalah untuk memperbaiki strategi.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Competitor Deal Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Competitor brief with sourced facts, win/loss signals, and recommendations",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Evidence freshness",
      "competitive win rate",
      "insight coverage"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "competitor_deal_intelligence_source",
        "label": "Competitor Deal Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "competitor_deal_intelligence_workflow",
        "label": "Competitor Deal Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "competitor_deal_intelligence_worker_intake",
        "name": "Competitor Deal Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Competitor Deal Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Competitor Deal Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "competitor_deal_intelligence_worker_analysis",
        "name": "Competitor Deal Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Competitor Deal Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Competitor brief with sourced facts, win/loss signals, and recommendations",
          "Evidence freshness",
          "competitive win rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "competitor_deal_intelligence_worker_workflow",
        "name": "Competitor Deal Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Competitor Deal Intelligence."
        ],
        "inputs": [
          "Competitor brief with sourced facts, win/loss signals, and recommendations",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "competitor_deal_intelligence_worker_qa",
        "name": "Competitor Deal Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Competitor Deal Intelligence."
        ],
        "inputs": [
          "Competitor brief with sourced facts, win/loss signals, and recommendations",
          "Evidence freshness",
          "competitive win rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "pricing_competitiveness_intelligence",
    "name": "Pricing Competitiveness Intelligence",
    "sort_order": 149,
    "category": "Revenue Operations",
    "mission": "Membandingkan sinyal harga pasar yang sah dengan nilai layanan dan batas margin.",
    "responsibilities": [
      "Membandingkan sinyal harga pasar yang sah dengan nilai layanan dan batas margin.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Pricing Competitiveness Intelligence",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Pricing benchmark with source/date, comparable scope, confidence, and safe recommendation",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Benchmark freshness",
      "proposal win rate",
      "margin preservation"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "pricing_competitiveness_intelligence_source",
        "label": "Pricing Competitiveness Intelligence — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "pricing_competitiveness_intelligence_workflow",
        "label": "Pricing Competitiveness Intelligence — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "pricing_competitiveness_intelligence_worker_intake",
        "name": "Pricing Competitiveness Intelligence — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing Competitiveness Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Pricing Competitiveness Intelligence"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "pricing_competitiveness_intelligence_worker_analysis",
        "name": "Pricing Competitiveness Intelligence — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing Competitiveness Intelligence."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Pricing benchmark with source/date, comparable scope, confidence, and safe recommendation",
          "Benchmark freshness",
          "proposal win rate"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "pricing_competitiveness_intelligence_worker_workflow",
        "name": "Pricing Competitiveness Intelligence — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing Competitiveness Intelligence."
        ],
        "inputs": [
          "Pricing benchmark with source/date, comparable scope, confidence, and safe recommendation",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "pricing_competitiveness_intelligence_worker_qa",
        "name": "Pricing Competitiveness Intelligence — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Pricing Competitiveness Intelligence."
        ],
        "inputs": [
          "Pricing benchmark with source/date, comparable scope, confidence, and safe recommendation",
          "Benchmark freshness",
          "proposal win rate"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  },
  {
    "slug": "revenue_attribution_channel_roi",
    "name": "Revenue Attribution & Channel ROI",
    "sort_order": 150,
    "category": "Revenue Operations",
    "mission": "Menghubungkan sumber lead ke peluang dan pendapatan untuk mengevaluasi efektivitas kanal.",
    "responsibilities": [
      "Menghubungkan sumber lead ke peluang dan pendapatan untuk mengevaluasi efektivitas kanal.",
      "Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria",
      "Maintain owner, status, evidence source, SLA, and next action",
      "Log exceptions and escalate blocked or high-risk decisions"
    ],
    "inputs": [
      "CRM and existing prospect/opportunity history",
      "Authorized source evidence for Revenue Attribution & Channel ROI",
      "Approved AIGROWTH service catalog, capacity, and commercial guardrails"
    ],
    "outputs": [
      "Channel report with sourced pipeline, revenue, cost assumptions, confidence, and recommendation",
      "Prioritized work queue with owner, status, SLA, and next action",
      "Evidence trail, exceptions, and measurable results for Owner Dashboard"
    ],
    "kpis": [
      "Attributed pipeline",
      "channel ROI",
      "cost per qualified opportunity"
    ],
    "automation_level": "assisted",
    "approval_policy": "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.",
    "integrations": [
      {
        "key": "revenue_attribution_channel_roi_source",
        "label": "Revenue Attribution & Channel ROI — authorized source",
        "required": true,
        "notes": "Verify authorization, provenance, freshness, schema, and applicable platform/privacy requirements; do not mark connected until tested."
      },
      {
        "key": "revenue_attribution_channel_roi_workflow",
        "label": "Revenue Attribution & Channel ROI — workflow and outcome tracking",
        "required": true,
        "notes": "Track status, score, evidence, SLA, owner, exceptions, timestamps, next action, and audit history; keep not_connected until tested."
      }
    ],
    "workers": [
      {
        "key": "revenue_attribution_channel_roi_worker_intake",
        "name": "Revenue Attribution & Channel ROI — Intake Agent",
        "role": "Research & Intake",
        "mission": "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
        "responsibilities": [
          "Collect and validate authorized source inputs, preserve provenance, and flag missing or stale fields.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Revenue Attribution & Channel ROI."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Authorized source evidence for Revenue Attribution & Channel ROI"
        ],
        "outputs": [
          "Validated input bundle with source evidence and missing-data flags."
        ],
        "kpis": [
          "source validity",
          "field completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "revenue_attribution_channel_roi_worker_analysis",
        "name": "Revenue Attribution & Channel ROI — Analysis Agent",
        "role": "Analysis & Prioritization",
        "mission": "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
        "responsibilities": [
          "Analyze inputs against the division mission, scoring criteria, expected value, urgency, and risk.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Revenue Attribution & Channel ROI."
        ],
        "inputs": [
          "CRM and existing prospect/opportunity history",
          "Channel report with sourced pipeline, revenue, cost assumptions, confidence, and recommendation",
          "Attributed pipeline",
          "channel ROI"
        ],
        "outputs": [
          "Evidence-backed scorecard with priority, confidence, and recommended next action."
        ],
        "kpis": [
          "scoring completeness",
          "decision confidence"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      },
      {
        "key": "revenue_attribution_channel_roi_worker_workflow",
        "name": "Revenue Attribution & Channel ROI — Workflow & Handoff Agent",
        "role": "Workflow & Handoff",
        "mission": "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
        "responsibilities": [
          "Prepare the structured workflow task, handoff, or approval request; external actions require approval and a live executor.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Revenue Attribution & Channel ROI."
        ],
        "inputs": [
          "Channel report with sourced pipeline, revenue, cost assumptions, confidence, and recommendation",
          "Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval."
        ],
        "outputs": [
          "Structured task or handoff with owner, due time, approval requirement, and blocked reason if needed."
        ],
        "kpis": [
          "handoff completeness",
          "SLA readiness"
        ],
        "status": "planned",
        "automation_level": "approval_gated",
        "approval_required": true
      },
      {
        "key": "revenue_attribution_channel_roi_worker_qa",
        "name": "Revenue Attribution & Channel ROI — QA & Reporting Agent",
        "role": "Quality & Reporting",
        "mission": "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
        "responsibilities": [
          "Validate output quality and policy compliance, log exceptions, and report the measurable outcome.",
          "Apply the mission, inputs, outputs, KPIs, and approval policy specific to Revenue Attribution & Channel ROI."
        ],
        "inputs": [
          "Channel report with sourced pipeline, revenue, cost assumptions, confidence, and recommendation",
          "Attributed pipeline",
          "channel ROI"
        ],
        "outputs": [
          "Quality-checked result, exception log, KPI status, and next-step handoff.",
          "Final handoff summary for the division and Owner Dashboard"
        ],
        "kpis": [
          "quality pass rate",
          "audit completeness"
        ],
        "status": "planned",
        "automation_level": "assisted",
        "approval_required": false
      }
    ]
  }
];
