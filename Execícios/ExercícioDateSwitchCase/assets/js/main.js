const data = new Date();

const relogio = document.querySelector('.relogio');

function defineDiaSemana(diaSemana) {
    switch (diaSemana) {
        case 0 :
            return 'Domingo';
        case 1 :
            return 'Segunda-feira';
        case 2 :
            return 'Terça-feira';
        case 3 :
            return 'Quarta-feira';
        case 4 :
            return 'Quinta-feira';
        case 5 :
            return 'Sexta-feira';
        case 6 :
            return 'Sábado';
    }
}

function defineMes(data) {
    switch (data){
        case 0 :
            return 'janeiro';
        case 1 :
            return 'fevereiro';
        case 2 :
            return 'março';
        case 3 :
            return 'abril;';
        case 4 :
            return 'maio';
        case 5:
            return 'junho';
        case 6:
            return 'julho';
        case 7 :
            return 'agosto';
        case 8 :
            return 'setembro';
        case 9 :
            return 'outubro';
        case 10 :
            return 'novembro';
        case 11 :
            return 'dezembro';
    }
}

 function defineRelogio (relogio)  {
    const p = document.createElement('p');
    p.innerHTML = `${defineDiaSemana(data.getDay())}, ${zeroEsquerda(data.getDate())} de ${defineMes(data.getMonth())} de ${data.getFullYear()} 
    <br> ${data.getHours()} horas ${zeroEsquerda(data.getMinutes())} minutos e ${zeroEsquerda(data.getSeconds())} segundos`;
    relogio.appendChild(p);
 }

 console.log(defineRelogio(relogio));

function zeroEsquerda(numero) {
    return (numero > 10) ? numero : `0${numero}`;
}