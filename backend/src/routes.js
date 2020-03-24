/*
    ROTA / RECURSO

    Métodos HTTP:
        GET: Buscar uma informação do Backend;
        POST: Criar uma informação no Backend;
        PUT: Alterar uma informação do Backend;
        DELETE: Deleta uma informação do Backend;

    Tipos de Parâmetros:
        Query Params: Parâmetros nomeados enviados na rota após o '?' (Filtros, Paginação)
        Route Params: Parâmetros utilizados para identificar recursos
        Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/
/* 
    (request): armazena todos os dados que vem através da requisição ;
    (response): responsável por retornar uma resposta ao usuário;
*/

/*
    SQL: MySQL, SQLite, Oracle, PostgreeSQL, Microsoft SQL Server 
    NoSQL: MongoDB, CouchDB, etc...
*/
/*
    Drives: SELECT * FROM users
    Query Builder: table('users).select(*).where()    
*/

const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes;