# AIGROWTH — 50 Divisi Sales Tambahan

Ekspansi ini menambahkan divisi 101–150 ke katalog, sehingga AIGROWTH memiliki **150 divisi** dan **310 kebutuhan integrasi**. Masing-masing divisi memiliki misi, input, output, KPI, approval policy, dan dua kebutuhan konektor. Konektor baru tetap `not_connected` sampai diuji; struktur ini tidak mengklaim agent sudah berjalan.

## 50 divisi tambahan dan output utama

| No. | Divisi | Kategori | Output utama |
|---:|---|---|---|
| 101 | Outbound Prospecting Intelligence | Sales Intelligence | Ranked target accounts with fit score, evidence, public contact route, and next action |
| 102 | Inbound Lead Conversion | Sales Intelligence | Qualified inquiry queue with intent, urgency, owner, SLA, and next action |
| 103 | Account-Based Sales | Sales Intelligence | Account plans with stakeholder map, needs, opportunity map, and next steps |
| 104 | Sales Signal Intelligence | Sales Intelligence | Time-stamped buying-signal feed with source, confidence, and suggested action |
| 105 | Lead Enrichment & Verification | Sales Intelligence | Deduplicated lead records with verified fields, freshness, and provenance |
| 106 | Contact Discovery & Compliance | Sales Intelligence | Contact-route records with public source evidence and suppression-list status |
| 107 | Multi-Channel Outreach Orchestration | Sales Intelligence | Approved touch schedule with channel, timing, suppression state, and outcomes |
| 108 | Email Deliverability Intelligence | Sales Intelligence | Deliverability report with bounce causes, sender health, risks, and fixes |
| 109 | LinkedIn Social Selling | Sales Intelligence | Social-selling queue with company context, relationship path, and next action |
| 110 | Buyer Committee Mapping | Sales Intelligence | Stakeholder map with roles, evidence, gaps, and meeting objectives |
| 111 | Meeting Booking & Qualification | Sales Execution | Qualified meeting record with attendee, agenda, need, time, and CRM link |
| 112 | Sales Meeting Preparation | Sales Execution | Meeting brief, discovery checklist, approved case references, and open questions |
| 113 | Discovery Call Qualification | Sales Execution | Qualification scorecard with needs, urgency, budget status, risks, and recommendation |
| 114 | Demo Operations & Readiness | Sales Execution | Demo readiness checklist, scenario plan, test results, blockers, and owners |
| 115 | Objection Intelligence | Sales Execution | Objection register with category, frequency, response reference, and escalation need |
| 116 | Sales Conversation Intelligence | Sales Execution | Conversation summary, buyer commitments, action items, risk flags, and CRM suggestions |
| 117 | Proposal Strategy & Fit | Sales Execution | Proposal strategy brief with scope, approved proof, assumptions, exclusions, and review points |
| 118 | Proposal Quality Review | Sales Execution | Proposal review report with coverage, errors, commercial risks, and approval status |
| 119 | Pricing & Packaging Intelligence | Sales Execution | Pricing scenario comparison with assumptions, margin estimate, package fit, and recommendation |
| 120 | Negotiation Support | Sales Execution | Negotiation brief with trade-offs, concession log, and escalation triggers |
| 121 | Enterprise Account Development | Sales Channels | Enterprise account map with stakeholder coverage, milestones, risks, and next steps |
| 122 | SMB Market Acquisition | Sales Channels | SMB prospect queue with segment, expected value, fit score, and next action |
| 123 | Vertical Market Sales | Sales Channels | Vertical market scorecard with target list, needs, buying triggers, and pipeline |
| 124 | Geographic Market Expansion | Sales Channels | Market-entry scorecard, target clusters, local constraints, and test plan |
| 125 | Channel Partner Acquisition | Sales Channels | Ranked partner pipeline with audience fit, requirements, and next action |
| 126 | Strategic Partnership Development | Sales Channels | Partner brief with mutual value, roles, risks, and joint targets |
| 127 | Referral Program Operations | Sales Channels | Referral register with referrer, permission, qualification, and outcome |
| 128 | Affiliate Channel Management | Sales Channels | Affiliate ledger with validated leads, attribution evidence, quality flags, and review inputs |
| 129 | Reseller & White-Label Sales | Sales Channels | Reseller pipeline with territory, capability fit, commercial assumptions, and approvals |
| 130 | Marketplace Opportunity Intelligence | Sales Channels | Deduplicated project queue with budget, fit score, deadline, rules, and status |
| 131 | RFP & Tender Intelligence | Sales Channels | Tender register with requirements, deadlines, risks, and bid/no-bid recommendation |
| 132 | Procurement & Vendor Onboarding | Sales Channels | Vendor checklist with missing documents, submission status, and owner responsibilities |
| 133 | Freelance Platform Opportunity Scoring | Opportunity Growth | Scored shortlist with budget fit, scope risks, effort, platform rules, and next action |
| 134 | Lost Deal Reactivation | Opportunity Growth | Reactivation queue with loss reason, changed signal, permission, and next step |
| 135 | Stalled Deal Recovery | Opportunity Growth | Stalled-deal report with last activity, blocker, owner, and recovery action |
| 136 | Trial & POC Conversion | Opportunity Growth | Trial scorecard with adoption evidence, blockers, criteria status, and next step |
| 137 | Upsell Opportunity Intelligence | Opportunity Growth | Upsell opportunities with evidence, value hypothesis, customer fit, and recommendation |
| 138 | Cross-Sell Opportunity Intelligence | Opportunity Growth | Cross-sell map with unmet need, eligible service, rationale, risks, and next action |
| 139 | Renewal & Expansion Revenue | Opportunity Growth | Renewal calendar with risk, expansion hypotheses, notice periods, and decisions |
| 140 | Customer Advocacy & Referrals | Opportunity Growth | Advocacy shortlist with satisfaction evidence, permission, opportunity, and owner |
| 141 | Sales Forecasting & Commitments | Revenue Operations | Forecast by period and stage with assumptions, confidence range, slippage risk, and history |
| 142 | Pipeline Hygiene & CRM Quality | Revenue Operations | CRM hygiene queue with missing fields, duplicates, stale deals, and corrections |
| 143 | Lead Routing & SLA Management | Revenue Operations | Routing log with owner, rationale, deadline, escalation, and response timestamp |
| 144 | Territory & Capacity Planning | Revenue Operations | Territory plan with account allocation, workload, capacity gap, and scenarios |
| 145 | Sales Performance Coaching | Revenue Operations | Coaching report with funnel bottleneck, evidence, practice focus, and metric |
| 146 | Sales Representative Assistant | Revenue Operations | Daily work queue with next action, CRM context, due time, and policy reminders |
| 147 | Sales Enablement Asset Intelligence | Revenue Operations | Approved asset shortlist with rationale, version, permissions, and evidence gaps |
| 148 | Competitor Deal Intelligence | Revenue Operations | Competitor brief with sourced facts, win/loss signals, and recommendations |
| 149 | Pricing Competitiveness Intelligence | Revenue Operations | Pricing benchmark with source/date, comparable scope, confidence, and safe recommendation |
| 150 | Revenue Attribution & Channel ROI | Revenue Operations | Channel report with sourced pipeline, revenue, cost assumptions, confidence, and recommendation |

