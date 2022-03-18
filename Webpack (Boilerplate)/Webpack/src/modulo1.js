const nome = 'Wesley';
const sobrenome = 'Santos';

function concatena(x, y) {
    return (`${x} ${y}`);
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto() {
        return concatena(this.nome, this.sobrenome);
    }

};