// array simples
const numeros = [1000, 2000, 3000, 4000, 5000]

// Passando os valores para as variáveis por estruturação
const [um, dois, tres, quatro] = numeros;

// verificando os valores
console.log(um, dois, tres, quatro);

/** 
 * Foram atribuídos 4 valores a 4 variáveis porem existiam 5 no array
 * o valores que sobram podemos colocar em outra variável da seguinte forma:
 */

// Reatribuindo os valores a outro array, agora os valores restantes estarão na variável resto.

const [valor1, valor2, valor3, ...resto] = numeros;


/**
 *  De acordo com as posições as variáveis receberão seus respectivos valores indexados
 * a variável resto tem os valores [4000, 5000].
 * */ 

console.log(`${valor1}, ${valor2}, ${valor3} e o resto= ${resto}` );

// Arrays dentro de arrays
const numeros1 = [[1,2,3],[4,5,6],[7,8,9]];

// Imprimir os números 4 e 8
console.log(`Quatro: ${numeros1[1][0]}, Oito: ${numeros1[2][1]}`);

// Atribuição via desestruturação
// Existe más não é muito usado pela complexidade de contar os espaços
const [,[,,seis]] = numeros1;
console.log(`Número seis: ${seis}.`)