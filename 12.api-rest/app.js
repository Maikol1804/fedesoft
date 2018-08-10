require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('cookie-session');

let port = process.env.PORT;

let usuariosRouter = require('./routers/usuarios-routers');


let tareas = [];

//Middleware

app.use(morgan('dev'));
app.use(session({
    secret: 'node'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
    response.render('formulario.ejs', {tareas});
});

app.post("/adicionar", (request, response) => {
    if(request.body.taskName != ""){
        tareas.push(request.body.taskName);
    }
    response.redirect('/')
});

app.get("/eliminar/:i", (request, response) => {
    let i = request.params.i;
    tareas.splice(i,1);
    response.redirect('/')
});

app.use('/usuarios', usuariosRouter);

app.listen(port, () => {
    console.log('Corriendo en el puerto ', port)
});
