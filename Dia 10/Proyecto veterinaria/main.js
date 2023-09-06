class Animal {
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    get informacion(){
        return `${this.nombre} - ${this.peso} Kg - ${this.edad}`;
    }
    
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }

    get informacion(){
        return `${this.nombre} - ${this.peso} Kg - ${this.edad} - ${this.raza}`;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    get informacion(){
        return `${this.nombre} - ${this.peso} Kg - ${this.edad} - ${this.sexo}`;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }

    get informacion(){
        return `${this.nombre} - ${this.peso} Kg - ${this.edad} - ${this.color}`;
    }
}

let listaAnimales = [];

let dog = new Perro('Dog', 8, 2, 'Caniche');
let garfield = new Gato('Garfield', 3, 4, 'Masculino');
let box = new Conejo('Box Bunny', 2, 2, 'Gris con Blanco');


listaAnimales.push(dog);
listaAnimales.push(garfield);
listaAnimales.push(box);

function listar(){    

    let animalesUl = document.querySelector('#animales');
    animalesUl.innerHTML = '';

    for(let animal of listaAnimales) {
        let animalLi = document.createElement('li');
        animalLi.textContent = animal.informacion;
        animalesUl.appendChild(animalLi);
    }

}
