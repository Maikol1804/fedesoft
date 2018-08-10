const usuariosRouter = require('express').Router();

const usuarios = require('../api/data/const');

const _ = require('lodash');

usuariosRouter.get('/', (request, response) => {
    response.json(usuarios);
});

// Middleware route params
usuariosRouter.param('id', (request, response, next, id) => {
    console.error('Id oK: ',  id);
    const usuario = _.find(usuarios, {
        'id' : +id
    });
    if(usuario){
        request.usuario = usuario;
        next();
    }else{
        response.status(404).json({
            'error' :  'ID no se encontro'
        });
    }
});

usuariosRouter.get('/:id', (request, response) => {
    let usuario = request.usuario;
    response.json(usuario || {
        'error' : 'Id no encontrado'
    });
});

usuariosRouter.post('/', (request, response) => {
    let usuario = request.body;

    const createdUser = usuarios.push(usuario);

    if(!createdUser){
        response.json(createdUser || {
            'error' : 'El usuario no fue creado'
        });
    }

});



module.exports = usuariosRouter;

