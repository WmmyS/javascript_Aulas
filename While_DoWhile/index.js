// let controle = 0;

/* while (controle <= 10) {
    console.log(controle);
    controle++;
} */

function randon(min, max) {
    const r = Math.round(Math.random() * (max - min) + min);
    return r;
}

let n = randon(0, 100);
console.log(n);

// Exemplo
while ( n !== 25 ) {
    n = randon(0, 100);
    console.log(n);
}

// Executa primeiro depois verifica
do {
    n = randon(0, 100);
    console.log(n);
} while (n !== 25);