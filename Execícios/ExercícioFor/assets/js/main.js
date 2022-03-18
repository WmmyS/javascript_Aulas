// Resposta
const frases = document.querySelector('.frases');
const elementos = ['p', 'div', 'footer', 'section'];
const frase = ['Frase 1', 'Frase 2', 'Frase 3', 'Frase 4'];

for(let i = 0; i < elementos.length; i++) {
    let elemento = document.createElement(elementos[i]);
    let texto = document.createTextNode(frase[i]);
    elemento.appendChild(texto);
    frases.appendChild(elemento);
}
 
// Correção
const elementos1 = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
]

for (let i = 0; i < elementos1.length; i++) {
    let {tag, texto} = elementos1[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    frases.appendChild(tagCriada);
}