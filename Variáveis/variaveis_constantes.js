// Regra para sempre utilizar o let e não o var

let pessoa1 = 'Wesley';
var pessoa2 = 'Núbia';
let indefinida;

// variável que não pode ser alterada
const constante = 'Wesley é bonito';

// Strings com valores de variáveis
console.log(pessoa1,'é uma pessoa muito legal.')
console.log(pessoa2,'é uma pessoa cabeçuda.')
console.log(pessoa2,'as veses consegue ser bem irritante.')
console.log(pessoa1,'é uma pessoa bem inteligente.')

// Variáveis com valores indefinidos
console.log('A variável',"indefinida",'tem um valor',indefinida,'que significa valor indefinido')

// Este valor é imutável e não pode ser alterado
console.log('É indiscutível que', constante, ':P');

// Utilizmos para ver o valor da variável
console.log(typeof(constante));



