let obtenerInformacion = () =>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      let listaInformacion = document.querySelector('#listaInformacion');
      for(let i = 0; i < response.data.length; i++){
        let elementLi = document.createElement('li');
        elementLi.innerText = response.data[i].title;
        listaInformacion.appendChild(elementLi);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}