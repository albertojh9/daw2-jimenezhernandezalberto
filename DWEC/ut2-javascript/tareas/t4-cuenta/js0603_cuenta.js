//Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales). El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumpla lo anterior.
class Cuenta {
  constructor(titular, cantidad = 0) {
    this.titular = titular;
    this.cantidad = cantidad;
  }

}