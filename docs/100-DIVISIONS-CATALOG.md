# AIGROWTH — Katalog Lengkap 100 Divisi

Total: **100 divisi**, **210 definisi kebutuhan integrasi**. Setiap profil mendeskripsikan misi, tanggung jawab, input/output, KPI, automation level, kebijakan approval, dan dua atau lebih konektor yang dibutuhkan. Ini merupakan rancangan sistem; konektor berstatus `not_connected` sampai benar-benar diverifikasi.

## Ringkasan kategori

| Kategori | Jumlah divisi |
|---|---:|
| Analytics | 2 |
| Data | 3 |
| Delivery | 10 |
| Finance | 5 |
| Governance | 11 |
| Knowledge | 4 |
| Operations | 8 |
| Platform | 18 |
| Quality | 3 |
| Reliability | 3 |
| Research | 13 |
| Revenue | 16 |
| Security | 4 |

## Daftar lengkap

### 001. Sales & CRM

- **ID:** `sales_crm`  
- **Kategori:** Revenue  
- **Misi:** Mengubah prospek berkualitas menjadi percakapan, peluang, dan klien.
- **Tanggung jawab:** Lead validation; scoring; pipeline; scheduled follow-up; reply tracking
- **Input:** Verified leads; Outreach/reply history; Service offer and ICP
- **Output:** Scored leads; Pipeline and next action; Follow-up schedule; Win/loss analysis
- **KPI:** Qualified leads; Response rate; Meeting rate; Win rate; Speed to lead
- **Automation level:** `assisted`  
- **Approval policy:** Outreach follows consent, opt-out and sending limits; unsent campaigns require approval.
- **Kebutuhan integrasi:** `crm_database` (CRM / D1; wajib; status awal `not_connected`); `email_inbox` (Email inbox and outbound provider; wajib; status awal `not_connected`); `lead_sources` (Lead source connectors; wajib; status awal `not_connected`)

### 002. Sales Outsourcing Multi-Platform

- **ID:** `sales_outsourcing_multi_platform`  
- **Kategori:** Revenue  
- **Misi:** Menemukan dan mengelola peluang proyek lintas platform freelance, vendor directory, dan kanal profesional secara patuh.
- **Tanggung jawab:** Discover opportunities; qualify budget/fit; deduplicate; draft proposals; track status
- **Input:** Platform registry; Service/pricing/availability; Public project opportunities
- **Output:** Opportunity pipeline; Priority score; Proposal drafts; Source and status log
- **KPI:** Qualified opportunities; Approved proposals; Win rate; Acquisition cost; Duplicate prevention
- **Automation level:** `approval_gated`  
- **Approval policy:** Respect platform terms, login protections, CAPTCHA and rate limits; do not auto-submit proposals without approval.
- **Kebutuhan integrasi:** `platform_connectors` (Official platform connectors; wajib; status awal `not_connected`); `opportunity_db` (Opportunity registry; wajib; status awal `not_connected`); `proposal_approval` (Proposal approval; wajib; status awal `not_connected`)

### 003. Marketing Intelligence

- **ID:** `marketing_intelligence`  
- **Kategori:** Research  
- **Misi:** Memberikan intel pasar dan rekomendasi pemasaran berbasis bukti; tidak membuat atau menerbitkan konten otomatis.
- **Tanggung jawab:** Research niches and competitors; compare public offers; identify intent; recommend experiments
- **Input:** Public search/research sources; CRM outcomes; Competitor websites/directories
- **Output:** Source-backed market briefs; Opportunity scoring; Competitor snapshots; Experiment recommendations
- **KPI:** Source freshness; Evidence-backed briefs; Opportunity acceptance; Decision time
- **Automation level:** `assisted`  
- **Approval policy:** Research and analysis only; no automated content production or publishing.
- **Kebutuhan integrasi:** `research_sources` (Search / research sources; wajib; status awal `not_connected`); `crm_feedback` (CRM outcomes; opsional; status awal `not_connected`)

### 004. Client Success

- **ID:** `client_success`  
- **Kategori:** Delivery  
- **Misi:** Menjaga pengalaman klien dari onboarding sampai retensi berdasarkan status proyek yang nyata.
- **Tanggung jawab:** Onboarding checklist; feedback and risks; progress updates; retention signals
- **Input:** Approved contract/scope; Delivery milestones; Feedback and communication history
- **Output:** Client health status; Onboarding checklist; Draft status updates; Retention risks
- **KPI:** Time to onboard; Milestones on time; Satisfaction; Retention rate
- **Automation level:** `assisted`  
- **Approval policy:** Scope changes, deadlines, pricing commitments and refunds require Owner approval.
- **Kebutuhan integrasi:** `client_crm` (Client CRM; wajib; status awal `not_connected`); `project_status` (Project/task tracker; wajib; status awal `not_connected`); `client_messaging` (Client messaging channel; opsional; status awal `not_connected`)

### 005. Operations & Service Delivery

- **ID:** `operations_service_delivery`  
- **Kategori:** Delivery  
- **Misi:** Mengubah pekerjaan yang terjual menjadi delivery terencana, terassign, teruji, dan selesai tepat waktu.
- **Tanggung jawab:** Break scope into tasks; schedule dependencies; coordinate handoffs; check acceptance criteria
- **Input:** Approved scope; Team capacity and backlog; Acceptance criteria and deadlines
- **Output:** Delivery plan; Task breakdown; Milestone status; Handover checklist
- **KPI:** On-time delivery; Milestone completion; Rework rate; SLA breaches
- **Automation level:** `assisted`  
- **Approval policy:** Scope changes, new spend and external commitments need approval.
- **Kebutuhan integrasi:** `project_store` (Project/task storage; wajib; status awal `not_connected`); `approval_queue` (Owner approval queue; wajib; status awal `not_connected`); `client_success_handoff` (Client Success handoff; wajib; status awal `not_connected`)

### 006. Technology & Automation

- **ID:** `technology_automation`  
- **Kategori:** Platform  
- **Misi:** Membangun dan memelihara otomasi yang aman, terdokumentasi, dapat dipulihkan, dan hemat biaya.
- **Tanggung jawab:** Manage workflows/APIs; retries and idempotency; server-side secrets; releases and rollback
- **Input:** Process specs; Controlled credentials; Approved change requests
- **Output:** Versioned workflows; Integration health; Release notes; Rollback plans
- **KPI:** Successful run rate; MTTR; Automation coverage; Cost per successful run
- **Automation level:** `approval_gated`  
- **Approval policy:** Production deploys, destructive schema changes, new spend and secrets access need approval.
- **Kebutuhan integrasi:** `cloudflare_workers` (Cloudflare Workers; wajib; status awal `not_connected`); `d1_storage` (Cloudflare D1; wajib; status awal `not_connected`); `source_control` (GitHub repository; opsional; status awal `not_connected`)

### 007. Quality Assurance & Reliability

- **ID:** `qa_reliability`  
- **Kategori:** Platform  
- **Misi:** Menguji fungsi nyata dan mendeteksi kegagalan sebelum berdampak ke klien atau pendapatan.
- **Tanggung jawab:** Health checks; API/data validation; regression tests; incidents and root cause
- **Input:** Test cases; Health endpoints/logs; Release history
- **Output:** Test results; Incident records; Root cause analysis; Release readiness
- **KPI:** Defect escape rate; Time to detect; Time to recover; Test coverage
- **Automation level:** `assisted`  
- **Approval policy:** Restart, rollback or production repair only through approved runbooks.
- **Kebutuhan integrasi:** `health_targets` (Website/API health endpoints; wajib; status awal `not_connected`); `test_runner` (CI / smoke test runner; wajib; status awal `not_connected`); `incident_sink` (Incident logging; wajib; status awal `not_connected`)

### 008. Data & Integration Intelligence

- **ID:** `data_integration_intelligence`  
- **Kategori:** Platform  
- **Misi:** Menjaga data lintas sistem konsisten, terlacak asalnya, dan layak dipakai untuk keputusan.
- **Tanggung jawab:** Schema mapping; deduplication; stale/conflict detection; sync and reconciliation
- **Input:** Databases/API sources; Schema mappings; Sync logs and dedupe rules
- **Output:** Validated records; Sync error report; Data quality score; Reconciliation report
- **KPI:** Sync success rate; Duplicate rate; Data freshness; Schema drift
- **Automation level:** `assisted`  
- **Approval policy:** Schema changes, bulk merges/deletes and large backfills need approval.
- **Kebutuhan integrasi:** `core_d1` (AIGROWTH D1; wajib; status awal `not_connected`); `source_contracts` (Source API contracts; wajib; status awal `not_connected`); `sync_logs` (Sync logs; wajib; status awal `not_connected`)

### 009. Finance Analytics