## Profil operasional tiap divisi

### 101. Outbound Prospecting Intelligence

- **ID:** `outbound_prospecting_intelligence`
- **Misi:** Memprioritaskan akun target untuk outreach berdasarkan kecocokan layanan dan bukti kebutuhan.
- **Tanggung jawab:** Memprioritaskan akun target untuk outreach berdasarkan kecocokan layanan dan bukti kebutuhan.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Outbound Prospecting Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Ranked target accounts with fit score, evidence, public contact route, and next action; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified targets; contact validity; positive reply rate
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `outbound_prospecting_intelligence_source` dan `outbound_prospecting_intelligence_workflow` (awal status `not_connected`)

### 102. Inbound Lead Conversion

- **ID:** `inbound_lead_conversion`
- **Misi:** Mengubah inquiry dari website dan kanal resmi menjadi prospek yang layak ditindaklanjuti.
- **Tanggung jawab:** Mengubah inquiry dari website dan kanal resmi menjadi prospek yang layak ditindaklanjuti.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Inbound Lead Conversion; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Qualified inquiry queue with intent, urgency, owner, SLA, and next action; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Inquiry qualification rate; response time; routing accuracy
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `inbound_lead_conversion_source` dan `inbound_lead_conversion_workflow` (awal status `not_connected`)

### 103. Account-Based Sales

- **ID:** `account_based_sales`
- **Misi:** Menyusun rencana sales khusus akun bernilai tinggi dan para pengambil keputusan.
- **Tanggung jawab:** Menyusun rencana sales khusus akun bernilai tinggi dan para pengambil keputusan.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Account-Based Sales; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Account plans with stakeholder map, needs, opportunity map, and next steps; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Account coverage; opportunity creation; engagement
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `account_based_sales_source` dan `account_based_sales_workflow` (awal status `not_connected`)

### 104. Sales Signal Intelligence

- **ID:** `sales_signal_intelligence`
- **Misi:** Mendeteksi perubahan bisnis yang menjadi sinyal waktu terbaik menghubungi prospek.
- **Tanggung jawab:** Mendeteksi perubahan bisnis yang menjadi sinyal waktu terbaik menghubungi prospek.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Sales Signal Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Time-stamped buying-signal feed with source, confidence, and suggested action; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Verified signals; signal-to-opportunity rate; false positives
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `sales_signal_intelligence_source` dan `sales_signal_intelligence_workflow` (awal status `not_connected`)

