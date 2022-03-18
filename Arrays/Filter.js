// Função filter -> Sempre retorna um array com a mesma quantidade de elementos do array original ou menos.
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

// Modo difícil
function callbackFilter(valor) {
    return valor < 10
}
const numerosFiltradosMenores = numeros.filter(callbackFilter);
console.log(numerosFiltradosMenores);

//Ou com funções anônimas de callback
const numerosFiltradosMaiores = numeros.filter((valor) => valor > 10);

console.log(numerosFiltradosMaiores);

// Outro exemplo

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas que tem mais de 25 anos
// Retorne as pessoas que o nome termina com 'N'
const pessoas = [
    { nome: 'Wesley', idade: 30},
    { nome: 'Walyson', idade: 28},
    { nome: 'Wedson', idade: 21},
    { nome: 'Marcos', idade: 1},
    { nome: 'Beatriz', idade: 6},
    { nome: 'Thor', idade: 2},
]

const cincoLetrasMais = pessoas.filter((valor) => valor.nome.length > 5);
console.log('Com mais que 5 letras');
console.log(cincoLetrasMais);

const maisVinteCincoAnos = pessoas.filter((valor) => valor.idade > 25);
console.log('Mais de 25 anos');
console.log(maisVinteCincoAnos);  

const terminaComN = pessoas.filter((valor) => valor.nome.toLowerCase().endsWith('n'));
console.log('Com final N');
console.log(terminaComN);


