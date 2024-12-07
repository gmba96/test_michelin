const authorService = require('../service/authorService');

const authorController = {};

// Contrôleur pour gérer la requête de récupération de tous les auteurs
authorController.getAuthors = async function (req, res) {
    try {
        const authors = await authorService.getAuthors();
        res.json(authors);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
};

// Contrôleur pour gérer la requête de récupération d'un auteur par ID
authorController.getAuthorById = async function(req, res) {
    try {
        const id = req.params.id;
        const author = await authorService.getAuthorById(id);
        res.json(author);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
};

module.exports = authorController;