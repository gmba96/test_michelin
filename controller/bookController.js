const bookService = require('../service/bookService');

const bookController = {};


//---------------------------------GET--------------------------------------------------------
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

bookController.getByGenreAndRatingSup = async function(req, res){
    try{
        const genre = req.params.genre;
        const rating = req.params.rating;
        const book = await bookService.getByGenreAndRatingSup(genre, rating);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.getByGenreAndRatingInf = async function(req, res){
    try{
        const genre = req.params.genre;
        const rating = req.params.rating;
        const book = await bookService.getByGenreAndRatingInf(genre, rating);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.getByYearAndRatingSup = async function(req, res){
    try{
        const year = req.params.year;
        const rating = req.params.rating;
        const book = await bookService.getByYearAndRatingSup(year, rating);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.getByYearAndRatingInf = async function(req, res){
    try{
        const year = req.params.year;
        const rating = req.params.rating;
        const book = await bookService.getByYearAndRatingInf(year, rating);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.getByGenreAndYearAndRatingSup = async function(req, res){
    try{
        const genre = req.params.genre;
        const year = req.params.year;
        const rating = req.params.rating;
        const book = await bookService.getByGenreAndYearAndRatingSup(genre, year, rating);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.getByGenreAndYearAndRatingInf = async function(req, res){
    try{
        const genre = req.params.genre;
        const year = req.params.year;
        const rating = req.params.rating;
        const book = await bookService.getByGenreAndYearAndRatingInf(genre, year, rating);
        res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.orderByYearAsc = async function(req, res){
    try{
        const books = await bookService.orderByYearAsc();
        res.json(books);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.orderByYearDesc = async function(req, res){
    try{
        const books = await bookService.orderByYearDesc();
        res.json(books);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.orderByRatingAsc = async function(req, res){
    try{
        const books = await bookService.orderByRatingAsc();
        res.json(books);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.orderByRatingDesc = async function(req, res){
    try{
        const books = await bookService.orderByRatingDesc();
        res.json(books);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}


//---------------------------------POST--------------------------------------------------------

bookController.createBook = async function(req, res){
    try{
        const book = req.body;
        console.log('controller',req.body);
        const result = await bookService.createBook(book);
        res.json(result);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

//---------------------------------PUT--------------------------------------------------------

bookController.updateBook = async function(req, res){
    try{
        const book = req.body;
        const result = await bookService.updateBook(book);
        res.json(result);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

//---------------------------------DELETE--------------------------------------------------------

bookController.deleteAllBooks = async function(req, res){
    try{
        const result = await bookService.deleteAllBooks();
        res.json(result);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.deleteBookById = async function(req, res){
    try{
        const id = req.params.id;
        const result = await bookService.deleteBookById(id);
        res.json(result);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.deleteBooksByGenre = async function(req, res){
    try{
        const genre = req.params.genre;
        const result = await bookService.deleteBooksByGenre(genre);
        res.json(result);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.deleteBooksByYear = async function(req, res){
    try{
        const year = req.params.year;
        const result = await bookService.deleteBooksByYear(year);
        res.json(result);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.deleteBooksByRatingSup = async function(req, res){
    try{
        const rating = req.params.rating;
        const result = await bookService.deleteBooksByRatingSup(rating);
        res.json(result);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.deleteBooksByRatingInf = async function(req, res){
    try{
        const rating = req.params.rating;
        const result = await bookService.deleteBooksByRatingInf(rating);
        res.json(result);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}

bookController.deleteBooksByName = async function(req, res){
    try{
        const name = req.params.name;
        const result = await bookService.deleteBooksByName(name);
        res.json(result);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
}



module.exports = bookController;