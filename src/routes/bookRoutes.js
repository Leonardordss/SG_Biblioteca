// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const { addBook, removeBook, getAllBooks, searchBooksByTitle } = require('../controllers/bookController');

// Rota POST para adicionar um novo livro
router.post('/add', addBook);

// Rota DELETE para remover um livro com base no código ISBN
router.delete('/remove/:isbn', removeBook);

// Rota GET para listar todos os livros
router.get('/all', getAllBooks);

// Rota GET para buscar livros por título
router.get('/search', searchBooksByTitle);

module.exports = router;



