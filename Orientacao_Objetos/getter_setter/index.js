// No Symbol uma variável ou abjeto nunca será igual a outra

const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    // Valocidade máxima de 100 

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const carro = new Carro('Fusca', 0)

for (let i = 0; i < 200; i++) {
    console.log(carro.velocidade)
    carro.acelerar()
}

console.log(carro.velocidade)