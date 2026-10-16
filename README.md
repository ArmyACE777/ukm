# UKM Entrepreneur - Young Entrepreneur Politeknik Jatiluhur

Platform Website Profil & Katalog Produk Komersial UKM Entrepreneur dengan integrasi Custom CMS Admin dan Arsitektur Serverless Vercel + PostgreSQL.

---

## 🌟 Fitur Utama

- **Katalog Produk Komersial:** Menampilkan ragam produk unggulan UKM dengan filter kategori (Kulit, Makanan & Minuman, Elektronik & Kerajinan, Jasa & Kreatif) serta modal detail produk dan direct order WhatsApp.
- **Custom CMS Admin (`/admin`):**
  - **Kelola Produk:** Tambah, edit, hapus produk, upload foto, status rekomendasi & ketersediaan.
  - **Kelola Berita & Artikel:** Publikasi info kegiatan dan tips wirausaha.
  - **Kelola Pesan & Kontak:** Rekap pesan masuk dari formulir kontak.
  - **Pengaturan Situs Lengkap (Tab 4):**
    - Identitas Brand, Tagline, Headline & Subheadline banner.
    - Kontak (WhatsApp, Email, Jam Operasional, Alamat).
    - Media Sosial (Instagram, Facebook, LinkedIn, Twitter/X).
    - Teks Copyright Footer.
    - **Logo & Presentation Mode:** Upload logo kustom, pilihan tampilan logo (*Circular Badge Mode*, *Rounded*, *Original*), serta fitur satu klik penghapus background putih logo via HTML5 Canvas.
- **Hybrid Storage & Auto-Fallback:**
  - Terhubung langsung ke database PostgreSQL (Neon / Supabase) via Serverless Functions (`/api/*`).
  - Dilengkapi auto-fallback ke `localStorage` jika database cloud belum dikonfigurasi, sehingga CMS dapat langsung dicoba tanpa setup database yang rumit.

---

## 📁 Struktur Direktori

```text
├── admin/                     # Antarmuka CMS Admin
│   ├── css/admin.css          # Styling Dashboard CMS
│   ├── js/admin.js            # Logika CMS, CRUD, Logo Transparency, & API Sync
│   ├── dashboard.html         # Panel Dashboard Utama CMS
│   └── login.html             # Halaman Login Admin
├── api/                       # Vercel Serverless Functions (Node.js)
│   ├── auth.js                # Autentikasi Admin & Session Token
│   ├── posts.js               # API CRUD Berita & Artikel
│   └── ukm.js                 # API CRUD Produk, Site Settings, & Pesan
├── assets/                    # Aset statis website (CSS, JS, Gambar)
│   ├── css/styles.css         # Styling antarmuka publik
│   ├── js/                    # Script frontend
│   └── img/                   # Foto produk, UI, dan banner
├── index.html                 # Halaman Utama Website Profil & Katalog
├── vercel.json                # Konfigurasi routing & serverless Vercel
├── package.json               # Manifest dependensi & script
├── schema.sql                 # Skema tabel database PostgreSQL (Neon/Supabase)
└── README.md
```

---

## 🚀 Menjalankan Secara Lokal

1. **Jalankan server statis:**
   ```bash
   npx serve .
   ```
   atau menggunakan ekstensi *Live Server* di VS Code / Antigravity IDE.
2. Akses halaman utama: `http://localhost:3000` (atau port yang diberikan).
3. Akses CMS Admin: `http://localhost:3000/admin` (atau `/admin/dashboard.html`).
   - Default login: Username `admin`, Password `admin123`.

---

## ☁️ Panduan Deploy ke Hosting Gratis Lifetime (Vercel + Neon)

### 1. Database PostgreSQL Gratis (Neon.tech)
1. Buat akun gratis di [Neon Console](https://console.neon.tech/).
2. Buat database baru (misal: `ukm-db`).
3. Buka menu **SQL Editor**, salin dan jalankan seluruh isi file [`schema.sql`](file:///c:/Users/inboo/Documents/Project/Naraya-Leather/schema.sql).
4. Salin string koneksi database dari dashboard Neon (format: `postgres://user:pass@ep-xyz.neon.tech/ukm-db?sslmode=require`).

### 2. Deploy Frontend & Backend ke Vercel
1. Pastikan kode telah di-push ke repositori GitHub.
2. Buka [Vercel Dashboard](https://vercel.com/) dan klik **Add New Project**.
3. Import repositori GitHub ini.
4. Pada bagian **Environment Variables**, tambahkan:
   - `DATABASE_URL`: Isi dengan connection string dari Neon di langkah 1.
   - `ADMIN_USER`: Username admin CMS (opsional, default: `admin`).
   - `ADMIN_PASSWORD`: Password admin CMS (opsional, default: `admin123`).
   - `JWT_SECRET`: String acak untuk keamanan token (opsional).
5. Klik **Deploy**! Website, CMS, dan API backend langsung aktif 24/7 secara gratis.

---

## 📄 Lisensi
Didistribusikan di bawah lisensi MIT.
