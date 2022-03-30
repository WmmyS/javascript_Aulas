// FileSystem -> utilidades de caminho e leitura de arquivos
const fs = require('fs').promises;

//Path -> utilidades de leitura de diretórios
const path = require('path');

//verificar todos os arquivos e pastas do diretório atual
fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(exception => console.log(exception));

// A partir daqui foi gerada uma função que verifica todas as pastas a partir de um diretório informado    

// Utilizar promise dentro de uma função
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

// percorrer lista de diretórios 
async function walk(files, rootDir) {
    for(let file of files) {

        // caminho completo do arquivo
        const fileFullPath = path.resolve(rootDir, file);

        // aqui iremos ser informados dos arquivos existentes dos diretórios
        const stats = await fs.stat(fileFullPath);

        // verifica se o nome encontrado é um diretório e se for verifica os arquivos internos
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        console.log(file, stats.isDirectory());
    }
}

readdir('/Documentos/WESLEY/_CURSOS_E_ESTUDOS/Javascript/Aulas/');