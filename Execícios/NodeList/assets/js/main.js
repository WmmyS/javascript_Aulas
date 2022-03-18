// Pegar apenas um elemento
const paragrafos = document.querySelector('.paragrafos');

// Pegar uma lista de elementos
const nodeList = paragrafos.querySelectorAll('p'); // pegará todos os parágrafos encontrados

// NodeList é muito similar, más não é um array
// console.log(nodeList[0]);

// Pegar todos os estilos do body
const estilosBody = getComputedStyle(document.body);

// Pegar a cor do background do bory
const backgroundColor = estilosBody.backgroundColor;

console.log(backgroundColor);

// Todas as fontes com background e fonte alterados
for (p of nodeList) {
    p.style.backgroundColor = backgroundColor;
    p.style.color = '#fff';
}

