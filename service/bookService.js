const bookDao = require('../dao/bookDao');

// Définir un objet bookService
const bookService = {};

// Fonction pour récupérer tous les livres en utilisant le DAO
bookService.getBooks = async function() {
    try {
        return await bookDao.getBooks();
    } catch (err) {
        console.error('Erreur dans le service de récupération des livres:', err);
        throw err;
    }
};

// Fonction pour récupérer un livre par ID en utilisant le DAO
bookService.getBookById = async function(id) {
    try {
        return await bookDao.getBookById(id);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par ID:', err);
        throw err;
    }
};

// Fonction pour récupérer un livre par genre en utilisant le DAO
bookService.getByGenre = async function(genre) {
    try {
        return await bookDao.getByGenre(genre);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par genre:', err);
        throw err;
    }
};

module.exports = bookService;