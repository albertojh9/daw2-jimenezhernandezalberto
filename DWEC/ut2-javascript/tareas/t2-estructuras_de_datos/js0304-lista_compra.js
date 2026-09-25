/** Carga el módulo para pedir datos por consola */
const prompt = require('prompt-sync')();

const listaCompra = [];

console.log("--- LISTA DE LA COMPRA ---");
console.log("Introduce elementos uno a uno. Deja la casilla vacía y pulsa Enter para finalizar.\n");

//Pedimos el primer artículo y mantenemos el bucle mientras NO sea una cadena vacía
let articulo = prompt("Añade un artículo: ");

while (articulo !== "") {
  // Comprobamos si existe convirtiendo la búsqueda a minúsculas
  const existe = listaCompra.map(i => i.toLowerCase()).includes(articulo.toLowerCase());

  if (existe) {
    console.log(`El artículo "${articulo}" ya está en la lista.\n`);
  } else {
    listaCompra.push(articulo);
    console.log(`"${articulo}" añadido a la lista.\n`);
  }

  // Pedimos el siguiente artículo para la próxima iteración del bucle
  articulo = prompt("Añade un artículo: ");
}

// Ordena alfabéticamente distinguiendo entre mayúsculas y minúsculas
listaCompra.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'case' }));

// Mostramos los resultados
console.log("\n--- TU LISTA DE LA COMPRA ---");
if (listaCompra.length > 0) {
  listaCompra.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
} else {
  console.log("La lista está vacía.");
}