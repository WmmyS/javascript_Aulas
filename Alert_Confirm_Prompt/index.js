// mensagem de alerta
alert('Exemplo Alert')

// Confirmação OK/Cancel
// Retorna Boolean
confirm('Exemplo Confirm')

// Digitação de algo
// Retorna uma string
prompt('Exemplo Prompt')

alert('Agora vamos experimentar fazer uma soma entre dois valores, vamos lá!');

function recebeValores(posicao) {
    let confirmacao = false;
    let valor;
    while (confirmacao == false) {
        valor = prompt(`Digite o ${posicao} valor numerico a ser somado:`);
        valor = parseFloat(valor);
        if (!Number.isNaN(valor)) {
            confirmacao = true;
        } else {
            alert('Favor digitar somente valores numéricos!')
        }
    }
    return valor;
}

function somaDoisValores() {
    let primeiroValor = recebeValores("primeiro");
    let segundoValor  = recebeValores("segundo");
    alert(`A soma dos valores digitados é ${primeiroValor+segundoValor}. Primeiro valor: ${primeiroValor}, segundo valor ${segundoValor}.`)
}

somaDoisValores();