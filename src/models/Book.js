// models/Book.js
const mongoose = require('mongoose');

// Definir o esquema para o livro
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  pages: { type: Number, required: true },
  isbn: { type: String, required: true, unique: true } // Campo ISBN
});

// Criar o modelo a partir do esquema
const Book = mongoose.model('Book', BookSchema);

module.exports = Book;