- **ID:** `finance_analytics`  
- **Kategori:** Governance  
- **Misi:** Memberi Owner data akurat pendapatan, biaya, margin, arus kas, dan penggunaan tools.
- **Tanggung jawab:** Reconcile confirmed income; monitor tool/API costs; calculate margins; forecast budgets
- **Input:** Confirmed transactions; Tool costs/invoices; Project, billing and budget records
- **Output:** Revenue/cost/margin reports; Cashflow forecast; Budget alerts; Project profitability
- **KPI:** Gross margin; Operating cost; Cash runway; Forecast variance
- **Automation level:** `approval_gated`  
- **Approval policy:** Analytics only; payments, refunds, purchases and money transfers are never auto-executed.
- **Kebutuhan integrasi:** `transaction_source` (Payment / transaction source; wajib; status awal `not_connected`); `expense_source` (Expense and tool usage data; wajib; status awal `not_connected`); `project_finance` (Project/billing records; wajib; status awal `not_connected`)

### 010. Owner Control

- **ID:** `owner_control`  
- **Kategori:** Governance  
- **Misi:** Memberi Owner satu titik kendali untuk status divisi, prioritas, risiko, dan persetujuan.
- **Tanggung jawab:** Executive summary; approvals/escalations; cross-division priorities; decision and audit log
- **Input:** Division KPIs; Task queue, approvals, incidents; Finance and delivery data
- **Output:** Executive dashboard; Approval decisions; Prioritized backlog; Audit trail
- **KPI:** Approval age; Priority SLA; Critical incidents open; Cross-division completion
- **Automation level:** `approval_gated`  
- **Approval policy:** Owner is final authority for high-risk, budget-changing and sensitive external actions.
- **Kebutuhan integrasi:** `division_registry` (Division registry; wajib; status awal `not_connected`); `approvals_auth` (Owner authentication/approvals; wajib; status awal `not_connected`); `audit_logs` (Audit/event logs; wajib; status awal `not_connected`)

### 011. Website & System Monitoring

- **ID:** `website_system_monitoring`  
- **Kategori:** Platform  
- **Misi:** Memantau website, Worker, endpoint, dan job terjadwal agar gangguan cepat diketahui.
- **Tanggung jawab:** Check uptime/HTTP/latency; inspect Worker and cron health; detect availability changes; escalate incidents
- **Input:** Domains/endpoints; Expected status and latency; Worker logs and scheduled results
- **Output:** Uptime timeline; Alerts/incidents; Availability report; Escalation status
- **KPI:** Uptime; Time to detect; False positive rate; Incident resolution
- **Automation level:** `assisted`  
- **Approval policy:** Monitoring and alerts may run automatically; DNS, deploy and production restart require approval/runbook.
- **Kebutuhan integrasi:** `monitor_targets` (Website/API targets; wajib; status awal `not_connected`); `scheduled_monitor` (Cloudflare Cron; wajib; status awal `not_connected`); `incident_notifications` (Incident notification channel; wajib; status awal `not_connected`)

### 012. ICP & Offer Strategy

- **ID:** `icp_offer_strategy`  
- **Kategori:** Revenue  
- **Misi:** Menetapkan ideal customer profile dan penawaran yang paling cocok dengan kapabilitas AIGROWTH.
- **Tanggung jawab:** Membandingkan segmen, pain point, anggaran, dan bukti kebutuhan sebelum menetapkan prioritas target.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** CRM outcomes dan service catalog; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** ICP scorecard dan offer-fit brief; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Offer acceptance; qualified-segment rate
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `icp_offer_strategy_source` (ICP & Offer Strategy — primary data/source; wajib; status awal `not_connected`); `icp_offer_strategy_validation` (ICP & Offer Strategy — validation and logs; wajib; status awal `not_connected`)

### 013. Account-Based Prospecting

- **ID:** `account_based_prospecting`  
- **Kategori:** Revenue  
- **Misi:** Membangun daftar akun sasaran bernilai tinggi dengan konteks yang relevan.
- **Tanggung jawab:** Memetakan akun, stakeholder publik, sinyal kebutuhan, dan alasan pendekatan yang dapat diverifikasi.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Account directories dan public company pages; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Target account lists dan account plans; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Account fit; verified-contact coverage
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `account_based_prospecting_source` (Account-Based Prospecting — primary data/source; wajib; status awal `not_connected`); `account_based_prospecting_validation` (Account-Based Prospecting — validation and logs; wajib; status awal `not_connected`)

### 014. Lead Enrichment

- **ID:** `lead_enrichment`  
- **Kategori:** Revenue  
- **Misi:** Melengkapi rekaman lead dengan data bisnis yang relevan, seperlunya, dan bersumber jelas.
- **Tanggung jawab:** Menormalkan perusahaan, domain, industri, ukuran publik, dan provenance; tandai ketidakpastian.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Lead records dan permitted public sources; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Enriched lead records dengan confidence/source; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Field completeness; evidence freshness
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `lead_enrichment_source` (Lead Enrichment — primary data/source; wajib; status awal `not_connected`); `lead_enrichment_validation` (Lead Enrichment — validation and logs; wajib; status awal `not_connected`)

### 015. Lead Qualification

- **ID:** `lead_qualification`  
- **Kategori:** Revenue  
- **Misi:** Menyaring lead berdasarkan fit, kebutuhan, urgensi, dan kesiapan berkomunikasi.
- **Tanggung jawab:** Menghitung qualification criteria, menulis alasan skor, dan mengembalikan lead yang belum cukup bukti.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** CRM lead records dan ICP; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Qualified/disqualified decisions dengan alasan; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Qualification precision; sales acceptance
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `lead_qualification_source` (Lead Qualification — primary data/source; wajib; status awal `not_connected`); `lead_qualification_validation` (Lead Qualification — validation and logs; wajib; status awal `not_connected`)

### 016. Email Deliverability

- **ID:** `email_deliverability`  
- **Kategori:** Revenue  
- **Misi:** Menjaga reputasi dan keterkiriman email outbound pada kanal resmi.
- **Tanggung jawab:** Memantau bounce, complaint, domain authentication, suppression lists, dan kesehatan pengiriman.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Provider delivery logs dan domain DNS; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Deliverability report dan corrective checklist; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Bounce rate; complaint rate; inbox placement signals
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `email_deliverability_source` (Email Deliverability — primary data/source; wajib; status awal `not_connected`); `email_deliverability_validation` (Email Deliverability — validation and logs; wajib; status awal `not_connected`)

### 017. Outreach Sequence Intelligence

- **ID:** `outreach_sequence_intelligence`  
- **Kategori:** Revenue  
- **Misi:** Menentukan waktu dan urutan tindak lanjut yang wajar tanpa mengirim pesan di luar kebijakan.
- **Tanggung jawab:** Menyusun jadwal, suppression checks, frequency caps, dan stop condition setelah balasan atau opt-out.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** CRM timeline dan approved outreach policy; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Sequence schedule dan follow-up queue; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Follow-up compliance; reply rate
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `outreach_sequence_intelligence_source` (Outreach Sequence Intelligence — primary data/source; wajib; status awal `not_connected`); `outreach_sequence_intelligence_validation` (Outreach Sequence Intelligence — validation and logs; wajib; status awal `not_connected`)

### 018. Sales Enablement

- **ID:** `sales_enablement`  
- **Kategori:** Revenue  
- **Misi:** Menyediakan bukti layanan, studi kasus, dan materi referensi yang membantu percakapan sales.
- **Tanggung jawab:** Memetakan pertanyaan prospek ke bukti portfolio, batas layanan, harga yang disetujui, dan jawaban standar.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Service catalog, portfolio, FAQs; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Sales reference kit dan objection map; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Evidence coverage; answer usefulness
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `sales_enablement_source` (Sales Enablement — primary data/source; wajib; status awal `not_connected`); `sales_enablement_validation` (Sales Enablement — validation and logs; wajib; status awal `not_connected`)

### 019. Proposal & RFP Operations

- **ID:** `proposal_rfp_operations`  
- **Kategori:** Revenue  
- **Misi:** Mengelola kelengkapan, persyaratan, dan proses review proposal serta permintaan penawaran.
- **Tanggung jawab:** Mengurai requirements, deadline, eligibility, evidence needed, dan approval checklist sebelum submission.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Opportunity briefs dan procurement requirements; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** RFP compliance matrix dan proposal draft pack; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Requirement coverage; on-time review
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `proposal_rfp_operations_source` (Proposal & RFP Operations — primary data/source; wajib; status awal `not_connected`); `proposal_rfp_operations_validation` (Proposal & RFP Operations — validation and logs; wajib; status awal `not_connected`)

### 020. Pricing & Packaging Intelligence

- **ID:** `pricing_packaging_intelligence`  
- **Kategori:** Revenue  
- **Misi:** Membantu menetapkan paket dan harga berdasarkan biaya, kompleksitas, serta nilai yang ditawarkan.
- **Tanggung jawab:** Membandingkan public price signals, delivery cost, scope limits, and margin floor.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Cost data, offer catalog, public price signals; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Pricing comparison dan package recommendations; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Gross-margin floor compliance; quote acceptance
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `pricing_packaging_intelligence_source` (Pricing & Packaging Intelligence — primary data/source; wajib; status awal `not_connected`); `pricing_packaging_intelligence_validation` (Pricing & Packaging Intelligence — validation and logs; wajib; status awal `not_connected`)

### 021. Partnerships & Affiliates

