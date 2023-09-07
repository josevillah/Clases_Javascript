// Codigo sincrono

console.log("Inicio");

for(let i = 1 ; i <= 10; i++) {
    console.log(i);
}

console.log("Fin");


// Codigo asincrono

console.log("Inicio");

setTimeout(() =>{
    for(let i = 1 ; i <= 10; i++) {
        console.log(i);
    }
}, 0);

console.log("Fin");