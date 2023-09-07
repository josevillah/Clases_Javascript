// opcion 1 para leer datos de json de manera asincrona
function opcion1(){
    let datosJson;
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET',"persona.json", true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        if(xhr.status === 200){
            datosJson = xhr.response;
            let elementoTexto = document.getElementById('nombre');
            elementoTexto.textContent = datosJson.nombre;
        }else{
            console.log('error');
        }
    };
    
    xhr.send();
}

// Opcion 2 para leer los datos de un json
function opcion2(){
    let datosJson;

    fetch('persona.json')
        .then(res => res.json())
        .then((response) => {
            datosJson = response;
            let elementoTexto = document.getElementById('nombre');
            elementoTexto.textContent = datosJson.nombre;
        })
        .catch((err) =>{
            console.log(err);
        })
}


opcion2();
