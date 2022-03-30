const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    // Aqui escreveremos no arquivo o testo 'Frase 1' e a flag 'w' representa sempre reescrever esse arquivo caso já exista
    // Com flag 'a' ele da um append na arquivo ou seja insere no arquivo
    fs.writeFile(caminho, dados, {flag: 'w', encoding: 'utf8' });
}



