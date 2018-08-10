const usuariosRouter = require('express').Router();

const usuarios = require('../api/data/const');

const _ = require('lodash');

usuariosRouter.get('/', (request, response) => {
    response.json(usuarios);
});

module.exports = usuariosRouter;

