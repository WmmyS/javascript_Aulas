// Verificar se uma string tem um número inteiro

let num1 = 10;
let num2 = 10.25;

// Retornará true
console.log(Number.isInteger(num1));

// Retornará false
console.log(Number.isInteger(num2));

// Verificação de NaN 
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));

// Precisão em número de casas decimais
console.log(num1.toFixed(4));

/**
 * O javascript utiliza um padrão de valores IEEE 754-2008
 * Ocorrem alguns problemas que precisam ser considerados quando somamos números flutuantes.
 */

// Exemplo do erro
num1 = 0.7;
num2 = 0.1;
let resultado = num1 + num2;

// A soma desses valores deveria ser 0.8 porém existe uma impresisão de milésimos que nos entrega um valor 'quebrado' de 0.7999999999999999
console.log(`Valor quebrado ${resultado}`);

// Maneiras de corrigir esse erro com funções
/**
 * Utilizando a função de utilizar apenas duas casas decimais e passando esse valor para flutuando as funções irão arredondar o valor antes da
 * conversão para flutuante.
 */
console.log(`Valor somado: ${ parseFloat((resultado).toFixed(2))}`);

// Corrigindo usando matemática básica
/**
 * Multiplicamos os valores por 100 antes de fazermos o cálculo e depois dividimos o resultado por 100 assim os valores somados
 * serão números inteiros e seu resultado dividido será exatamente o valor que deveríamos ter em nossa soma.
 */
resultado = ((num1 * 100) + (num2 * 100))/100;
console.log(`Valor somado: ${resultado}`);