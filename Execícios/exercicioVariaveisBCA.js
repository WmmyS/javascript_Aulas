// Alterar os valores das variáveis por referência a ordem deverá ficar como comentado a frente das variávei abaixo.

let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

let varAux = varA;
varA = varB;
varB = varC;
varC = varAux;

console.log(varA, varB, varC);

// Maneira mais moderna utilizando posição de arrays

let varA1 = 'A' // B
let varB1 = 'B' // C
let varC1 = 'C' // A

[varA1, varB1, varC1] = [varB1, varC1, varA1]

console.log(varA1, varB1, varC1);