// Rota / Recursos

// ** Métodos http: **
// GET: Buscar/listar info do backend
// POST: Criar informação no backend
// PUT: Alterar informação no backend
// DELETE: Deletar informação no backend


// ** Tipos de Parâmetros **

// Query Params: Parâmetros nomeados enviados na rota, após o "?" (Filtros, paginação)
// Route Params: Parâmetros utilizados para identificar recursos
// Request Body: Corpo da requisição, utilizado para criar ou alterar recursos


// ** BANCOS **

// SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
// NoSQL: MongoDB, CounchDB, etc 


// Driver: SELECT * FROM users
// Query Builder: table('users').select('*').where()


const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);