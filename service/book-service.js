const bookDao = require('../dao/book-dao');

// Fonction pour récupérer tous les livres en utilisant le DAO
async function getBooks() {
    try {
        return await bookDao.getAllBooks();
    } catch (err) {
        console.error('Erreur dans le service de récupération des livres:', err);
        throw err;
    }
}

module.exports = {
    getBooks
};