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

bookService.orderByYearAsc = async function() {
    try {
        return await bookDao.orderByYearAsc();
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par année croissante:', err);
        throw err;
    }
}

bookService.orderByYearDesc = async function() {
    try {
        return await bookDao.orderByYearDesc();
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par année décroissante:', err);
        throw err;
    }
}

bookService.orderByRatingAsc = async function() {
    try {
        return await bookDao.orderByRatingAsc();
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par rating croissant:', err);
        throw err;
    }
}

bookService.orderByRatingDesc = async function() {
    try {
        return await bookDao.orderByRatingDesc();
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par rating décroissant:', err);
        throw err;
    }
}


//-------------------------------------POST-------------------------------------
// Fonction pour créer un livre en utilisant le DAO
bookService.createBook = async function(book) {
    try {
        return await bookDao.createBook(book);
    } catch (err) {
        console.error('Erreur dans le service de création du livre:', err);
        throw err;
    }
};

//-------------------------------------PUT-------------------------------------
// Fonction pour mettre à jour un livre en utilisant le DAO
bookService.updateBook = async function(book) {
    try {
        return await bookDao.updateBook(book);
    } catch (err) {
        console.error('Erreur dans le service de mise à jour du livre:', err);
        throw err;
    }
};

//-------------------------------------DELETE-------------------------------------

bookService.deleteAllBooks = async function() {
    try {
        return await bookDao.deleteAllBooks();
    } catch (err) {
        console.error('Erreur dans le service de suppression de tous les livres:', err);
        throw err;
    }
}

bookService.deleteBookById = async function(id) {
    try {
        return await bookDao.deleteBookById(id);
    } catch (err) {
        console.error('Erreur dans le service de suppression du livre:', err);
        throw err;
    }
}

bookService.deleteBooksByGenre = async function(genre) {
    try {
        return await bookDao.deleteBooksByGenre(genre);
    } catch (err) {
        console.error('Erreur dans le service de suppression des livres par genre:', err);
        throw err;
    }
}

bookService.deleteBooksByYear = async function(year) {
    try {
        return await bookDao.deleteBooksByYear(year);
    } catch (err) {
        console.error('Erreur dans le service de suppression des livres par année:', err);
        throw err;
    }
}

bookService.deleteBooksByRatingSup = async function(rating) {
    try {
        return await bookDao.deleteBooksByRatingSup(rating);
    } catch (err) {
        console.error('Erreur dans le service de suppression des livres par rating:', err);
        throw err;
    }
}

bookService.deleteBooksByRatingInf = async function(rating) {
    try {
        return await bookDao.deleteBooksByRatingInf(rating);
    } catch (err) {
        console.error('Erreur dans le service de suppression des livres par rating:', err);
        throw err;
    }
}

bookService.deleteBooksByName = async function(name) {
    try {
        return await bookDao.deleteBooksByName(name);
    } catch (err) {
        console.error('Erreur dans le service de suppression des livres par nom:', err);
        throw err;
    }
}




module.exports = bookService;