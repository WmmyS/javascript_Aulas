// Neste exemplo contem os tipos: String, number, null, Boolean, undefined, symbol

const nome  = 'Wesley'; //String
const nome1 = "Wesley"; //String
const nome2 = `Wesley`; //String
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined
const sobrenomeAluno = null; // nulo
const aprovado = false; // Boolean

// Dados passados por referência
let a = [1, 2];
let b = a;

console.log(a, b);

// Como o valor de 'b' está referenciando a variável 'a' então ambos serão alterados.
b.push(3);

console.log(a, b);
