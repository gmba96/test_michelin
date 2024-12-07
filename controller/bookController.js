const bookService = require('../service/bookService');

const bookController = {};

// Contrôleur pour gérer la requête de récupération de tous les livres
bookController.getBooks = async function (req, res) {
    try {
        // Appel de la méthode getBooks du service 
        // await est utilisé pour attendre la fin de l'exécution de la méthode
        const books = await bookService.getBooks();
        // Renvoyer la réponse au client sous forme de JSON
        res.json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.getBookById = async function(req, res) {
    try{
        const id = req.params.id;
        const book = await bookService.getBookById(id);
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.getByGenre = async function(req, res){
    try{
        const genre = req.params.genre;
        const book = await bookService.getByGenre(genre);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

module.exports = bookController;