let textoAlarma = document.querySelector('#textoAlarma');

function activarAlarma(){

    let time = document.querySelector('#time');
    let sound = document.querySelector('#audioAlarma');

    setTimeout(() => {
        sound.play();
        textoAlarma.style.color = 'green';
    }, 1000 * time.value);

}

function comenzarRelog(){
    setInterval(() =>{
        let date = new Date();

        let hora = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        let minut = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

        let textoHora = `${hora}:${minut}:${seconds}`;

        textoAlarma.textContent = textoHora;

    }, 1000);
}