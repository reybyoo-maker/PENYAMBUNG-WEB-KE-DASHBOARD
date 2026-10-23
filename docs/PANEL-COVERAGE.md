# Peta Cakupan Panel Dashboard AIGROWTH

Dokumen ini membedakan apa yang otomatis direkam oleh tracker browser dan apa yang memerlukan sumber data operasional lain. **Panel terdaftar di manifest bukan berarti datanya otomatis terisi**—setiap jalur harus memenuhi kontrak ingest dashboard dan diuji.

## A. Panel Analitik Website

| Fitur yang terlihat di dashboard | Event/field dari bridge | Batasan |
|---|---|---|
| Grafik kunjungan 7/14/30/90 hari | `page_view`, `occurred_at`, `page_url` | Pengelompokan periode dilakukan dashboard |
| Aktivitas langsung | `active_ping` tiap 30 detik saat tab aktif, `visitor_id`, `session_id` | Bergantung pada tab/browser aktif dan penerimaan event |
| Klik terbanyak | `click`, `ebook_click`, `custom_event`, nama elemen | Hanya klik pada link/tombol/`data-track` |
| Halaman teratas | `page_url`, `page_title` | Query string dan fragment sengaja dihilangkan |
| Negara | `country` dari metadata Cloudflare | Bisa kosong jika Cloudflare tidak menyediakan nilai |
| Kota/region | `city`, `region` dari metadata Cloudflare | Bisa kosong atau kurang spesifik |
| Tipe perangkat | `device_type` | Klasifikasi ringan dari user-agent |
| Model HP | `device_model` jika terdeteksi | Banyak browser menyembunyikan model; nilai kosong adalah normal |
| OS dan browser | `os`, `browser` | Klasifikasi ringan, bukan fingerprinting |
| Sumber trafik | `referrer_domain`, UTM source/medium/campaign/content/term | Hanya parameter UTM yang diizinkan; query lain tidak dikirim |
| Jam ramai | `occurred_at`, `timezone` | Dashboard bertanggung jawab mengelompokkan sesuai WIB |
| Klik e-book | `ebook_click`, `product_hint` | Klik bukan transaksi, pembayaran, atau closing |
| Closing e-book | Tidak dibuat oleh tracker browser | Masukkan dari sistem transaksi tepercaya melalui kontrak `ebook_sales` |

### Privasi tracker

Bridge tidak membaca nilai input form, password, isi chat, data pembayaran, query string lengkap, atau alamat IP. Negara/kota dipakai hanya jika tersedia dari metadata Cloudflare pada request yang masuk ke Worker.

## B. Panel lain dan sumber yang harus terhubung

| Panel | Sumber data yang dibutuhkan | Status untuk bridge ini |
|---|---|---|
| Database Scraping | Sistem scraping mengirim daftar prospek dan status pengiriman | Endpoint kontrak diketahui dari UI: `POST /api/ingest/scrape`; perlu integrasi sumber |
| CRM Pipeline & follow-up | Lead, izin kontak, jadwal follow-up, balasan | Perlu kontrak penuh Worker aktual dan sumber CRM |
| Project & Keuangan | Status proyek, bruto, biaya, pembayaran dan tenggat | Perlu sumber project/finance; netto harus dihitung server dashboard |
| AI Workforce | Agen, divisi, tugas, progres, log | Kontrak UI: `POST /api/ingest/workforce` |
| Automation Monitoring | Uptime, error, bug, insiden | Cron/monitor sistem dan kontrak insiden; tidak berasal dari page view |
| Virtual Office 3D | Status/posisi agen dan peristiwa workforce | Perlu feed data agen yang sesuai format panel |
| Ringkasan & Audit Proses | Data lintas scraping, balasan, CRM, proyek dan pembayaran | Terbentuk dari data sumber yang masuk; bukan event website tunggal |
| Content Prompt & Ide | Library prompt dan status prompt | Kontrak UI: `POST /api/ingest/content_prompts` |
| Referensi konten | URL, platform, niche, catatan, tag | Kontrak UI: `POST /api/ingest/content_refs` |
| Kuota API & Token | Pemakaian, limit, biaya, jadwal reset | Kontrak UI: `POST /api/ingest/quota` |
| Persetujuan Owner | Permintaan approval, risiko, biaya, status | Kontrak UI: `POST /api/ingest/approval_requests` |
| Rapat & Evaluasi AI | Hasil rapat, keputusan, lesson, rencana | Kontrak UI: `POST /api/ingest/meetings` |

## C. Gerbang selesai (Definition of Done)

Koneksi Website Analytics baru boleh disebut selesai setelah semua ini benar:

1. Worker bridge `/health` menampilkan `ready: true`.
2. Script `/tracker.js` dipasang pada website publik.
3. Request page view ke `/collect` mendapat respons `202` dengan `stored: true`.
4. Worker bridge menggunakan binding `DB` yang menunjuk ke D1 `aigrowth-core-db` yang sama dengan dashboard.
5. Endpoint agregat `/api/website-analytics?days=7` memberi HTTP 200 dan `source: cloudflare-d1`.
6. Event uji benar-benar terlihat di panel Analitik Website/dashboard database setelah `dashboard-panel.js` dipasang.
7. Klik, UTM, perangkat, geo, dan active ping diperiksa untuk field yang tersedia.
8. Website publik tetap hidup dan tidak berubah tema/struktur hanya karena tracker dipasang.

Jalur utama menyimpan event langsung ke tabel `website_analytics_events` pada D1 bersama. Tidak dibutuhkan URL ingest terpisah atau token ingest. Deployment bridge dan dua pemasangan script pada Worker existing tetap harus dilakukan sebelum koneksi live dinyatakan selesai.
