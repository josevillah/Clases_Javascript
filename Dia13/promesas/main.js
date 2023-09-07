let miPromesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let error = false;
        if(error){
            reject(error);
        }else{
            resolve('La promesa se cumplio');
        }
    }, 2000);
});


miPromesa.then((res) => {
    console.log(res);
}).catch((err) =>{
    console.log('La promesa ha fallado');
})


// Promesas Consumiendo API
function getUsers(){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhr.onload = () =>{
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject(xhr.statusText);
            }
        };

        xhr.send();
    });
}

getUsers()
.then((users) =>{
    console.log(users);
}).catch((err) =>{
    console.log(err);
});