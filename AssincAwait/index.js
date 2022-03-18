// Função com tempo
function aleatorio(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Promise
function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
             reject('BAD VALUE'); // Reject da promisse
        } else {
            setTimeout(() => {
                resolve(msg.toUpperCase() + ' - Passei na promise.'); // Resolve da promisse
            }, tempo);
        }
    })
}

// async Irá executar promises ou outras funções esperando seus resultados
// async só funciona quando existe o await que aguardo o término da função
async function executa() {
    // Tratando possíveis erros dos await
    try {
        // Vamos colocar a fase 1 sem o await para simular uma função pendente
        const fase1 = espera('Fase 1', 1000); //Tempo de 1 seg para executar
        console.log(fase1);

        setTimeout(() => {
            console.log('Essa promisse estava pendente :', fase1);
        }, 1100) //Tempo de espra 

        const fase2 = await espera('Fase 2', aleatorio());
        console.log(fase2);

        const fase3 = await espera(3440, aleatorio());
        console.log(fase3);

        console.log('Terminei')
    } catch(erro) {
        console.log(erro); //Este erro é o reject previamente configurado na Promise
    }
}

executa();

// Estados existentes: 
// pending -> pendente
// fullfiled -> resolvida 
// rejected -> rejeitada