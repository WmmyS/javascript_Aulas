
function mostraHora() {
    let data = new Date();
    // Mostra no console a hora atual
    console.log(data.toLocaleTimeString('pt-BR', {
        hour12: false
    }));
}

// Executa a função depois de um intervalo de tempo mensionado
const timer = setInterval(() => {
    mostraHora();
}, 1000);

// Clear interval para uma função de timer imediatamente
// SetTimeout executa algo depois de algum tempo em milésimos
setTimeout(() => {
    clearInterval(timer);
}, 5000);