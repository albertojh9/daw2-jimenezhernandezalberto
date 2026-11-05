'use strict';

$(document).ready(() => {

  // Variables principales para el funcionamiento de la calculadora
  let pantalla = "0";             
  let acumulador = null;          
  let operador = null;            
  let reiniciarPantalla = false;  

  // Guardamos la referencia de la pantalla (input) usando jQuery
  const $input = $('#input');

  // Seleccionamos todos los botones de la calculadora usando jQuery
  const $botones = $('.calculadora button');

  // Recorremos los botones con .on() para asignar el evento clic de forma programática
  $botones.on('click', (evento) => {
    
    // Obtenemos el texto limpio del botón pulsado usando jQuery ($(evento.target).text())
    let valor = $(evento.target).text().trim();

    // 1. SI PULSAMOS UN NÚMERO (0-9) O LA COMA DECIMAL
    if (!isNaN(valor) || valor === ',') {
      
      if (pantalla === "0" || reiniciarPantalla) {
        pantalla = (valor === ',') ? "0," : valor;
        reiniciarPantalla = false;
      } else {
        if (valor === ',' && pantalla.includes(',')) return; // Evitar múltiples comas
        pantalla += valor;
      }
      
      // Asignamos el valor al input usando .val() de jQuery
      $input.val(pantalla);
    }


     
    // 2. SI PULSAMOS EL BOTÓN "AC" (BORRAR TODO)
    else if (valor === 'AC') {
      pantalla = "0";
      acumulador = null;
      operador = null;
      reiniciarPantalla = false;
      $input.val(pantalla);
    }

    // 3. SI PULSAMOS UNA OPERACIÓN (+, -, x, ÷)
    else if (valor === '+' || valor === '-' || valor === 'x' || valor === '÷') {
      acumulador = parseFloat(pantalla.replace(',', '.'));
      operador = valor;
      reiniciarPantalla = true;
    }

    // 4. SI PULSAMOS EL BOTÓN IGUAL (=)
    else if (valor === '=' || evento.target.id === 'igual') {
      
      if (operador === null || acumulador === null) return;

      let numeroActual = parseFloat(pantalla.replace(',', '.'));
      let resultado = 0;

      // Intentamos hacer el cálculo de forma segura
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
        $input.val(pantalla);
        
        acumulador = null;
        operador = null;
        reiniciarPantalla = true;

      } catch (error) {
        pantalla = "ERROR";
        $input.val(pantalla);
        
        acumulador = null;
        operador = null;
        reiniciarPantalla = true;
      }
    }

  });

});