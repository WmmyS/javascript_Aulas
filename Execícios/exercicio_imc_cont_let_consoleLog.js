/**
 * Exibir a string: Wesley Santos tem 30 anos , pesa 75 kg
 * tem 1.64 metros de altura e seu IMC é de ...
 */

const nome = 'Wesley';
const sobrenome = 'Santos';
const idade = 30;
const peso = 75;
const altura = 1.64;
let indiceMassaCorporal; // peso/(altura²)

indiceMassaCorporal = peso/(altura*altura);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kilos e tem', altura, 'metros de altura e seu IMC é de', indiceMassaCorporal);

// Pegar ano de nascimento 

const hoje = new Date();

console.log('O ano de nascimento do', nome, sobrenome, 'é', hoje.getFullYear()-idade);

// template string

let anoNascimento = hoje.getFullYear() - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kilos e tem ${altura} metros de ltura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`O ano de nascimento do ${nome} ${sobrenome} é ${anoNascimento}.`)