### 105. Lead Enrichment & Verification

- **ID:** `lead_enrichment_verification`
- **Misi:** Memvalidasi dan memperkaya data CRM agar prospek tidak dinilai dari data usang.
- **Tanggung jawab:** Memvalidasi dan memperkaya data CRM agar prospek tidak dinilai dari data usang.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Lead Enrichment & Verification; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Deduplicated lead records with verified fields, freshness, and provenance; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Record completeness; validity; duplicate rate
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `lead_enrichment_verification_source` dan `lead_enrichment_verification_workflow` (awal status `not_connected`)

### 106. Contact Discovery & Compliance

- **ID:** `contact_discovery_compliance`
- **Misi:** Menemukan jalur kontak bisnis yang sah dan menghormati consent serta opt-out.
- **Tanggung jawab:** Menemukan jalur kontak bisnis yang sah dan menghormati consent serta opt-out.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Contact Discovery & Compliance; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Contact-route records with public source evidence and suppression-list status; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Usable contact routes; invalid-contact rate; opt-out compliance
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `contact_discovery_compliance_source` dan `contact_discovery_compliance_workflow` (awal status `not_connected`)

### 107. Multi-Channel Outreach Orchestration

- **ID:** `multi_channel_outreach_orchestration`
- **Misi:** Mengoordinasikan tindak lanjut lintas kanal agar tidak ganda atau berlebihan.
- **Tanggung jawab:** Mengoordinasikan tindak lanjut lintas kanal agar tidak ganda atau berlebihan.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Multi-Channel Outreach Orchestration; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Approved touch schedule with channel, timing, suppression state, and outcomes; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Positive replies; duplicate-touch rate; opt-out rate
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `multi_channel_outreach_orchestration_source` dan `multi_channel_outreach_orchestration_workflow` (awal status `not_connected`)

### 108. Email Deliverability Intelligence

- **ID:** `email_deliverability_intelligence`
- **Misi:** Memantau kesehatan pengiriman email sebelum reputasi pengirim menurun.
- **Tanggung jawab:** Memantau kesehatan pengiriman email sebelum reputasi pengirim menurun.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Email Deliverability Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Deliverability report with bounce causes, sender health, risks, and fixes; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Delivery rate; bounce rate; complaint rate
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `email_deliverability_intelligence_source` dan `email_deliverability_intelligence_workflow` (awal status `not_connected`)

### 109. LinkedIn Social Selling

- **ID:** `linkedin_social_selling`
- **Misi:** Mencari interaksi profesional relevan dari informasi bisnis yang tersedia secara sah.
- **Tanggung jawab:** Mencari interaksi profesional relevan dari informasi bisnis yang tersedia secara sah.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for LinkedIn Social Selling; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Social-selling queue with company context, relationship path, and next action; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified conversations; relevant interactions; policy-safe activity
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `linkedin_social_selling_source` dan `linkedin_social_selling_workflow` (awal status `not_connected`)

### 110. Buyer Committee Mapping

- **ID:** `buyer_committee_mapping`
- **Misi:** Memetakan pembeli, pengguna, pemberi pengaruh, dan pengambil keputusan dalam peluang.
- **Tanggung jawab:** Memetakan pembeli, pengguna, pemberi pengaruh, dan pengambil keputusan dalam peluang.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Buyer Committee Mapping; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Stakeholder map with roles, evidence, gaps, and meeting objectives; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Stakeholder coverage; multi-threaded deals; missing-role count
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `buyer_committee_mapping_source` dan `buyer_committee_mapping_workflow` (awal status `not_connected`)

### 111. Meeting Booking & Qualification

- **ID:** `meeting_booking_qualification`
- **Misi:** Mengubah respons prospek menjadi meeting yang memenuhi kriteria kualifikasi.
- **Tanggung jawab:** Mengubah respons prospek menjadi meeting yang memenuhi kriteria kualifikasi.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Meeting Booking & Qualification; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Qualified meeting record with attendee, agenda, need, time, and CRM link; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Meetings booked; show rate; qualified-meeting rate
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `meeting_booking_qualification_source` dan `meeting_booking_qualification_workflow` (awal status `not_connected`)

### 112. Sales Meeting Preparation

- **ID:** `sales_meeting_preparation`
- **Misi:** Menyiapkan ringkasan prospek dan bahan relevan sebelum meeting sales.
- **Tanggung jawab:** Menyiapkan ringkasan prospek dan bahan relevan sebelum meeting sales.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Sales Meeting Preparation; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Meeting brief, discovery checklist, approved case references, and open questions; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Prep coverage; meeting readiness; next-step completion
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `sales_meeting_preparation_source` dan `sales_meeting_preparation_workflow` (awal status `not_connected`)

### 113. Discovery Call Qualification

