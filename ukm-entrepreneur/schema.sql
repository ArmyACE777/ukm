-- ========================================================
-- UKM ENTREPRENEUR - DATABASE SCHEMA (PostgreSQL / Supabase / Neon)
-- 100% Free Lifetime Compatible
-- ========================================================

-- 1. Tabel Katalog Produk UKM
CREATE TABLE IF NOT EXISTS ukms (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL,            -- makanan, kulit, elektronik, jasa
    category_label VARCHAR(100) NOT NULL,      -- Label tampilan
    owner VARCHAR(100) NOT NULL,
    location VARCHAR(200) NOT NULL,
    phone VARCHAR(30) NOT NULL,               -- Format: 628...
    image TEXT NOT NULL,                      -- URL gambar produk
    description TEXT NOT NULL,
    highlight VARCHAR(200),
    status VARCHAR(20) DEFAULT 'active',      -- active, draft, archived
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

-- 3. Data Awal (Seeding) untuk 4 Sektor Usaha
INSERT INTO ukms (id, name, category, category_label, owner, location, phone, image, description, highlight)
VALUES 
('ukm-1', 'Nusa Gourmet Spices', 'makanan', 'Makanan & Minuman', 'Ibu Rina Rahmawati', 'Coblong, Kota Bandung', '6283850386401', 'assets/img/ukm/makanan-1.jpg', 'Produsen sambal botol kaca higienis dan minuman jamu kunyit asam dingin.', 'Sambal Kemasan Higienis & Jamu Dingin'),
('ukm-2', 'Garut Heritage Leather', 'kulit', 'Kerajinan Kulit, dsb.', 'Kang Asep Saepudin', 'Sukaregang, Garut Kota', '6283850386401', 'assets/img/ukm/kulit-1.jpg', 'Kerajinan kulit sapi pull-up asli Sukaregang dengan jahitan tangan handstitched.', 'Tas Tote & Dompet Kulit Pull-Up'),
('ukm-3', 'Nexus IoT Labs', 'elektronik', 'Elektronik', 'Dimas Ardiansyah, S.T.', 'Tebet, Jakarta Selatan', '6283850386401', 'assets/img/ukm/elektronik-1.jpg', 'Startup perancangan modul smart relay mikrokontroler dan perakitan PCB kustom.', 'Modul Kontrol Cerdas & Desain PCB'),
('ukm-4', 'Kreativa Studio', 'jasa', 'Jasa', 'Nadia Prasasti', 'Mantrijeron, Yogyakarta', '6283850386401', 'assets/img/ukm/jasa-1.jpg', 'Agensi kreatif foto katalog produk, desain kemasan, dan branding UMKM.', 'Jasa Branding & Foto Produk UMKM')
ON CONFLICT (id) DO NOTHING;
