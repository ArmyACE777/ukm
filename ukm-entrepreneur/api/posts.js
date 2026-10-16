// Vercel Serverless Function: /api/posts
// Endpoint CRUD untuk Postingan & Berita UKM

const DEFAULT_POSTS = [
    {
        id: "post-1",
        title: "Peluang Ekspor Kerajinan Kulit Garut ke Pasar Eropa 2026",
        category: "Kerajinan Kulit, dsb.",
        author: "Admin UKM",
        date: "14 Okt 2026",
        snippet: "Tingginya permintaan produk kulit samak nabati ramah lingkungan membuka jalan bagi pengrajin lokal untuk menembus pasar ritel internasional.",
        status: "published"
    },
    {
        id: "post-2",
        title: "Pentingnya Standar Kemasan Food-Grade untuk Produk Makanan UMKM",
        category: "Makanan & Minuman",
        author: "Admin UKM",
        date: "08 Okt 2026",
        snippet: "Kemasan higienis dan bersertifikat Halal bukan sekadar formalitas, melainkan kunci meningkatkan kepercayaan konsumen digital.",
        status: "published"
    },
    {
        id: "post-3",
        title: "Inovasi IoT Lokal: Petani Muda Manfaatkan Sensor Otomatis",
        category: "Elektronik",
        author: "Admin UKM",
        date: "02 Okt 2026",
        snippet: "Bagaimana teknologi mikrokontroler buatan wirausahawan muda mampu memangkas biaya penyiraman air hingga 40 persen.",
        status: "published"
    }
];

module.exports = async (req, res) => {
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

    const { method, body } = req;

    try {
        if (method === 'GET') {
            return res.status(200).json({
                success: true,
                count: DEFAULT_POSTS.length,
                data: DEFAULT_POSTS
            });
        }

        if (method === 'POST') {
            const newPost = {
                id: 'post-' + Date.now(),
                ...body,
                date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
                status: 'published'
            };

            return res.status(201).json({
                success: true,
                message: 'Postingan berhasil diterbitkan',
                data: newPost
            });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
};
