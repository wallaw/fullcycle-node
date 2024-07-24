const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configurações do banco de dados
const config = {
  host: 'database',
  user: 'root',
  password: '1234',
  database: 'desafio',
  port: 3306 // Porta padrão do MySQL
};







app.get('/', (req, res) => {
  const connection = mysql.createConnection(config);

  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS tb_pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
  )`;

  connection.query(createTableQuery)


  const random = Math.floor(Math.random() * 10);

  const insertQuery = `insert into tb_pessoas (nome) values ("Pessoa ${random.toString()}")` ;
  connection.query(insertQuery)

  // Recupera todos os nomes do banco de dados
  connection.query('select * from  tb_pessoas', (err, results) => {
    if (err) {
      return res.status(500).send('Erro ao recuperar dados do banco de dados');
    }

    const names = results.map(row => row.nome).join('<br>');

    res.send(` <h1>Full Cycle Rocks!</h1> </br>${names}`);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
