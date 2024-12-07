const bookController = require('../controller/bookController');
const { Router } = require('express');
const router = Router();

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);

module.exports = router;
