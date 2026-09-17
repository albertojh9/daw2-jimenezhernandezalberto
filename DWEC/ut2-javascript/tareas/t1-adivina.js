/** Carga el módulo. Función de node.js para cargar módulos */
const prompt = require('prompt-sync')();

// Declaración de constantes
const INTENTOS_MAXIMOS = 5;
const VALOR_MAXIMO = 100;

// Generar número aleatorio 
const numeroSecreto = Math.floor(Math.random() * (VALOR_MAXIMO + 1));

// Variables de control
let intentos = 0;
let acertado = false;

// Bucle principal
while (intentos < INTENTOS_MAXIMOS && !acertado) {
    let numeroUsuario = parseInt(prompt("Introduce un número (0 - " + VALOR_MAXIMO + "):"));
    
    // Contamos el intento siempre
    intentos++;

    // Comprobamos si el número se sale del rango
    if (numeroUsuario < 0 || numeroUsuario > VALOR_MAXIMO) {
        console.log("El número debe estar entre 0 y " + VALOR_MAXIMO + ".");
    } else if (numeroUsuario === numeroSecreto) {
        console.log("¡Correcto! Has acertado el número.");
        acertado = true;
    } else if (numeroUsuario < numeroSecreto) {
        console.log("El número secreto es MAYOR.");
    } else {
        console.log("El número secreto es MENOR.");
    }
}

// Mensaje cuando se terminan los intentos
if (!acertado) {
    console.log("Has agotado los intentos. El número secreto era: " + numeroSecreto);
}