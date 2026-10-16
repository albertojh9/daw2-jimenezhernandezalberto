'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // Declaramos variables
  let pantalla = "0";
  let acumulador = null;
  let operador = null;
  let reiniciarPantalla = false;

  // Referencia al elemento input de la pantalla
  const input = document.getElementById('input');

  // Seleccionamos todos los botones de la calculadora
  const botones = document.querySelectorAll('.calculadora button');

  // Recorremos los botones para asignar el evento 
  botones.forEach(boton => {
    // Usamos el objeto evento (evento) capturado al hacer clic
    boton.addEventListener('click', (evento) => {
      let valor = evento.target.textContent.trim();

      // 1. Si es un número (0 al 9) o la coma decimal
      if (!isNaN(valor) || valor === ',') {
        if (pantalla === "0" || reiniciarPantalla) {
          pantalla = (valor === ',') ? "0," : valor;
          reiniciarPantalla = false;
        } else {
          if (valor === ',' && pantalla.includes(',')) return; // Evitar múltiples comas
          pantalla += valor;
        }
        input.value = pantalla;
      }

      // 2. Si es el botón AC (Limpiar todo)
      else if (valor === 'AC') {
        pantalla = "0";
        acumulador = null;
        operador = null;
        reiniciarPantalla = false;
        input.value = pantalla;
      }

      // 3. Si es una operación (+, -, x, ÷)
      else if (valor === '+' || valor === '-' || valor === 'x' || valor === '÷') {
        acumulador = parseFloat(pantalla.replace(',', '.'));
        operador = valor;
        reiniciarPantalla = true;
      }

      // 4. Si es el botón igual (=)
      else if (valor === '=' || evento.target.id === 'igual') {
        if (operador === null || acumulador === null) return;

        let numeroActual = parseFloat(pantalla.replace(',', '.'));
        let resultado = 0;

        // Estructura try catch para capturar posibles errores (como división por cero)
        try {
          switch (operador) {
            case '+':
              resultado = acumulador + numeroActual;
              break;
            case '-':
              resultado = acumulador - numeroActual;
              break;
            case 'x':
              resultado = acumulador * numeroActual;
              break;
            case '÷':
              if (numeroActual === 0) throw new Error("División por cero");
              resultado = acumulador / numeroActual;
              break;
          }

          pantalla = resultado.toString().replace('.', ',');
          input.value = pantalla;
          acumulador = null;
          operador = null;
          reiniciarPantalla = true;

        } catch (error) {
          pantalla = "ERROR";
          input.value = pantalla;
          acumulador = null;
          operador = null;
          reiniciarPantalla = true;
        }
      }
    });
  });

});