- **ID:** `discovery_call_qualification`
- **Misi:** Menilai kebutuhan, urgensi, dampak, anggaran, dan proses keputusan dari catatan discovery.
- **Tanggung jawab:** Menilai kebutuhan, urgensi, dampak, anggaran, dan proses keputusan dari catatan discovery.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Discovery Call Qualification; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Qualification scorecard with needs, urgency, budget status, risks, and recommendation; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualification completeness; progression rate; disqualification accuracy
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `discovery_call_qualification_source` dan `discovery_call_qualification_workflow` (awal status `not_connected`)

### 114. Demo Operations & Readiness

- **ID:** `demo_operations_readiness`
- **Misi:** Memastikan demo siap dan sesuai kebutuhan prospek sebelum meeting.
- **Tanggung jawab:** Memastikan demo siap dan sesuai kebutuhan prospek sebelum meeting.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Demo Operations & Readiness; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Demo readiness checklist, scenario plan, test results, blockers, and owners; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Demo readiness; demo incidents; demo-to-next-step rate
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `demo_operations_readiness_source` dan `demo_operations_readiness_workflow` (awal status `not_connected`)

### 115. Objection Intelligence

- **ID:** `objection_intelligence`
- **Misi:** Mengelompokkan keberatan prospek dan mencari jawaban berbasis bukti yang disetujui.
- **Tanggung jawab:** Mengelompokkan keberatan prospek dan mencari jawaban berbasis bukti yang disetujui.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Objection Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Objection register with category, frequency, response reference, and escalation need; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Objection resolution; repeated objections; deal progression
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `objection_intelligence_source` dan `objection_intelligence_workflow` (awal status `not_connected`)

### 116. Sales Conversation Intelligence

- **ID:** `sales_conversation_intelligence`
- **Misi:** Meringkas catatan percakapan yang diizinkan menjadi komitmen, risiko, dan tindak lanjut.
- **Tanggung jawab:** Meringkas catatan percakapan yang diizinkan menjadi komitmen, risiko, dan tindak lanjut.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Sales Conversation Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Conversation summary, buyer commitments, action items, risk flags, and CRM suggestions; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Action capture; next-step completion; record accuracy
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `sales_conversation_intelligence_source` dan `sales_conversation_intelligence_workflow` (awal status `not_connected`)

### 117. Proposal Strategy & Fit

- **ID:** `proposal_strategy_fit`
- **Misi:** Memilih pendekatan proposal berdasarkan kebutuhan, cakupan, bukti kemampuan, dan nilai proyek.
- **Tanggung jawab:** Memilih pendekatan proposal berdasarkan kebutuhan, cakupan, bukti kemampuan, dan nilai proyek.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Proposal Strategy & Fit; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Proposal strategy brief with scope, approved proof, assumptions, exclusions, and review points; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Proposal fit; review time; scope-change rate
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `proposal_strategy_fit_source` dan `proposal_strategy_fit_workflow` (awal status `not_connected`)

### 118. Proposal Quality Review

- **ID:** `proposal_quality_review`
- **Misi:** Memeriksa konsistensi, kelengkapan, risiko, dan kesesuaian proposal dengan kebutuhan klien.
- **Tanggung jawab:** Memeriksa konsistensi, kelengkapan, risiko, dan kesesuaian proposal dengan kebutuhan klien.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Proposal Quality Review; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Proposal review report with coverage, errors, commercial risks, and approval status; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** First-pass approval; preventable errors; turnaround time
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `proposal_quality_review_source` dan `proposal_quality_review_workflow` (awal status `not_connected`)

### 119. Pricing & Packaging Intelligence

- **ID:** `sales_pricing_packaging_intelligence`
- **Misi:** Mengevaluasi paket dan harga berdasarkan kebutuhan, nilai, margin, dan batas komersial.
- **Tanggung jawab:** Mengevaluasi paket dan harga berdasarkan kebutuhan, nilai, margin, dan batas komersial.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Pricing & Packaging Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Pricing scenario comparison with assumptions, margin estimate, package fit, and recommendation; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Estimated margin; approval time; offer acceptance
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `sales_pricing_packaging_intelligence_source` dan `sales_pricing_packaging_intelligence_workflow` (awal status `not_connected`)

### 120. Negotiation Support

- **ID:** `negotiation_support`
- **Misi:** Menyiapkan opsi negosiasi dan mencatat konsesi agar margin tetap terjaga.
- **Tanggung jawab:** Menyiapkan opsi negosiasi dan mencatat konsesi agar margin tetap terjaga.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Negotiation Support; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Negotiation brief with trade-offs, concession log, and escalation triggers; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Margin retained; concession visibility; negotiation cycle
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `negotiation_support_source` dan `negotiation_support_workflow` (awal status `not_connected`)

### 121. Enterprise Account Development

