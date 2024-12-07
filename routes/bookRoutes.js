const bookController = require('../controller/bookController');
const { Router } = require('express');
const router = Router();

router.get('/', bookController.getBooks);
router.get('/id/:id', bookController.getBookById);
router.get('/genre/:genre', bookController.getByGenre);

module.exports = router;
