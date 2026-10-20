/**
 * ========================================================
 * UKM ENTREPRENEUR - PRODUCT CATALOG CMS ENGINE (JavaScript)
 * Fokus: Katalog Produk yang Dijual UKM
 * ========================================================
 */

// 1. Data Default Produk Katalog (8 Produk dari 4 Sektor Usaha - Model Distributor Terpadu)
const DEFAULT_PRODUCTS = [
    {
        id: "prod-1",
        name: "Sambal Bawang Goreng Gurih (Botol 200g)",
        producer: "Dapur Sambal Bu Lastri (Mitra Binaan Brebes)",
        category: "makanan",
        categoryLabel: "Makanan & Minuman",
        price: "Rp 35.000",
        wholesale: "Min. 12 botol: Rp 28.000/btl (Grosir Reseller)",
        stockStatus: "ready",
        phone: "6283850386401",
        image: "../assets/img/ukm/makanan-1.jpg",
        specs: "Isi: 200g, Botol Kaca Food-Grade, Halal ID3211, Tahan 6 Bulan",
        description: "Sambal olahan cabai rawit merah segar dan bawang merah Brebes pilihan dari petani binaan dengan minyak kelapa murni. Didistribusikan resmi dengan standar higienis tanpa bahan pengawet kimia.",
        status: "active"
    },
    {
        id: "prod-2",
        name: "Dompet Kulit Bifold Slim Handstitched",
        producer: "Sentra Kriya Kulit Sukaregang Garut (Mitra Pengrajin)",
        category: "kulit",
        categoryLabel: "Kerajinan Kulit, dsb.",
        price: "Rp 85.000",
        wholesale: "Min. 6 pcs: Rp 70.000/pcs (Grosir Toko)",
        stockStatus: "ready",
        phone: "6283850386401",
        image: "../assets/img/ukm/kulit-1.jpg",
        specs: "Bahan: Kulit Sapi Pull-Up Asli, 6 Slot Kartu, Jahit Tangan (Saddle Stitch)",
        description: "Dompet saku pria berdesain tipis minimalis langsung dari penyamak kulit Garut mitra binaan. Tekstur lentur dengan efek patina alami yang semakin mengkilap seiring waktu.",
        status: "active"
    },
    {
        id: "prod-3",
        name: "Modul Smart Relay ESP32 IoT 4-Channel",
        producer: "Polijati IoT & Hardware Tech Lab (Inovator Binaan)",
        category: "elektronik",
        categoryLabel: "Elektronik & IoT",
        price: "Rp 145.000",
        wholesale: "Min. 5 unit: Rp 125.000/unit (Paket Lab/Proyek)",
        stockStatus: "ready",
        phone: "6283850386401",
        image: "../assets/img/ukm/elektronik-1.jpg",
        specs: "Tegangan: 5V/12V DC, WiFi & Bluetooth, Kompatibel Android/iOS, PCB Gold Plate",
        description: "Perangkat kontroler otomasi pintar karya technopreneur binaan untuk otomasi rumah dan industri kecil. Dikurasi dan didistribusikan dengan jaminan garansi penggantian unit.",
        status: "active"
    },
    {
        id: "prod-4",
        name: "Paket Foto Katalog Produk Komersial",
        producer: "Studio Visual & Digital Kreatif Nusantara",
        category: "jasa",
        categoryLabel: "Jasa Profesional",
        price: "Rp 350.000",
        wholesale: "Paket 3 Produk: Diskon 15% (Pengadaan Usaha)",
        stockStatus: "ready",
        phone: "6283850386401",
        image: "../assets/img/ukm/jasa-1.jpg",
        specs: "10 Foto High-Res Edit, Styling Studio, Hak Cipta Komersial, Format E-Commerce",
        description: "Layanan jasa fotografi terkurasi dari jejaring fotografer komersial binaan UKM. Dirancang untuk kemasan makanan, kriya, dan fashion agar tampil profesional di seluruh kanal digital.",
        status: "active"
    },
    {
        id: "prod-5",
        name: "Cold Brew Arabika Gayo Petik Merah (Botol 250ml)",
        producer: "Koperasi Tani Kopi Gayo Takengon (Mitra Binaan)",
        category: "makanan",
        categoryLabel: "Makanan & Minuman",
        price: "Rp 28.000",
        wholesale: "Min. 24 botol: Rp 22.000/btl (Pasokan Kafe/Resto)",
        stockStatus: "ready",
        phone: "6283850386401",
        image: "../assets/img/ukm/makanan-2.jpg",
        specs: "Komposisi: 100% Arabika Gayo Natural, Ekstraksi 18 Jam, Botol Kaca Amber",
        description: "Kopi seduh dingin artisan langsung dari petani kopi dataran tinggi Gayo. Ekstraksi dingin 18 jam dengan cita rasa plum manis alami dan aman di lambung.",
        status: "active"
    },
    {
        id: "prod-6",
        name: "Ikat Pinggang Kulit Asli Gesper Kuningan Tempa",
        producer: "Atelier Sabuk Kulit Tradisional Garut",
        category: "kulit",
        categoryLabel: "Kerajinan Kulit, dsb.",
        price: "Rp 120.000",
        wholesale: "Min. 10 pcs: Rp 95.000/pcs (Grosir Butik)",
        stockStatus: "ready",
        phone: "6283850386401",
        image: "../assets/img/ukm/kulit-2.jpg",
        specs: "Lebar: 3.8 cm, Tebal: 4 mm, Solid Brass Buckle, Aksesori Kain Batik Halus",
        description: "Sabuk pria berkarakter kokoh dari kulit sapi nabati tebal satu lapis tanpa lem. Dilengkapi gesper kuningan murni antik yang tidak berkarat seumur hidup.",
        status: "active"
    },
    {
        id: "prod-7",
        name: "Sensor Kelembaban Tanah Surya & Irigasi Otomatis",
        producer: "Agritech Mandiri Polijati (Inovator Binaan)",
        category: "elektronik",
        categoryLabel: "Elektronik & IoT",
        price: "Rp 275.000",
        wholesale: "Min. 3 paket: Rp 240.000/set (Kelompok Tani)",
        stockStatus: "preorder",
        phone: "6283850386401",
        image: "../assets/img/ukm/elektronik-2.jpg",
        specs: "Tenaga: Solar Panel 5W + Baterai 18650, Sensor Kapasitif Anti-Karat, Solenoid Valve 12V",
        description: "Sistem otomasi irigasi pertanian karya inovator agritech lokal. Bekerja mandiri dengan tenaga surya untuk kebun dan greenhouse tanpa kabel listrik luar.",
        status: "active"
    },
    {
        id: "prod-8",
        name: "Jasa Deep Cleaning & Recoloring Tas/Sepatu Kulit",
        producer: "Leather Care Specialist Workshop Bandung",
        category: "jasa",
        categoryLabel: "Jasa Profesional",
        price: "Rp 75.000",
        wholesale: "Paket Borongan 5 Item: Diskon 20%",
        stockStatus: "ready",
        phone: "6283850386401",
        image: "../assets/img/ukm/jasa-2.jpg",
        specs: "Pembersihan Noda Membandel, Kondisioner Mink Oil Alami, Cat Khusus Kulit Awet",
        description: "Layanan spa, pembersihan noda mendalam, dan restorasi warna pudar untuk produk kulit kesayangan dengan jaminan pengerjaan ahli dari mitra UKM.",
        status: "active"
    }
];

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
        category: "Elektronik & IoT",
        author: "Admin UKM",
        date: "02 Okt 2026",
        snippet: "Bagaimana teknologi mikrokontroler buatan wirausahawan muda mampu memangkas biaya penyiraman air hingga 40 persen.",
        status: "published"
    }
];

