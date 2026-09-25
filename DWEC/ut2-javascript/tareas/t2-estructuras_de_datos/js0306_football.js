/** Carga el módulo para pedir datos por consola */
const prompt = require('prompt-sync')();

// Objeto Map para guardar la relación entre dorsal y jugador (clave: número, valor: nombre)
const equipo = new Map();

// CONFIGURACIÓN DEL EQUIPO
console.log("--- CONFIGURACIÓN DEL EQUIPO ---");
console.log("Introduce el dorsal y nombre. Deja el dorsal vacío para terminar.\n");

// Pedimos el primer dorsal
let dorsalInput = prompt("Dorsal del jugador: ");

// Mientras el usuario no deje la casilla vacía (pulsar Enter directamente), pedimos datos
while (dorsalInput !== "") {
  const numero = Number(dorsalInput);

  // Comprobamos si no es un número válido (NaN) o si es menor o igual a 0
  if (isNaN(numero) || numero <= 0) {
    console.log("Dorsal no válido. Introduce un número mayor a 0.\n");
  } else {
    const nombre = prompt(`Nombre para el dorsal ${numero}: `);

    // Guardamos el jugador asignándolo a su dorsal 
    equipo.set(numero, nombre);
    console.log(`Asignado: ${nombre} -> Dorsal ${numero}\n`);
  }

  // Pedimos el siguiente dorsal para la próxima iteración
  dorsalInput = prompt("Dorsal del jugador: ");
}

// CONSULTA DE JUGADORES
console.log("\n--- CONSULTA DE ALINEACIÓN ---");
console.log("Introduce un dorsal para consultar. Introduce 0 para salir.\n");

// Pedimos el primer dorsal para consultar
let dorsalConsulta = Number(prompt("Número a consultar: "));

// Mientras el dorsal introducido sea diferente de 0, consultamos
while (dorsalConsulta !== 0) {

  // Comprobamos si el dorsal existe en el Map 
  if (equipo.has(dorsalConsulta)) {
    // Obtenemos el nombre del jugador 
    console.log(`Dorsal ${dorsalConsulta}: ${equipo.get(dorsalConsulta)}\n`);
  } else {
    console.log(`No hay ningún jugador con el dorsal ${dorsalConsulta}.\n`);
  }

  // Pedimos el siguiente dorsal a consultar
  dorsalConsulta = Number(prompt("Número a consultar: "));
}

console.log("Consulta finalizada.");