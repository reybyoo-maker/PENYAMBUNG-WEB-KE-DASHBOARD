# AIGROWTH panel coverage and definition of done

Dokumen ini memisahkan fungsi yang sudah memiliki source code dari integrasi eksternal yang masih harus disambungkan. Menampilkan modul di manifest bukan bukti bahwa integrasinya sedang berjalan.

## 1. Analitik Website

| Fitur | Sumber / event | Batasan |
|---|---|---|
| Page views dan top pages | page_view, page_url, page_title | Query string dan fragment dihilangkan |
| Active visitors | active_ping, visitor_id, session_id | Berdasarkan tab/browser aktif dan heartbeat |
| Top clicks | click, ebook_click, custom_event | Tidak menganggap klik sebagai transaksi |
| Traffic source | Referrer domain dan UTM yang diizinkan | Hanya nilai kampanye yang diizinkan |
| Device / OS / browser | User-agent browser | Klasifikasi ringan, model dapat kosong |
| Geography | Metadata Cloudflare country/city | Dapat kosong jika metadata tidak tersedia |
| Trend harian | occurred_at | Dashboard mengelompokkan periode waktu |

## 2. Registry 150 divisi

Migration 0002 mendaftarkan 11 divisi dasar, migration 0003 menambahkan 89 divisi spesialis, dan migration 0004 menambahkan 50 divisi tambahan yang fokus pada sales dengan misi, tanggung jawab, input/output, KPI, approval policy, automation level, dan dependency integrasi. GET /api/divisions menyajikan record D1 ini ke Owner Dashboard. Rincian misi tiap divisi ada di [katalog 50 divisi sales tambahan](50-SALES-DIVISIONS.md).

| # | Divisi | Tugas inti |
|---:|---|---|
| 1 | Sales & CRM | Lead scoring, pipeline, follow-up, win/loss |
| 2 | Sales Outsourcing Multi-Platform | Peluang proyek lintas platform, proposal review, status peluang |
| 3 | Marketing Intelligence | Intel pasar, kompetitor, niche, intent dan rekomendasi berbasis bukti; bukan produksi konten |
| 4 | Client Success | Onboarding, client health, milestone, retensi |
| 5 | Operations & Service Delivery | Delivery plan, task breakdown, dependensi, SLA, handoff |
| 6 | Technology & Automation | Workflow dan API, rilis, pemulihan, rollback |
| 7 | Quality Assurance & Reliability | Health checks, smoke tests, validasi hasil, insiden |
| 8 | Data & Integration Intelligence | Schema mapping, deduplication, sinkronisasi, rekonsiliasi |
| 9 | Finance Analytics | Pendapatan, biaya, margin, cashflow dan budget alert |
| 10 | Owner Control | Executive summary, prioritas, approval, audit trail |
| 11 | Website & System Monitoring | Uptime, Worker health, alert, eskalasi insiden |

## 3. Integrasi yang direncanakan

Registry memuat 310 placeholder koneksi. Status awal tiap koneksi adalah not_connected sampai sumber, token, izin, schema dan jalur data diverifikasi. Contohnya meliputi CRM/D1, email provider, lead source, konektor platform resmi, riset, project/task store, Cloudflare Workers, CI/smoke test, data transaksi, audit logs, monitoring targets dan channel alert.

Integrasi harus menggunakan API/metode resmi dan aturan akses platform. Jangan bypass login, CAPTCHA, rate limits, atau Terms of Service.

## 4. Task queue dan guardrails

POST /api/divisions/:slug/tasks memerlukan bearer token server-side melalui secret AGA_OWNER_API_TOKEN. Task yang dibuat akan berstatus awaiting_approval, mencatat payload yang tervalidasi, dan tidak mengeksekusi aksi sendiri. Ini merupakan queue foundation, bukan klaim bahwa executor AI sudah berjalan.

- Outreach/proposal eksternal: approval, opt-out, batas pengiriman, dan compliance platform.
- Production deployment, schema change destruktif, DNS dan restart: approval/runbook.
- Finance: analytic/read-only; pembayaran, refund dan transfer tidak dijalankan otomatis.
- Client Success: perubahan scope, harga dan deadline membutuhkan approval.
- Data: merge/delete massal dan backfill besar membutuhkan approval.
- Owner Control: tindakan berisiko tinggi harus diaudit.

## 5. Definition of done

Website analytics baru dinyatakan terhubung setelah:
1. GET /health menyatakan ready=true, storageMode=shared_d1, databaseSchemaReady=true dan divisionsSchemaReady=true.
2. POST /collect menghasilkan HTTP 202 dan stored=true.
3. GET /api/website-analytics?days=7 menghasilkan HTTP 200 dan source=cloudflare-d1.
4. GET /api/divisions menghasilkan tepat 150 divisi dan tepat 310 koneksi integrasi.
5. Script tracker dipasang pada HTML website existing.
6. Dashboard menampilkan metrik analitik dan 150 kartu divisi.
7. Data uji benar-benar muncul setelah kunjungan baru, tanpa merusak login, routing atau tema dashboard.

Divisi baru dinyatakan operational setelah integrasi sumbernya dikonfigurasi, koneksi diuji, error logging aktif, dan jalur tugasnya memiliki adapter eksekusi serta approval policy yang benar.
