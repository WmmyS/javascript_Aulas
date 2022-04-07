const express = require('express');
const app = express();
const routes = require('./routes');

// Usado para receber o objeto no post
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor iniciado na porta 3000');
});

// Query
// http://localhost:3000/teste/Wesley?nome=Wesley&&sobrenome=Santos