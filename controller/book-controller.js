const bookService = require('../service/book-service');

// Contrôleur pour gérer la requête de récupération de tous les livres
async function getBooks(req, res) {
    try {
        const books = await bookService.getBooks();
        res.json(books);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
}

module.exports = {
    getBooks
};