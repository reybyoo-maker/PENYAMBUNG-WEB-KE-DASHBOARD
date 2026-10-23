# Cloudflare activation runbook (TinyFish)

Tujuan: sambungkan website dan panel analitik dashboard menggunakan Worker bridge + D1 bersama, tanpa mengubah tampilan atau mengganti Worker produksi.

## Urutan wajib

1. Di Cloudflare akun yang sama dengan Worker **agencyai** dan **aigrowth-owner-dashboard**, pastikan database D1 bernama **aigrowth-core-db** tersedia.
2. Pastikan repo GitHub memiliki Actions secrets **CLOUDFLARE_API_TOKEN** dan **CLOUDFLARE_ACCOUNT_ID**. Token membutuhkan izin Workers Scripts: Edit dan D1: Edit pada akun yang benar. Jangan simpan token di source code.
3. Jalankan workflow GitHub **Deploy AIGROWTH bridge** secara manual. Workflow akan menguji kode, menemukan UUID database berdasarkan nama, menjalankan migration yang idempotent, men-deploy **aga-dashboard-bridge**, lalu memeriksa /health dan /api/website-analytics?days=7. Jika ada langkah gagal, hentikan—jangan mengklaim tersambung.
4. Verifikasi https://aga-dashboard-bridge.reybyoo.workers.dev/health. Harus memiliki ready: true dan configuration.storageMode: "shared_d1".
5. Pada Worker website **agencyai**, tambahkan tracker hanya pada respons HTML untuk halaman publik. Jangan menimpa atau membangun ulang Worker dari repo ini.
6. Pada Worker dashboard **aigrowth-owner-dashboard**, tambahkan loader panel hanya pada respons HTML dashboard. Pertahankan login, auth, API, dan handler lainnya.
7. Buka website dalam browser baru, lalu kunjungi dashboard. Panel **Live Website Analytics** seharusnya menampilkan data uji dalam 30 detik. Pastikan GET /api/website-analytics?days=7 memberi HTTP 200 dan source: "cloudflare-d1".

## Script yang dipasang

Website Worker agencyai — muat satu kali di elemen head pada respons HTML:

    <script defer src="https://aga-dashboard-bridge.reybyoo.workers.dev/tracker.js"></script>

Dashboard Worker aigrowth-owner-dashboard — muat di elemen head pada respons HTML setelah login:

    <script defer src="https://aga-dashboard-bridge.reybyoo.workers.dev/dashboard-panel.js"></script>

Jika Worker hostname yang dikembalikan Cloudflare berbeda dari aga-dashboard-bridge.reybyoo.workers.dev, gunakan hostname aktual hasil deployment di kedua tag itu.

## Pola HTMLRewriter

Pada masing-masing Worker existing, gunakan HTMLRewriter untuk append script ke elemen head hanya ketika respons sukses berjenis text/html. Pola dasarnya:

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

Lalu panggil helper di titik ketika Worker existing akan mengembalikan respons halaman HTML:
- Website: injectAgaScript(response, "https://aga-dashboard-bridge.reybyoo.workers.dev/tracker.js")
- Dashboard: injectAgaScript(response, "https://aga-dashboard-bridge.reybyoo.workers.dev/dashboard-panel.js")

Pola di atas adalah helper, bukan pengganti seluruh fetch handler. Integrasikan pada jalur respons HTML yang benar setelah memeriksa source Worker live. Jangan membungkus respons JSON/API dengan HTMLRewriter.

## Cara verifikasi

- /health: ready: true, storageMode: shared_d1.
- /api/website-analytics?days=7: HTTP 200, source: cloudflare-d1.
- Request website /collect: HTTP 202, dengan stored: true.
- Dashboard: panel menampilkan page views, unique visitors, top pages, dan top clicks.
- Uji sekali dengan kunjungan homepage lalu navigasi ke halaman lain; data tidak perlu menunggu batch spreadsheet atau sistem pihak ketiga.

## Batas cakupan

Runbook ini menyambungkan analitik website. Panel Scraping, CRM, Workforce, proyek/keuangan, insiden, approval, kuota, dan rapat tetap harus mengirim data operasionalnya masing-masing; event page view bukan sumber data untuk panel-panel tersebut.
