let empleadoArray = [];


function Empleado (legajo, nombre, apellido, fechaNacimiento, cargo){

    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.cargo = cargo;

}

function getDatosEmpleado(){

    let legajo = document.querySelector('#legajo').value;
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let fechaNacimiento = document.querySelector('#fechaNacimiento').value;
    let cargo = document.querySelector('#cargo').value;
    
    let empleado = new Empleado(legajo, nombre, apellido, fechaNacimiento, cargo);

    empleadoArray.push(empleado);

}

function listarEmpleados() {
    
    for(let empleado of empleadoArray){
        alert(`Legajo: ${empleado.legajo}, Nombre: ${empleado.nombre}, Apellido: ${empleado.apellido}, Nacimiento: ${empleado.fechaNacimiento}, Cargo: ${empleado.cargo}`);
    }

}