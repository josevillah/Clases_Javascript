let puts = () =>{
    let url = 'https://jsonplaceholder.typicode.com/posts/5';
    // Utilizando PUT request
    fetch(url, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            title: 'Nuevo Titulo',
            body: 'este es el nuevo cuerpo',
        })
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(`Se realizo la modificacion: ${JSON.stringify(data)}`);
    })
    .catch(err => {
        console.Error(`error: `, err);
    });
}

// Utilizando DELETE 
let deletes = () =>{
    let url = 'https://jsonplaceholder.typicode.com/posts/5';
    // Utilizando PUT request
    fetch(url, {
        method: 'DELETE',
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(`Se elimino el item: ${JSON.stringify(data)}`);
    })
    .catch(err => {
        console.Error(`error: `, err);
    });
}

// Utilizando PATCH 
let patches = () =>{
    let url = 'https://jsonplaceholder.typicode.com/posts/5';
    // Utilizando PUT request
    fetch(url, {
        method: 'PATCH',
        headers: {
            "content-type": "application/json",
        }
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(`Se actualizo el item: ${JSON.stringify(data)}`);
    })
    .catch(err => {
        console.Error(`error: `, err);
    });
}

puts();

deletes();

patches();