// Executa uma requisição
// Modo Antigo com Ajax
/* const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    // Verifica o status de carregamento
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    });
}; */

// Método com Promises
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        // Verifica o status de carregamento
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
                console.log('Deu ruim')
            }
    });
    })
};

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
    const href = elemento.getAttribute('href');
    
    const objConfig ={
        method: 'GET',
        url: href,
    };

    // Sem Await
    /* request(objConfig).then(response => {
        carregaResultado(response);
    }).catch(error => console.log('Erro')); */

    //Com await
    try {
        const response = await request(objConfig);
        carregaResultado(response);  
    } catch (error) {
        console.log(error);
    }


}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}