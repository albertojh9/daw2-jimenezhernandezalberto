//Escribe un programa en Javasrcript para Node.js que recorra los numeros del 1 al 10.
//Para cada numero, el programa debe:
//1.Indica si es par o impar utilizando if else.
//2.Utilizar switch para mostrar un mensaje especial si el numero es 1,5 o 10.Para el resto debe mostrar <<Numero sin mensaje especial>>
//3.Contar cuantos numeros pares hay y mostrar el total al finalizar.

var pares = 0;

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const numero of numeros) {
  console.log(`Número: ${numero}`);

  if (numero % 2 === 0) {
    console.log("Es par");
    pares++;
  } else {
    console.log("Es impar");
  }

  switch (numero) {
    case 1:
      console.log("Mensaje especial: es el número 1");
      break;
    case 5:
      console.log("Mensaje especial: es el número 5");
      break;
    case 10:
      console.log("Mensaje especial: es el número 10");
      break;
    default:
      console.log("Número sin mensaje especial");
  }
}

console.log(`Total de números pares: ${pares}`);
