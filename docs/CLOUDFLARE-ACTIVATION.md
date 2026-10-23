# Cloudflare activation runbook — AIGROWTH

Tujuan: sambungkan website, panel analitik, dan registry 100 divisi menggunakan Worker bridge dan D1 bersama, tanpa mengganti Worker website atau dashboard yang sekarang.

## Urutan aktivasi

1. Gunakan akun Cloudflare yang sama dengan Worker agencyai dan aigrowth-owner-dashboard. Pastikan database D1 bernama aigrowth-core-db memang tersedia.
2. Di GitHub repo, buat Actions secrets CLOUDFLARE_API_TOKEN dan CLOUDFLARE_ACCOUNT_ID. Token perlu izin deploy Workers dan membaca/menjalankan migration D1 pada akun yang benar.
3. Jalankan GitHub Actions → Deploy AIGROWTH bridge → Run workflow. Workflow menguji kode, mencari ID D1 berdasarkan nama, menjalankan kedua migration, deploy bridge, lalu memeriksa health, analytics dan registry divisi.
4. Workflow harus membuktikan /health menunjukkan ready=true dan storageMode=shared_d1. Endpoint /api/divisions harus mengembalikan 100 divisi dan sedikitnya 30 catatan integrasi.
5. Pada Worker website agencyai, tambahkan tracker hanya ke respons HTML halaman publik.
6. Pada Worker dashboard aigrowth-owner-dashboard, tambahkan dashboard-panel.js hanya ke respons HTML dashboard setelah login. Script ini otomatis memuat panel divisi juga.
7. Buka website, lakukan beberapa navigasi, lalu dashboard. Verifikasi page views, top pages, dan 100 kartu divisi tampil tanpa mengubah tema, login, atau API dashboard.

## Script untuk dipasang

Website Worker agencyai, elemen head:

    <script defer src="https://aga-dashboard-bridge.reybyoo.workers.dev/tracker.js"></script>

Dashboard Worker aigrowth-owner-dashboard, elemen head:

    <script defer src="https://aga-dashboard-bridge.reybyoo.workers.dev/dashboard-panel.js"></script>

Gunakan hostname workers.dev aktual bila nama yang dihasilkan Cloudflare berbeda. Dashboard-panel.js akan memuat /divisions-panel.js sendiri; tidak perlu menambahkan tag ketiga.

## Prinsip pemasangan

Gunakan HTMLRewriter pada handler Worker existing hanya untuk respons yang sukses dan content-type text/html. Pola umum:

~~~js
function injectAgaScript(response, scriptUrl) {
  const contentType = response.headers.get("content-type") || "";
  if (!response.ok || !contentType.toLowerCase().includes("text/html")) {
    return response;
  }

  return new HTMLRewriter()
    .on("head", {
      element(head) {
        head.append(
          '<script defer src="' + scriptUrl + '"></script>',
          { html: true }
        );
      }
    })
    .transform(response);
}
~~~

Panggil helper ini pada jalur respons HTML existing: tracker.js di website; dashboard-panel.js di dashboard. Ini contoh helper, bukan pengganti seluruh fetch handler. Source Worker aktual harus diperiksa sebelum memasang perubahan supaya auth/login, API JSON, routing, dan tema tetap utuh. Jangan menerbitkan ulang Worker produksi dengan handler pengganti dari repo bridge.

## Endpoint verifikasi

- GET /health: ready=true, configuration.storageMode=shared_d1, databaseSchemaReady=true, divisionsSchemaReady=true.
- GET /api/website-analytics?days=7: HTTP 200 dan source=cloudflare-d1.
- GET /api/divisions: HTTP 200, 100 division records, 32 integration records.
- POST /collect: HTTP 202 dengan stored=true setelah binding DB siap.
- Dashboard menampilkan Live Website Analytics dan AIGROWTH Division Control.

## Divisi dan status operasional

Registry terdiri dari 100 divisi dan 210 koneksi integrasi yang tercatat. Status awal koneksi adalah not_connected; divisi ditampilkan sebagai SETUP NEEDED hingga konektor benar-benar disambungkan dan diverifikasi. Itu status yang jujur, bukan klaim bahwa semua AI agent sudah berjalan.

Untuk mengaktifkan endpoint task queue, buat secret GitHub Actions bernama AGA_OWNER_API_TOKEN lalu jalankan ulang workflow. POST /api/divisions/:slug/tasks membuat task yang menunggu approval Owner. Endpoint ini sengaja tidak menjalankan AI/task secara otomatis. Eksekutor per divisi, sumber data, serta connector harus dibangun dan diuji terpisah sebelum pekerjaan otomatis dijalankan.

Aksi eksternal seperti pengiriman proposal/outreach, perubahan scope, deployment produksi, transaksi keuangan, refund, dan perubahan DNS tetap memerlukan approval atau runbook yang diizinkan.
