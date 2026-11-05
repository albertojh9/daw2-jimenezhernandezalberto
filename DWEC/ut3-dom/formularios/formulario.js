'use strict';

import { validarTextoNoVacio, validarDni, validarEmail, validarPassIguales } from './formulario-validations.mjs';

document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.getElementById('miFormulario');
    const inputs = formulario.querySelectorAll('input');
    const textoAyuda = document.getElementById('texto-ayuda');
    const btnLimpiar = document.getElementById('btnLimpiar');

    // Función para mostrar la ayuda
    function mostrarAyuda(mensaje) {
        if (mensaje) {
            textoAyuda.textContent = mensaje;
        } else {
            textoAyuda.textContent = "";
        }
    }

    // Función para mostrar errores
    function mostrarError(campo, mensaje) {
        campo.style.backgroundColor = '#ffcccc';
        textoAyuda.textContent = "ERROR: " + mensaje;
    }

    // Función para limpiar errores
    function limpiarError(campo) {
        campo.style.backgroundColor = '';
        textoAyuda.textContent = "";
    }

    // Función que valida un campo concreto
    function validarCampo(input) {
        let tipo = input.getAttribute('data-valid');
        let valor = input.value;
        let esCorrecto = true;

        if (tipo === 'nombre' || tipo === 'apellidos') {
            if (!validarTextoNoVacio(valor)) {
                mostrarError(input, "El campo no puede estar vacío.");
                esCorrecto = false;
            }
        } 
        else if (tipo === 'dni') {
            if (!validarDni(valor)) {
                mostrarError(input, "El DNI no es válido.");
                esCorrecto = false;
            }
        } 
        else if (tipo === 'email') {
            if (!validarEmail(valor)) {
                mostrarError(input, "El email debe contener '@'.");
                esCorrecto = false;
            }
        } 
        else if (tipo === 'pass1') {
            if (!validarTextoNoVacio(valor)) {
                mostrarError(input, "La contraseña no puede estar vacía.");
                esCorrecto = false;
            }
        } 
        else if (tipo === 'pass2') {
            let pass1 = document.getElementById('pass1').value;
            if (!validarPassIguales(pass1, valor)) {
                mostrarError(input, "Las contraseñas no coinciden.");
                esCorrecto = false;
            }
        }

        if (esCorrecto) {
            limpiarError(input);
        }
        return esCorrecto;
    }

    // Asignar eventos a cada input mediante un bucle clásico
    inputs.forEach(function (input) {
        
        // Evento focus para mostrar la ayuda
        input.addEventListener('focus', function () {
            let ayuda = input.getAttribute('data-help');
            mostrarAyuda(ayuda);
        });

        // Evento blur para validar al salir del campo
        input.addEventListener('blur', function () {
            if (input.value !== "") {
                validarCampo(input);
            }
        });

    });

    // Validar el formulario entero al pulsar enviar
    formulario.addEventListener('submit', function (evento) {
        let primerError = null;

        inputs.forEach(function (input) {
            let valido = validarCampo(input);
            if (!valido && primerError === null) {
                primerError = input;
            }
        });

        // Si hay algún error, cancelamos el envío y llevamos el foco
        if (primerError !== null) {
            evento.preventDefault();
            primerError.focus();
        }
    });

    // Botón Limpiar
    btnLimpiar.addEventListener('click', function () {
        inputs.forEach(function (input) {
            limpiarError(input);
        });
        mostrarAyuda("Selecciona un campo para ver la ayuda.");
    });

});