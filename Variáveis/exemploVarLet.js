/**
 * Exite uma diferença de apresentação de escopo entre as declarações  das variáveis let e var,
 * ao utilizar o var podemos declará-los dentro de um bloco e posteriormente utilizálos fora do
 * bloco onde foi declarada. Diferente do let que ao tentar fazer isso teremos uma mensagem de erro.
 */

 var exibeMensagem = function() {
    if(true) { 
        var escopoFuncao = 'Global'; 
        let escopoBloco = 'bloco';

        // Exibirá a mensagem por estar dentro de um bloco ou seja o If
       console.log(escopoBloco); 
   } 

   // Exibe a variável declarada dentro do bloco da função
   console.log(escopoFuncao); 

   // Não permitirá utilizar mais a variável uma ver que ela pertencia à um bloco.
   // Erro: Uncaught ReferenceError: escopoBloco is not defined
   console.log(escopoBloco); 
   
}

exibeMensagem();

// Outra diferença é que o var pode ser redeclarado no código ao contrario do let e do const.
