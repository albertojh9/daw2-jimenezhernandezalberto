/** Carga el módulo para pedir datos por consola */
const prompt = require('prompt-sync')();

const listaCompra = [];

console.log("--- LISTA DE LA COMPRA ---");
console.log("Introduce elementos uno a uno. Deja la casilla vacía y pulsa Enter para finalizar.\n");

while (true) {
  // Pedimos el nombre del artículo directamente 
  const articulo = prompt("Añade un artículo: ");

  // Si introduce una cadena vacía (pulsa Enter directamente), salimos del bucle
  if (articulo === "") {
    break;
  }

  // Comprobamos si el artículo ya existe en la lista (sin importar mayúsculas/minúsculas)
  const existe = listaCompra.some(item => item.toLowerCase() === articulo.toLowerCase());

  if (existe) {
    console.log(`El artículo "${articulo}" ya está en la lista.\n`);
  } else {
    listaCompra.push(articulo);
    console.log(`"${articulo}" añadido a la lista.\n`);
  }
}

// Ordenamos la lista en orden alfabético
listaCompra.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

// Mostramos los resultados
console.log("\n--- TU LISTA DE LA COMPRA ---");
if (listaCompra.length > 0) {
  listaCompra.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
} else {
  console.log("La lista está vacía.");
}