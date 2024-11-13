// controllers/bookController.js
const Book = require('../models/Book'); // Importa o modelo Book

// Função adição de um novo livro
exports.addBook = async (req, res) => {
  const { title, author, year, pages, isbn } = req.body;

  try {
    // Criar um novo livro a partir dos dados
    const newBook = new Book({
      title,
      author,
      year,
      pages,
      isbn
    });

    // Salvar o livro no banco de dados
    await newBook.save();

    // Retornar a resposta
    res.status(201).json({
      message: 'Livro adicionado com sucesso!',
      book: newBook
    });
  } catch (error) {
    // Caso haja erro durante a adição do livro
    res.status(500).json({
      message: 'Erro ao adicionar livro',
      error: error.message
    });
  }
};

// Função remoção de um livro
exports.removeBook = async (req, res) => {
  const { isbn } = req.params; // ISBN passado na URL

  try {
    const book = await Book.findOneAndDelete({ isbn });

    if (!book) {
      return res.status(404).json({
        message: 'Livro não encontrado com o ISBN fornecido'
      });
    }

    res.status(200).json({
      message: 'Livro removido com sucesso!',
      book
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao remover livro',
      error: error.message
    });
  }
};

// Função para retornar todos os livros
exports.getAllBooks = async (req, res) => {
  try {
    // Buscar todos os livros no banco de dados
    const books = await Book.find();

    // Retornar a lista de livros
    res.status(200).json({
      message: 'Livros encontrados com sucesso!',
      books: books
    });
  } catch (error) {
    // Caso haja erro durante a busca dos livros
    res.status(500).json({
      message: 'Erro ao buscar livros',
      error: error.message
    });
  }
};

// Função para buscar livros por título
exports.searchBooksByTitle = async (req, res) => {
  const { title } = req.query; 

  try {
    // Buscar livros 
    const books = await Book.find({ title: { $regex: title, $options: 'i' } });

    if (books.length === 0) {
      return res.status(404).json({
        message: 'Nenhum livro encontrado com esse título'
      });
    }

    res.status(200).json({
      message: 'Livros encontrados com sucesso!',
      books
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao buscar livros',
      error: error.message
    });
  }
};




