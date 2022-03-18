//Relembrando setTimeout

// Gerar numeros aleatórios
function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Função de espera
function esperaPf(msg, time, callback) {
    setTimeout(() => {
        console.log(msg);
        if (callback) callback();
    }, time);
}

// Frases aleatórias
esperaPf('Frase 1', aleatorio(1, 3));
esperaPf('Frase 2', aleatorio(1, 3));
esperaPf('Frase 3', aleatorio(1, 3));

// Corrigindo a ordem com os callbacks (não muito usada)
esperaPf('Fase 1', aleatorio(1, 3), function() {
    esperaPf('Frase 2', aleatorio(1, 3), function() {
        esperaPf('Frase 3', aleatorio(1, 3));
    });
});

// Problema da árvore de natal 

// Promisses
function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE'); // Reject da promisse
        setTimeout(() => {
            resolve(msg); // Resolve da promisse
        }, tempo);
    })
}

// Promises encadeadas
espera('Inserindo configurações na base', aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return espera('Buscando dados da Base', aleatorio(1, 3));
    }).then(resposta => {
        console.log(resposta);
        return espera(3440, aleatorio(1, 3)) //valor numérico colocado para retorno do reject
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibir dados da base');
    })
     //resolve
    .catch(erro => {
        console.log('ERRO:',erro)
    }

    ); //reject

    console.log('Vou aparecer primeiro pois não tenho timer nem sou uma promisse.')


