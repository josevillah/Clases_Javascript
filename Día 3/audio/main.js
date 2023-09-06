function activarAlarma(){

    let time = document.querySelector('#time');
    let sound = document.querySelector('#audioAlarma');

    setTimeout(() => {
        sound.play();
        alert('Esta es la alarma');
    }, 1000 * time.value);

}