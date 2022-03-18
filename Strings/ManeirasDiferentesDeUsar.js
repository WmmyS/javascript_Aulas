// Colocar aspas duplas de forma diferente
let umaString = "Um \"texto\"";
console.log(umaString);

// Colocar uma barra invertida no texto
umaString = '\\texto'
console.log(umaString);

// Pegar um caractere de uma posição "U"
umaString = 'Um menino'
console.log(umaString[0])

// Modos de contatenar presente em String
console.log(umaString.concat(` em um lindo dia`));
console.log(umaString +' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

// Encontrar posição de um texto em uma String
console.log(umaString.indexOf('menino'));

// Qunato ão encontrado retorna -1
console.log(umaString.indexOf('Menino'));

// Encontrar posição de um texto em uma String de trás para frente
console.log(umaString.lastIndexOf('menino'));

// Expressões regulares minúsculas
console.log(umaString.match(/[a-z]/g));

// Encontrar posições de caracteres com expresões regulares
console.log(umaString.search(/m/));

// Substuição de valores com ou sem expressões regulares
console.log(umaString.replace('Um', 'O'));
console.log(umaString.replace(/Um/, 'O'));

// Alterar mais caracteres de uma vez
umaString += ' em um lindo dia';
// Substituindo todos os "o" por "#""
console.log(umaString.replace(/o/, '#')); // Uma vez
console.log(umaString.replace(/o/g, '#')); // Várias veses

// Quantidade caracteres
console.log(umaString.length);

// Cortar uma string
console.log(umaString.slice(0, 2));

//Maiúscula
console.log(umaString.toUpperCase());

//Minúscula
console.log(umaString.toLocaleLowerCase());

//Separa a string em índices usando o caractere digitado, neste exemplo o caractere é um espaço
console.log(umaString.split(' '))


