
const criaPessoa = (nome, sobrenome, idade) => {
    return {
        nome,
        sobrenome,
        idade,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }, 

        get idade() {
            return idade;
        },

        get nomeCompletoIdade() {
            return ` ${this.nomeCompleto} com ${this.idade} anos de idade.`
        }
    }
};

const pessoa = criaPessoa('Wesley', 'Santos', 30);

console.log(pessoa.nomeCompleto)
console.log(pessoa.idade)

console.log(pessoa.nomeCompletoIdade)
