let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);  

    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `te quiero mamita linda `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarcaja()


    }
    return;
}

function limpiarcaja(){
    document.querySelector('#valorUsuario').value ='';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

        } else {
        // Si el número generado está incluido en la lista

        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }   
}

function condicionesIniciales(){

    asignarTextoElemento ('h1', 'Juego del número secreto!');
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();

}

function reiniciarJuego() {
    limpiarcaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

 condicionesIniciales();
