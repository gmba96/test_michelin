const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const pool = require('./config/db');
const bookController = require('./controller/book-controller');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Définir la route pour obtenir tous les livres
app.get('/books', bookController.getBooks);

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`aller sur le port ${port}`);
});