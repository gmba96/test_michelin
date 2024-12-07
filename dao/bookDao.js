const pool = require('../config/db');

// Fonction pour récupérer tous les livres
async function getAllBooks() {
    try {
        const result = await pool.query('SELECT * FROM books');
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        return result.rows;
    } catch (err) {
        console.error('Erreur lors de la récupération des livres:', err);
        throw err;
    }
}

async function getBookById(id) {
    try {
        if(!id) {
            throw new Error('ID du livre manquant');
            result;
        }
        const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);

        if (result.rows.length === 0) {
           return "Livre non trouvé";
        }
        return result.rows[0];
    } catch (err) {
        console.error('Erreur lors de la récupération du livre par ID:', err);
        throw err;
    }
}

module.exports = {
    getAllBooks,
    getBookById
};