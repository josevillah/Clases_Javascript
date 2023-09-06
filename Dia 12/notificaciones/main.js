let audio = document.querySelector('#audio');
let listaCanciones = document.querySelector('#listaCanciones');

listaCanciones.addEventListener('change', () =>{
    let cancion = listaCanciones.value;
    audio.src = cancion;
    audio.play();

    let evento = new CustomEvent('cambioDeCancion');
    audio.dispatchEvent(evento);
});

audio.addEventListener('cambioDeCancion', () =>{
    console.log(`'La cancion actual es' ${listaCanciones.value}`)
});