- **ID:** `partnerships_affiliates`  
- **Kategori:** Revenue  
- **Misi:** Menilai peluang partnership dan afiliasi yang relevan dengan layanan AIGROWTH.
- **Tanggung jawab:** Mencari kecocokan audiens, terms, attribution, incentive cost, dan conflict risks.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Partner directories dan partnership terms; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Partner shortlist dan due-diligence notes; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Partner fit; qualified referrals
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `partnerships_affiliates_source` (Partnerships & Affiliates — primary data/source; wajib; status awal `not_connected`); `partnerships_affiliates_validation` (Partnerships & Affiliates — validation and logs; wajib; status awal `not_connected`)

### 022. Channel Partnerships

- **ID:** `channel_partnerships`  
- **Kategori:** Revenue  
- **Misi:** Mengembangkan kanal rujukan melalui konsultan, agensi, dan penyedia layanan komplementer.
- **Tanggung jawab:** Membangun partner map, mutual fit, referral process, and co-selling handoff.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Partner profiles dan referral history; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Channel plan dan partner pipeline; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Referral conversion; active partner rate
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `channel_partnerships_source` (Channel Partnerships — primary data/source; wajib; status awal `not_connected`); `channel_partnerships_validation` (Channel Partnerships — validation and logs; wajib; status awal `not_connected`)

### 023. Revenue Operations

- **ID:** `revenue_operations`  
- **Kategori:** Revenue  
- **Misi:** Menjaga konsistensi definisi funnel, forecast, dan laporan performa pendapatan.
- **Tanggung jawab:** Menyelaraskan lifecycle stages, source attribution, pipeline hygiene, dan forecast assumptions.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** CRM pipeline dan confirmed sales outcomes; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Revenue dashboard definitions dan forecast inputs; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Pipeline hygiene; forecast variance
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `revenue_operations_source` (Revenue Operations — primary data/source; wajib; status awal `not_connected`); `revenue_operations_validation` (Revenue Operations — validation and logs; wajib; status awal `not_connected`)

### 024. SEO Intelligence

- **ID:** `seo_intelligence`  
- **Kategori:** Research  
- **Misi:** Menganalisis visibilitas pencarian, kompetisi keyword, dan peluang organic discovery.
- **Tanggung jawab:** Memetakan query, intent, SERP features, competitor visibility, dan prioritas teknis; tidak memproduksi konten.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Search console/approved SEO tools dan public SERPs; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** SEO opportunity map dan technical findings; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Query coverage; visibility change
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `seo_intelligence_source` (SEO Intelligence — primary data/source; wajib; status awal `not_connected`); `seo_intelligence_validation` (SEO Intelligence — validation and logs; wajib; status awal `not_connected`)

### 025. Search Intent Intelligence

- **ID:** `search_intent_intelligence`  
- **Kategori:** Research  
- **Misi:** Mengelompokkan intent pencarian untuk memahami kebutuhan pasar dan kesiapan membeli.
- **Tanggung jawab:** Mengklasifikasi pertanyaan, perbandingan, dan purchase-intent signals berdasarkan sumber.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Search query datasets dan public results; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Search-intent taxonomy dan demand brief; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Intent classification accuracy; buyer-intent coverage
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `search_intent_intelligence_source` (Search Intent Intelligence — primary data/source; wajib; status awal `not_connected`); `search_intent_intelligence_validation` (Search Intent Intelligence — validation and logs; wajib; status awal `not_connected`)

### 026. Competitor Pricing Intelligence

- **ID:** `competitor_pricing_intelligence`  
- **Kategori:** Research  
- **Misi:** Memantau harga dan paket kompetitor yang tersedia secara publik.
- **Tanggung jawab:** Merekam harga, scope, syarat, tanggal pengamatan, serta perbedaan yang dapat diverifikasi.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Public competitor pricing pages; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Dated pricing matrix dan variance alerts; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Price-data freshness; source coverage
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `competitor_pricing_intelligence_source` (Competitor Pricing Intelligence — primary data/source; wajib; status awal `not_connected`); `competitor_pricing_intelligence_validation` (Competitor Pricing Intelligence — validation and logs; wajib; status awal `not_connected`)

### 027. Market Demand Intelligence

- **ID:** `market_demand_intelligence`  
- **Kategori:** Research  
- **Misi:** Memperkirakan permintaan layanan dari sinyal publik dan hasil penjualan yang terukur.
- **Tanggung jawab:** Menggabungkan volume sinyal, kebutuhan industri, conversion evidence, dan confidence level.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Public search trends, CRM outcomes, industry reports; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Market demand and confidence brief; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Forecast error; evidence-backed opportunities
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `market_demand_intelligence_source` (Market Demand Intelligence — primary data/source; wajib; status awal `not_connected`); `market_demand_intelligence_validation` (Market Demand Intelligence — validation and logs; wajib; status awal `not_connected`)

### 028. Customer Voice Intelligence

- **ID:** `customer_voice_intelligence`  
- **Kategori:** Research  
- **Misi:** Merangkum kebutuhan, keberatan, dan bahasa pelanggan dari feedback yang berizin.
- **Tanggung jawab:** Mengelompokkan feedback yang telah diizinkan, memberi tema, dan menjaga anonimisasi seperlunya.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Approved feedback, reviews, support tags; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Voice-of-customer insights dan theme trend; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Theme consistency; traceable evidence
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `customer_voice_intelligence_source` (Customer Voice Intelligence — primary data/source; wajib; status awal `not_connected`); `customer_voice_intelligence_validation` (Customer Voice Intelligence — validation and logs; wajib; status awal `not_connected`)

### 029. Industry Trend Intelligence

- **ID:** `industry_trend_intelligence`  
- **Kategori:** Research  
- **Misi:** Mendeteksi perubahan industri yang dapat memengaruhi permintaan, risiko, atau positioning.
- **Tanggung jawab:** Mengevaluasi tanggal publikasi, tanggal peristiwa, kualitas sumber, dan relevansi bisnis.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Industry sources dan announcements; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Trend brief dengan sumber dan impact rating; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Freshness; verified-source ratio
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `industry_trend_intelligence_source` (Industry Trend Intelligence — primary data/source; wajib; status awal `not_connected`); `industry_trend_intelligence_validation` (Industry Trend Intelligence — validation and logs; wajib; status awal `not_connected`)

### 030. Campaign Performance Intelligence

- **ID:** `campaign_performance_intelligence`  
- **Kategori:** Research  
- **Misi:** Mengevaluasi hasil kampanye berdasarkan metrik dan atribusi yang tersedia.
- **Tanggung jawab:** Membandingkan channel, cost, conversion, UTM, dan data window tanpa mengarang atribusi.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Campaign metrics dan CRM outcomes; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Campaign performance analysis dan tests to consider; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Attribution coverage; CAC data quality
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `campaign_performance_intelligence_source` (Campaign Performance Intelligence — primary data/source; wajib; status awal `not_connected`); `campaign_performance_intelligence_validation` (Campaign Performance Intelligence — validation and logs; wajib; status awal `not_connected`)

### 031. Brand Reputation Intelligence

- **ID:** `brand_reputation_intelligence`  
- **Kategori:** Research  
- **Misi:** Memantau reputasi brand dan sinyal publik yang memerlukan respons manusia.
- **Tanggung jawab:** Mendeteksi review/mention yang relevan, mengelompokkan sentimen dengan confidence, dan mengeskalasi risiko.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Public reviews and permitted brand mentions; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Reputation digest dan response recommendations; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Mention coverage; classification precision
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `brand_reputation_intelligence_source` (Brand Reputation Intelligence — primary data/source; wajib; status awal `not_connected`); `brand_reputation_intelligence_validation` (Brand Reputation Intelligence — validation and logs; wajib; status awal `not_connected`)

### 032. Client Onboarding Operations

- **ID:** `client_onboarding_operations`  
- **Kategori:** Delivery  
- **Misi:** Memastikan klien baru memiliki akses, tujuan, scope, dan acceptance criteria yang jelas.
- **Tanggung jawab:** Melacak checklist, pemilik keputusan, dependency, akses minimal, dan kickoff readiness.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Approved contract and onboarding answers; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Onboarding readiness and missing-item list; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Time to onboard; checklist completion
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `client_onboarding_operations_source` (Client Onboarding Operations — primary data/source; wajib; status awal `not_connected`); `client_onboarding_operations_validation` (Client Onboarding Operations — validation and logs; wajib; status awal `not_connected`)

### 033. Customer Support Triage

- **ID:** `customer_support_triage`  
- **Kategori:** Delivery  
- **Misi:** Mengklasifikasikan pertanyaan klien serta mengarahkan masalah ke pemilik yang tepat.
- **Tanggung jawab:** Mengelompokkan topik, urgensi, impact, SLA, dan kebutuhan eskalasi tanpa mengirim jawaban berisiko otomatis.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Support inbox/tickets and client SLAs; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Ticket classification and routing recommendation; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Routing accuracy; first response time
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `customer_support_triage_source` (Customer Support Triage — primary data/source; wajib; status awal `not_connected`); `customer_support_triage_validation` (Customer Support Triage — validation and logs; wajib; status awal `not_connected`)

### 034. SLA & Escalation Management

