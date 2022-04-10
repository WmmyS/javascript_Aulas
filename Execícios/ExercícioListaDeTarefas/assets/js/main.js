const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        if(!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
        limpaInput();
    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

const criarTarefa = (name) => {
    const li = criarLi()
    li.innerText = name;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}

// Executar algo no evento de apertar o botão btnTarefa
btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
    limpaInput();
})

// 'Escutar' eventos realizados em itens com a classe apagar
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {

        // Deleta o 'pai' do elemento e automaticamente o elemento também
        el.parentElement.remove();
        salvarTarefas();
    }
})

// Salvar lista de tarefas no storage
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);

    // Maneira de salvar o Json no navegador
    localStorage.setItem('tarefas', tarefasJson);

    console.log(tarefasJson);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

