/** Carga el módulo para pedir datos por consola */
const prompt = require('prompt-sync')();

//Generamos 10 numeros secretos unicos (0 a 20)
const numerosSecretos = [];
while (numerosSecretos.length < 10) {
  const aleatorio = Math.floor(Math.random() * 21);
  if (!numerosSecretos.includes(aleatorio)) numerosSecretos.push(aleatorio);
}

//Pedimos 5 numeros al usuario y los validamos
const numerosUsuario = [];
for (let i = 1; i <= 5; i++) {
  let num = Number(prompt(`Número ${i} de 5 (entre 0 y 20): `));

  //Mientras sea texto (NaN), fuera de rango (0-20) o esté repetido, se vuelve a pedir
  while (isNaN(num) || num < 0 || num > 20 || numerosUsuario.includes(num)) {
    num = Number(prompt(`No válido o repetido. Reintenta el número ${i}: `));
  }

  numerosUsuario.push(num); //Guardamos el número en la lista
}

//Comprobamos los aciertos y mostramos los resultados
const aciertos = numerosUsuario.filter(n => numerosSecretos.includes(n));

console.log("\n--- RESULTADOS ---");
console.log("Números secretos: " + numerosSecretos.join(", "));
console.log("Tus números: " + numerosUsuario.join(", "));
console.log(`Número de aciertos: ${aciertos.length}`);
console.log(`Los números que ha acertado: ${aciertos.length > 0 ? aciertos.join(", ") : "Ninguno"}`);