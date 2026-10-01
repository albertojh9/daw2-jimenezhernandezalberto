// 1. Inicializa un array vacío y añade 10 números con .push() (de la tabla)
const numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 100) + 1);
}

// 2. Muestra los 10 números accediendo por su índice [i]
console.log("Números generados:");
for (let i = 0; i < numeros.length; i++) {
  console.log(`Posición ${i}: ${numeros[i]}`);
}

// 3. Recorre el array una sola vez para hallar menor, mayor y media
let menor = numeros[0];
let mayor = numeros[0];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  const actual = numeros[i];
  
  if (actual < menor) menor = actual;
  if (actual > mayor) mayor = actual;
  suma += actual;
}

// Resultados
console.log("--- RESULTADOS ---");
console.log("Menor:", menor);
console.log("Mayor:", mayor);
console.log("Media:", suma / numeros.length);