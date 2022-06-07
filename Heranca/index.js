function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

// Com as inserções acima o objeto Camiseta herda as propriedades de produto
// Assim podemos inserir a nova propriedade cor junto com as que já existiam

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco, cor);
    this.cor = cor;
}

const camiseta = new Produto('ioio', 10.00)
const camisa = new Camiseta('regata', 15.00, 'azul');


//funcao construtora

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
}

// Propriedade com getter e setter
// Não funcionou ...
/* Object.defineProperty(Caneca, 'estoque'), {
    enumerable: true,
    configurable: true,
    get: function() {
        return estoque;
    },
    set: function(valor) {
        if(typeof valor !== 'number') return;
        estoque = valor;
    }
} */


Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Canequinha', 12.00, 'porcelana', 10)

console.log(camiseta);
console.log(camisa);
console.log(caneca);