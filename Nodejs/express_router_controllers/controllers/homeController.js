exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method = "POST">
    Nome: <input type="text" name="nome">
    Idade: <input type="number" name="idade">
    <button>Enviar o formulario</button>
    </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de post');
}