const nome = prompt("Digite o seu nome: ");

document.body.innerHTML += `Seu nome é: <strong>${nome}</strong> </br>`
document.body.innerHTML += `Seu nome tem <strong>${nome.length} letras</strong> </br>`
document.body.innerHTML += `A segunda letra do seu nome é <strong>"${nome[1]}"</strong> </br>`
document.body.innerHTML += `O primeiro índice da letra <strong>"e"</strong> do seu nome é <strong>${nome.indexOf('e')}</strong> </br>`
document.body.innerHTML += `O último índice da letra <strong>"e"</strong> do seu nome é <strong>${nome.lastIndexOf('e')}</strong> </br>`
document.body.innerHTML += `As <strong>últimas 3 letras</strong> do seu nome são <strong>${nome.slice(nome.length - 3, nome.length)}</strong> </br>`
document.body.innerHTML += `As palavras do seu nome são <strong>${nome.split(' ')}</strong> </br>`
document.body.innerHTML += `Seu nome com letra maiúsculas <strong>"${nome.toUpperCase()}"</strong> </br>`
document.body.innerHTML += `Seu nome com letra minúsculas <strong>"${nome.toLowerCase()}"</strong> </br>`