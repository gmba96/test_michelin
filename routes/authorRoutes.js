const authorController = require('../controller/authorController');
const { Router } = require('express');
const router = Router();

router.get('/authors', authorController.getBooks);
router.get('/authors/:id', authorController.getBookById);

module.exports = router;
