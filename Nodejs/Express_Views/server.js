const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// Usado para receber o objeto no post
app.use(express.urlencoded({extended: true}));

// Usar um diretório para acessar aquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor iniciado na porta 3000');
});

// Query
// http://localhost:3000/teste/Wesley?nome=Wesley&&sobrenome=Santos