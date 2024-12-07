const pool = require('../config/db');

const bookDao = {};

// Fonction pour récupérer tous les livres
bookDao.getBooks = async function () {
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

bookDao.getBookById = async function(id) {
    try {
        if(!id) {
            throw new Error('ID du livre manquant');
            return;
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

bookDao.getByGenre = async function(genre){
    try{
        if(!genre){
            throw new Error('Genre du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE genre = $1', [genre]);
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        return result.rows;
    }catch(err){
        console.error('Erreur lors de la récupération du livre par genre:', err);
        throw err;
    }
}

module.exports = bookDao;