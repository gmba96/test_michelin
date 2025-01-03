const bookController = require('../controller/bookController');
const { Router } = require('express');
const router = Router();

//-------------------routes pour les gets-------------------
router.get('/', bookController.getBooks);
router.get('/id/:id', bookController.getBookById);
router.get('/name/:name', bookController.getByName);
router.get('/genre/:genre', bookController.getByGenre);
router.get('/year/:year', bookController.getByYear);
router.get('/ratingSup/:rating', bookController.getByRatingSup);
router.get('/ratingInf/:rating', bookController.getByRatingInf);
router.get('/orderByYearAsc', bookController.orderByYearAsc);
router.get('/orderByYearDesc', bookController.orderByYearDesc);
router.get('/orderByRatingAsc', bookController.orderByRatingAsc);
router.get('/orderByRatingDesc', bookController.orderByRatingDesc);

// routes pour les requêtes combinées
router.get('/genre/:genre/year/:year', bookController.getByGenreAndYear);
router.get('/genre/:genre/ratingSup/:rating', bookController.getByGenreAndRatingSup);
router.get('/genre/:genre/ratingInf/:rating', bookController.getByGenreAndRatingInf);
router.get('/year/:year/ratingSup/:rating', bookController.getByYearAndRatingSup);
router.get('/year/:year/ratingInf/:rating', bookController.getByYearAndRatingInf);

router.get('/genre/:genre/year/:year/ratingSup/:rating', bookController.getByGenreAndYearAndRatingSup);
router.get('/genre/:genre/year/:year/ratingInf/:rating', bookController.getByGenreAndYearAndRatingInf);


//-------------------routes pour les posts-------------------
router.post('/', bookController.createBook);

//-------------------routes pour les puts-------------------
router.put('/', bookController.updateBook);


//-------------------routes pour les deletes-------------------
router.delete('/', bookController.deleteAllBooks);
router.delete('/id/:id', bookController.deleteBookById);
router.delete('/genre/:genre', bookController.deleteBooksByGenre);
router.delete('/year/:year', bookController.deleteBooksByYear);
router.delete('/ratingSup/:rating', bookController.deleteBooksByRatingSup);
router.delete('/ratingInf/:rating', bookController.deleteBooksByRatingInf);
router.delete('/name/:name', bookController.deleteBooksByName);

module.exports = router;