- **ID:** `sla_escalation_management`  
- **Kategori:** Delivery  
- **Misi:** Mendeteksi risiko pelanggaran SLA dan mengeskalasi hambatan berdasarkan aturan.
- **Tanggung jawab:** Mengukur elapsed time, severity, impact, dependency, assignee, dan escalation matrix.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Task tracker and agreed SLA definitions; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** SLA risk queue and escalation events; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** SLA attainment; escalation lead time
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `sla_escalation_management_source` (SLA & Escalation Management — primary data/source; wajib; status awal `not_connected`); `sla_escalation_management_validation` (SLA & Escalation Management — validation and logs; wajib; status awal `not_connected`)

### 035. Retention & Churn Intelligence

- **ID:** `retention_churn_intelligence`  
- **Kategori:** Delivery  
- **Misi:** Mendeteksi sinyal risiko churn dari penggunaan, feedback, dan kesehatan hubungan klien.
- **Tanggung jawab:** Menyusun indikator risiko dengan evidence and confidence, lalu merekomendasikan intervensi manusia.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Client health history and feedback; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Churn risk score with evidence; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Risk precision; save rate
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `retention_churn_intelligence_source` (Retention & Churn Intelligence — primary data/source; wajib; status awal `not_connected`); `retention_churn_intelligence_validation` (Retention & Churn Intelligence — validation and logs; wajib; status awal `not_connected`)

### 036. Renewals & Expansion

- **ID:** `renewals_expansion`  
- **Kategori:** Delivery  
- **Misi:** Menemukan peluang renewal dan perluasan layanan berdasarkan hasil nyata.
- **Tanggung jawab:** Melacak renewal dates, service outcomes, capacity, and scope fit; menyiapkan opsi tanpa mengubah kontrak sendiri.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Contracts, delivery outcomes, client health; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Renewal timeline and expansion opportunity list; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Renewal rate; expansion-qualified rate
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `renewals_expansion_source` (Renewals & Expansion — primary data/source; wajib; status awal `not_connected`); `renewals_expansion_validation` (Renewals & Expansion — validation and logs; wajib; status awal `not_connected`)

### 037. Account Health Intelligence

- **ID:** `account_health_intelligence`  
- **Kategori:** Delivery  
- **Misi:** Menyatukan indikator kesehatan akun untuk prioritas Client Success.
- **Tanggung jawab:** Menggabungkan delivery, response, feedback, unresolved issues, and commercial context.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** CRM, project milestones and support tickets; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Account health summary with drivers; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Health-data completeness; risk detection
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `account_health_intelligence_source` (Account Health Intelligence — primary data/source; wajib; status awal `not_connected`); `account_health_intelligence_validation` (Account Health Intelligence — validation and logs; wajib; status awal `not_connected`)

### 038. Client Feedback Loop

- **ID:** `client_feedback_loop`  
- **Kategori:** Delivery  
- **Misi:** Mengubah feedback klien menjadi isu, pemilik, tindakan, dan bukti penyelesaian.
- **Tanggung jawab:** Mengaitkan feedback ke project/task, menghindari duplikasi, dan memverifikasi closure.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Approved client feedback and project tasks; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Feedback action register; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Closure rate; repeat-issue rate
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `client_feedback_loop_source` (Client Feedback Loop — primary data/source; wajib; status awal `not_connected`); `client_feedback_loop_validation` (Client Feedback Loop — validation and logs; wajib; status awal `not_connected`)

### 039. Service Scope & Catalog

- **ID:** `service_scope_catalog`  
- **Kategori:** Delivery  
- **Misi:** Menjaga katalog layanan, batas scope, asumsi, dan acceptance criteria tetap konsisten.
- **Tanggung jawab:** Mengelola service IDs, inclusions/exclusions, dependencies, and change-request rules.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Owner-approved service catalog; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Versioned service definitions and scope matrix; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Scope clarity; change-request frequency
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `service_scope_catalog_source` (Service Scope & Catalog — primary data/source; wajib; status awal `not_connected`); `service_scope_catalog_validation` (Service Scope & Catalog — validation and logs; wajib; status awal `not_connected`)

### 040. Workflow Orchestration

- **ID:** `workflow_orchestration`  
- **Kategori:** Platform  
- **Misi:** Mengoordinasikan ketergantungan workflow dan menegakkan transisi status yang sah.
- **Tanggung jawab:** Mengecek prerequisite, idempotency, retry policy, timeout, and compensating actions.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Workflow definitions and runtime events; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Workflow graphs and safe execution plans; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Successful run rate; duplicate execution rate
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `workflow_orchestration_source` (Workflow Orchestration — primary data/source; wajib; status awal `not_connected`); `workflow_orchestration_validation` (Workflow Orchestration — validation and logs; wajib; status awal `not_connected`)

### 041. API Integration Engineering

- **ID:** `api_integration_engineering`  
- **Kategori:** Platform  
- **Misi:** Membangun koneksi API yang tervalidasi, terukur, dan aman dipulihkan.
- **Tanggung jawab:** Mengelola schema, authentication, retries, pagination, quotas, and response validation.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** API specifications and approved credentials; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Versioned API adapters and contract tests; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Contract pass rate; integration error rate
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `api_integration_engineering_source` (API Integration Engineering — primary data/source; wajib; status awal `not_connected`); `api_integration_engineering_validation` (API Integration Engineering — validation and logs; wajib; status awal `not_connected`)

### 042. Webhook Event Routing

- **ID:** `webhook_event_routing`  
- **Kategori:** Platform  
- **Misi:** Menerima dan merutekan webhook dengan validasi signature dan deduplikasi.
- **Tanggung jawab:** Memverifikasi signature, timestamp, replay windows, idempotency keys, and event ordering.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Webhook provider events and secret bindings; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Validated event routes and delivery log; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Signature validation; retry success
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `webhook_event_routing_source` (Webhook Event Routing — primary data/source; wajib; status awal `not_connected`); `webhook_event_routing_validation` (Webhook Event Routing — validation and logs; wajib; status awal `not_connected`)

### 043. Scheduler & Cron Operations

- **ID:** `scheduler_cron_operations`  
- **Kategori:** Platform  
- **Misi:** Mengatur jadwal job berdasarkan dependensi, rate limit, dan jendela pemeliharaan.
- **Tanggung jawab:** Mengelola cadence, missed-run recovery, concurrency limits, and job locks.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Cloudflare Cron and job inventory; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Schedule registry and missed-run report; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** On-time run rate; overlap prevention
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `scheduler_cron_operations_source` (Scheduler & Cron Operations — primary data/source; wajib; status awal `not_connected`); `scheduler_cron_operations_validation` (Scheduler & Cron Operations — validation and logs; wajib; status awal `not_connected`)

### 044. Secrets & Access Management

- **ID:** `secrets_access_management`  
- **Kategori:** Security  
- **Misi:** Menjaga kredensial, binding, dan hak akses berdasarkan prinsip least privilege.
- **Tanggung jawab:** Mencatat secret owners, rotation schedule, access scopes, and exposure checks without revealing values.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Secret metadata and permission inventory; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Access matrix and rotation checklist; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Overprivileged access count; rotation compliance
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `secrets_access_management_source` (Secrets & Access Management — primary data/source; wajib; status awal `not_connected`); `secrets_access_management_validation` (Secrets & Access Management — validation and logs; wajib; status awal `not_connected`)

### 045. Cloudflare Release Engineering

- **ID:** `cloudflare_release_engineering`  
- **Kategori:** Platform  
- **Misi:** Mengelola deployment Worker secara terkontrol dan dapat di-rollback.
- **Tanggung jawab:** Memvalidasi tests, bindings, compatibility dates, environments, and post-deploy smoke checks.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Git commit, Wrangler configuration and test evidence; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Release plan, deployment result and rollback notes; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Deploy success; rollback readiness
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `cloudflare_release_engineering_source` (Cloudflare Release Engineering — primary data/source; wajib; status awal `not_connected`); `cloudflare_release_engineering_validation` (Cloudflare Release Engineering — validation and logs; wajib; status awal `not_connected`)

### 046. Database Schema & Migration

- **ID:** `database_schema_migration`  
- **Kategori:** Platform  
- **Misi:** Menjaga skema D1 dan migrasi tetap kompatibel, idempotent, dan dapat diaudit.
- **Tanggung jawab:** Memvalidasi migration order, indexes, constraints, seed counts, and backward compatibility.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** SQL migrations and schema inventory; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Migration plan and schema validation report; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Migration pass rate; schema drift
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `database_schema_migration_source` (Database Schema & Migration — primary data/source; wajib; status awal `not_connected`); `database_schema_migration_validation` (Database Schema & Migration — validation and logs; wajib; status awal `not_connected`)

### 047. Backup & Recovery Operations

- **ID:** `backup_recovery_operations`  
- **Kategori:** Platform  
- **Misi:** Menyiapkan cadangan dan prosedur pemulihan untuk data dan konfigurasi kritis.
- **Tanggung jawab:** Menjadwalkan backup sesuai kemampuan provider, memeriksa restore evidence, dan mendokumentasikan recovery steps.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Database/export policies and system configuration; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Backup status and recovery drill report; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Backup freshness; recovery objective performance
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `backup_recovery_operations_source` (Backup & Recovery Operations — primary data/source; wajib; status awal `not_connected`); `backup_recovery_operations_validation` (Backup & Recovery Operations — validation and logs; wajib; status awal `not_connected`)

