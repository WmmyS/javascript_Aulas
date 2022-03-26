// importando
const mod1 = require('./mod1');

//outra forma : associação via desestruturação / detructuring
const {nome, sobrenome, falaNome} = require('./mod1');

console.log(mod1.falaNome());

// variaveis para direcionamento de arquivos

// arquivo atual
console.log(__filename);
//diretório atual
console.log(__dirname);

//module path
const path = require('path');
console.log(path.resolve(__dirname, '..'));