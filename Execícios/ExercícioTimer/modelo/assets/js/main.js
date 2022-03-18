class Cronometro{
    constructor(horas, minutos, segundos) {
        this.horas = horas,
        this.minutos = minutos,
        this.segundos = segundos
    }

    horas;
    minutos;
    segundos;
    interval;
    ativa = false;

    zerar() {
        this.segundos = 0;
        this.minutos = 0;
        this.horas = 0;
    }

    contagemTimer(segundos) {
        this.segundos += segundos;

        if (this.segundos == 60) {
            this.minutos += 1;
            this.segundos = 0;
        } 
        if (this.minutos == 60) {
            this.horas += 1;
            this.minutos = 0;
        }
    }

    start(){
        if (!this.ativa) {
            this.interval = setInterval(() => {
                this.contagemTimer(1);
        }, 1000);
        this.ativa = true;
        } else {
            this.pause();
        }
        
    }

    pause() {
        clearInterval(this.interval);
        this.ativa = false;
    }

    stop() {
        this.pause();
        this.zerar();
    }
};

const cronometro = new Cronometro(0,0,0);

const start = document.querySelector('#iniciar');
const pause  = document.querySelector('#pausar');
const stop  = document.querySelector('#parar');
const contador = document.querySelector('.cronometro');

start.addEventListener('click', (event) => {
    exibir();
    cronometro.start();
});

pause.addEventListener('click', (event) => {
    cronometro.pause();
    
});

stop.addEventListener('click', (event) => {
    cronometro.stop();
});

function exibir() {
    setInterval(() => {
        contador.innerHTML = `${zeroEsquerda(cronometro.horas)}:${zeroEsquerda(cronometro.minutos)}:${zeroEsquerda(cronometro.segundos)}`;       
    }, 0);
}

function zeroEsquerda(numero) {
    return (numero > 9) ? numero : `0${numero}`;
}