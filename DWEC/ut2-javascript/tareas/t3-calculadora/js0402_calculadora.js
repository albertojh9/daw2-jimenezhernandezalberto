/** Carga el módulo para pedir datos por consola */
const prompt = require('prompt-sync')();

// Variables globales para la pantalla (acumulador) y la memoria
let pantalla = 0;
let memoria = 0;

// Función para calcular el factorial 
function factorial() {
  let resultado = 1;
  for (let i = 1; i <= pantalla; i++) {
    resultado *= i;
  }
  pantalla = resultado;
}

// Función principal del menú
function menu() {
  let opcion = "";

  while (opcion !== "SALIR") {
    console.log(`\nPANTALLA: ${pantalla} | MEMORIA: ${memoria}`);
    console.log("Opciones: + | - | * | / | % | ^ | ! | M | R | C | SALIR");
    
    opcion = prompt("Selecciona una opción: ").trim().toUpperCase();

    switch (opcion) {
      case "+":
        pantalla += Number(prompt("Número a sumar: "));
        break;
      case "-":
        pantalla -= Number(prompt("Número a restar: "));
        break;
      case "*":
        pantalla *= Number(prompt("Número a multiplicar: "));
        break;
      case "/":
        const divisor = Number(prompt("Número a dividir: "));
        if (divisor !== 0) pantalla /= divisor;
        else console.log("No se puede dividir entre 0");
        break;
      case "%":
        pantalla %= Number(prompt("Número para el módulo: "));
        break;
      case "^":
        pantalla = Math.pow(pantalla, Number(prompt("Exponente: ")));
        break;
      case "!":
        factorial();
        break;
      case "M":
        memoria = pantalla;
        console.log("Guardado en memoria.");
        break;
      case "R":
        pantalla = memoria;
        console.log("Cargado de memoria.");
        break;
      case "C":
        pantalla = 0;
        memoria = 0;
        console.log("Pantalla y memoria a 0.");
        break;
      case "SALIR":
        console.log("¡Saliendo!");
        break;
      default:
        console.log("Opción no válida.");
    }
  }
}

// Ejecutamos la calculadora
menu();