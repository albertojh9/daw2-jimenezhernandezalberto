//Dado el siguiente codigo:

//Realiza las siguientes tareas:
//1.Utiliza un set para obtener las frutas sin repetir
//2.Crea un Map que asocie cada fruta un numero que indique su cantidad disponible.Utiliza estos datos:
//manzana -> 3, pera -> 2< platano -> 5
//3.Muestra pr consola las frutas sin repetir y la cantidad disponible de manzanas.
//Puedes utilizar console.log() para mostrar los resultados.
const frutas = ["manzana", "pera", "manzana", "platano"];

const frutasSinRepetir = new Set(frutas);

const cantidades = new Map([
  ["manzana", 3],
  ["pera", 2],
  ["platano", 5],
]);

console.log("Frutas sin repetir:", [...frutasSinRepetir]);
console.log("Cantidad disponible de manzanas:", cantidades.get("manzana"));