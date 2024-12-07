const pool = require('../config/db');

const bookDao = {};

// Fonction pour récupérer tous les livres
bookDao.getBooks = async function () {
    try {
        // executer la requête SQL
        const result = await pool.query('SELECT * FROM books');
        // si aucun livre n'est trouvé, renvoyer un message
        if (result.rows.length === 0) {
            return "Aucun livre trouvé";
        }
        // sinon renvoyer les livres
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

//---------------------------------trier dans l'ordre--------------------------------------------------------
bookDao.orderByYearAsc = async function(){
    try{
        // executer la requête SQL et renvoyer les livres dans l'ordre trié
        const result = await pool.query('SELECT * FROM books ORDER BY year ASC');
        return result.rows;
    }catch(err){
        console.error('Erreur lors de la récupération du livre par année:', err);   
        throw err;
    }
}

bookDao.orderByYearDesc = async function(){
    try{
        const result = await pool.query('SELECT * FROM books ORDER BY year DESC');
        return result.rows;
    }catch(err){
        console.error('Erreur lors de la récupération du livre par année:', err);
        throw err;
    }
}

bookDao.orderByRatingAsc = async function(){
    try{
        const result = await pool.query('SELECT * FROM books ORDER BY rating ASC');
        return result.rows;
    }catch(err){
        console.error('Erreur lors de la récupération du livre par rating:', err);
        throw err;
    }
}

bookDao.orderByRatingDesc = async function(){
    try{
        const result = await pool.query('SELECT * FROM books ORDER BY rating DESC');
        return result.rows;
    }catch(err){
        console.error('Erreur lors de la récupération du livre par rating:', err);
        throw err;
    }
}



//---------------------------------POST--------------------------------------------------------

bookDao.createBook = async function(book){
    try{
        // verifie si book a les éléments nécessaires pour créer un livre
        const requiredFields = ['name','author', 'rating', 'year', 'genre'];
        for (let field of requiredFields) {
            if (!book[field]) {
                throw new Error(`Le champ ${field} est manquant`);
            }
        }
        // verifie si le livre existe déjà
        const req = `SELECT * FROM books WHERE ${selectFields.join(' AND ')}}`;
        const result = await pool.query(req,[book.name, book.genre, book.year, book.rating]);
        // si le livre n'existe pas, le créer
        if (result.rows.length === 0) {
            const result = await pool.query('INSERT INTO books (name, genre, year, rating) VALUES ($1, $2, $3, $4) RETURNING *', [book.name, book.genre, book.year, book.rating]);
            return "Livre a été ajouté";
        }
        // sinon renvoyer un message
        else{
            return "Livre existe déjà";
        }        
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

//---------------------------------DELETE--------------------------------------------------------

bookDao.deleteAllBooks = async function(){
    try{
        // supprimer tous les livres et renvoyer un message
        const result = await pool.query('DELETE FROM books');
        return "Tous les livres ont été supprimés";
    }catch(err){
        console.error('Erreur lors de la suppression de tous les livres:', err);
        throw err;
    }
}

bookDao.deleteBookById = async function(id){
    try{
        // verifier si le livre existe
        if(!id){
            throw new Error('ID du livre manquant');
            return;
        }
        // si le livre n'existe pas, renvoyer un message
        const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return "Livre non trouvé";
        }
        //sinon supprimer le livre et renvoyer un message
        await pool.query('DELETE FROM books WHERE id = $1', [id]);
        return `Livre dont l'id est ${id} a été supprimé`;
    }catch(err){
        console.error('Erreur lors de la suppression du livre:', err);
        throw err;
    }
}

bookDao.deleteBooksByGenre = async function(genre){
    try{
        if(!genre){
            throw new Error('Genre du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE genre = $1', [genre]);
        if (result.rows.length === 0) {
            return "Livre non trouvé";
        }
        await pool.query('DELETE FROM books WHERE genre = $1', [genre]);
        return `Les livres dont le genre est ${genre} ont été supprimés`;
    }catch(err){
        console.error('Erreur lors de la suppression du livre par genre:', err);
        throw err;
    }
}

bookDao.deleteBooksByYear = async function(year){
    try{
        if(!year){
            throw new Error('Année du livre manquante');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE year = $1', [year]);
        if (result.rows.length === 0) {
            return "Livre non trouvé";
        }  
        await pool.query('DELETE FROM books WHERE year = $1', [year]);
        return `Les livres de l'année ${year} ont été supprimés`;
    }catch(err){
        console.error('Erreur lors de la suppression du livre par année:', err);
        throw err;
    }
}

bookDao.deleteBooksByRatingSup = async function(rating){
    try{
        if(!rating){
            throw new Error('Rating du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE rating > $1', [rating]);
        if (result.rows.length === 0) {
            return "Livre non trouvé";
        }  
        await pool.query('DELETE FROM books WHERE rating > $1', [rating]);
        return `Les livres dont la notation sont supérieurs à ${rating} ont été supprimés`;
    }catch(err){
        console.error('Erreur lors de la suppression du livre par rating:', err);
        throw err;
    }
}

bookDao.deleteBooksByRatingInf = async function(rating){
    try{
        if(!rating){
            throw new Error('Rating du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE rating < $1', [rating]);
        if (result.rows.length === 0) {
            return "Livre non trouvé";
        }  
        await pool.query('DELETE FROM books WHERE rating > $1', [rating]);
        return `Les livres dont la notation sont inférieurs à ${rating} ont été supprimés`;
    }catch(err){
        console.error('Erreur lors de la suppression du livre par rating:', err);
        throw err;
    }
}

bookDao.deleteBooksByName = async function(name){
    try{
        if(!name){
            throw new Error('Nom du livre manquant');
            return;
        }
        const result = await pool.query('SELECT * FROM books WHERE name = $1', [name]);
        if (result.rows.length === 0) {
            return "Livre non trouvé";
        } 
        await pool.query('DELETE FROM books WHERE name = $1', [name]);
        return `Le livre dont le nom est ${name} a été supprimé`;
    }catch(err){
        console.error('Erreur lors de la suppression du livre par nom:', err);
        throw err;
    }
}


module.exports = bookDao;