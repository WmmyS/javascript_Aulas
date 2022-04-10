// Usado para acessarmos as variáveis no arquivo '.env'
require('dotenv').config();

const express = require('express');
const app = express();

// Mongoose para conexão com base online
const mongoose = require('mongoose');

// A Aplicação irá emitir um sinal para o DB
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado à base de dados.')
        app.emit('pronto');
    })
    // Caso ocorra um erro de conexão o erro será mostrado no log
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const {middlewareGlobal} = require('./src/middleware/middleware');

// Usado para receber o objeto no post
app.use(express.urlencoded({extended: true}));

// Usar um diretório para acessar aquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

// A Aplicação só executará quando for capturado o sinal de pronto quando a conexão com o DB for efetuada
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor iniciado na porta 3000');
        console.log('Acessar http://localhost:3000');
    });
});
