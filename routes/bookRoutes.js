const bookController = require('../controller/bookController');
const { Router } = require('express');
const router = Router();

router.get('/', bookController.getBooks);
router.get('/id/:id', bookController.getBookById);
router.get('/name/:name', bookController.getByName);
router.get('/genre/:genre', bookController.getByGenre);
router.get('/year/:year', bookController.getByYear);
router.get('/ratingSup/:rating', bookController.getByRatingSup);
router.get('/ratingInf/:rating', bookController.getByRatingInf);
router.get('/genre/:genre/year/:year', bookController.getByGenreAndYear);

module.exports = router;