// 2. State & Database Initialization
function getProductData() {
    const raw = localStorage.getItem('ukm_products') || localStorage.getItem('ukm_list');
    if (!raw) {
        localStorage.setItem('ukm_products', JSON.stringify(DEFAULT_PRODUCTS));
        return DEFAULT_PRODUCTS;
    }
    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].price) {
            // Auto-backfill field distributor untuk data lawas di browser
            return parsed.map(item => ({
                producer: item.producer || "Sentra Mitra Produsen Binaan UKM",
                wholesale: item.wholesale || "",
                stockStatus: item.stockStatus || "ready",
                ...item
            }));
        } else {
            localStorage.setItem('ukm_products', JSON.stringify(DEFAULT_PRODUCTS));
            return DEFAULT_PRODUCTS;
        }
    } catch (e) {
        return DEFAULT_PRODUCTS;
    }
}

function saveProductData(data) {
    localStorage.setItem('ukm_products', JSON.stringify(data));
    localStorage.setItem('ukm_list', JSON.stringify(data));
}

function getPostsData() {
    const raw = localStorage.getItem('ukm_posts');
    if (!raw) {
        localStorage.setItem('ukm_posts', JSON.stringify(DEFAULT_POSTS));
        return DEFAULT_POSTS;
    }
    try {
        return JSON.parse(raw);
    } catch (e) {
        return DEFAULT_POSTS;
    }
}

function savePostsData(data) {
    localStorage.setItem('ukm_posts', JSON.stringify(data));
}

// 3. Data Default Pengaturan Website (Identitas Distributor, Kontak, Lokasi & Medsos)
const DEFAULT_SETTINGS = {
    brandName: "UKM ENTREPRENEUR DISTRIBUTOR",
    logoUrl: "../assets/img/ui/logo-ukm.jpeg",
    logoStyle: "circle",
    tagline: "Pusat Distribusi Terpadu Produk & Jasa Mitra Produsen Lokal",
    headline: "DISTRIBUTOR RESMI PRODUK & JASA UNGGULAN",
    subheadline: "Menampung, mengkurasi, dan menyalurkan ragam karya unggulan pengrajin, produsen pangan, teknolog, dan profesional lokal langsung ke konsumen & pelaku usaha dengan jaminan mutu terpadu.",
    phone: "6283850386401",
    partnershipPhone: "6283850386401",
    email: "distribusi@ukm-entrepreneur.id",
    address: "Pusat Distribusi UKM, Jl. Riau No. 120, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115",
    hours: "Senin - Sabtu: 08.00 - 17.00 WIB",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    footerText: "2026 UKM Entrepreneur Distributor Indonesia. Mitra Resmi Produsen Lokal.",
    waTemplate: "Halo Admin Distributor {brand}, saya tertarik memesan {name} (Produsen: {producer}) seharga {price}. Mohon info ketersediaan stok di gudang dan prosedur pengiriman."
};

