// for simples
//  valor inicial; condição; incremento ou passo durante a expressão
for(let i = 0; i < 5; i++){
    console.log(`${i+1}ª repetição`)
}

// Arrays
const frutas = ['Barana', 'Maçã', 'Pêra'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta: ${frutas[i]}`);
}

// Repetição de acordo com itens de uma lista
const pessoa = {
    nome: 'Wesley',
    sobrenome: 'Santos',
    idade: 30
}

// Neste caso o objeto tem propriedades que são itens do "array" pessoa
for (let chave in pessoa) {
    console.log(`${chave} : ${pessoa[chave]}`);
}

// Retorna somente os valores do array 
for (let valor of frutas) {
    console.log(valor);
}

// Tem a possibilidade de cada elemento receber uma função para uma ação
frutas.forEach(function(valor, indice) {
    console.log(valor, indice);
})

frutas.forEach((valor, indice) => {
    console.log(valor, indice);
})