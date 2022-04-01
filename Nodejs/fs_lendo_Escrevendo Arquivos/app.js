const path = require('path');

// escrever um arquivo teste.json no diretório acima
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// // lista de objetos pessoas
// const pessoas =[
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Luiza'},
// ]

// // transformando objetos em json
// const json = JSON.stringify(pessoas, ' ', 2);
// escreve(caminhoArquivo, json);

async function lerArquivos(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}

lerArquivos(caminhoArquivo);