function getSettingsData() {
    const raw = localStorage.getItem('ukm_site_settings');
    if (!raw) {
        localStorage.setItem('ukm_site_settings', JSON.stringify(DEFAULT_SETTINGS));
        return { ...DEFAULT_SETTINGS };
    }
    try {
        const parsed = JSON.parse(raw);
        if (parsed.brandName === "UKM ENTREPRENEUR" || !parsed.partnershipPhone) {
            const upgraded = {
                ...DEFAULT_SETTINGS,
                ...parsed,
                brandName: "UKM ENTREPRENEUR DISTRIBUTOR",
                tagline: DEFAULT_SETTINGS.tagline,
                headline: DEFAULT_SETTINGS.headline,
                subheadline: DEFAULT_SETTINGS.subheadline,
                partnershipPhone: parsed.partnershipPhone || "6283850386401"
            };
            saveSettingsData(upgraded);
            return upgraded;
        }
        return { ...DEFAULT_SETTINGS, ...parsed };
    } catch (e) {
        return { ...DEFAULT_SETTINGS };
    }
}

function saveSettingsData(data) {
    localStorage.setItem('ukm_site_settings', JSON.stringify(data));
}

// 4. Auth Guard
function checkAuth() {
    const isLogged = localStorage.getItem('ukm_admin_logged') === 'true';
    if (!isLogged) {
        window.location.href = 'login.html';
    }
}

function logout() {
    if (confirm('Apakah Anda yakin ingin keluar dari Panel CMS?')) {
        localStorage.removeItem('ukm_admin_logged');
        window.location.href = 'login.html';
    }
}

// 5. UI Initialization
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    initNavigation();
    renderOverviewStats();
    renderProductTable();
    renderPostsTable();
    renderSettingsForm();
    applySiteBrandAndLogoToCms();
});

function initNavigation() {
    const titles = {
        overviewSection: 'Ringkasan & Statistik Katalog',
        ukmSection: 'Kelola Katalog Produk',
        postsSection: 'Postingan & Berita Wirausaha',
        settingsSection: 'Pengaturan Identitas & Kontak Website'
    };

    const links = document.querySelectorAll('.sidebar-link[data-target]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            document.querySelectorAll('.tab-section').forEach(sec => sec.classList.remove('active'));
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            const pageTitleEl = document.getElementById('topbarPageTitle');
            if (pageTitleEl && titles[targetId]) {
                pageTitleEl.textContent = titles[targetId];
            }

            const sidebar = document.querySelector('.admin-sidebar');
            if (sidebar && sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
            }
        });
    });
}

let activeCategoryPill = 'all';

function setCategoryPill(cat) {
    activeCategoryPill = cat;
    document.querySelectorAll('.cat-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-cat') === cat) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderProductTable();
}

function renderOverviewStats() {
    const products = getProductData();
    const posts = getPostsData();

    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    };

    const countAll = products.length;
    const countMakanan = products.filter(u => u.category === 'makanan').length;
    const countKulit = products.filter(u => u.category === 'kulit').length;
    const countElektronik = products.filter(u => u.category === 'elektronik').length;
    const countJasa = products.filter(u => u.category === 'jasa').length;

    setVal('statTotalUkm', countAll);
    setVal('statMakanan', countMakanan);
    setVal('statKulit', countKulit);
    setVal('statElektronik', countElektronik);
    setVal('statJasa', countJasa);
    setVal('statTotalPosts', posts.length);

    // Sidebar Counters
    setVal('sidebarProductCount', countAll);
    setVal('sidebarPostsCount', posts.length);

    // Pill Badges in Product Section
    setVal('pillCountAll', countAll);
    setVal('pillCountMakanan', countMakanan);
    setVal('pillCountKulit', countKulit);
    setVal('pillCountElektronik', countElektronik);
    setVal('pillCountJasa', countJasa);

    renderOverviewRecentProducts(products);
}

