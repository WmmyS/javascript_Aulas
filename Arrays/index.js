// No js os arrays recebem quaisquer valores
//                0         1       2          3         4
const familia = ['Wesley', 'Nubia','Beatriz', 'Marcos', 'Thor'];

// mostrar o primeiro elemento
console.log(familia[0]); // Wesley

// mostra o último sabendo o tamanho do array
console.log(familia[4]);

// adiciona sabendo o tamanho do array
familia[5] = 'Maria';
console.log(familia);

// editando item
familia[5] = 'Lorenzo';
console.log(familia);

// adicionando sem saber o tamanho do array
familia[familia.length] = 'Luigi';
console.log(familia);

// Utilizando funções do objeto array

// adicionar item no final do array
familia.push('Alice');
console.log(familia);

// adicionar no começo do array
familia.unshift('Livia');
console.log(familia);

// deletar o primeiro item no começo
familia.shift();
console.log(familia);

// deleta o ultimo item 
familia.pop();
console.log(familia);

// verificar o item que está sendo removido
let removido = familia.pop();
console.log(removido);

