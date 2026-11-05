'use strict';

// Comprueba que el texto no esté vacío
export function validarTextoNoVacio(texto) {
    if (texto.trim() === "") {
        return false;
    } else {
        return true;
    }
}

// Validación de DNI paso a paso y fácil de ver
export function validarDni(dni) {
    const dniRegex = /^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    if (!dniRegex.test(dni)) {
        return false;
    }

    let numero = parseInt(dni.substring(0, 8), 10);
    let letra = dni.charAt(8).toUpperCase();
    let letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";

    if (letrasValidas[numero % 23] === letra) {
        return true;
    } else {
        return false;
    }
}

// Comprueba si el email tiene arroba
export function validarEmail(email) {
    if (email.includes('@')) {
        return true;
    } else {
        return false;
    }
}

// Comprueba que las contraseñas coinciden
export function validarPassIguales(pass1, pass2) {
    if (pass1 !== "" && pass1 === pass2) {
        return true;
    } else {
        return false;
    }
}