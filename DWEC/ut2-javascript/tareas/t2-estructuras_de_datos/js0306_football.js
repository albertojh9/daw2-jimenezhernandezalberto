/** Carga el módulo para pedir datos por consola */
const prompt = require('prompt-sync')();

//Objeto para guardar la relación entre dorsal y jugador (clave: número, valor: nombre)
const equipo = {};

//CONFIGURACIÓN DEL EQUIPO
console.log("--- CONFIGURACIÓN DEL EQUIPO ---");
console.log("Introduce el dorsal y nombre. Deja el dorsal vacío para terminar.\n");

while (true) {
  const dorsalInput = prompt("Dorsal del jugador: ");

  //Si pulsamos Enter sin escribir nada, termina la introducción de jugadores
  if (dorsalInput === "") {
    break;
  }

  const numero = Number(dorsalInput);

  //Mientras sea texto (NaN) o un número no válido, vuelve a pedir el dorsal
  if (isNaN(numero) || numero <= 0) {
    console.log("Dorsal no válido. Introduce un número mayor a 0.\n");
    continue;
  }

  const nombre = prompt(`Nombre para el dorsal ${numero}: `);

  //Guardamos el jugador asignándolo a su dorsal
  equipo[numero] = nombre;
  console.log(`Asignado: ${nombre} -> Dorsal ${numero}\n`);
}

//CONSULTA DE JUGADORES
console.log("\n--- CONSULTA DE ALINEACIÓN ---");
console.log("Introduce un dorsal para consultar. Introduce 0 para salir.\n");

while (true) {
  const dorsalConsulta = Number(prompt("Número a consultar: "));

  //Si introducimos 0, finaliza el programa
  if (dorsalConsulta === 0) {
    console.log("Consulta finalizada.");
    break;
  }

  //Comprobamos si el dorsal existe en el objeto 'equipo'
  if (equipo[dorsalConsulta]) {
    console.log(`Dorsal ${dorsalConsulta}: ${equipo[dorsalConsulta]}\n`);
  } else {
    console.log(`No hay ningún jugador con el dorsal ${dorsalConsulta}.\n`);
  }
}