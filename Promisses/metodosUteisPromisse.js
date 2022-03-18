function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE'); // Reject da promisse
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise.'); // Resolve da promisse
        }, tempo);
    })
}

// Promise.all Promice.race Promise.resolve Promise.reject

//Promise.all
const promises = [
    espera('Primeira promise', 3000),
    espera('Segunda promise', 500),
    espera('Terceira promise', 1000),
]
// Irá executar uma única tarefa com o THEN depois de executar uma lista de Promises
// Podemos definir um erro e caso alguma caia no erro vai ser entregue o erro para todas
Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro);
    })

// Irá retornar o resultado da primeira promisse que terminar
Promise.race(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro);
    })

// Irá executar uma tarefa asir que confirmar uma informação
function baixaPagina() {
    const cache = true;

    if (cache) {
        return Promise.resolve('Página em cache');
    } else {
        return espera('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(erro => console.log(erro));

//No reject irá executar uma ação do reject assim que ocorrer o erro
