const authorController = require('../controller/authorController');
const { Router } = require('express');
const router = Router();

router.get('/', authorController.getAuthors);
router.get('/:id', authorController.getAuthorById);

module.exports = router;
