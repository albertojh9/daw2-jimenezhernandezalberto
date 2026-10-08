import { Cuenta } from './cuenta.mjs';

// PROGRAMA DE PRUEBA

console.log("--- INICIO DE PRUEBA DE LA CUENTA ---");

// 1. Crear una cuenta con cantidad 100
const miCuenta = new Cuenta("Alberto", 100);
console.log(`Estado inicial -> Saldo: ${miCuenta.cantidad}€`);

// 2. Ingresar 10
miCuenta.ingresar(10);
console.log(`Tras ingresar 10€ -> Saldo: ${miCuenta.cantidad}€`);

// 3. Retirar 50
miCuenta.retirar(50);
console.log(`Tras retirar 50€ -> Saldo: ${miCuenta.cantidad}€`);

// 4. Ingresar 15
miCuenta.ingresar(15);
console.log(`Tras ingresar 15€ -> Saldo: ${miCuenta.cantidad}€`);

// 5. Retirar 100 (supera el saldo actual de 75€, por lo que pasará a 0)
miCuenta.retirar(100);
console.log(`Tras retirar 100€ -> Saldo: ${miCuenta.cantidad}€`);

console.log("\n--- FIN DE PRUEBA ---");
console.log(miCuenta.toString());