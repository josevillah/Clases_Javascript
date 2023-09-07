async function crearPost (titulo, contenido){
  let url = 'https://jsonplaceholder.typicode.com/posts';
  try{
    let respuesta = await fetch(url, {
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify({
        titulo: titulo,
        body: contenido,
        userId: 1
      })
    });

    if(!respuesta.ok){
      throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
    }

    let data = await respuesta.json();
    console.log(`registro creado: `, data);

  }catch(error){
    console.error(`Algo salio mal al crear el registro, este es el error: ${error}`);
  }
}

crearPost('Mi titulo de ejemplo', "mi contenido de ejemplo");