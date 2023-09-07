// Callbacks
const sumar = (a,b, callback) =>{
    setTimeout(() =>{
        if(typeof(a) != 'number' || typeof(a) != 'number'){
            return callback(new Error('Algun argumento no es un numero'));
        }
        callback(null, a+b);
    },1000);
};

// Promesas
const promesas = (a,b) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof(a) != 'number' || typeof(a) != 'number'){
                reject(new Error('Ambos argumentos deben ser numericos'));
            }
            resolve(a+b);
        }, 1000);
    });
};


// asyn await
const asyncawait = (a,b) =>{
    if(typeof(a) != 'number' || typeof(a) != 'number'){
        throw new Error('ALguno de los argumentos no es numerico');
    }

    return a + b;
};


// Callbacks
sumar(1, 2, (error, result) =>{
    if(error){
        console.error(error);
    }

    console.log(`Resolviendo con callbacks: ${result}`);
});

promesas(2,2)
    .then((result) =>{
        console.log(`Resolviendo con Promesas: ${result}`);
    })
    .catch((error) =>{
        console.error(error);
    });



const manejarErrores = async () =>{
    try{
        let result = await asyncawait(2 , '2');
        console.log(`Resolviendo con async await: ${result}`);
    }catch(err){
        console.Error(err.message);
    }
};

manejarErrores();