- **ID:** `enterprise_account_development`
- **Misi:** Membangun pipeline enterprise dengan pemetaan akun dan proses pembelian yang panjang.
- **Tanggung jawab:** Membangun pipeline enterprise dengan pemetaan akun dan proses pembelian yang panjang.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Enterprise Account Development; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Enterprise account map with stakeholder coverage, milestones, risks, and next steps; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Enterprise pipeline; stage progression; stakeholder coverage
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `enterprise_account_development_source` dan `enterprise_account_development_workflow` (awal status `not_connected`)

### 122. SMB Market Acquisition

- **ID:** `smb_market_acquisition`
- **Misi:** Mengembangkan peluang bisnis kecil dan menengah dengan biaya akuisisi terukur.
- **Tanggung jawab:** Mengembangkan peluang bisnis kecil dan menengah dengan biaya akuisisi terukur.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for SMB Market Acquisition; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** SMB prospect queue with segment, expected value, fit score, and next action; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified SMBs; conversion; acquisition cost
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `smb_market_acquisition_source` dan `smb_market_acquisition_workflow` (awal status `not_connected`)

### 123. Vertical Market Sales

- **ID:** `vertical_market_sales`
- **Misi:** Membentuk pipeline industri prioritas berdasarkan kebutuhan dan siklus beli relevan.
- **Tanggung jawab:** Membentuk pipeline industri prioritas berdasarkan kebutuhan dan siklus beli relevan.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Vertical Market Sales; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Vertical market scorecard with target list, needs, buying triggers, and pipeline; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified vertical opportunities; win rate by industry
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `vertical_market_sales_source` dan `vertical_market_sales_workflow` (awal status `not_connected`)

### 124. Geographic Market Expansion

- **ID:** `geographic_market_expansion`
- **Misi:** Menilai area baru berdasarkan jumlah target, kecocokan pasar, bahasa, dan biaya jangkauan.
- **Tanggung jawab:** Menilai area baru berdasarkan jumlah target, kecocokan pasar, bahasa, dan biaya jangkauan.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Geographic Market Expansion; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Market-entry scorecard, target clusters, local constraints, and test plan; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified market size; regional response; cost per opportunity
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `geographic_market_expansion_source` dan `geographic_market_expansion_workflow` (awal status `not_connected`)

### 125. Channel Partner Acquisition

- **ID:** `channel_partner_acquisition`
- **Misi:** Menemukan partner kanal yang berpotensi membawa lead atau proyek berulang.
- **Tanggung jawab:** Menemukan partner kanal yang berpotensi membawa lead atau proyek berulang.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Channel Partner Acquisition; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Ranked partner pipeline with audience fit, requirements, and next action; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified partners; partner-sourced pipeline; activation rate
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `channel_partner_acquisition_source` dan `channel_partner_acquisition_workflow` (awal status `not_connected`)

### 126. Strategic Partnership Development

- **ID:** `strategic_partnership_development`
- **Misi:** Mengembangkan kolaborasi strategis dengan kontribusi dan target terukur.
- **Tanggung jawab:** Mengembangkan kolaborasi strategis dengan kontribusi dan target terukur.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Strategic Partnership Development; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Partner brief with mutual value, roles, risks, and joint targets; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Active partnerships; joint pipeline; sourced revenue
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `strategic_partnership_development_source` dan `strategic_partnership_development_workflow` (awal status `not_connected`)

### 127. Referral Program Operations

- **ID:** `referral_program_operations`
- **Misi:** Mengelola rujukan klien dan jaringan profesional sampai terukur dan ditindaklanjuti.
- **Tanggung jawab:** Mengelola rujukan klien dan jaringan profesional sampai terukur dan ditindaklanjuti.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Referral Program Operations; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Referral register with referrer, permission, qualification, and outcome; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified referrals; referral conversion; response time
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `referral_program_operations_source` dan `referral_program_operations_workflow` (awal status `not_connected`)

### 128. Affiliate Channel Management

- **ID:** `affiliate_channel_management`
- **Misi:** Memantau kualitas lead dan kontribusi kanal afiliasi tanpa kehilangan atribusi.
- **Tanggung jawab:** Memantau kualitas lead dan kontribusi kanal afiliasi tanpa kehilangan atribusi.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Affiliate Channel Management; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Affiliate ledger with validated leads, attribution evidence, quality flags, and review inputs; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified affiliate leads; conversion by partner; invalid-lead rate
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `affiliate_channel_management_source` dan `affiliate_channel_management_workflow` (awal status `not_connected`)

### 129. Reseller & White-Label Sales

- **ID:** `reseller_white_label_sales`
- **Misi:** Mengelola peluang reseller dan white-label dengan batas harga serta tanggung jawab jelas.
- **Tanggung jawab:** Mengelola peluang reseller dan white-label dengan batas harga serta tanggung jawab jelas.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Reseller & White-Label Sales; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Reseller pipeline with territory, capability fit, commercial assumptions, and approvals; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified reseller pipeline; activation; channel margin
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `reseller_white_label_sales_source` dan `reseller_white_label_sales_workflow` (awal status `not_connected`)

