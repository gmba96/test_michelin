const bookDao = require('../dao/bookDao');

// Fonction pour récupérer tous les livres en utilisant le DAO
async function getBooks() {
    try {
        return await bookDao.getAllBooks();
    } catch (err) {
        console.error('Erreur dans le service de récupération des livres:', err);
        throw err;
    }
}

async function getBookById(id) {
    try {
        return await bookDao.getBookById(id);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par ID:', err);
        throw err;
    }
}

module.exports = {
    getBooks,
    getBookById
};