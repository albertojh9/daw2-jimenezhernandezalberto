/** Carga el módulo. Función de node.js para cargar módulos */
const prompt = require('prompt-sync')();

//Generamos 10 números aleatorios de 0 a 20
const numerosSecretos = [];
while (numerosSecretos.length < 10) {
  const aleatorio = Math.floor(Math.random() * 21);
  if (!numerosSecretos.includes(aleatorio)) {
    numerosSecretos.push(aleatorio);
  }
}

//Pedimos al usuario 5 números utilizando Number()
const numerosUsuario = [];
for (let i = 1; i <= 5; i++) {
  // Conversión explícita a tipo numérico con Number()
  let numeroInput = Number(prompt(`Introduce el número ${i} de 5 (del 0 al 20):`));
  
  // Validamos la entrada
  while (isNaN(numeroInput) || numeroInput < 0 || numeroInput > 20) {
    numeroInput = Number(prompt(`Número no válido. Reintenta el número ${i} (entre 0 y 20):`));
  }
  
  numerosUsuario.push(numeroInput);
}

//Comprobamos aciertos
const aciertos = numerosUsuario.filter(numero => numerosSecretos.includes(numero));

//Mostramos resultados
console.log("Números secretos:", numerosSecretos);
console.log("Tus números:", numerosUsuario);
console.log(`\nNúmero de aciertos: ${aciertos.length}`);
console.log(`Has acertado: ${aciertos.length > 0 ? aciertos.join(", ") : "Ninguno"}`);