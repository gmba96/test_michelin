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
bookController.getByYear = async function(req, res){
    try{
        const year = req.params.year;
        const book = await bookService.getByYear(year);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.getByRatingSup = async function(req, res){
    try{
        const rating = req.params.rating;
        const book = await bookService.getByRatingSup(rating);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.getByRatingInf = async function(req, res){
    try{
        const rating = req.params.rating;
        const book = await bookService.getByRatingInf(rating);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.getByName = async function(req, res){
    try{
        const name = req.params.name;
        const book = await bookService.getByName(name);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.getByGenreAndYear = async function(req, res){
    try{
        const genre = req.params.genre;
        const year = req.params.year;
        const book = await bookService.getByGenreAndYear(genre, year);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}



module.exports = bookController;