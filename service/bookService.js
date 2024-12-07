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

// Fonction pour récupérer un livre par année en utilisant le DAO
bookService.getByYear = async function(year) {
    try {
        return await bookDao.getByYear(year);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par année:', err);
        throw err;
    }
};

bookService.getByRatingSup = async function(rating) {
    try {
        return await bookDao.getByRatingSup(rating);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par rating:', err);
        throw err;
    }
};

bookService.getByRatingInf = async function(rating) {
    try {
        return await bookDao.getByRatingInf(rating);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par rating:', err);
        throw err;
    }
};

bookService.getByName = async function(name) {
    try {
        return await bookDao.getByName(name);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par nom:', err);
        throw err;
    }
};

bookService.getByGenreAndYear = async function(genre, year) {
    try {
        return await bookDao.getByGenreAndYear(genre, year);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par genre et année:', err);
        throw err;
    }
};

bookService.getByGenreAndRatingSup = async function(genre, rating) {
    try {
        return await bookDao.getByGenreAndRatingSup(genre, rating);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par genre et rating:', err);
        throw err;
    }
}

bookService.getByGenreAndRatingInf = async function(genre, rating) {
    try {
        return await bookDao.getByGenreAndRatingInf(genre, rating);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par genre et rating:', err);
        throw err;
    }
}

bookService.getByYearAndRatingSup = async function(year, rating) {
    try {
        return await bookDao.getByYearAndRatingSup(year, rating);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par année et rating:', err);
        throw err;
    }
}

bookService.getByYearAndRatingInf = async function(year, rating) {
    try {
        return await bookDao.getByYearAndRatingInf(year, rating);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par année et rating:', err);
        throw err;
    }
}

bookService.getByGenreAndYearAndRatingSup = async function(genre, year, rating) {
    try {
        return await bookDao.getByGenreAndYearAndRatingSup(genre, year, rating);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par genre, année et rating:', err);
        throw err;
    }
}

bookService.getByGenreAndYearAndRatingInf = async function(genre, year, rating) {
    try {
        return await bookDao.getByGenreAndYearAndRatingInf(genre, year, rating);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par genre, année et rating:', err);
        throw err;
    }
}




module.exports = bookService;