# AIGROWTH — Website, Dashboard & 150 Divisions

Repo ini menyediakan Cloudflare Worker bridge untuk analitik website, registry 150 divisi AIGROWTH, daftar kebutuhan integrasi, dan antrean task yang menunggu approval Owner. Event runtime disimpan langsung ke Cloudflare D1 aigrowth-core-db yang sama dengan Owner Dashboard.

GitHub digunakan untuk menyimpan kode dan men-trigger deployment. Saat berjalan, website, Worker bridge, dan dashboard berkomunikasi melalui Cloudflare.

## Target sistem

- Website: https://aigrowth.my.id
- Owner Dashboard: https://dashboard.aigrowth.my.id
- Bridge Worker: aga-dashboard-bridge
- Existing shared D1: aigrowth-core-db
- Website analytics: /collect and /api/website-analytics
- Division registry: /api/divisions
- Division panel: /divisions-panel.js
- Owner dashboard panel: /dashboard-panel.js

## Registry semua divisi

Registry berisi **150 divisi spesifik** dan **310 kebutuhan koneksi integrasi**. Sebelas divisi inti dipertahankan—Sales & CRM, Sales Outsourcing Multi-Platform, Marketing Intelligence, Client Success, Operations & Service Delivery, Technology & Automation, Quality Assurance & Reliability, Data & Integration Intelligence, Finance Analytics, Owner Control, serta Website & System Monitoring—dan diperluas dengan 89 divisi spesialis.

Semua divisi mempunyai mission, tanggung jawab, input/output, KPI, approval policy, automation level, dan kebutuhan integrasi. Migration 0002 membuat skema plus 11 divisi inti, migration 0003 menambahkan 89 divisi spesialis dan migration 0004 menambahkan 50 divisi fokus sales sehingga totalnya 150. Koneksi berstatus `not_connected` sampai provider dan aliran datanya benar-benar diuji.

**[Buka ringkasan 50 divisi sales tambahan](docs/50-SALES-DIVISIONS.md)** untuk setiap misi, tanggung jawab, KPI, output, dan kebutuhan konektor.

## Endpoint bridge

- GET /health — status kesiapan database dan schema.
- GET /manifest — kemampuan bridge dan definisi divisi.
- GET /tracker.js — tracker browser untuk website.
- POST /collect — validasi dan penyimpanan event website ke D1.
- GET /api/website-analytics?days=7|14|30|90 — agregat kunjungan, unique visitors, aktivitas, halaman populer, klik, sumber trafik, perangkat, dan geografi.
- GET /api/divisions — registry, KPI, dependency integrasi, dan jumlah task terbuka.
- GET /dashboard-panel.js — analitik website serta loader panel divisi.
- GET /divisions-panel.js — panel tampilan seluruh divisi.
- POST /api/divisions/:slug/tasks — API task terlindungi yang membuat task berstatus awaiting_approval; bukan eksekutor AI.

Tracker tidak mengirim nilai form, password, isi chat, query string penuh, alamat IP, atau informasi pembayaran. Klik e-book adalah sinyal klik, bukan bukti pembelian.

## Deploy ke Cloudflare

Lihat docs/CLOUDFLARE-ACTIVATION.md untuk langkah aktivasi dan pemasangan script secara aman pada Worker yang sudah ada.

GitHub Actions secrets yang diperlukan:
- CLOUDFLARE_API_TOKEN — scope minimum yang dibutuhkan untuk Worker deployment dan D1 migration.
- CLOUDFLARE_ACCOUNT_ID — ID akun Cloudflare yang benar.

Optional:
- AGA_OWNER_API_TOKEN — server-side token untuk endpoint create task. Jika tidak ada, endpoint task queue akan tertutup (fail closed).

Workflow menjalankan tes, mencari database D1 aigrowth-core-db, membuat konfigurasi binding DB secara sementara, menerapkan migration 0001, 0002, 0003, dan 0004, deploy Worker, serta memverifikasi health, analytics, 150 divisi, dan 310 definisi integrasi. Jangan menganggap overall workflow sukses jika deployment step terlewati; workflow baru berstatus sukses setelah pengecekan langsung lolos.

## Batas status operasional

Registry dan panel divisi dibuat di source code dan disiapkan melalui migration. Itu belum berarti semua connector atau AI agent sudah menjalankan pekerjaan. Integrasi awal sengaja ditampilkan not_connected. Sumber data nyata dan executor harus diuji sebelum status runtime dapat berubah menjadi active. Tindakan eksternal, keuangan, dan deploy produksi harus tetap berada di balik approval policy.

## Tes lokal

Membutuhkan Node.js 20+:

    npm install
    npm test

Tes lokal menggunakan mock database dan tidak mengirim data ke produksi.
