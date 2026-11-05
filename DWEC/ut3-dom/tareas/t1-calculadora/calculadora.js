'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // Variables principales para el funcionamiento de la calculadora
  let pantalla = "0";             
  let acumulador = null;          
  let operador = null;            
  let reiniciarPantalla = false;  

  // Guardamos la referencia de la pantalla (input)
  const input = document.getElementById('input');

  // Seleccionamos todos los botones de la calculadora
  const botones = document.querySelectorAll('.calculadora button');

  // Recorremos todos los botones uno a uno para asignarles su acción
  botones.forEach(boton => {
    
    // Escuchamos el evento de hacer clic en cualquier botón
    boton.addEventListener('click', (evento) => {
      
      // Obtenemos el texto limpio del botón que se acaba de pulsar
      let valor = evento.target.textContent.trim();

      // 1. SI PULSAMOS UN NÚMERO (0-9) O LA COMA DECIMAL
      if (!isNaN(valor) || valor === ',') {
        
        // Si la pantalla está a cero o toca reiniciar para escribir un número nuevo
        if (pantalla === "0" || reiniciarPantalla) {
          pantalla = (valor === ',') ? "0," : valor; // Si es coma sola, ponemos "0,"
          reiniciarPantalla = false;
        } else {
          // Si ya estamos escribiendo un número largo, evitamos poner más de una coma
          if (valor === ',' && pantalla.includes(',')) return; 
          pantalla += valor; // Juntamos el nuevo número al final
        }
        
        // Mostramos el valor actualizado en la pantalla
        input.value = pantalla;
      }

      // 2. SI PULSAMOS EL BOTÓN "AC" (BORRAR TODO)
      else if (valor === 'AC') {
        pantalla = "0";
        acumulador = null;
        operador = null;
        reiniciarPantalla = false;
        input.value = pantalla;
      }

      // 3. SI PULSAMOS UNA OPERACIÓN (+, -, x, ÷)      
      else if (valor === '+' || valor === '-' || valor === 'x' || valor === '÷') {
        // Guardamos el número actual como acumulador y anotamos la operación
        acumulador = parseFloat(pantalla.replace(',', '.'));
        operador = valor;
        reiniciarPantalla = true; // El siguiente número limpiará la pantalla
      }

      
      // 4. SI PULSAMOS EL BOTÓN IGUAL (=)      
      else if (valor === '=' || evento.target.id === 'igual') {
        
        // Si falta algún dato para operar, no hacemos nada
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
              // Si intentan dividir entre cero, lanzamos un error a propósito
              if (numeroActual === 0) throw new Error("División por cero");
              resultado = acumulador / numeroActual;
              break;
          }

          // Pasamos el resultado a texto, cambiamos el punto por la coma visual y lo mostramos
          pantalla = resultado.toString().replace('.', ',');
          input.value = pantalla;
          
          // Reiniciamos los valores para la siguiente operación
          acumulador = null;
          operador = null;
          reiniciarPantalla = true;

        } catch (error) {
          // Si ocurre cualquier fallo (como dividir entre cero), mostramos "ERROR"
          pantalla = "ERROR";
          input.value = pantalla;
          
          // Limpiamos todo para que pueda seguir usándose
          acumulador = null;
          operador = null;
          reiniciarPantalla = true;
        }
      }

    });
  });

});