const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// Importer les routes
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

//récupère argument et paramètre d'une requête HTTP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// rediriger les requêtes vers les routes
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);

// route par défaut
app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/json');
    res.send('Bienvenue sur le service de la bibliothèque');
});

// ecouter le port
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`aller sur le port ${port}`);
});