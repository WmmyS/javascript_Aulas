const express = require('express');

const app = express();

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
    res.send("Recebi a mensagem, mano!")
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor iniciado na porta 3000');
});