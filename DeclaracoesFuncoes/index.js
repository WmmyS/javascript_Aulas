/**
 * Declaracao de função hoisting -> Eleva a função que pode ser 
 * chama inclusive antes de ser declarada.
 */
falaOi();

function falaOi() {
    console.log('oi')
}

// First-class objects (Objetos de primeira classe)
// Funciton expression
// Receber uma função em uma variável

const souUmDado = function() {
    console.log('Sou um dado.')
}
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow();