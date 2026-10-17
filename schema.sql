-- ========================================================
-- UKM ENTREPRENEUR - DATABASE SCHEMA (PostgreSQL / Supabase / Neon)
-- 100% Free Lifetime Compatible
-- ========================================================

-- 1. Tabel Katalog Produk Komersial UKM
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(50) NOT NULL,            -- makanan, kulit, elektronik, jasa
    category_label VARCHAR(100) NOT NULL,      -- Label tampilan kategori
    price VARCHAR(50) NOT NULL,               -- Format harga: Rp xx.xxx
    phone VARCHAR(30) NOT NULL,               -- Format WhatsApp: 628...
    image TEXT NOT NULL,                      -- URL / Path foto produk
    specs TEXT,                               -- Spesifikasi produk
    description TEXT NOT NULL,                -- Deskripsi lengkap
    status VARCHAR(20) DEFAULT 'active',      -- active, draft, out_of_stock
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabel Postingan & Berita Wirausaha
CREATE TABLE IF NOT EXISTS posts (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    author VARCHAR(100) DEFAULT 'Admin UKM',
    snippet TEXT,
    content TEXT NOT NULL,
    image TEXT,
    status VARCHAR(20) DEFAULT 'published',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabel Pesan Masuk (Formulir Kontak)
CREATE TABLE IF NOT EXISTS contact_messages (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Tabel Pengaturan Situs (CMS Site Settings)
CREATE TABLE IF NOT EXISTS site_settings (
    key VARCHAR(50) PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Data Awal (Seeding) untuk 8 Produk Unggulan
INSERT INTO products (id, name, category, category_label, price, phone, image, specs, description, status)
VALUES 
('prod-1', 'Sambal Bawang Goreng Gurih (Botol 200g)', 'makanan', 'Makanan & Minuman', 'Rp 35.000', '6283850386401', 'assets/img/ukm/makanan-1.jpg', 'Isi: 200g, Botol Kaca Food-Grade, Halal ID3211, Tahan 6 Bulan', 'Sambal olahan cabai rawit merah segar dan bawang merah Brebes pilihan dengan minyak kelapa murni. Cocok sebagai teman nasi hangat tanpa bahan pengawet kimia.', 'active'),
('prod-2', 'Dompet Kulit Bifold Slim Handstitched', 'kulit', 'Kerajinan Kulit, dsb.', 'Rp 85.000', '6283850386401', 'assets/img/ukm/kulit-1.jpg', 'Bahan: Kulit Sapi Pull-Up Asli, 6 Slot Kartu, Jahit Tangan (Saddle Stitch)', 'Dompet saku pria berdesain tipis minimalis dari kulit sapi samak Garut. Tekstur lentur dengan efek patina alami yang semakin mengkilap seiring waktu.', 'active'),
('prod-3', 'Modul Smart Relay ESP32 IoT 4-Channel', 'elektronik', 'Elektronik', 'Rp 145.000', '6283850386401', 'assets/img/ukm/elektronik-1.jpg', 'Tegangan: 5V/12V DC, WiFi & Bluetooth, Kompatibel Android/iOS, PCB Gold Plate', 'Perangkat kontroler otomasi pintar untuk menyalakan/mematikan lampu, pompa air, dan mesin produksi dari aplikasi smartphone secara nirkabel.', 'active'),
('prod-4', 'Paket Foto Katalog Produk Komersial', 'jasa', 'Jasa', 'Rp 350.000', '6283850386401', 'assets/img/ukm/jasa-1.jpg', '10 Foto High-Res Edit, Styling Studio, Hak Cipta Komersial, Format E-Commerce', 'Jasa foto profesional untuk kemasan makanan, produk kriya, atau pakaian agar tampil elegan di Shopee, Tokopedia, Instagram, dan website katalog.', 'active'),
('prod-5', 'Cold Brew Arabika Gayo Petik Merah (Botol 250ml)', 'makanan', 'Makanan & Minuman', 'Rp 28.000', '6283850386401', 'assets/img/ukm/makanan-2.jpg', 'Komposisi: 100% Arabika Gayo Natural, Ekstraksi 18 Jam, Botol Kaca Amber', 'Kopi seduh dingin dengan cita rasa buah plum manis dan keasaman seimbang. Aman untuk lambung dan siap dinikmati kapan saja.', 'active'),
('prod-6', 'Ikat Pinggang Kulit Asli Gesper Kuningan Tempa', 'kulit', 'Kerajinan Kulit, dsb.', 'Rp 120.000', '6283850386401', 'assets/img/ukm/kulit-2.jpg', 'Lebar: 3.8 cm, Tebal: 4 mm, Solid Brass Buckle, Aksesori Kain Batik Halus', 'Sabuk pria berkarakter kokoh dari kulit sapi nabati tebal satu lapis tanpa lem. Dilengkapi gesper kuningan murni antik yang tidak berkarat.', 'active'),
('prod-7', 'Sensor Kelembaban Tanah Surya & Irigasi Otomatis', 'elektronik', 'Elektronik', 'Rp 275.000', '6283850386401', 'assets/img/ukm/elektronik-2.jpg', 'Tenaga: Solar Panel 5W + Baterai 18650, Sensor Kapasitif Anti-Karat, Solenoid Valve 12V', 'Alat penyiram tanaman otomatis untuk kebun hidroponik atau greenhouse. Menyiram sendiri saat tanah mulai kering tanpa perlu menarik kabel listrik.', 'active'),
('prod-8', 'Jasa Deep Cleaning & Recoloring Tas/Sepatu Kulit', 'jasa', 'Jasa', 'Rp 75.000', '6283850386401', 'assets/img/ukm/jasa-2.jpg', 'Pembersihan Noda Membandel, Kondisioner Mink Oil Alami, Cat Khusus Kulit Awet', 'Layanan spa dan restorasi warna pudar untuk tas, sepatu kerja, atau jaket kulit kesayangan Anda agar tampak seperti baru kembali.', 'active')
ON CONFLICT (id) DO NOTHING;
