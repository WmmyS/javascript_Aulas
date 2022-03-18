// Sempre vira com o data atual
let data = new Date();

// Gerar uma data
//              ano   mes dia hora minutos segundos milésimos de segundo
data = new Date(1992, 1,  18, 2,   30     ,20,      1000); // Mon Feb 18 2019 03:30:21
console.log(data.toString());

// Formato default que iremos encontrar mais facilmente
data = new Date('1992-05-18 03:08:05');

console.log(data.toString());

// Retorna o nome do mês
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

console.log(`Minha data de nascimento é ${formataData(data.getDate())} de ${defineMes(data.getMonth())} de ${formataData(data.getFullYear())} às ${formataData(data.getHours())} horas, ${formataData(data.getMinutes())} minutos e ${formataData(data.getSeconds())} segundos.`)

function formataData(num) {
    return (num > 10 ? num : `0${num}`);
}