function renderOverviewRecentProducts(products) {
    const tbody = document.getElementById('overviewRecentProductsBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    const recent = products.slice(0, 4);

    if (recent.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-muted">Belum ada produk di katalog.</td></tr>`;
        return;
    }

    const catBadgeClasses = {
        makanan: 'cat-pill-makanan',
        kulit: 'cat-pill-kulit',
        elektronik: 'cat-pill-elektronik',
        jasa: 'cat-pill-jasa'
    };

    recent.forEach((item, index) => {
        const pillClass = catBadgeClasses[item.category] || 'cat-pill-makanan';
        let imgPath = item.image || '../assets/img/ukm/makanan-1.jpg';
        if (!imgPath.startsWith('../') && !imgPath.startsWith('data:') && !imgPath.startsWith('http')) {
            imgPath = '../' + imgPath;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-center text-muted fw-bold small">#${index + 1}</td>
            <td>
                <div class="d-flex align-items-center gap-3">
                    <img src="${imgPath}" alt="${item.name}" class="table-thumbnail" onerror="this.src='../assets/img/ukm/makanan-1.jpg'" />
                    <div>
                        <div class="product-table-title">${item.name}</div>
                        <div class="product-table-specs"><i class="fas fa-tag me-1 text-warning"></i>${item.specs ? (item.specs.length > 55 ? item.specs.substring(0, 55) + '...' : item.specs) : '-'}</div>
                    </div>
                </div>
            </td>
            <td><span class="cat-pill ${pillClass}">${item.categoryLabel || item.category}</span></td>
            <td><span class="table-price">${item.price || 'Rp -'}</span></td>
            <td>
                <a href="https://wa.me/${item.phone}" target="_blank" class="wa-table-link">
                    <i class="fab fa-whatsapp"></i> +${item.phone}
                </a>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ==================== PRODUCT CRUD ====================

function renderProductTable() {
    const products = getProductData();
    const tbody = document.getElementById('ukmTableBody');
    if (!tbody) return;

    const searchVal = (document.getElementById('searchUkmInput')?.value || '').toLowerCase().trim();
    const sortBy = document.getElementById('sortProductSelect')?.value || 'newest';

    tbody.innerHTML = '';

    let filtered = products.filter(item => {
        const matchesCat = (activeCategoryPill === 'all' || item.category === activeCategoryPill);
        const matchesSearch = (searchVal === '' || 
                               item.name.toLowerCase().includes(searchVal) || 
                               (item.specs && item.specs.toLowerCase().includes(searchVal)) ||
                               (item.price && item.price.toLowerCase().includes(searchVal)));
        return matchesCat && matchesSearch;
    });

    // Apply Sorting
    if (sortBy === 'price-asc') {
        filtered.sort((a, b) => {
            const numA = parseInt((a.price || '0').replace(/\D/g, '')) || 0;
            const numB = parseInt((b.price || '0').replace(/\D/g, '')) || 0;
            return numA - numB;
        });
    } else if (sortBy === 'price-desc') {
        filtered.sort((a, b) => {
            const numA = parseInt((a.price || '0').replace(/\D/g, '')) || 0;
            const numB = parseInt((b.price || '0').replace(/\D/g, '')) || 0;
            return numB - numA;
        });
    } else if (sortBy === 'name-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    const countBadge = document.getElementById('productCountBadge');
    if (countBadge) {
        countBadge.textContent = `${filtered.length} dari ${products.length} Produk`;
    }

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-5 text-muted">
            <i class="fas fa-box-open fa-3x mb-3 d-block text-secondary opacity-50"></i>
            <div class="fw-bold fs-6 text-dark mb-1">Tidak Ada Produk yang Sesuai</div>
            <small class="text-muted">Coba ubah kata kunci pencarian atau pilih sektor usaha lainnya.</small>
        </td></tr>`;
        return;
    }

    const catBadgeClasses = {
        makanan: 'cat-pill-makanan',
        kulit: 'cat-pill-kulit',
        elektronik: 'cat-pill-elektronik',
        jasa: 'cat-pill-jasa'
    };

    filtered.forEach((item, index) => {
        const pillClass = catBadgeClasses[item.category] || 'cat-pill-makanan';
        let imgPath = item.image || '../assets/img/ukm/makanan-1.jpg';
        if (!imgPath.startsWith('../') && !imgPath.startsWith('data:') && !imgPath.startsWith('http')) {
            imgPath = '../' + imgPath;
        }

        const statusBadges = {
            ready: '<span class="badge bg-success-subtle text-success border border-success-subtle" style="font-size: 0.68rem;"><i class="fas fa-check-circle me-1"></i>Ready Gudang</span>',
            preorder: '<span class="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle" style="font-size: 0.68rem;"><i class="fas fa-clock me-1"></i>Pre-Order</span>',
            limited: '<span class="badge bg-danger-subtle text-danger border border-danger-subtle" style="font-size: 0.68rem;"><i class="fas fa-exclamation-circle me-1"></i>Pasokan Terbatas</span>'
        };
        const statusBadgeHtml = statusBadges[item.stockStatus] || statusBadges.ready;

        const wholesaleHtml = item.wholesale 
            ? `<div class="small text-muted mt-1" style="font-size: 0.72rem;"><i class="fas fa-boxes-stacked text-warning me-1"></i>${item.wholesale}</div>`
            : '';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-center text-muted fw-bold small">#${index + 1}</td>
            <td>
                <div class="d-flex align-items-center gap-3">
                    <img src="${imgPath}" alt="${item.name}" class="table-thumbnail" onerror="this.src='../assets/img/ukm/makanan-1.jpg'" />
                    <div>
                        <div class="product-table-title">${item.name}</div>
                        <div class="small text-muted" style="font-size: 0.74rem;"><i class="fas fa-industry text-warning me-1"></i><strong>Produsen:</strong> ${item.producer || 'Mitra Binaan UKM'}</div>
                        <div class="product-table-specs"><i class="fas fa-tag me-1 text-warning"></i>${item.specs ? (item.specs.length > 55 ? item.specs.substring(0, 55) + '...' : item.specs) : '-'}</div>
                    </div>
                </div>
            </td>
            <td>
                <span class="cat-pill ${pillClass}">${item.categoryLabel || item.category}</span>
                <div class="mt-1">${statusBadgeHtml}</div>
            </td>
            <td>
                <span class="table-price">${item.price || 'Rp -'}</span>
                ${wholesaleHtml}
            </td>
            <td>
                <a href="https://wa.me/${item.phone}" target="_blank" class="wa-table-link" title="Klik untuk uji chat WhatsApp">
                    <i class="fab fa-whatsapp"></i> +${item.phone}
                </a>
                <div class="text-muted" style="font-size: 0.68rem;">Admin Distribusi UKM</div>
            </td>
            <td class="text-end">
                <div class="d-inline-flex gap-1">
                    <button class="btn-action btn-edit" title="Edit Data Produk" onclick="openEditProductModal('${item.id}')">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="btn-action btn-delete" title="Hapus Produk" onclick="deleteProduct('${item.id}')">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Modal Form Tambah / Edit Produk
let currentEditingProductId = null;

function updateModalCategoryBadge(cat) {
    const badge = document.getElementById('modalPreviewCategoryBadge');
    if (!badge) return;
    const catMap = {
        makanan: { label: '🍽️ Makanan & Minuman', class: 'bg-warning-subtle text-warning-emphasis border-warning-subtle' },
        kulit: { label: '👜 Kerajinan Kulit, dsb.', class: 'bg-danger-subtle text-danger border-danger-subtle' },
        elektronik: { label: '💡 Elektronik & IoT', class: 'bg-info-subtle text-info-emphasis border-info-subtle' },
        jasa: { label: '💼 Jasa Profesional', class: 'bg-success-subtle text-success border-success-subtle' }
    };
    if (catMap[cat]) {
        badge.textContent = catMap[cat].label;
        badge.className = `badge border small ${catMap[cat].class}`;
    } else {
        badge.textContent = 'Sektor Belum Dipilih';
        badge.className = 'badge bg-light text-secondary border small';
    }
}

function removeProductImage() {
    const preview = document.getElementById('ukmImagePreview');
    if (preview) preview.src = '';
    const previewBox = document.getElementById('ukmImagePreviewContainer');
    if (previewBox) previewBox.classList.add('d-none');
    const prompt = document.getElementById('dropzonePrompt');
    if (prompt) prompt.classList.remove('d-none');
    const quickBtns = document.getElementById('imageQuickButtons');
    if (quickBtns) quickBtns.classList.add('d-none');
    const fileInput = document.getElementById('inputUkmFile');
    if (fileInput) fileInput.value = '';
}

function openAddUkmModal() {
    currentEditingProductId = null;
    document.getElementById('ukmModalTitle').textContent = 'Tambah Produk / Jasa ke Hub Distribusi';
    document.getElementById('ukmForm').reset();
    
    const prodInput = document.getElementById('inputProductProducer');
    if (prodInput) prodInput.value = '';
    const stockInput = document.getElementById('inputProductStockStatus');
    if (stockInput) stockInput.value = 'ready';
    const wholeInput = document.getElementById('inputProductWholesale');
    if (wholeInput) wholeInput.value = '';

    removeProductImage();
    updateModalCategoryBadge('');
    
    const modalEl = document.getElementById('ukmModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}

function openEditProductModal(id) {
    const products = getProductData();
    const item = products.find(u => u.id === id);
    if (!item) return;

    currentEditingProductId = id;
    document.getElementById('ukmModalTitle').textContent = 'Edit Data Produk Distribusi';
    document.getElementById('inputProductName').value = item.name;
    document.getElementById('inputProductCategory').value = item.category;
    updateModalCategoryBadge(item.category);

    const prodInput = document.getElementById('inputProductProducer');
    if (prodInput) prodInput.value = item.producer || '';
    const stockInput = document.getElementById('inputProductStockStatus');
    if (stockInput) stockInput.value = item.stockStatus || 'ready';
    const wholeInput = document.getElementById('inputProductWholesale');
    if (wholeInput) wholeInput.value = item.wholesale || '';

    document.getElementById('inputProductPrice').value = (item.price || '').replace(/^Rp\s*/i, '');
    document.getElementById('inputProductPhone').value = item.phone || '';
    document.getElementById('inputProductSpecs').value = item.specs || '';
    document.getElementById('inputProductDesc').value = item.description || '';

    const preview = document.getElementById('ukmImagePreview');
    const previewBox = document.getElementById('ukmImagePreviewContainer');
    const prompt = document.getElementById('dropzonePrompt');
    const quickBtns = document.getElementById('imageQuickButtons');

    if (item.image) {
        preview.src = item.image;
        if (previewBox) previewBox.classList.remove('d-none');
        if (prompt) prompt.classList.add('d-none');
        if (quickBtns) quickBtns.classList.remove('d-none');
    } else {
        removeProductImage();
    }

    const modalEl = document.getElementById('ukmModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}

function handleImageFileSelect(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        if (file.size > 2 * 1024 * 1024) {
            alert('Ukuran foto maksimal 2 MB agar performa katalog tetap cepat.');
            input.value = '';
            return;
        }
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('ukmImagePreview');
            const previewBox = document.getElementById('ukmImagePreviewContainer');
            const prompt = document.getElementById('dropzonePrompt');
            const quickBtns = document.getElementById('imageQuickButtons');

            if (preview) preview.src = e.target.result;
            if (previewBox) previewBox.classList.remove('d-none');
            if (prompt) prompt.classList.add('d-none');
            if (quickBtns) quickBtns.classList.remove('d-none');
        };
        reader.readAsDataURL(file);
    }
}

// Subtab switcher for Settings
function switchSettingsTab(tabId, btn) {
    document.querySelectorAll('.settings-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.settings-tab-pane').forEach(p => p.classList.remove('active'));
    
    btn.classList.add('active');
    const pane = document.getElementById(tabId);
    if (pane) pane.classList.add('active');
}

function handleSaveProduct(event) {
    event.preventDefault();
    const products = getProductData();

    const name = document.getElementById('inputProductName').value.trim();
    const producer = document.getElementById('inputProductProducer')?.value.trim() || 'Mitra Binaan UKM';
    const category = document.getElementById('inputProductCategory').value;
    const stockStatus = document.getElementById('inputProductStockStatus')?.value || 'ready';
    const wholesale = document.getElementById('inputProductWholesale')?.value.trim() || '';

    let price = document.getElementById('inputProductPrice').value.trim();
    if (!price.toLowerCase().startsWith('rp')) {
        price = 'Rp ' + price;
    }
    let phone = document.getElementById('inputProductPhone').value.trim().replace(/\D/g, '');
    if (phone.startsWith('0')) {
        phone = '62' + phone.substring(1);
    }
    const specs = document.getElementById('inputProductSpecs').value.trim();
    const desc = document.getElementById('inputProductDesc').value.trim();

    const previewSrc = document.getElementById('ukmImagePreview').src;
    let finalImage = previewSrc;
    if (!finalImage || finalImage === window.location.href) {
        if (category === 'makanan') finalImage = '../assets/img/ukm/makanan-1.jpg';
        else if (category === 'kulit') finalImage = '../assets/img/ukm/kulit-1.jpg';
        else if (category === 'elektronik') finalImage = '../assets/img/ukm/elektronik-1.jpg';
        else finalImage = '../assets/img/ukm/jasa-1.jpg';
    }

    const catLabels = {
        makanan: 'Makanan & Minuman',
        kulit: 'Kerajinan Kulit, dsb.',
        elektronik: 'Elektronik & IoT',
        jasa: 'Jasa Profesional'
    };

    if (currentEditingProductId) {
        const idx = products.findIndex(u => u.id === currentEditingProductId);
        if (idx !== -1) {
            products[idx] = {
                ...products[idx],
                name,
                producer,
                category,
                categoryLabel: catLabels[category],
                stockStatus,
                price,
                wholesale,
                phone,
                specs,
                description: desc,
                image: finalImage
            };
            showToast(`Produk "${name}" berhasil diperbarui!`, 'success');
        }
    } else {
        const newProduct = {
            id: 'prod-' + Date.now(),
            name,
            producer,
            category,
            categoryLabel: catLabels[category],
            stockStatus,
            price,
            wholesale,
            phone,
            specs,
            description: desc,
            image: finalImage,
            status: 'active'
        };
        products.unshift(newProduct);
        showToast(`Produk baru "${name}" berhasil ditambahkan ke katalog distribusi!`, 'success');
    }

    saveProductData(products);
    renderProductTable();
    renderOverviewStats();

    const modalEl = document.getElementById('ukmModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
}

function deleteProduct(id) {
    const products = getProductData();
    const item = products.find(u => u.id === id);
    if (!item) return;

    if (confirm(`Apakah Anda yakin ingin menghapus produk "${item.name}" dari katalog?`)) {
        const updated = products.filter(u => u.id !== id);
        saveProductData(updated);
        renderProductTable();
        renderOverviewStats();
        showToast(`Produk "${item.name}" telah dihapus.`, 'warning');
    }
}

// ==================== POSTS / BERITA CRUD ====================

function renderPostsTable() {
    const posts = getPostsData();
    const tbody = document.getElementById('postsTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (posts.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-muted">Belum ada postingan artikel.</td></tr>`;
        return;
    }

    posts.forEach((p, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-center text-muted fw-bold small">#${index + 1}</td>
            <td>
                <div class="product-table-title">${p.title}</div>
                <div class="product-table-specs">${p.snippet}</div>
            </td>
            <td><span class="badge bg-light text-dark border px-2 py-1">${p.category}</span></td>
            <td><small class="text-muted fw-semibold"><i class="far fa-calendar-alt me-1"></i>${p.date}</small></td>
            <td class="text-end">
                <button class="btn-action btn-delete" title="Hapus Postingan" onclick="deletePost('${p.id}')">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openAddPostModal() {
    document.getElementById('postForm').reset();
    const modalEl = document.getElementById('postModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}

function handleSavePost(event) {
    event.preventDefault();
    const posts = getPostsData();

    const title = document.getElementById('inputPostTitle').value.trim();
    const category = document.getElementById('inputPostCategory').value;
    const content = document.getElementById('inputPostContent').value.trim();
    const snippet = content.substring(0, 100) + '...';

    const now = new Date();
    const dateFormatted = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

    const newPost = {
        id: 'post-' + Date.now(),
        title,
        category,
        author: 'Admin UKM',
        date: dateFormatted,
        snippet,
        status: 'published'
    };

    posts.unshift(newPost);
    savePostsData(posts);
    renderPostsTable();
    renderOverviewStats();

    showToast(`Postingan baru "${title}" berhasil diterbitkan!`, 'success');

    const modalEl = document.getElementById('postModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
}

function deletePost(id) {
    const posts = getPostsData();
    const p = posts.find(item => item.id === id);
    if (!p) return;

    if (confirm(`Hapus postingan "${p.title}"?`)) {
        const updated = posts.filter(item => item.id !== id);
        savePostsData(updated);
        renderPostsTable();
        renderOverviewStats();
        showToast('Postingan berhasil dihapus.', 'warning');
    }
}

// ==================== PENGATURAN WEBSITE (SITE SETTINGS) ====================

function applySiteBrandAndLogoToCms(settings) {
    if (!settings) settings = getSettingsData();
    const brandName = settings.brandName || 'UKM ENTREPRENEUR';
    let logoUrl = settings.logoUrl || '';

    const sidebarBrandText = document.getElementById('sidebarBrandName');
    if (sidebarBrandText) sidebarBrandText.textContent = brandName;

    const logoImg = document.getElementById('sidebarLogoImg');
    const fallbackIcon = document.getElementById('sidebarFallbackIcon');

    if (logoUrl && logoUrl.trim() !== '') {
        let src = logoUrl.trim();
        // Normalisasi path relatif bila dipanggil dari direktori admin
        if (!src.startsWith('../') && !src.startsWith('/') && !src.startsWith('data:') && !src.startsWith('http')) {
            src = '../' + src;
        }
        if (logoImg) {
            logoImg.src = src;
            logoImg.style.display = 'block';
        }
        if (fallbackIcon) {
            fallbackIcon.style.display = 'none';
        }
    } else {
        if (logoImg) {
            logoImg.style.display = 'none';
        }
        if (fallbackIcon) {
            fallbackIcon.style.display = 'flex';
        }
    }
}

function handleLogoFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('Mohon pilih file gambar yang valid (PNG, JPG, SVG, WEBP).');
        return;
    }

    if (file.size > 2 * 1024 * 1024) {
        alert('Ukuran file maksimal 2 MB agar performa penyimpanan tetap optimal.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const base64 = e.target.result;
        updateLogoPreview(base64);
        const urlInput = document.getElementById('settingLogoUrl');
        if (urlInput) urlInput.value = base64;
    };
    reader.readAsDataURL(file);
}

function handleLogoUrlInput(val) {
    updateLogoPreview(val ? val.trim() : '');
}

function updateLogoPreview(url, style) {
    if (style === undefined) {
        style = document.getElementById('settingLogoStyle')?.value || 'circle';
    }
    const previewImg = document.getElementById('logoPreviewImg');
    const placeholder = document.getElementById('logoPreviewPlaceholder');
    const removeBtn = document.getElementById('btnRemoveLogo');
    const transBtn = document.getElementById('btnMakeTransparent');

    if (url && url !== '') {
        if (previewImg) {
            previewImg.src = url;
            previewImg.classList.remove('d-none');
            if (style === 'circle') {
                previewImg.style.borderRadius = '50%';
                previewImg.style.border = '2px solid #ffc800';
                previewImg.style.padding = '2px';
                previewImg.style.backgroundColor = '#ffffff';
                previewImg.style.width = '56px';
                previewImg.style.height = '56px';
                previewImg.style.objectFit = 'cover';
            } else if (style === 'rounded') {
                previewImg.style.borderRadius = '12px';
                previewImg.style.border = '2px solid #ffc800';
                previewImg.style.padding = '2px';
                previewImg.style.backgroundColor = '#ffffff';
                previewImg.style.width = '56px';
                previewImg.style.height = '56px';
                previewImg.style.objectFit = 'cover';
            } else {
                previewImg.style.borderRadius = '0';
                previewImg.style.border = 'none';
                previewImg.style.padding = '0';
                previewImg.style.backgroundColor = 'transparent';
                previewImg.style.width = 'auto';
                previewImg.style.height = '52px';
                previewImg.style.objectFit = 'contain';
            }
        }
        if (placeholder) placeholder.classList.add('d-none');
        if (removeBtn) removeBtn.style.display = 'inline-block';
        if (transBtn) transBtn.style.display = 'inline-block';
    } else {
        if (previewImg) {
            previewImg.src = '';
            previewImg.classList.add('d-none');
        }
        if (placeholder) placeholder.classList.remove('d-none');
        if (removeBtn) removeBtn.style.display = 'none';
        if (transBtn) transBtn.style.display = 'none';
    }
}

function updateLogoPreviewStyle(style) {
    const url = document.getElementById('settingLogoUrl')?.value.trim();
    updateLogoPreview(url, style);
}

function makeLogoTransparent() {
    const url = document.getElementById('settingLogoUrl')?.value.trim();
    if (!url) {
        alert('Tidak ada logo yang dapat diproses.');
        return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = imgData.data;

        // Loop over pixels and convert white/light-gray background to transparent
        for (let i = 0; i < d.length; i += 4) {
            const r = d[i];
            const g = d[i + 1];
            const b = d[i + 2];
            // If pixel is white or near-white (RGB >= 235)
            if (r >= 235 && g >= 235 && b >= 235) {
                d[i + 3] = 0; // Alpha 0 = completely transparent
            } else if (r >= 210 && g >= 210 && b >= 210) {
                // Feather edge to prevent harsh halos
                const diff = Math.min(r, g, b) - 210;
                d[i + 3] = Math.max(0, 255 - (diff * 10));
            }
        }

        ctx.putImageData(imgData, 0, 0);
        const transparentBase64 = canvas.toDataURL('image/png');
        
        document.getElementById('settingLogoUrl').value = transparentBase64;
        updateLogoPreview(transparentBase64);
        showToast('Latar belakang putih berhasil diubah menjadi transparan!', 'success');
    };
    img.onerror = function() {
        alert('Gagal memproses gambar. Pastikan gambar valid.');
    };
    img.src = url;
}

function removeLogo() {
    const urlInput = document.getElementById('settingLogoUrl');
    if (urlInput) urlInput.value = '';
    const fileInput = document.getElementById('settingLogoFile');
    if (fileInput) fileInput.value = '';
    updateLogoPreview('');
}

function renderSettingsForm() {
    const form = document.getElementById('siteSettingsForm');
    if (!form) return;
    const settings = getSettingsData();

    const setField = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = (val !== undefined && val !== null) ? val : '';
    };

    setField('settingLogoUrl', settings.logoUrl);
    setField('settingLogoStyle', settings.logoStyle || 'circle');
    updateLogoPreview(settings.logoUrl || '', settings.logoStyle || 'circle');

    setField('settingBrandName', settings.brandName);
    setField('settingTagline', settings.tagline);
    setField('settingHeadline', settings.headline);
    setField('settingSubheadline', settings.subheadline);
    setField('settingPhone', settings.phone);
    setField('settingPartnershipPhone', settings.partnershipPhone || settings.phone);
    setField('settingEmail', settings.email);
    setField('settingHours', settings.hours);
    setField('settingAddress', settings.address);
    setField('settingInstagram', settings.instagram);
    setField('settingFacebook', settings.facebook);
    setField('settingLinkedin', settings.linkedin);
    setField('settingFooterText', settings.footerText);
}

function handleSaveSettings(event) {
    event.preventDefault();
    const newSettings = {
        logoUrl: document.getElementById('settingLogoUrl')?.value.trim() || '',
        logoStyle: document.getElementById('settingLogoStyle')?.value || 'circle',
        brandName: document.getElementById('settingBrandName')?.value.trim() || DEFAULT_SETTINGS.brandName,
        tagline: document.getElementById('settingTagline')?.value.trim() || DEFAULT_SETTINGS.tagline,
        headline: document.getElementById('settingHeadline')?.value.trim() || DEFAULT_SETTINGS.headline,
        subheadline: document.getElementById('settingSubheadline')?.value.trim() || DEFAULT_SETTINGS.subheadline,
        phone: document.getElementById('settingPhone')?.value.trim() || DEFAULT_SETTINGS.phone,
        partnershipPhone: document.getElementById('settingPartnershipPhone')?.value.trim() || DEFAULT_SETTINGS.partnershipPhone,
        email: document.getElementById('settingEmail')?.value.trim() || DEFAULT_SETTINGS.email,
        hours: document.getElementById('settingHours')?.value.trim() || DEFAULT_SETTINGS.hours,
        address: document.getElementById('settingAddress')?.value.trim() || DEFAULT_SETTINGS.address,
        instagram: document.getElementById('settingInstagram')?.value.trim() || '',
        facebook: document.getElementById('settingFacebook')?.value.trim() || '',
        linkedin: document.getElementById('settingLinkedin')?.value.trim() || '',
        footerText: document.getElementById('settingFooterText')?.value.trim() || DEFAULT_SETTINGS.footerText
    };

    saveSettingsData(newSettings);
    applySiteBrandAndLogoToCms(newSettings);
    showToast('Pengaturan logo, identitas, dan kontak website berhasil disimpan!', 'success');
}

function resetSettingsForm() {
    if (confirm('Kembalikan semua logo, teks dan kontak website ke pengaturan bawaan (default)?')) {
        saveSettingsData(DEFAULT_SETTINGS);
        renderSettingsForm();
        applySiteBrandAndLogoToCms(DEFAULT_SETTINGS);
        showToast('Pengaturan website berhasil dikembalikan ke default.', 'warning');
    }
}

function showToast(message, type = 'success') {
    let container = document.getElementById('adminToastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'adminToastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    
    let icon = '<i class="fas fa-check-circle text-warning"></i>';
    if (type === 'warning') icon = '<i class="fas fa-exclamation-triangle text-danger"></i>';

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
