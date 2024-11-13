require('dotenv').config();  
const mongoose = require('mongoose');
const app = require('./app'); // Importa a configuração do servidor Express

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB');
    // Iniciar o servidor após a conexão com o banco de dados
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1); // Encerra o processo caso não consiga conectar ao banco
  });
