const authorDao = require('../dao/authorDao');

// Définir un objet bookService
const authorService = {};

// Fonction pour récupérer tous les livres en utilisant le DAO
authorService.getAuthors = async function() {
    try {
        return await authorDao.getAuthors();
    } catch (err) {
        console.error('Erreur dans le service de récupération des livres:', err);
        throw err;
    }
};

// Fonction pour récupérer un livre par ID en utilisant le DAO
authorService.getAuthorById = async function(id) {
    try {
        return await authorDao.getAuthorById(id);
    } catch (err) {
        console.error('Erreur dans le service de récupération du livre par ID:', err);
        throw err;
    }
};

module.exports = authorService;