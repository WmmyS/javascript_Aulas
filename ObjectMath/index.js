let num = 9.5

console.log(Math.floor(num)); // Arredonda para baixo
console.log(Math.ceil(num)); // Arredonda para cima
console.log(Math.round(num)); // Arredonda para cima a partir de .5 e para baixo antes de .5
console.log(Math.max(1,2,3,-5,-10,5000)); // Retorna o valor máximo dessa cadeia
console.log(Math.min(1,2,3,-5,-10,5000)); // Retorna o valor mínimo dessa cadeia

console.log(`Valor aleatório entre 0 e 10 : ${(Math.random() * (10 -5) + 5)}`); // Flutuante
console.log(`Valor aleatório entre 0 e 10 : ${Math.round(Math.random() * (10 -5) + 5)}`); // Inteiro

// No javascript quando dividimos um valor por zero ele entrega um valor infinitivo
// '!!' verificação de verdadeiro
console.log(!!(5/0));

// Ele considera essa divisão como possível