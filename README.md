# AIGROWTH — Penyambung Website ke Owner Dashboard

Repo ini menyiapkan jalur analitik langsung di Cloudflare. Bridge Worker menulis event ke database D1 yang sama dengan Owner Dashboard, yaitu **aigrowth-core-db**, lalu menyediakan ringkasan analitik untuk panel. **URL ingest dashboard terpisah tidak diperlukan untuk jalur utama.**

## Target

- Website: https://aigrowth.my.id
- Owner Dashboard: https://dashboard.aigrowth.my.id
- Worker bridge: aga-dashboard-bridge
- Penyimpanan: D1 aigrowth-core-db (database yang sudah digunakan dashboard)

GitHub hanya menyimpan kode dan menjalankan deployment; event real-time mengalir melalui Cloudflare Workers dan D1.

## Apa yang ditambahkan

- POST /collect: validasi event, normalisasi metadata Cloudflare, dan simpan langsung ke D1 jika binding DB aktif.
- GET /api/website-analytics?days=7|14|30|90: agregat kunjungan, pengunjung unik, aktivitas saat ini, halaman populer, klik, sumber trafik, perangkat, dan geografi.
- GET /tracker.js: script untuk website.
- GET /dashboard-panel.js: panel browser yang menampilkan analitik dari endpoint D1 di dashboard.
- Migration membuat tabel website_analytics_events dan index pada D1 yang sama. Event ID unik mencegah event terduplikasi saat retry.
- Tes menguji penyimpanan langsung, validasi event, dan akses endpoint.

Tidak ada nilai form, password, isi chat, query string penuh, alamat IP, atau data pembayaran yang dikirim. Klik e-book tetap hanya sinyal klik, bukan bukti transaksi.

## Deployment

Runbook aktivasi khusus untuk TinyFish tersedia di [docs/CLOUDFLARE-ACTIVATION.md](docs/CLOUDFLARE-ACTIVATION.md). Ikuti urutannya agar Worker website dan dashboard yang sudah ada tidak terganti.

Jalankan GitHub Actions → **Deploy AIGROWTH bridge** → **Run workflow**. Workflow mencari database D1 yang sudah ada dengan nama persis aigrowth-core-db, menjalankan migration, membuat binding DB, deploy bridge, dan menguji endpoint health/analytics.

GitHub repo harus memiliki:
- Secret CLOUDFLARE_API_TOKEN: izin Cloudflare Workers Scripts: Edit dan D1: Edit pada akun terkait.
- Secret CLOUDFLARE_ACCOUNT_ID: ID akun Cloudflare yang benar.

Workflow sengaja berhenti dengan error jika database tidak ditemukan atau endpoint tidak lolos verifikasi. Ia tidak lagi menandai deployment yang dilewati sebagai deployment berhasil.

## Dua pemasangan script yang perlu diterapkan di Worker yang sudah ada

Setelah bridge berhasil dideploy, pasang satu script ke respons HTML website dan satu script ke respons HTML dashboard dengan Cloudflare Worker HTMLRewriter atau integrasi setara, **tanpa mengganti handler yang sudah berjalan**:

Website Worker agencyai, di elemen head:
    <script defer src="https://aga-dashboard-bridge.reybyoo.workers.dev/tracker.js"></script>

Dashboard Worker aigrowth-owner-dashboard, di elemen head:
    <script defer src="https://aga-dashboard-bridge.reybyoo.workers.dev/dashboard-panel.js"></script>

Account subdomain reybyoo.workers.dev mengikuti hostname Worker yang sudah digunakan dashboard saat ini. Setelah deploy, verifikasi https://aga-dashboard-bridge.reybyoo.workers.dev/health menunjukkan ready: true dan storageMode: shared_d1, lalu buka /api/website-analytics?days=7. Kunjungan uji kemudian harus muncul pada panel analitik di dashboard.

**Jangan deploy kode repo ini sebagai pengganti Worker dashboard yang sudah ada.** Bridge adalah Worker terpisah; script dashboard hanya perlu ditambahkan pada HTML Worker existing agar tema, login, dan halaman dashboard tetap utuh.

## Panel lain

Bridge ini otomatis menangani analitik website, bukan mengarang data untuk panel Scraping, CRM, AI Workforce, proyek/keuangan, insiden, kuota, approval, atau rapat. Panel-panel tersebut tetap memerlukan koneksi ke sumber operasional masing-masing. Cakupan dan prasyaratnya tercatat di docs/PANEL-COVERAGE.md.

## Tes lokal

Node.js 20+:
    npm install
    npm test

Tes unit tidak mengirim data ke database produksi.
