const express = require('express');
const app = express();
const bookRoutes = require('./src/routes/bookRoutes'); // Importa as rotas de livros

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Usar as rotas para livros
app.use('/api/books', bookRoutes);

// Exporta o app para ser usado no server.js
module.exports = app;


