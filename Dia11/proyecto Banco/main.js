let datos;

function getDatos(data){
    let nombreBanco = document.querySelector('#nombreBanco');
    let sucursalBanco = document.querySelector('#sucursalBanco');
    let nombreCliente = document.querySelector('#nombreCliente');
    let numeroCuenta = document.querySelector('#numeroCuenta');
    let monto = document.querySelector('#monto');
    let cbu = document.querySelector('#cbu');
    let apertura = document.querySelector('#apertura');

    nombreBanco.textContent = data.banco;
    sucursalBanco.textContent = data.sucursal;
    nombreCliente.textContent = data.titular;
    numeroCuenta.textContent = data.nro_cuenta;
    
    for(let saldo of data.saldo){
        let pElement = document.createElement('p');
        pElement.textContent = `${saldo.monto} ${saldo.moneda}`;
        monto.appendChild(pElement);
    }

    cbu.textContent = `CBU: ${data.cbu}`;
    apertura.textContent = `Fecha de Apertura: ${data.abierto}`;
}

fetch('resumen.json')
    .then( res => res.json())
    .then((data) => {
        getDatos(data);
    })