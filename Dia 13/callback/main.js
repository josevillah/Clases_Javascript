function avanzaFila(callback){
    setTimeout(() =>{
        console.log("tu turno llego!");
        callback();
    }, 1000 * 5);
}

function mujerTeLlama(){
    console.log("Te presentas a tu turno");
}

console.log("llegas a la fila");
avanzaFila(mujerTeLlama);
console.log("Te vas a comprar café");