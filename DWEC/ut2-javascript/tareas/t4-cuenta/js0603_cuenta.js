
 //Clase que representa una cuenta bancaria.

class Cuenta {

  constructor(titular, cantidad = 0) {
    this._titular = titular;
    this._cantidad = cantidad;
  }

  // GETTERS Y SETTERS

  get titular() {
    return this._titular;
  }

  set titular(nuevoTitular) {
    this._titular = nuevoTitular;
  }

  get cantidad() {
    return this._cantidad;
  }

  set cantidad(nuevaCantidad) {
    this._cantidad = nuevaCantidad;
  }

  // MÉTODOS ESPECIALES

  
  //Ingresa una cantidad a la cuenta. Si es negativa, no hace nada.
  
  ingresar(cantidad) {
    if (cantidad > 0) {
      this._cantidad += cantidad;
    }
  }

  
  // Retira una cantidad de la cuenta. Si el saldo no llega, pasa a ser 0.
  retirar(cantidad) {
    if (this._cantidad - cantidad < 0) {
      this._cantidad = 0;
    } else {
      this._cantidad -= cantidad;
    }
  }


  // Devuelve la representación en texto de la cuenta.
  toString() {
    return `Cuenta de ${this._titular} - Saldo: ${this._cantidad}€`;
  }
}

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