### 130. Marketplace Opportunity Intelligence

- **ID:** `marketplace_opportunity_intelligence`
- **Misi:** Mencari peluang proyek marketplace dan menyaringnya berdasarkan kecocokan serta kelayakan.
- **Tanggung jawab:** Mencari peluang proyek marketplace dan menyaringnya berdasarkan kecocokan serta kelayakan.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Marketplace Opportunity Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Deduplicated project queue with budget, fit score, deadline, rules, and status; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified opportunities; shortlist precision; win rate
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `marketplace_opportunity_intelligence_source` dan `marketplace_opportunity_intelligence_workflow` (awal status `not_connected`)

### 131. RFP & Tender Intelligence

- **ID:** `rfp_tender_intelligence`
- **Misi:** Mendeteksi RFP/tender relevan dan memeriksa syarat, tenggat, serta kelayakan.
- **Tanggung jawab:** Mendeteksi RFP/tender relevan dan memeriksa syarat, tenggat, serta kelayakan.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for RFP & Tender Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Tender register with requirements, deadlines, risks, and bid/no-bid recommendation; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Relevant tenders; eligibility pass rate; deadline coverage
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `rfp_tender_intelligence_source` dan `rfp_tender_intelligence_workflow` (awal status `not_connected`)

### 132. Procurement & Vendor Onboarding

- **ID:** `procurement_vendor_onboarding`
- **Misi:** Menyiapkan status dokumen untuk mendaftar sebagai vendor calon klien.
- **Tanggung jawab:** Menyiapkan status dokumen untuk mendaftar sebagai vendor calon klien.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Procurement & Vendor Onboarding; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Vendor checklist with missing documents, submission status, and owner responsibilities; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Onboarding completion; time to approval; missing-item count
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `procurement_vendor_onboarding_source` dan `procurement_vendor_onboarding_workflow` (awal status `not_connected`)

### 133. Freelance Platform Opportunity Scoring

- **ID:** `freelance_platform_opportunity_scoring`
- **Misi:** Menilai proyek freelance berdasarkan budget, scope, kemampuan, dan biaya bidding.
- **Tanggung jawab:** Menilai proyek freelance berdasarkan budget, scope, kemampuan, dan biaya bidding.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Freelance Platform Opportunity Scoring; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Scored shortlist with budget fit, scope risks, effort, platform rules, and next action; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Shortlist precision; bid efficiency; project win rate
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `freelance_platform_opportunity_scoring_source` dan `freelance_platform_opportunity_scoring_workflow` (awal status `not_connected`)

### 134. Lost Deal Reactivation

- **ID:** `lost_deal_reactivation`
- **Misi:** Menemukan deal lama yang patut ditinjau kembali karena alasan kalah atau kondisi berubah.
- **Tanggung jawab:** Menemukan deal lama yang patut ditinjau kembali karena alasan kalah atau kondisi berubah.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Lost Deal Reactivation; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Reactivation queue with loss reason, changed signal, permission, and next step; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Reactivated opportunities; win-back rate; stale-contact rate
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `lost_deal_reactivation_source` dan `lost_deal_reactivation_workflow` (awal status `not_connected`)

### 135. Stalled Deal Recovery

- **ID:** `stalled_deal_recovery`
- **Misi:** Mendeteksi deal mandek dan memberi rekomendasi pemulihan berdasarkan hambatan.
- **Tanggung jawab:** Mendeteksi deal mandek dan memberi rekomendasi pemulihan berdasarkan hambatan.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Stalled Deal Recovery; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Stalled-deal report with last activity, blocker, owner, and recovery action; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Recovery rate; days in stage; next-step coverage
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `stalled_deal_recovery_source` dan `stalled_deal_recovery_workflow` (awal status `not_connected`)

### 136. Trial & POC Conversion

- **ID:** `trial_poc_conversion`
- **Misi:** Menghubungkan hasil trial/POC dengan kriteria sukses dan keputusan komersial berikutnya.
- **Tanggung jawab:** Menghubungkan hasil trial/POC dengan kriteria sukses dan keputusan komersial berikutnya.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Trial & POC Conversion; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Trial scorecard with adoption evidence, blockers, criteria status, and next step; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Trial-to-paid conversion; time to decision; criteria completion
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `trial_poc_conversion_source` dan `trial_poc_conversion_workflow` (awal status `not_connected`)

### 137. Upsell Opportunity Intelligence

- **ID:** `upsell_opportunity_intelligence`
- **Misi:** Mendeteksi peningkatan paket yang relevan berdasarkan kebutuhan dan penggunaan layanan.
- **Tanggung jawab:** Mendeteksi peningkatan paket yang relevan berdasarkan kebutuhan dan penggunaan layanan.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Upsell Opportunity Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Upsell opportunities with evidence, value hypothesis, customer fit, and recommendation; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified upsell pipeline; conversion; incremental margin
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `upsell_opportunity_intelligence_source` dan `upsell_opportunity_intelligence_workflow` (awal status `not_connected`)

