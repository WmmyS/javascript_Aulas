
// Método com Promises

// Houve nosse evento de clique e verifica se foi em um link para executar
document.addEventListener('click', elementoClicado => {
    const elemento = elementoClicado.target;
    const tag = elemento.tagName.toLowerCase();

    // verifica se é uma tag 'a'
    if (tag === 'a') {
        // retira o evento padrão do objeto
        elementoClicado.preventDefault();
        carregaPagina(elemento);
    }
});

// Com async
async function carregaPagina(elemento) {
    try {
        const href = elemento.getAttribute('href');
        const response = await fetch(href);
        if(response.status != 200) throw new Error('ERRO 404');
        const html = await response.text();
    carregaResultado(html);
    } catch (error) {
        console.error(error);
    }
    
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

/* fetch('pagina4.html')
    .then(resposta => {
        if(resposta.status != 200) throw new Error('ERRO 404 NOSSO')
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch( e => console.error(e)); */