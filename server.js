const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const pool = require('./config/db');
const book_routes = require('./routes/bookRoutes');
const author_routes = require('./routes/authorRoutes');

app.use(cors());

//récupère argument et paramètre d'une requête HTTP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/books', book_routes);
app.use('/api/authors', author_routes);

// Définir la route pour obtenir tous les livres
app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/json');
    res.send('Bienvenue sur le service de la bibliothèque');
});

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`aller sur le port ${port}`);
});