const alarma = () =>{
    alert("Game Over");
    location.reload();
}

const cuentaRegresiva = () =>{
    let segundosReversa = 30;
    let textcuentaRegresiva = document.querySelector('#textcuentaRegresiva');
    setInterval(() =>{
        segundosReversa == 0 ? segundosReversa = 0 : segundosReversa -= 1;
        totalSegundo = segundosReversa < 10 ? `0${segundosReversa}` : segundosReversa;

        totalSegundo < 21 ? textcuentaRegresiva.style.color = 'orange' : false;
        totalSegundo < 6 ? textcuentaRegresiva.style.color = 'red' : false;
        
        textcuentaRegresiva.textContent = `${totalSegundo} seg`;
        segundosReversa == 0 ? alarma() : false;
    }, 1000);
};

const finalizarJuego = () =>{
    let pre1 = document.querySelector('#pre1').value;
    let pre2 = document.querySelector('#pre2').value;
    let pre3 = document.querySelector('#pre3').value;
    let pre4 = document.querySelector('#pre4').value;
    let pre5 = document.querySelector('#pre5').value;

    let currentDate = new Date();

    // Formato deseado: DD/MM/YYYY
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    if(pre1.length > 0 && pre2.length > 0 && pre3.length > 0 && pre4.length > 0 && pre5.length > 0){
        alert(`Ganaste: 
            ${pre1}
            ${pre2}
            ${pre3}
            ${pre4}
            ${pre5}
        En la fecha: ${formattedDate}`);
    }else{
        alarma();
    }
};