### 048. Automation Cost Optimization

- **ID:** `automation_cost_optimization`  
- **Kategori:** Platform  
- **Misi:** Mengurangi biaya otomasi tanpa menurunkan keandalan atau kualitas hasil.
- **Tanggung jawab:** Mengukur invocation, API usage, model/token spend, idle schedules, and retry waste.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Cloudflare usage, provider billing and workflow logs; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Cost-saving recommendations and budget alerts; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Cost per successful task; waste reduction
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `automation_cost_optimization_source` (Automation Cost Optimization — primary data/source; wajib; status awal `not_connected`); `automation_cost_optimization_validation` (Automation Cost Optimization — validation and logs; wajib; status awal `not_connected`)

### 049. AI Model Routing

- **ID:** `ai_model_routing`  
- **Kategori:** Platform  
- **Misi:** Memilih model sesuai kualitas, biaya, latency, dan sensitivitas data.
- **Tanggung jawab:** Menentukan task tiers, fallback order, evaluation thresholds, and budget ceilings.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Model availability/pricing and approved eval results; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Routing policy and fallback map; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Quality at budget; latency; fallback rate
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `ai_model_routing_source` (AI Model Routing — primary data/source; wajib; status awal `not_connected`); `ai_model_routing_validation` (AI Model Routing — validation and logs; wajib; status awal `not_connected`)

### 050. Agent & Prompt Evaluation

- **ID:** `agent_prompt_evaluation`  
- **Kategori:** Platform  
- **Misi:** Mengevaluasi hasil agent dan prompt memakai skenario uji yang dapat diulang.
- **Tanggung jawab:** Mengelola benchmark, regression cases, scoring rubric, and failure examples.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Approved test datasets and prompt versions; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Evaluation scorecards and regression report; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Eval pass rate; regression detection
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `agent_prompt_evaluation_source` (Agent & Prompt Evaluation — primary data/source; wajib; status awal `not_connected`); `agent_prompt_evaluation_validation` (Agent & Prompt Evaluation — validation and logs; wajib; status awal `not_connected`)

### 051. AI Guardrails & Policy

- **ID:** `ai_guardrails_policy`  
- **Kategori:** Security  
- **Misi:** Memastikan agent mematuhi kebijakan data, izin, approval, dan batas tindakan.
- **Tanggung jawab:** Memvalidasi tool permissions, output schemas, sensitive-data handling, and action allowlists.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Division policies and tool inventory; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Policy checks and exception queue; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Policy violation rate; blocked-risk coverage
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `ai_guardrails_policy_source` (AI Guardrails & Policy — primary data/source; wajib; status awal `not_connected`); `ai_guardrails_policy_validation` (AI Guardrails & Policy — validation and logs; wajib; status awal `not_connected`)

### 052. Runtime Performance Engineering

- **ID:** `runtime_performance_engineering`  
- **Kategori:** Platform  
- **Misi:** Mengukur latency, throughput, memory, and runtime bottlenecks untuk worker dan workflows.
- **Tanggung jawab:** Memantau p95 latency, concurrency, payload size, timeouts, and hot paths.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Worker observability and benchmark results; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Performance profile and optimization backlog; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** p95 latency; timeout rate
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `runtime_performance_engineering_source` (Runtime Performance Engineering — primary data/source; wajib; status awal `not_connected`); `runtime_performance_engineering_validation` (Runtime Performance Engineering — validation and logs; wajib; status awal `not_connected`)

### 053. Regression Testing

- **ID:** `regression_testing`  
- **Kategori:** Quality  
- **Misi:** Mencegah fitur baru merusak perilaku yang sebelumnya valid.
- **Tanggung jawab:** Menjalankan test matrix untuk API, event schemas, routing, permissions, and migrations.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Test suite and release diff; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Regression test results and blockers; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Regression escape rate; test pass rate
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `regression_testing_source` (Regression Testing — primary data/source; wajib; status awal `not_connected`); `regression_testing_validation` (Regression Testing — validation and logs; wajib; status awal `not_connected`)

### 054. End-to-End Testing

- **ID:** `end_to_end_testing`  
- **Kategori:** Quality  
- **Misi:** Memverifikasi perjalanan lengkap dari sumber event sampai hasil terlihat di dashboard.
- **Tanggung jawab:** Menguji website event, Worker collection, D1 write, aggregation and UI render.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Test environments and end-to-end scenarios; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** End-to-end test evidence and defects; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** End-to-end pass rate; time to detect
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `end_to_end_testing_source` (End-to-End Testing — primary data/source; wajib; status awal `not_connected`); `end_to_end_testing_validation` (End-to-End Testing — validation and logs; wajib; status awal `not_connected`)

### 055. Data Quality Assurance

- **ID:** `data_quality_assurance`  
- **Kategori:** Data  
- **Misi:** Mendeteksi field kosong, nilai tidak valid, duplikasi, dan data outlier.
- **Tanggung jawab:** Menerapkan quality rules, freshness checks, null rates, and referential consistency checks.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Operational records and data rules; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Data quality score and exception report; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Completeness; validity; duplicate rate
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `data_quality_assurance_source` (Data Quality Assurance — primary data/source; wajib; status awal `not_connected`); `data_quality_assurance_validation` (Data Quality Assurance — validation and logs; wajib; status awal `not_connected`)

### 056. Integration Contract Testing

- **ID:** `integration_contract_testing`  
- **Kategori:** Quality  
- **Misi:** Memastikan API antar-divisi tetap cocok saat schema atau provider berubah.
- **Tanggung jawab:** Menguji request/response schemas, auth behavior, rate limits, and backward-compatible changes.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** API/schema contracts and mock responses; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Contract test reports and drift alerts; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Contract conformance; breaking changes detected
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `integration_contract_testing_source` (Integration Contract Testing — primary data/source; wajib; status awal `not_connected`); `integration_contract_testing_validation` (Integration Contract Testing — validation and logs; wajib; status awal `not_connected`)

### 057. Observability & Log Intelligence

- **ID:** `observability_log_intelligence`  
- **Kategori:** Platform  
- **Misi:** Menyediakan log terstruktur untuk memahami status, error, dan dampak tanpa membocorkan secret.
- **Tanggung jawab:** Menormalkan error codes, correlation IDs, retention and redaction rules.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Worker logs and task execution metadata; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Searchable event summaries and diagnostic trails; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Diagnostic coverage; secret-redaction pass rate
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `observability_log_intelligence_source` (Observability & Log Intelligence — primary data/source; wajib; status awal `not_connected`); `observability_log_intelligence_validation` (Observability & Log Intelligence — validation and logs; wajib; status awal `not_connected`)

### 058. Incident Command

- **ID:** `incident_command`  
- **Kategori:** Reliability  
- **Misi:** Mengoordinasikan respon insiden sesuai severity, impact, owner, dan runbook.
- **Tanggung jawab:** Membuka incident, mencatat timeline, memelihara status, dan mengatur post-incident review.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Alerts, monitoring results and incident runbooks; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Incident timeline and action register; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Time to acknowledge; MTTR
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `incident_command_source` (Incident Command — primary data/source; wajib; status awal `not_connected`); `incident_command_validation` (Incident Command — validation and logs; wajib; status awal `not_connected`)

### 059. Site Reliability Engineering

- **ID:** `site_reliability_engineering`  
- **Kategori:** Reliability  
- **Misi:** Menetapkan service objectives, error budgets, dan praktik reliability lintas sistem.
- **Tanggung jawab:** Mengukur availability, alert quality, capacity headroom, and toil.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Service endpoints, metrics and incident history; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** SLO dashboard and reliability backlog; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Availability; error-budget burn; toil
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `site_reliability_engineering_source` (Site Reliability Engineering — primary data/source; wajib; status awal `not_connected`); `site_reliability_engineering_validation` (Site Reliability Engineering — validation and logs; wajib; status awal `not_connected`)

### 060. Security Posture Monitoring

- **ID:** `security_posture_monitoring`  
- **Kategori:** Security  
- **Misi:** Mendeteksi konfigurasi sistem berisiko dan dependency yang perlu diperiksa.
- **Tanggung jawab:** Menilai exposed routes, security headers, known dependency alerts, and policy drift.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Approved security scan outputs and config snapshots; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Security findings ranked by severity; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Critical finding age; remediation rate
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `security_posture_monitoring_source` (Security Posture Monitoring — primary data/source; wajib; status awal `not_connected`); `security_posture_monitoring_validation` (Security Posture Monitoring — validation and logs; wajib; status awal `not_connected`)

### 061. Privacy & Consent Operations

- **ID:** `privacy_consent_operations`  
- **Kategori:** Governance  
- **Misi:** Menjaga pengumpulan data dan komunikasi sesuai consent, tujuan, serta permintaan opt-out.
- **Tanggung jawab:** Melacak purpose, retention, consent evidence, deletion requests and collection minimization.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Privacy notice, consent preferences and data inventory; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Privacy control register and exception queue; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Consent coverage; request SLA
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `privacy_consent_operations_source` (Privacy & Consent Operations — primary data/source; wajib; status awal `not_connected`); `privacy_consent_operations_validation` (Privacy & Consent Operations — validation and logs; wajib; status awal `not_connected`)

