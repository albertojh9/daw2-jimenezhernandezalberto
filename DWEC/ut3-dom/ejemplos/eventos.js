"use strict";
//Inicializacion

window.addEventListener("load",() => {
    const bSaludar1 = document.querySelector("#formulario #bSaludar1");
    bSaludar1.addEventListener("click", saluda); 
});



//gestor de eventos

function saluda(evento) {
    const boton = evento.target;
    const operacion = boton.getAttribute("operacion");
    console.log(operacion);

    const acumulador = document.getElementById("acumulador");
    acumulador.value = "hola";

    const texto = document.getElementById("texto");
    texto.innerText = "hola";
}
            

                      
         

