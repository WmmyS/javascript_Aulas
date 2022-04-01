// FileSystem -> utilidades de caminho e leitura de arquivos
const fs = require('fs').promises;

//Path -> utilidades de leitura de diretórios
const path = require('path');

//Verificar diretórios

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

        // Não queremos apresentar arquivos que contenham .git
        if (/\.git/g.test(fileFullPath)) continue;

        //Nãoq queremos as pastas node_modules
        if (/node_modules/g.test(fileFullPath)) continue;

        // verifica se o nome encontrado é um diretório e se for verifica os arquivos internos
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        // Agora quermos só os arquivos css que serão verificados após a recursão
        if (!/\.css/.test(fileFullPath)) continue;

        console.log(fileFullPath);
    }
}

readdir('/Documentos/WESLEY/_CURSOS_E_ESTUDOS/Javascript/Aulas/');