const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let numero of numeros) {
    // sempre que a repetição cair no numero 5 
    if (numero == 2) {
        continue;
    }

    console.log(numero);
}