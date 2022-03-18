const form = document.querySelector('#formulario');

/**
 * Função principal de cálculo e inserção de texto de acordo com o valor calculado.
 */
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    // Substitui vírgulas por ponto para que o cálculo funcione e atribui o valor
    const peso = Number(inputPeso.value.replace(',','.'));
    const altura = Number(inputAltura.value.replace(',','.'));

    // Garantia para que o valor passado seja válido
    if (Number.isNaN(peso)) {
        setResposta('Valor peso inserido inválido', false);
    }
    if (Number.isNaN(altura)) {
        setResposta('Valor altura inserida inválida', false);
    }

    // Chamada de funções para sua devidas execuções
    const imc = getImc(peso, altura);
    console.log(`${getImc(peso, altura)}`);
    setResposta(`Seu IMC é ${imc}. (${getNivelImc(imc)}).`, true);
});

/**
 * Cria um parágrafo para ser inserido em elementos.
 * @returns retorna o parágrafo criado.
 */
function criarParagrafo () {
    const paragrafo = document.createElement('p');
    return paragrafo;
}

/**
 * Define uma mensagem e define um estilo para a div de resposta de acordo com parâmetros passados.
 * @param {String} msg mensagem de atribuída na div.
 * @param {Boolean} isValid valor para definição de estilo.
 */
function setResposta(msg, isValid) {
    const resposta = document.querySelector('#resposta');
    resposta.innerHTML = msg;
    const p = criarParagrafo();
    if (!isValid) {
        resposta.classList.add('paragrafo-resposta-falsa');
    } else {
        resposta.classList.add('paragrafo-resposta-vardadeira');
    }
    resposta.appendChild(p);
}

/**
 * Retorna o valor calculado de imc de acordo com os parâmetros passados.
 * @param {Number} peso peso.
 * @param {Number} altura altura.
 * @returns retorna o valor calculado de IMC.
 */
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

/**
 * Retorna a mensagem de imc de acordo com o valor recebido.
 * @param {Number} imc valor de IMC.
 * @returns retorna mensagem de nível de peso IMC.
 */
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc  < 18.5) return nivel[0];
    
}