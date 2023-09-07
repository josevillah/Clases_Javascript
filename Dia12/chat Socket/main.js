let socket = new WebSocket('ws://localhost:8080');

let mensajeIngresado = document.getElementById('mensajeIngresado');
let botonEnviar = document.getElementById('botonEnviar');

function mostrarMensajes(contenido){
    let contenedor = document.getElementById('bandejaMensajes');
    let elementoMensaje = document.createElement('p');
    elementoMensaje.innerText = contenido;
    contenedor.appendChild(elementoMensaje);
}

botonEnviar.addEventListener('click', (e) =>{
    e.preventDefault();
    let mensaje = mensajeIngresado.value;
    mostrarMensajes(mensaje);
    socket.send(mensaje);
});

socket.onmessage = (event) =>{
    let mensaje = event.data;
    mostrarMensajes(mensaje);
}