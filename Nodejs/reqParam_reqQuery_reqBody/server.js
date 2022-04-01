const express = require('express');

const app = express();

// Usado para receber o objeto no post
app.use(
    express.urlencoded(
        extended = true
    )
)

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method = "POST">
    Nome: <input type="text" name="nome">
    Idade: <input type="number" name="idade">
    <button>Enviar o formulario</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    // nome que está recebndo é o do nome do input
    res.send(`Recebi a mensagem, mano: ${req.body.nome}`)
})

app.get('/teste/:param?', (req, res) => {
    console.log(req.query)
    res.send(req.params.param)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor iniciado na porta 3000');
});

// Query
// http://localhost:3000/teste/Wesley?nome=Wesley&&sobrenome=Santos