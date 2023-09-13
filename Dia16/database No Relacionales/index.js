// Configurar con express el servidor
let express = require('express');

const app = express();
app.set('port', 3000);
app.listen(3000);

// Llamar al objeto MongoCliente de mongodb
const {MongoClient} = require('mongodb');

async function guardarCliente(datosCliente, tabla){
    let result = await tabla.insertOne(datosCliente);
    console.log(`Datos insertados: ${result}`);
}

async function obtenerClientes(tabla){
    let filas = await tabla.find().toArray();
    console.log(`Filas: ${filas}`);
}

async function cambiarCliente(nuevosDatos, filtro, tabla){
    let result = await tabla.updateOne(filtro, nuevosDatos);
    console.log(`Datos update: ${result}`);
}

async function eliminarCliente(filtro){
    let result = await tabla.deleteOne(filtro);
    console.log(`Datos Eliminados: ${result}`);
}

// Funcion asincrona
async function usar(){

    const client = new MongoClient("mongodb://127.0.0.1:27017/databaseExample");
    
    try{
        const conexion = await client.connect();
        const tablaClientes = conexion.db().collection('clientes');

        // Insertar un nuevo registro
        const datosCliente = {
            nombre: "Jose Villa",
            genero: 0,
            telefono: 992953190,
            domicilio: "Goycolea 1366"
        }

        await guardarCliente(datosCliente, tablaClientes);
        console.log('\n');

        await obtenerClientes(tablaClientes);
        console.log(`los datos del cliente son: ${datosCliente}`);

        let nuevosDatos = {$set: {genero: 1, telefono: 123456789}}
        let filtro = {nombre:"Jose Villa"}

        await cambiarCliente(nuevosDatos, filtro, tablaClientes);

        // filtro = {nombre:"Jose Villa"}
        // await eliminarCliente(filtro)

    }catch(e){
        console.log(e.message);
    }

}

usar();