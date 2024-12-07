const pool = require('../config/db');

// Fonction pour récupérer tous les livres
async function getAllBooks() {
    try {
        const result = await pool.query('SELECT * FROM books');
        return result.rows;
    } catch (err) {
        console.error('Erreur lors de la récupération des livres:', err);
        throw err;
    }
}

module.exports = {
    getAllBooks
};