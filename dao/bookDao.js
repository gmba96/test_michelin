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

bookDao.getByYear = async function(year){
    try{
        if(!year){
            throw new Error('Année du livre manquante');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE year = $1', [year]);
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        return result.rows;
    }catch(err){
        console.error('Erreur lors de la récupération du livre par année:', err);
        throw err;
    }
}

bookDao.getByRatingSup = async function(rating){
    try{
        if(!rating){
            throw new Error('Rating du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE rating > $1', [rating]);
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        return result.rows;
    }catch(err){
        console.error('Erreur lors de la récupération du livre par rating:', err);
        throw err;
    }
}

bookDao.getByRatingInf = async function(rating){
    try{
        if(!rating){
            throw new Error('Rating du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE rating < $1', [rating]);
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        return result.rows;
    }catch(err){
        console.error('Erreur lors de la récupération du livre par rating:', err);
        throw err;
    }
}

bookDao.getByName = async function(name){
    try{
        if(!name){
            throw new Error('Nom du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE name = $1', [name]);
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        return result.rows;
    }catch(err){
        console.error('Erreur lors de la récupération du livre par nom:', err);
        throw err;
    }
}

bookDao.getByGenreAndYear = async function(genre, year){
    try{
        if(!genre || !year){
            throw new Error('Genre  ou Année du livre manquant');  
            return;
        }  
        const result = await pool.query('SELECT * FROM books WHERE genre = $1 AND year = $2', [genre, year]);       
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        return result.rows;
    }catch(err){
        console.error('Erreur lors de la récupération du livre par année:', err);
        throw err;
    }
}

bookDao.getByGenreAndRatingSup = async function(genre, rating){
    try{
        if(!genre || !rating){
            throw new Error('Genre  ou Rating du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE genre = $1 AND rating > $2', [genre, rating]);
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        return result.rows;
    }
    catch(err){
        console.error('Erreur lors de la récupération du livre par rating:', err);
        throw err;
    }
}

bookDao.getByGenreAndRatingInf = async function(genre, rating){
    try{
        if(!genre || !rating){
            throw new Error('Genre  ou Rating du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE genre = $1 AND rating < $2', [genre, rating]);
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        return result.rows;
    }
    catch(err){
        console.error('Erreur lors de la récupération du livre par rating:', err);
        throw err;
    }
}

bookDao.getByYearAndRatingSup = async function(year, rating){
    try{
        if(!year || !rating){
            throw new Error('Année  ou Rating du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE year = $1 AND rating > $2', [year, rating]);
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        return result.rows;
    }
    catch(err){
        console.error('Erreur lors de la récupération du livre par rating:', err);
        throw err;
    }
}

bookDao.getByYearAndRatingInf = async function(year, rating){
    try{
        if(!year || !rating){
            throw new Error('Année  ou Rating du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE year = $1 AND rating < $2', [year, rating]);
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        return result.rows;
    }
    catch(err){
        console.error('Erreur lors de la récupération du livre par rating:', err);
        throw err;
    }
}



module.exports = bookDao;