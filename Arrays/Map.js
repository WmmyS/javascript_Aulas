
// Map sempre retornará a mesma quantidades de objetos do array porén com valores diferentes dependendo do que foi feito
const pessoas = [
    { nome: 'Wesley', idade: 30},
    { nome: 'Walyson', idade: 28},
    { nome: 'Wedson', idade: 21},
    { nome: 'Marcos', idade: 1},
    { nome: 'Beatriz', idade: 6},
    { nome: 'Thor', idade: 2},
]

//Retornar somente o nome das pessoas
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

// Retornar somente a idade das pesoas
// Isso é uma expressão e não callback
const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

// Colocando um id para cada pessoa no array
// A variável indice vai me trazer os indices do meu objeto
const comIDs = pessoas.map(function (obj, indice) {
    obj.id = indice+1;
    return obj;
})

console.log(comIDs);

//retornar o dobro de cada elemnto da lista
const lista = [2,5,6,8,7,9,4,5,6,8,10]
const dobro = lista.map(data => data*2);
console.log(dobro);