### 062. Access Audit & Identity

- **ID:** `access_audit_identity`  
- **Kategori:** Security  
- **Misi:** Memantau siapa atau service apa yang memiliki akses ke sistem dan tindakan sensitif.
- **Tanggung jawab:** Meninjau roles, stale credentials metadata, access reviews, and privileged operations.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Identity roles, audit events and connector scopes; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Access review report and least-privilege changes proposed; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Review completion; stale access findings
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `access_audit_identity_source` (Access Audit & Identity — primary data/source; wajib; status awal `not_connected`); `access_audit_identity_validation` (Access Audit & Identity — validation and logs; wajib; status awal `not_connected`)

### 063. Data Governance & Lineage

- **ID:** `data_governance_lineage`  
- **Kategori:** Data  
- **Misi:** Mendefinisikan arti field, pemilik data, sumber kebenaran, dan lineage.
- **Tanggung jawab:** Memelihara data dictionary, source authority, retention, and field-level provenance.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Data schemas, process owners and source maps; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Data dictionary and lineage map; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Field ownership coverage; lineage completeness
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `data_governance_lineage_source` (Data Governance & Lineage — primary data/source; wajib; status awal `not_connected`); `data_governance_lineage_validation` (Data Governance & Lineage — validation and logs; wajib; status awal `not_connected`)

### 064. Data Pipeline Engineering

- **ID:** `data_pipeline_engineering`  
- **Kategori:** Data  
- **Misi:** Membangun pipeline ETL/ELT yang idempotent dan dapat direkonsiliasi.
- **Tanggung jawab:** Mengekstrak, mentransformasi, memuat, menguji count checks and replay safety.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Source APIs, schemas and sync schedules; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Versioned sync jobs and reconciliation results; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Pipeline success; lag; source-to-target variance
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `data_pipeline_engineering_source` (Data Pipeline Engineering — primary data/source; wajib; status awal `not_connected`); `data_pipeline_engineering_validation` (Data Pipeline Engineering — validation and logs; wajib; status awal `not_connected`)

### 065. Business Intelligence & Reporting

- **ID:** `business_intelligence_reporting`  
- **Kategori:** Analytics  
- **Misi:** Menyediakan metrik bisnis dengan definisi konsisten untuk keputusan Owner.
- **Tanggung jawab:** Memvalidasi metric definitions, cohort/time windows, filters and source freshness.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** CRM, delivery, finance and website analytics; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Trusted KPI tables and decision reports; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Metric reconciliation; report freshness
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `business_intelligence_reporting_source` (Business Intelligence & Reporting — primary data/source; wajib; status awal `not_connected`); `business_intelligence_reporting_validation` (Business Intelligence & Reporting — validation and logs; wajib; status awal `not_connected`)

### 066. Experimentation & Measurement

- **ID:** `experimentation_measurement`  
- **Kategori:** Analytics  
- **Misi:** Merancang evaluasi eksperimen dengan hipotesis dan kriteria keputusan yang jelas.
- **Tanggung jawab:** Menetapkan baseline, metric, sample limits, guardrails and readout approach.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Approved experiments and measured outcomes; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Experiment plan and evidence-based result; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Measurement completeness; decision usefulness
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `experimentation_measurement_source` (Experimentation & Measurement — primary data/source; wajib; status awal `not_connected`); `experimentation_measurement_validation` (Experimentation & Measurement — validation and logs; wajib; status awal `not_connected`)

### 067. Billing & Invoicing Operations

- **ID:** `billing_invoicing_operations`  
- **Kategori:** Finance  
- **Misi:** Menyiapkan kelengkapan invoice dan status billing dari kontrak yang disetujui.
- **Tanggung jawab:** Memetakan deliverables, billing milestones, due dates and required evidence.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Approved contract, delivery milestones and invoice records; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Invoice readiness checklist and due-date queue; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** On-time invoice readiness; billing completeness
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `billing_invoicing_operations_source` (Billing & Invoicing Operations — primary data/source; wajib; status awal `not_connected`); `billing_invoicing_operations_validation` (Billing & Invoicing Operations — validation and logs; wajib; status awal `not_connected`)

### 068. Accounts Receivable Tracking

- **ID:** `accounts_receivable_tracking`  
- **Kategori:** Finance  
- **Misi:** Memantau invoice outstanding dan jadwal follow-up tagihan secara tertib.
- **Tanggung jawab:** Menghubungkan invoice status, due date, confirmed receipts, and dispute flags.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Invoice and confirmed payment records; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Receivables aging and collection reminders for review; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Days sales outstanding; overdue balance
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `accounts_receivable_tracking_source` (Accounts Receivable Tracking — primary data/source; wajib; status awal `not_connected`); `accounts_receivable_tracking_validation` (Accounts Receivable Tracking — validation and logs; wajib; status awal `not_connected`)

### 069. Expense & Subscription Tracking

- **ID:** `expense_subscription_tracking`  
- **Kategori:** Finance  
- **Misi:** Mencatat dan memantau biaya tools, langganan, dan pengeluaran operasional.
- **Tanggung jawab:** Mengkategorikan transactions, renewal dates, usage, owner and cancellation terms.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Provider billing and approved expense records; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Expense register and renewal calendar; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Cost completeness; unused subscription spend
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `expense_subscription_tracking_source` (Expense & Subscription Tracking — primary data/source; wajib; status awal `not_connected`); `expense_subscription_tracking_validation` (Expense & Subscription Tracking — validation and logs; wajib; status awal `not_connected`)

### 070. Budget Guard & Spend Approvals

- **ID:** `budget_guard_spend_approvals`  
- **Kategori:** Governance  
- **Misi:** Mengawasi penggunaan budget dan menahan tindakan ketika ambang biaya tercapai.
- **Tanggung jawab:** Membandingkan usage to caps, estimate total cost, alert and request approval.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Budget limits, billing telemetry and owner decisions; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Budget variance alerts and approval requests; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Budget overrun prevention; forecast variance
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `budget_guard_spend_approvals_source` (Budget Guard & Spend Approvals — primary data/source; wajib; status awal `not_connected`); `budget_guard_spend_approvals_validation` (Budget Guard & Spend Approvals — validation and logs; wajib; status awal `not_connected`)

### 071. Project Profitability Intelligence

- **ID:** `project_profitability_intelligence`  
- **Kategori:** Finance  
- **Misi:** Mengukur profitabilitas proyek berdasarkan pendapatan terkonfirmasi dan biaya tercatat.
- **Tanggung jawab:** Reconcile project revenue, delivery hours, provider fees, rework and overhead assumptions.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Project billing, delivery logs and expense data; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Project margin report and margin-risk alert; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Gross margin accuracy; unallocated costs
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `project_profitability_intelligence_source` (Project Profitability Intelligence — primary data/source; wajib; status awal `not_connected`); `project_profitability_intelligence_validation` (Project Profitability Intelligence — validation and logs; wajib; status awal `not_connected`)

### 072. Cash Flow Forecasting

- **ID:** `cash_flow_forecasting`  
- **Kategori:** Finance  
- **Misi:** Memperkirakan kebutuhan kas menggunakan invoice, pembayaran terkonfirmasi, dan kewajiban yang tercatat.
- **Tanggung jawab:** Forecast inflow/outflow windows with scenarios and uncertainty labels.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Receivables, payables and confirmed cash transactions; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Cashflow projection and liquidity warnings; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Forecast variance; data completeness
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `cash_flow_forecasting_source` (Cash Flow Forecasting — primary data/source; wajib; status awal `not_connected`); `cash_flow_forecasting_validation` (Cash Flow Forecasting — validation and logs; wajib; status awal `not_connected`)

### 073. Procurement & Vendor Spend

- **ID:** `procurement_vendor_spend`  
- **Kategori:** Governance  
- **Misi:** Menilai kebutuhan vendor dan membandingkan biaya sebelum pembelian disetujui.
- **Tanggung jawab:** Collect quotes, compare scope/terms, track renewals, and prepare approval packet.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Approved needs, vendor quotes and spend policy; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Vendor comparison and procurement request; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Savings vs comparable quote; approval completeness
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `procurement_vendor_spend_source` (Procurement & Vendor Spend — primary data/source; wajib; status awal `not_connected`); `procurement_vendor_spend_validation` (Procurement & Vendor Spend — validation and logs; wajib; status awal `not_connected`)

### 074. Contract Operations

- **ID:** `contract_operations`  
- **Kategori:** Governance  
- **Misi:** Mengelola status dokumen kontrak, tenggat, kewajiban, dan approval perubahan.
- **Tanggung jawab:** Track version, parties, deliverable, renewal date, signatures and change requests.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Owner-approved contracts and document repository; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Contract register and obligation calendar; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Obligation tracking coverage; renewal alert lead time
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `contract_operations_source` (Contract Operations — primary data/source; wajib; status awal `not_connected`); `contract_operations_validation` (Contract Operations — validation and logs; wajib; status awal `not_connected`)

