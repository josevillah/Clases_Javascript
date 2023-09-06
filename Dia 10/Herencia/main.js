class Deportista{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}


class Futbolista extends Deportista{
    constructor(nombre, apellido, goles){
        super(nombre, apellido);
        this.goles = goles;
    }
}

let ronaldo = new Futbolista("Cristiano", "Ronaldo", 38);

console.log(ronaldo);