// Vercel Serverless Function: /api/products (Alias to /api/ukm)
const ukmHandler = require('./ukm');

module.exports = async (req, res) => {
    return ukmHandler(req, res);
};
