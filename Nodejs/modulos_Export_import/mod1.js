const nome ='Wesley';
const sobrenome = 'Santos';

const falaNome = () => `${nome} ${sobrenome}`;


// Exportar coisas
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// Outra maneira

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;


console.log(module.exports);