### 075. Business Risk & Compliance

- **ID:** `business_risk_compliance`  
- **Kategori:** Governance  
- **Misi:** Memetakan risiko operasional dan kepatuhan menjadi kontrol serta tindakan yang dapat diaudit.
- **Tanggung jawab:** Score impact/likelihood, assign owners, track mitigation, and review control evidence.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Policies, incident records and risk register; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Risk register and mitigation status; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** High-risk open age; control evidence coverage
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `business_risk_compliance_source` (Business Risk & Compliance — primary data/source; wajib; status awal `not_connected`); `business_risk_compliance_validation` (Business Risk & Compliance — validation and logs; wajib; status awal `not_connected`)

### 076. Vendor Intelligence

- **ID:** `vendor_intelligence`  
- **Kategori:** Research  
- **Misi:** Mengevaluasi provider dan vendor berdasarkan kesesuaian, dependability, biaya, dan bukti.
- **Tanggung jawab:** Compare vendor offerings, availability, terms, service limits and source confidence.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Vendor sites, provider docs and usage history; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Vendor matrix and recommendation brief; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Vendor evidence freshness; fit score
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `vendor_intelligence_source` (Vendor Intelligence — primary data/source; wajib; status awal `not_connected`); `vendor_intelligence_validation` (Vendor Intelligence — validation and logs; wajib; status awal `not_connected`)

### 077. Platform Terms Compliance

- **ID:** `platform_terms_compliance`  
- **Kategori:** Governance  
- **Misi:** Memelihara aturan penggunaan tiap platform agar otomasi sales tetap patuh.
- **Tanggung jawab:** Track official terms/API guidance, approved access method, rate limits, and review date.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Official platform policies and connector inventory; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Platform compliance matrix and change alerts; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Policy review freshness; compliance exceptions
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `platform_terms_compliance_source` (Platform Terms Compliance — primary data/source; wajib; status awal `not_connected`); `platform_terms_compliance_validation` (Platform Terms Compliance — validation and logs; wajib; status awal `not_connected`)

### 078. Platform Connector Certification

- **ID:** `platform_connector_certification`  
- **Kategori:** Platform  
- **Misi:** Memverifikasi setiap konektor platform sebelum diizinkan pada workflow produksi.
- **Tanggung jawab:** Test auth, pagination, rate limits, error handling, schema, and permitted access scope.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Official docs and connector test environment; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Connector readiness certification and limitations; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Connector contract pass; failed run rate
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `platform_connector_certification_source` (Platform Connector Certification — primary data/source; wajib; status awal `not_connected`); `platform_connector_certification_validation` (Platform Connector Certification — validation and logs; wajib; status awal `not_connected`)

### 079. Freelance Market Intelligence

- **ID:** `freelance_market_intelligence`  
- **Kategori:** Research  
- **Misi:** Mengukur niche, anggaran, kompetisi, dan demand pada pasar freelance.
- **Tanggung jawab:** Review public project samples, categories, competition signals and platform fees.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Permitted marketplace listings and opportunity history; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Freelance market map and priority sectors; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Qualified opportunity yield; data freshness
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `freelance_market_intelligence_source` (Freelance Market Intelligence — primary data/source; wajib; status awal `not_connected`); `freelance_market_intelligence_validation` (Freelance Market Intelligence — validation and logs; wajib; status awal `not_connected`)

### 080. Partner Qualification

- **ID:** `partner_qualification`  
- **Kategori:** Revenue  
- **Misi:** Menyaring calon partner menurut reputasi, kemampuan, keselarasan layanan, dan risiko.
- **Tanggung jawab:** Verify public evidence, capability fit, referral incentives and conflict checks.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Partner profiles, references and public records; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Partner qualification scorecard; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Qualification acceptance; due-diligence completeness
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `partner_qualification_source` (Partner Qualification — primary data/source; wajib; status awal `not_connected`); `partner_qualification_validation` (Partner Qualification — validation and logs; wajib; status awal `not_connected`)

### 081. Proposal Research

- **ID:** `proposal_research`  
- **Kategori:** Revenue  
- **Misi:** Mengumpulkan fakta, requirement, dan referensi untuk menyokong proposal yang akan ditinjau manusia.
- **Tanggung jawab:** Map client context, scope, constraints, success criteria, and portfolio evidence.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Public customer context and approved portfolio; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Evidence pack and proposal research brief; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Source traceability; requirement coverage
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `proposal_research_source` (Proposal Research — primary data/source; wajib; status awal `not_connected`); `proposal_research_validation` (Proposal Research — validation and logs; wajib; status awal `not_connected`)

### 082. Public Tender Intelligence

- **ID:** `public_tender_intelligence`  
- **Kategori:** Research  
- **Misi:** Menemukan pengumuman tender publik yang relevan serta tenggat dan eligibility-nya.
- **Tanggung jawab:** Monitor official tender pages, qualification criteria, timelines and submission requirements.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Official public procurement notices; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Tender shortlist and compliance calendar; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Eligibility accuracy; missed-deadline prevention
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `public_tender_intelligence_source` (Public Tender Intelligence — primary data/source; wajib; status awal `not_connected`); `public_tender_intelligence_validation` (Public Tender Intelligence — validation and logs; wajib; status awal `not_connected`)

### 083. Service Opportunity Research

- **ID:** `service_opportunity_research`  
- **Kategori:** Research  
- **Misi:** Menemukan kebutuhan pasar yang cocok dengan layanan otomasi AIGROWTH.
- **Tanggung jawab:** Combine workflow pain signals, public job requests, service capability, and unit economics.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Public job descriptions and service catalog; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Service opportunity map and demand evidence; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Evidence-backed opportunities; fit accuracy
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `service_opportunity_research_source` (Service Opportunity Research — primary data/source; wajib; status awal `not_connected`); `service_opportunity_research_validation` (Service Opportunity Research — validation and logs; wajib; status awal `not_connected`)

### 084. Workforce Orchestration

- **ID:** `workforce_orchestration`  
- **Kategori:** Operations  
- **Misi:** Membagi pekerjaan ke divisi atau executor yang tepat dengan dependensi yang jelas.
- **Tanggung jawab:** Route tasks by capability, load, permissions and state; prevent cyclic or duplicate assignment.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Division registry, task queue and capacity data; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Assignment plan and dependency graph; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Task routing accuracy; blocked-task age
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `workforce_orchestration_source` (Workforce Orchestration — primary data/source; wajib; status awal `not_connected`); `workforce_orchestration_validation` (Workforce Orchestration — validation and logs; wajib; status awal `not_connected`)

### 085. Capacity Planning

- **ID:** `capacity_planning`  
- **Kategori:** Operations  
- **Misi:** Membandingkan backlog dengan kapasitas dan tenggat sebelum menyetujui pekerjaan baru.
- **Tanggung jawab:** Estimate effort bands, concurrency, skill constraints and deadline feasibility.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Backlog, historical runtimes and availability; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Capacity forecast and overload alerts; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** On-time forecast; overload hours
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `capacity_planning_source` (Capacity Planning — primary data/source; wajib; status awal `not_connected`); `capacity_planning_validation` (Capacity Planning — validation and logs; wajib; status awal `not_connected`)

### 086. Task Prioritization

- **ID:** `task_prioritization`  
- **Kategori:** Operations  
- **Misi:** Mengurutkan pekerjaan berdasar nilai, urgensi, risiko, dependensi, dan biaya.
- **Tanggung jawab:** Apply transparent scorecard and surface trade-offs for Owner review.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Tasks, OKRs, deadlines and incidents; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Ranked backlog with rationale; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Priority acceptance; urgent-task SLA
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `task_prioritization_source` (Task Prioritization — primary data/source; wajib; status awal `not_connected`); `task_prioritization_validation` (Task Prioritization — validation and logs; wajib; status awal `not_connected`)

### 087. Process Documentation

- **ID:** `process_documentation`  
- **Kategori:** Knowledge  
- **Misi:** Menjaga peta proses dan definisi handoff tetap terdokumentasi dan mudah diaudit.
- **Tanggung jawab:** Record trigger, owner, systems, exceptions, outputs and approved changes.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Process owners and workflow definitions; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Process maps and control points; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Process coverage; stale-document rate
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `process_documentation_source` (Process Documentation — primary data/source; wajib; status awal `not_connected`); `process_documentation_validation` (Process Documentation — validation and logs; wajib; status awal `not_connected`)

### 088. Knowledge Base Operations

- **ID:** `knowledge_base_operations`  
- **Kategori:** Knowledge  
- **Misi:** Mengelola sumber pengetahuan internal agar mudah dicari, memiliki pemilik, dan tidak kedaluwarsa.
- **Tanggung jawab:** Index trusted docs, metadata, version/date, access scope, and update owner.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Approved internal docs and runbooks; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Searchable knowledge index and freshness report; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Retrieval relevance; stale-reference rate
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `knowledge_base_operations_source` (Knowledge Base Operations — primary data/source; wajib; status awal `not_connected`); `knowledge_base_operations_validation` (Knowledge Base Operations — validation and logs; wajib; status awal `not_connected`)

### 089. Runbook & SOP Management

