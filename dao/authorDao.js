const pool = require('../config/db');

const authorDao = {};

authorDao.getAuthors = async function () {
    try {
        const result = await pool.query('SELECT * FROM authors');
        if (result.rows.length === 0) {
            return "Aucun autheur trouvé";
        }
        return result.rows;
    } catch (err) {
        console.error('Erreur lors de la récupération des autheurs:', err);
        throw err;
    }
}

authorDao.getAuthorById = async function(id) {
    try {
        if(!id) {
            throw new Error('ID du autheur manquant');
            result;
        }
        const result = await pool.query('SELECT * FROM authors WHERE id = $1', [id]);

        if (result.rows.length === 0) {
           return "autheur non trouvé";
        }
        return result.rows[0];
    } catch (err) {
        console.error('Erreur lors de la récupération du livre par ID:', err);
        throw err;
    }
}



module.exports = authorDao;