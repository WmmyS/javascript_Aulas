// No js classe é a mesmo coisa de função construtora

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando. `)
    }

}

// Exemplo de criação de classe com funções

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando. `)
}

const p1 = new Pessoa('Wesley', 'Santos');
const p2 = new Pessoa('Nubia', 'Santos');
const p3 = new Pessoa('Beatriz', 'Santos');
const p4 = new Pessoa('Marcos', 'Santos');

// Classe criada por função instanciada
const p5 = new Pessoa2('Fulano', 'Moura');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);