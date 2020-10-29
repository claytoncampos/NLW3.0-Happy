import express from 'express';

import './database/connection';

import routes from './routes'

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3340);

//Driver nativo = sqlite3.query('Select * from user'),
//query builder = Knex.js knex('users).select('*').where('name',Clayton), (escreve em formato js)
//ORM retorna classes de objetos - objet relational mapping


//criando tabelas

