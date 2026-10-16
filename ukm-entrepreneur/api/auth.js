// Vercel Serverless Function: /api/auth
module.exports = async (req, res) => {
    // Enable CORS
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

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { username, password } = req.body || {};
        
        // Kredensial default (dapat ditimpa via Vercel Environment Variables: ADMIN_USER & ADMIN_PASS)
        const expectedUser = process.env.ADMIN_USER || 'admin';
        const expectedPass = process.env.ADMIN_PASS || 'admin123';

        if (username === expectedUser && password === expectedPass) {
            // Generate simple session token
            const token = 'ukm_token_' + Buffer.from(`${username}:${Date.now()}`).toString('base64');
            return res.status(200).json({
                success: true,
                message: 'Login berhasil',
                token,
                user: {
                    name: 'Admin Pusat UKM',
                    username,
                    role: 'administrator'
                }
            });
        } else {
            return res.status(401).json({
                success: false,
                message: 'Username atau password salah!'
            });
        }
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
};
