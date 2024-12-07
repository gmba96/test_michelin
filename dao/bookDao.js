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

bookDao.getByGenreAndYearAndRatingSup = async function(genre, year, rating){
    try{
        if(!genre || !year || !rating){
            throw new Error('Genre ou Année ou Rating du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE genre = $1 AND year = $2 AND rating > $3', [genre, year, rating]);
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

bookDao.getByGenreAndYearAndRatingInf = async function(genre, year, rating){
    try{
        if(!genre || !year || !rating){
            throw new Error('Genre ou Année ou Rating du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE genre = $1 AND year = $2 AND rating < $3', [genre, year, rating]);
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

//---------------------------------POST--------------------------------------------------------

bookDao.createBook = async function(book){
    try{
        if(!book){
            throw new Error('Livre manquant');
            return;
        }
        const result = await pool.query('INSERT INTO books (name, genre, year, rating) VALUES ($1, $2, $3, $4) RETURNING *', [book.name, book.genre, book.year, book.rating]);
        return "Livre a été ajouté";
    }catch(err){
        console.error('Erreur lors de la création du livre:', err);
        throw err;
    }
}

//---------------------------------PUT--------------------------------------------------------

bookDao.updateBook = async function(book){
    try{
        if(!book){
            throw new Error('Livre manquant');
            return;
        }

        // Construire dynamiquement les éléments de la requête
        let selectFields = [];
        let index = 1;
        for (let key in book) {
            selectFields.push(`${key} = $${index}`);
            index++;
        }

        // si le livre n'existe pas, le créer
        const req = `SELECT * FROM books WHERE ${selectFields.join(' AND ')}}`;
        const result = await pool.query(req,[book.name, book.genre, book.year, book.rating]);
        if (result.rows.length === 0) {
            await bookDao.createBook(book);
            return;
        }

        // mettre à jour le livre si le livre existe
        else{
            let id = result.rows[0].id;
            const req = `UPDATE books SET ${selectFields.join(', ')} WHERE id = $${id}`;
            await pool.query(req,[book.name, book.genre, book.year, book.rating]);
            return "Livre a été mis à jour";
        }
        
    }catch(err){
        console.error('Erreur lors de la mise à jour du livre:', err);
        throw err;
    }
}


module.exports = bookDao;