- **ID:** `runbook_sop_management`  
- **Kategori:** Operations  
- **Misi:** Menyimpan prosedur operasional yang dapat dijalankan dengan aman saat normal maupun insiden.
- **Tanggung jawab:** Define preconditions, steps, rollback, permission requirements and verification signals.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Approved process maps and incident learnings; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Versioned SOP/runbooks and drill checklist; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Runbook coverage; drill pass rate
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `runbook_sop_management_source` (Runbook & SOP Management — primary data/source; wajib; status awal `not_connected`); `runbook_sop_management_validation` (Runbook & SOP Management — validation and logs; wajib; status awal `not_connected`)

### 090. Automation Inventory

- **ID:** `automation_inventory`  
- **Kategori:** Platform  
- **Misi:** Menyediakan daftar seluruh workflow, pemilik, dependensi, schedule, dan risiko.
- **Tanggung jawab:** Catalog triggers, secrets references, endpoints, owners, deprecation and impact.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Cloudflare Workers, automation tool metadata and repositories; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Automation catalog and dependency map; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Inventory coverage; unknown-owner count
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `automation_inventory_source` (Automation Inventory — primary data/source; wajib; status awal `not_connected`); `automation_inventory_validation` (Automation Inventory — validation and logs; wajib; status awal `not_connected`)

### 091. Incident Communications

- **ID:** `incident_communications`  
- **Kategori:** Operations  
- **Misi:** Menyiapkan update insiden yang akurat dan konsisten untuk Owner serta pihak terdampak.
- **Tanggung jawab:** Summarize verified impact, timeline, workarounds and next update time; require human review for external notices.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Incident records and approved comms policy; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Internal incident update drafts and status log; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Update timeliness; factual correction rate
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `incident_communications_source` (Incident Communications — primary data/source; wajib; status awal `not_connected`); `incident_communications_validation` (Incident Communications — validation and logs; wajib; status awal `not_connected`)

### 092. Meeting & Decision Registry

- **ID:** `meeting_decision_registry`  
- **Kategori:** Knowledge  
- **Misi:** Mencatat keputusan, pemilik tindakan, tenggat, dan bukti tindak lanjut dari rapat.
- **Tanggung jawab:** Structure notes into decision/action records and track closure without inventing outcomes.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Owner-approved meeting notes and tasks; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Decision log and action register; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Action closure; decision traceability
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `meeting_decision_registry_source` (Meeting & Decision Registry — primary data/source; wajib; status awal `not_connected`); `meeting_decision_registry_validation` (Meeting & Decision Registry — validation and logs; wajib; status awal `not_connected`)

### 093. Approval Workflow Operations

- **ID:** `approval_workflow_operations`  
- **Kategori:** Governance  
- **Misi:** Mengelola permintaan persetujuan berdasarkan risiko, biaya, dan kewenangan.
- **Tanggung jawab:** Validate requester, payload, evidence, expiry, approver and immutable decision log.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Task queue, approval rules and Owner identity; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Approval queue, status, and audit trail; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Approval SLA; unauthorized action prevention
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `approval_workflow_operations_source` (Approval Workflow Operations — primary data/source; wajib; status awal `not_connected`); `approval_workflow_operations_validation` (Approval Workflow Operations — validation and logs; wajib; status awal `not_connected`)

### 094. Internal Administration

- **ID:** `internal_administration`  
- **Kategori:** Operations  
- **Misi:** Mengelola checklist administrasi internal, tenggat, dan permintaan rutin.
- **Tanggung jawab:** Track recurring obligations, ownership, documents and status.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Internal task register and approved policies; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Admin calendar and completion report; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** On-time completion; overdue actions
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `internal_administration_source` (Internal Administration — primary data/source; wajib; status awal `not_connected`); `internal_administration_validation` (Internal Administration — validation and logs; wajib; status awal `not_connected`)

### 095. Asset & License Inventory

- **ID:** `asset_license_inventory`  
- **Kategori:** Operations  
- **Misi:** Memantau aset digital, lisensi, domain, dan tanggal perpanjangan.
- **Tanggung jawab:** Track owner, license seat, expiry, criticality and renewal approval.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Provider account inventories and purchase records; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Asset register and renewal warnings; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Inventory coverage; missed-renewal rate
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `asset_license_inventory_source` (Asset & License Inventory — primary data/source; wajib; status awal `not_connected`); `asset_license_inventory_validation` (Asset & License Inventory — validation and logs; wajib; status awal `not_connected`)

### 096. Feedback & Learning Loop

- **ID:** `feedback_learning_loop`  
- **Kategori:** Knowledge  
- **Misi:** Mengubah hasil eksperimen, insiden, dan review menjadi perubahan proses yang terukur.
- **Tanggung jawab:** Record hypothesis, evidence, action owner, expected result and post-change review.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** QA reports, sales outcomes and incident reviews; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Lessons register and improvement experiments; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Lessons applied; recurrence reduction
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `feedback_learning_loop_source` (Feedback & Learning Loop — primary data/source; wajib; status awal `not_connected`); `feedback_learning_loop_validation` (Feedback & Learning Loop — validation and logs; wajib; status awal `not_connected`)

### 097. Cross-Division Coordination

- **ID:** `cross_division_coordination`  
- **Kategori:** Operations  
- **Misi:** Mengelola handoff, dependency, dan konflik prioritas antar-divisi.
- **Tanggung jawab:** Track owner-to-owner handoffs, acceptance, blocked dependencies and escalation deadlines.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Division registry and task links; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Cross-division dependency board; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Handoff acceptance time; dependency blockage
- **Automation level:** `assisted`  
- **Approval policy:** Use verified source data, log exceptions and escalate sensitive or irreversible actions to Owner.
- **Kebutuhan integrasi:** `cross_division_coordination_source` (Cross-Division Coordination — primary data/source; wajib; status awal `not_connected`); `cross_division_coordination_validation` (Cross-Division Coordination — validation and logs; wajib; status awal `not_connected`)

### 098. KPI & Executive Reporting

- **ID:** `kpi_executive_reporting`  
- **Kategori:** Governance  
- **Misi:** Menyatukan KPI lintas divisi dengan definisi dan periode yang konsisten.
- **Tanggung jawab:** Check metric source, data freshness, variance and confidence before reporting.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Validated division KPI records; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Executive scorecard and exception summaries; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** KPI completeness; metric reconciliation
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `kpi_executive_reporting_source` (KPI & Executive Reporting — primary data/source; wajib; status awal `not_connected`); `kpi_executive_reporting_validation` (KPI & Executive Reporting — validation and logs; wajib; status awal `not_connected`)

### 099. Audit & Change Management

- **ID:** `audit_change_management`  
- **Kategori:** Governance  
- **Misi:** Mencatat perubahan konfigurasi, proses, dan hak akses berikut alasan serta hasilnya.
- **Tanggung jawab:** Require change request, risk assessment, reviewer, version, and validation evidence.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Git changes, Worker deployments and access events; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Change log and review checklist; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Change traceability; unauthorized changes
- **Automation level:** `approval_gated`  
- **Approval policy:** External commitments, financial decisions and material changes require Owner approval; keep an audit trail.
- **Kebutuhan integrasi:** `audit_change_management_source` (Audit & Change Management — primary data/source; wajib; status awal `not_connected`); `audit_change_management_validation` (Audit & Change Management — validation and logs; wajib; status awal `not_connected`)

### 100. Business Continuity & Disaster Recovery

- **ID:** `business_continuity_disaster_recovery`  
- **Kategori:** Reliability  
- **Misi:** Menyiapkan respons terhadap gangguan besar serta pemulihan layanan prioritas.
- **Tanggung jawab:** Define critical services, dependencies, recovery roles, backup evidence and exercise schedule.; Record owner, status, SLA, source evidence, and next action.; Validate outputs, log exceptions, and escalate blocked work.
- **Input:** Service inventory, backups and continuity requirements; Approved requests, scope, and operating policies; Historical outcomes, timestamps, and audit records
- **Output:** Continuity plan and recovery drill results; Prioritized exception queue and actionable recommendations; Auditable result with evidence and a named next action
- **KPI:** Recovery test pass; critical dependency coverage
- **Automation level:** `assisted`  
- **Approval policy:** Use least privilege, verified evidence and approved runbooks; production-impacting actions require approval.
- **Kebutuhan integrasi:** `business_continuity_disaster_recovery_source` (Business Continuity & Disaster Recovery — primary data/source; wajib; status awal `not_connected`); `business_continuity_disaster_recovery_validation` (Business Continuity & Disaster Recovery — validation and logs; wajib; status awal `not_connected`)

## Pengamanan dan status

- Status registry `catalog_enabled` hanya berarti divisi tercatat, bukan berarti agen AI telah hidup.
- Divisi hanya boleh menjadi `active` setelah konektor nyata lolos tes, sumber data dan izin tervalidasi, logging/monitoring tersedia, dan executor divisi telah diuji.
- Task API hanya memasukkan task ke antrean `awaiting_approval`; ia bukan mesin eksekusi AI.
- Outreach eksternal, proposal, perubahan kontrak, deployment produksi, perubahan DNS, serta transaksi finansial harus tetap melalui approval atau runbook yang disetujui.
