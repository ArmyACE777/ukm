// Vercel Serverless Function: /api/ukm
// Endpoint CRUD untuk Katalog Produk UKM Entrepreneur

const DEFAULT_UKM_LIST = [
    {
        id: "ukm-1",
        name: "Nusa Gourmet Spices",
        category: "makanan",
        categoryLabel: "Makanan & Minuman",
        owner: "Ibu Rina Rahmawati",
        location: "Coblong, Kota Bandung",
        phone: "6283850386401",
        image: "assets/img/ukm/makanan-1.jpg",
        description: "Aneka sambal kemasan higienis dan minuman jamu kunyit asam dingin.",
        highlight: "Sambal Kemasan Higienis & Jamu Dingin",
        status: "active"
    },
    {
        id: "ukm-2",
        name: "Garut Heritage Leather",
        category: "kulit",
        categoryLabel: "Kerajinan Kulit, dsb.",
        owner: "Kang Asep Saepudin",
        location: "Sukaregang, Garut Kota",
        phone: "6283850386401",
        image: "assets/img/ukm/kulit-1.jpg",
        description: "Kerajinan kulit sapi pull-up asli Sukaregang dengan jahitan tangan handstitched.",
        highlight: "Tas Tote & Dompet Kulit Pull-Up",
        status: "active"
    },
    {
        id: "ukm-3",
        name: "Nexus IoT Labs",
        category: "elektronik",
        categoryLabel: "Elektronik",
        owner: "Dimas Ardiansyah, S.T.",
        location: "Tebet, Jakarta Selatan",
        phone: "6283850386401",
        image: "assets/img/ukm/elektronik-1.jpg",
        description: "Startup mikro perancangan modul mikrokontroler smart relay dan perakitan PCB kustom.",
        highlight: "Modul Kontrol Cerdas & Desain PCB",
        status: "active"
    },
    {
        id: "ukm-4",
        name: "Kreativa Studio",
        category: "jasa",
        categoryLabel: "Jasa",
        owner: "Nadia Prasasti",
        location: "Mantrijeron, Yogyakarta",
        phone: "6283850386401",
        image: "assets/img/ukm/jasa-1.jpg",
        description: "Agensi kreatif foto produk komersial, desain kemasan, dan branding UMKM.",
        highlight: "Jasa Branding & Foto Produk UMKM",
        status: "active"
    },
    {
        id: "ukm-5",
        name: "Singular Coffee Roasters",
        category: "makanan",
        categoryLabel: "Makanan & Minuman",
        owner: "Fajar Nugroho",
        location: "Gubeng, Surabaya",
        phone: "6283850386401",
        image: "assets/img/ukm/makanan-2.jpg",
        description: "Roastery biji kopi single-origin Nusantara dan cold brew botol kaca.",
        highlight: "Specialty Biji Kopi & Cold Brew",
        status: "active"
    },
    {
        id: "ukm-6",
        name: "Kriya Sekar Jagad",
        category: "kulit",
        categoryLabel: "Kerajinan Kulit, dsb.",
        owner: "Pak Bambang Handoko",
        location: "Laweyan, Surakarta (Solo)",
        phone: "6283850386401",
        image: "assets/img/ukm/kulit-2.jpg",
        description: "Kombinasi eksklusif kulit samak nabati dengan kain batik tulis tradisional.",
        highlight: "Sabuk Kulit & Cardholder Batik",
        status: "active"
    },
    {
        id: "ukm-7",
        name: "AgriTech Otomasi Pintar",
        category: "elektronik",
        categoryLabel: "Elektronik",
        owner: "Ahmad Zaki",
        location: "Dramaga, Bogor",
        phone: "6283850386401",
        image: "assets/img/ukm/elektronik-2.jpg",
        description: "Sistem otomasi irigasi dan sensor greenhouse tenaga surya terintegrasi smartphone.",
        highlight: "Sensor Surya & Smart Greenhouse",
        status: "active"
    },
    {
        id: "ukm-8",
        name: "Master Leather & Bag Care",
        category: "jasa",
        categoryLabel: "Jasa",
        owner: "Pak Sugeng Hariyanto",
        location: "Klojen, Kota Malang",
        phone: "6283850386401",
        image: "assets/img/ukm/jasa-2.jpg",
        description: "Jasa restorasi, deep cleaning, dan recoloring sepatu & tas kulit asli.",
        highlight: "Restorasi & Spa Kulit Spesialis",
        status: "active"
    }
];

module.exports = async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { method, query, body } = req;

    try {
        // GET: Ambil daftar UKM
        if (method === 'GET') {
            const { category, search } = query;
            let results = [...DEFAULT_UKM_LIST];

            if (category && category !== 'all') {
                results = results.filter(item => item.category === category);
            }

            if (search) {
                const s = search.toLowerCase();
                results = results.filter(item => 
                    item.name.toLowerCase().includes(s) ||
                    item.owner.toLowerCase().includes(s) ||
                    item.location.toLowerCase().includes(s)
                );
            }

            return res.status(200).json({
                success: true,
                count: results.length,
                data: results
            });
        }

        // POST: Tambah UKM Baru
        if (method === 'POST') {
            const newUkm = {
                id: 'ukm-' + Date.now(),
                ...body,
                createdAt: new Date().toISOString()
            };

            return res.status(201).json({
                success: true,
                message: 'UKM berhasil ditambahkan',
                data: newUkm
            });
        }

        // PUT: Edit UKM
        if (method === 'PUT') {
            const { id } = query;
            return res.status(200).json({
                success: true,
                message: `UKM dengan ID ${id} berhasil diperbarui`,
                data: { id, ...body }
            });
        }

        // DELETE: Hapus UKM
        if (method === 'DELETE') {
            const { id } = query;
            return res.status(200).json({
                success: true,
                message: `UKM dengan ID ${id} berhasil dihapus`
            });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
};
