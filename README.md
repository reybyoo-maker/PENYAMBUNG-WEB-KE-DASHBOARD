# AIGROWTH — Penyambung Website ke Owner Dashboard

Repo ini adalah **perantara kode**, bukan database atau layanan penerima event dengan sendirinya. Kode di sini dideploy menjadi Cloudflare Worker. Website mengirim event ke Worker tersebut, lalu Worker meneruskan event ke endpoint analitik yang benar pada Owner Dashboard menggunakan token server-side.

## Target koneksi

- Website publik: `https://aigrowth.my.id`
- Owner dashboard: `https://dashboard.aigrowth.my.id`
- Worker yang direncanakan untuk perantara: `aga-dashboard-bridge`
- Data storage akhir: database/endpoint analitik milik dashboard yang sudah ada.

**Penting:** repo ini tidak menebak endpoint analitik dashboard. URL endpoint yang tepat harus diisi di GitHub Actions Variable `DASHBOARD_TRACKING_URL` setelah dikonfirmasi dari kode dashboard yang berjalan. Jangan mengisi URL halaman dashboard biasa atau URL tebakan. Jika endpoint kosong/salah, bridge gagal tertutup (fail closed), bukan pura-pura melaporkan data tersimpan.

GitHub menyimpan source code dan menjalankan deployment; GitHub bukan penerima event runtime. Pada saat website dikunjungi, event dikirim ke Cloudflare Worker yang dideploy dari repo ini.

## Yang dipantau untuk panel Analitik Website

- Page view dan jalur halaman (tanpa query-string penuh).
- Sesi/visitor pseudonim, serta heartbeat aktivitas aktif.
- Klik link/tombol dan elemen bertanda `data-track`.
- Klik dengan kata `ebook` / `e-book` untuk sinyal klik e-book (ini **bukan** bukti pembayaran/closing).
- Referrer domain dan parameter kampanye UTM yang diizinkan.
- Jenis perangkat, model yang tersedia dari user-agent, OS, browser, bahasa, zona waktu, serta ukuran layar.
- Negara dan kota jika Cloudflare menyediakan metadata `request.cf`.
- Waktu event untuk tren harian/jam puncak.

Nilai formulir, password, isi chat, dan data kartu/pembayaran **tidak** dikumpulkan. Closing/penjualan hanya boleh dicatat melalui sumber transaksi yang benar, bukan disimpulkan dari klik.

## Status fitur dashboard

`GET /manifest` mengembalikan daftar kapabilitas bridge dan daftar panel yang dikenali dari kontrak dashboard saat ini. Bridge browser mengirim data untuk **Analitik Website** dan sinyal klik e-book. Panel lain—Scraping/CRM, AI Workforce, proyek/keuangan, insiden, kuota, approval, dan rapat—membutuhkan integrasi sumber datanya sendiri; kunjungan website tidak bisa membuktikan data panel-panel itu. Daftar panel di manifest membantu audit cakupan, bukan klaim palsu bahwa semua panel sudah punya data.

## Deploy

### 1. Tambahkan GitHub Actions secrets dan variables

Buka repo → **Settings → Secrets and variables → Actions**.

**Secrets**
- `CLOUDFLARE_API_TOKEN`: Cloudflare API token dengan hak deploy Workers yang dibutuhkan.
- `CLOUDFLARE_ACCOUNT_ID`: Account ID Cloudflare.
- `DASHBOARD_INGEST_TOKEN`: token yang sama dengan token ingest milik dashboard. Simpan hanya sebagai secret; jangan pernah taruh di HTML atau source JavaScript browser.

**Variables**
- `DASHBOARD_TRACKING_URL`: **URL HTTPS lengkap ke endpoint analitik website yang benar-benar didukung Worker dashboard**, termasuk path. Jangan menebak. Kode sumber dashboard perlu diperiksa untuk menentukan kontrak resminya.
- `ALLOWED_ORIGINS` (opsional): default `https://aigrowth.my.id`; pisahkan beberapa origin dengan koma jika memang dibutuhkan.
- `DASHBOARD_PAYLOAD_MODE` (opsional): `records` (default), `events`, atau `single`, sesuai kontrak endpoint dashboard.

Workflow deployment sengaja tidak berjalan kalau URL endpoint, token, atau kredensial Cloudflare belum tersedia. Ini mencegah sistem dideploy dalam keadaan tidak bisa meneruskan event.

### 2. Periksa dan deploy

Setiap push ke branch `main` menjalankan tes. Jika konfigurasi deploy lengkap, GitHub Actions memasang secret dan deploy `aga-dashboard-bridge` ke Cloudflare Workers.

Sesudah sukses, Worker memiliki:
- `GET /health` — status kesiapan tanpa membuka rahasia.
- `GET /manifest` — daftar kemampuan dan panel.
- `GET /tracker.js` — script tracker browser.
- `POST /collect` — validasi, penambahan metadata server, lalu forward ke endpoint dashboard.

### 3. Sambungkan website (setelah Worker berhasil dideploy)

Tambahkan satu baris ini ke `<head>` website, menggunakan hostname Worker yang benar-benar dikeluarkan Cloudflare setelah deploy:

```html
<script defer src="https://<HOST-WORKER-CLOUDFLARE-YANG-SEBENARNYA>/tracker.js"></script>
```

Ganti placeholder dengan hostname aktual dari deployment—jangan publikasikan placeholder itu. Script berjalan dari Worker sendiri sehingga endpoint collect dibuat dari origin script yang sama. Website utama dan temanya tidak perlu diganti.

### 4. Verifikasi sungguhan

1. Buka `/health`; pastikan konfigurasi endpoint dinyatakan siap.
2. Buka `aigrowth.my.id` dengan tracker terpasang.
3. Periksa request `POST /collect` dan respons forward sukses di browser/network serta logs Worker.
4. Buka Owner Dashboard dan pastikan event tercatat sebagai analitik baru.
5. Klik e-book atau elemen `data-track="nama"` dan pastikan event yang cocok masuk.
6. Jika dashboard belum menunjukkan event, hentikan klaim selesai dan periksa endpoint/kontrak upstream.

## Tes lokal

Memerlukan Node.js 20+:

```sh
npm install
npm test
npm run dev
```

Set local Worker vars/secrets sebelum pengujian forward end-to-end. Tes unit tidak mengirim data ke dashboard produksi.

## Keamanan dan privasi

- Token ingest hanya dipakai oleh Worker server-side.
- Endpoint dashboard harus HTTPS dan hostname tujuan dibatasi pada dashboard resmi.
- Origin browser diverifikasi menggunakan allowlist.
- Data event divalidasi dan dibatasi ukurannya.
- Query string penuh, nilai input, isi pesan, serta data sensitif tidak dikirim.
- Pemilik website perlu menyesuaikan pemberitahuan privasi/consent dengan kewajiban yang berlaku.

## Batas yang diketahui saat repo dibuat

Domain website dan dashboard sudah aktif. Namun endpoint ingest analitik website yang benar dan source Worker dashboard belum berhasil dikonfirmasi dalam sesi sebelumnya. Karena itu, kode ini menyiapkan bridge generik dengan konfigurasi eksplisit dan fail-closed; **event baru dianggap terhubung setelah endpoint resmi diisi dan data terlihat pada dashboard**.
