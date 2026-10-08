//Clase que representa una cuenta bancaria.
export class Cuenta {

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

  // Ingresa una cantidad a la cuenta. Si es negativa, no hace nada.
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