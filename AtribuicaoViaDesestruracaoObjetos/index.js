// Criando um objeto pessoa
const pessoa = {
    nome: 'Wesley',
    sobrenome: 'Santos',
    idade: 30,
    endereco : {
        rua: 'Av. Brasil',
        numero: '120'
    }
};

// Irá extrair o valor nome da classe pessoa pelo objeto encontrado na classe pelo mesmo nome e criar uma variável com este nome.
// Atribuição via estruturação.
const { nome } = pessoa;

console.log(nome);

// É  a mesma coisa de: 
console.log(pessoa.nome);
// porém a propriedade continua dentro da classe e não foi extraída para uma variável.

// Quando o valor não existir
const { carro } = pessoa;

// A variável irá ser criada sem ser extraído o valor de lugar nenhum cindo como valor undefined
console.log(carro);

// Outras formas de extração

/**
 * Estou extraindo da classe que direcionei 'endereco' as propriedades rua, numero 
 * e a cidade que não existe estou atribuindo um valor padrão "Ribeirão Preto".
 */
const { endereco : {rua, numero, cidade = 'Ribeirão Preto'} } = pessoa;
console.log(rua, numero, cidade);

// Da mesma forma podemos extrair a classe endereco
const {endereco: endereco} = pessoa;
console.log(endereco);

// Atribuição via desestruturacao
const {sobrenome, ...resto} = pessoa;
console.log(`Nome: ${sobrenome}, resto das informações: `, resto);