### 138. Cross-Sell Opportunity Intelligence

- **ID:** `cross_sell_opportunity_intelligence`
- **Misi:** Mencocokkan kebutuhan klien dengan layanan lain yang benar-benar relevan.
- **Tanggung jawab:** Mencocokkan kebutuhan klien dengan layanan lain yang benar-benar relevan.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Cross-Sell Opportunity Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Cross-sell map with unmet need, eligible service, rationale, risks, and next action; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Qualified cross-sell opportunities; attach rate; customer fit
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `cross_sell_opportunity_intelligence_source` dan `cross_sell_opportunity_intelligence_workflow` (awal status `not_connected`)

### 139. Renewal & Expansion Revenue

- **ID:** `renewal_expansion_revenue`
- **Misi:** Memantau pembaruan kontrak dan kebutuhan baru untuk mendukung pendapatan berulang.
- **Tanggung jawab:** Memantau pembaruan kontrak dan kebutuhan baru untuk mendukung pendapatan berulang.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Renewal & Expansion Revenue; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Renewal calendar with risk, expansion hypotheses, notice periods, and decisions; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Renewal rate; revenue retention; expansion pipeline
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `renewal_expansion_revenue_source` dan `renewal_expansion_revenue_workflow` (awal status `not_connected`)

### 140. Customer Advocacy & Referrals

- **ID:** `customer_advocacy_referrals`
- **Misi:** Mengidentifikasi klien yang layak dimintai rujukan dengan tetap meminta izin.
- **Tanggung jawab:** Mengidentifikasi klien yang layak dimintai rujukan dengan tetap meminta izin.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Customer Advocacy & Referrals; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Advocacy shortlist with satisfaction evidence, permission, opportunity, and owner; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Willing advocates; qualified referrals; permission compliance
- **Automation level:** `approval_gated`
- **Approval policy:** External outreach, submissions, pricing commitments, and account changes require Owner approval as applicable; honor consent, opt-out, platform terms, rate limits, and audit logs.
- **Integrasi:** `customer_advocacy_referrals_source` dan `customer_advocacy_referrals_workflow` (awal status `not_connected`)

### 141. Sales Forecasting & Commitments

- **ID:** `sales_forecasting_commitments`
- **Misi:** Menyusun forecast dari tahap pipeline, bukti buyer, risiko, dan tanggal keputusan.
- **Tanggung jawab:** Menyusun forecast dari tahap pipeline, bukti buyer, risiko, dan tanggal keputusan.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Sales Forecasting & Commitments; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Forecast by period and stage with assumptions, confidence range, slippage risk, and history; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Forecast accuracy; slippage rate; pipeline coverage
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `sales_forecasting_commitments_source` dan `sales_forecasting_commitments_workflow` (awal status `not_connected`)

### 142. Pipeline Hygiene & CRM Quality

- **ID:** `pipeline_hygiene_crm_quality`
- **Misi:** Menemukan deal tidak lengkap, duplikat, usang, atau bertentangan agar pipeline dapat dipercaya.
- **Tanggung jawab:** Menemukan deal tidak lengkap, duplikat, usang, atau bertentangan agar pipeline dapat dipercaya.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Pipeline Hygiene & CRM Quality; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** CRM hygiene queue with missing fields, duplicates, stale deals, and corrections; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Complete-record rate; stale deals; duplicate rate
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `pipeline_hygiene_crm_quality_source` dan `pipeline_hygiene_crm_quality_workflow` (awal status `not_connected`)

### 143. Lead Routing & SLA Management

- **ID:** `lead_routing_sla_management`
- **Misi:** Mendistribusikan lead kepada penanggung jawab tepat dan memantau SLA respons.
- **Tanggung jawab:** Mendistribusikan lead kepada penanggung jawab tepat dan memantau SLA respons.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Lead Routing & SLA Management; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Routing log with owner, rationale, deadline, escalation, and response timestamp; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** SLA compliance; first-response time; misrouting rate
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `lead_routing_sla_management_source` dan `lead_routing_sla_management_workflow` (awal status `not_connected`)

### 144. Territory & Capacity Planning

- **ID:** `territory_capacity_planning`
- **Misi:** Menyeimbangkan potensi wilayah, jumlah akun, kapasitas tim, dan beban peluang.
- **Tanggung jawab:** Menyeimbangkan potensi wilayah, jumlah akun, kapasitas tim, dan beban peluang.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Territory & Capacity Planning; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Territory plan with account allocation, workload, capacity gap, and scenarios; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Territory coverage; workload balance; target potential
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `territory_capacity_planning_source` dan `territory_capacity_planning_workflow` (awal status `not_connected`)

### 145. Sales Performance Coaching

