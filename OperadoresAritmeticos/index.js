/**
 * Aritméticos
 * + adição / concatenação
 * - * / 
 * ** Potenciação
 * % Resto da divisão
 */

/*
// Precedência dos operadores

1º - ()
2º - **
3º - * / %
4º - + -

*/

// Conversão de valores

const num1 = 10;
let num2 = 20.5;

// Conversão para Int
num2 = parseInt(num2);

// Função de mostrar o tipo dentro do template string
console.log(`${typeof(num1)} com o valor ${num1}`);

// Resultado da conversão
console.log(`${typeof(num2)} com o valor ${num2}`);

// Convertendo dentro do template string
console.log(`${parseFloat(num2) + 0.5}`)

// Entregando o mesmo valor com string
let num3 = `O valor somado será ${parseFloat(num2) + 0.5}`;

console.log(num3);

num2 = num2.toString();

console.log(`O valor será ${num2}`)
