/* fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json)); */

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for(let pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.empresa;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}

document.addEventListener('click', elementoClicado => {
    const elemento = elementoClicado.target;
    const cxTxt = document.querySelector('#addText');
    const tabela = document.querySelector('table');
    if(elemento.id === 'add') {
        console.log(cxTxt.value)
        console.log(tabela)
        adicionaElemento(cxTxt.value,tabela);
    }
})

const adicionaElemento = (element, table) => {
    const tr = document.createElement('tr');
    let td = document.createElement('td');
        td.innerHTML = element;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = '';
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = '';
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = '';
        tr.appendChild(td);

        table.appendChild(tr);
}