- **ID:** `sales_performance_coaching`
- **Misi:** Menemukan pola kinerja sales dan area perbaikan berbasis metrik nyata.
- **Tanggung jawab:** Menemukan pola kinerja sales dan area perbaikan berbasis metrik nyata.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Sales Performance Coaching; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Coaching report with funnel bottleneck, evidence, practice focus, and metric; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Stage conversion; baseline improvement; coaching completion
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `sales_performance_coaching_source` dan `sales_performance_coaching_workflow` (awal status `not_connected`)

### 146. Sales Representative Assistant

- **ID:** `sales_representative_assistant`
- **Misi:** Menyiapkan daftar kerja harian sales berdasarkan prioritas, CRM, dan playbook disetujui.
- **Tanggung jawab:** Menyiapkan daftar kerja harian sales berdasarkan prioritas, CRM, dan playbook disetujui.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Sales Representative Assistant; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Daily work queue with next action, CRM context, due time, and policy reminders; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Task completion; follow-up timeliness; CRM accuracy
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `sales_representative_assistant_source` dan `sales_representative_assistant_workflow` (awal status `not_connected`)

### 147. Sales Enablement Asset Intelligence

- **ID:** `sales_enablement_asset_intelligence`
- **Misi:** Merekomendasikan materi sales yang sudah disetujui tanpa membuat konten baru.
- **Tanggung jawab:** Merekomendasikan materi sales yang sudah disetujui tanpa membuat konten baru.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Sales Enablement Asset Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Approved asset shortlist with rationale, version, permissions, and evidence gaps; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Asset relevance; reuse rate; time-to-find evidence
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `sales_enablement_asset_intelligence_source` dan `sales_enablement_asset_intelligence_workflow` (awal status `not_connected`)

### 148. Competitor Deal Intelligence

- **ID:** `competitor_deal_intelligence`
- **Misi:** Menganalisis informasi kompetitor yang sah dan alasan deal kalah untuk memperbaiki strategi.
- **Tanggung jawab:** Menganalisis informasi kompetitor yang sah dan alasan deal kalah untuk memperbaiki strategi.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Competitor Deal Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Competitor brief with sourced facts, win/loss signals, and recommendations; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Evidence freshness; competitive win rate; insight coverage
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `competitor_deal_intelligence_source` dan `competitor_deal_intelligence_workflow` (awal status `not_connected`)

### 149. Pricing Competitiveness Intelligence

- **ID:** `pricing_competitiveness_intelligence`
- **Misi:** Membandingkan sinyal harga pasar yang sah dengan nilai layanan dan batas margin.
- **Tanggung jawab:** Membandingkan sinyal harga pasar yang sah dengan nilai layanan dan batas margin.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Pricing Competitiveness Intelligence; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Pricing benchmark with source/date, comparable scope, confidence, and safe recommendation; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Benchmark freshness; proposal win rate; margin preservation
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `pricing_competitiveness_intelligence_source` dan `pricing_competitiveness_intelligence_workflow` (awal status `not_connected`)

### 150. Revenue Attribution & Channel ROI

- **ID:** `revenue_attribution_channel_roi`
- **Misi:** Menghubungkan sumber lead ke peluang dan pendapatan untuk mengevaluasi efektivitas kanal.
- **Tanggung jawab:** Menghubungkan sumber lead ke peluang dan pendapatan untuk mengevaluasi efektivitas kanal.; Score fit, value, urgency, risk, and confidence using approved AIGROWTH criteria; Maintain owner, status, evidence source, SLA, and next action; Log exceptions and escalate blocked or high-risk decisions
- **Input:** CRM and existing prospect/opportunity history; Authorized source evidence for Revenue Attribution & Channel ROI; Approved AIGROWTH service catalog, capacity, and commercial guardrails
- **Output:** Channel report with sourced pipeline, revenue, cost assumptions, confidence, and recommendation; Prioritized work queue with owner, status, SLA, and next action; Evidence trail, exceptions, and measurable results for Owner Dashboard
- **KPI:** Attributed pipeline; channel ROI; cost per qualified opportunity
- **Automation level:** `assisted`
- **Approval policy:** Use evidence-backed analysis and authorized sources; record provenance, timestamps, confidence, exceptions, and recommended next action. External commitments require Owner approval.
- **Integrasi:** `revenue_attribution_channel_roi_source` dan `revenue_attribution_channel_roi_workflow` (awal status `not_connected`)

## Prinsip kerja

Output setiap divisi harus tersimpan sebagai record terstruktur yang memuat status, owner, bukti sumber, skor/KPI, SLA, timestamps, dan next action. Output dapat menjadi input divisi berikutnya. Outreach, pengajuan proyek, negosiasi harga, dan komitmen eksternal tetap melewati approval yang relevan. Marketing Intelligence tetap berfokus pada riset/analisis; Sales Enablement hanya mengambil materi yang sudah disetujui, bukan membuat konten baru.
