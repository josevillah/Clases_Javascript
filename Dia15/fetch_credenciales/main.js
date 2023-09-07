function basic(url, username, password) {
  // Utilizando PUT request
  fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      // autorizacion basic
      "authorization": 'Basic' + btoa(usuario + ':' + password),
      "content-type": "application/json"
    }
  })
  .then(respuesta => respuesta.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.Error(`error: `, err);
  });
}

function bearer(url ,token){
  fetch(url, {
    method: 'GET',
      credentials: 'include',
      // en cache hay varias opciones
      cache: 'default',
    headers: {
      // autorizacion basic
      "authorization": 'bearer ' + token,
      "content-type": "application/json"
      }
    })
    .then(respuesta => respuesta.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.Error(`error: `, err);
    });
}


let url = 'https://jsonplaceholder.typicode.com/posts';
let usuario = 'Federico';
let password = 'javascriptTotal';
let token = 'miToken';


basic(url, usuario, password);

bearer(url, token);