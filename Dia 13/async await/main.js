const obtenerDatos = () =>{
    return fetch("https://api.datos.gob.mx/v1/precio.gasolina.publico")
        .then((response) => {
            return response.json();
        })
        .then((datos) =>{
            console.log(datos);
        })
        .catch((err) =>{
            console.log(err);
        });
};


const obtenerDatosAsincrona = async () =>{
    let result = await fetch("https://api.datos.gob.mx/v1/precio.gasolina.publico");
    let datos = await result.json();
    console.log(datos);
};


obtenerDatos();
console.log("el codigo sigue");

obtenerDatosAsincrona();
console.log("el codigo sigue");