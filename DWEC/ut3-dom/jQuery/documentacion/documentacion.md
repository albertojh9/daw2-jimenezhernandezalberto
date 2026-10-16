# El DOM y JavaScript: funciones y propiedades para la calculadora

En este apartado vamos a ver las funciones y propiedades más importantes de JavaScript para trabajar con el DOM (Document Object Model). Nos centraremos especialmente en las que necesitamos para realizar el ejercicio de la calculadora, utilizando el HTML y CSS proporcionados por el profesor.

El objetivo es aprender a seleccionar los botones, detectar los clics, obtener los valores introducidos, modificar la pantalla y realizar las operaciones matemáticas. También veremos otras funciones habituales que pueden ser útiles en futuros ejercicios.

---

## 1. Seleccionar elementos del DOM

Para trabajar con la calculadora, primero necesitamos acceder a los elementos HTML desde JavaScript.

### Métodos principales

| Método | Descripción | Ejemplo | Retorno |
| :--- | :--- | :--- | :--- |
| `getElementById()` | Busca un elemento por su identificador (`id`). | `document.getElementById("input");` | Elemento o `null`. |
| `querySelector()` | Selecciona el primer elemento que coincide con un selector CSS. | `document.querySelector(".naranja");` | Elemento o `null`. |
| `querySelectorAll()` | Selecciona todos los elementos que coinciden con un selector CSS. | `document.querySelectorAll(".gris");` | `NodeList` |
| `getElementsByClassName()` | Obtiene los elementos que tienen una clase determinada. | `document.getElementsByClassName("negro");` | `HTMLCollection` |
| `getElementsByTagName()` | Obtiene los elementos que tienen una etiqueta determinada. | `document.getElementsByTagName("button");` | `HTMLCollection` |

### Ejemplo aplicado a la calculadora

En el HTML del profesor encontramos un campo de entrada con el identificador `input` y varios botones con diferentes clases.

```javascript
const pantalla = document.getElementById("input");

const botones = document.querySelectorAll(".calculadora button");

const botonIgual = document.getElementById("igual");
```

- `pantalla` permite acceder al campo donde se muestran los números y resultados.
- `botones` contiene todos los botones de la calculadora.
- `botonIgual` permite acceder específicamente al botón de resultado.

**Importante:** `querySelectorAll(".calculadora button")` selecciona los botones que están dentro del elemento con clase `calculadora`. No selecciona los tres botones decorativos de la parte superior.

---

## 2. Propiedades para consultar y modificar elementos

Una vez seleccionado un elemento, podemos consultar sus propiedades o modificarlas para cambiar su contenido.

### Propiedades principales

| Propiedad | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `textContent` | Obtiene o modifica el texto de un elemento HTML. | `boton.textContent;` |
| `value` | Obtiene o modifica el valor de un campo de entrada. | `pantalla.value = "123";` |
| `innerText` | Obtiene o modifica el texto renderizado de un elemento. | `elemento.innerText = "Hola";` |
| `innerHTML` | Obtiene o modifica el contenido HTML interno de un elemento. | `elemento.innerHTML = "<strong>Hola</strong>";` |
| `className` | Permite consultar o modificar las clases CSS de un elemento. | `elemento.className = "gris";` |

### Diferencia entre `textContent` y `value`

Esta diferencia es especialmente importante en el ejercicio de la calculadora.

- `textContent` se utiliza para leer el texto que hay dentro de un botón.
- `value` se utiliza para leer o modificar el contenido del campo de entrada `input`.

Ejemplo:

```javascript
const pantalla = document.getElementById("input");
const boton = document.querySelector(".gris");

console.log(boton.textContent); // Por ejemplo, "7"

pantalla.value = "7";
console.log(pantalla.value); // "7"
```

Para modificar la pantalla de la calculadora, utilizaremos principalmente `pantalla.value`.

---

## 3. Gestión de eventos

Un evento es algo que ocurre en una página web, generalmente como consecuencia de la interacción del usuario o del funcionamiento del navegador.

En la calculadora, el evento más importante será `click`, porque necesitamos detectar cuándo el usuario pulsa un botón.

### Eventos principales

| Evento | Descripción |
| :--- | :--- |
| `click` | Se produce cuando se hace clic en un elemento. |
| `dblclick` | Se produce cuando se hace doble clic en un elemento. |
| `mousedown` | Se produce cuando se pulsa un botón del ratón. |
| `mouseup` | Se produce cuando se suelta un botón del ratón. |
| `keydown` | Se produce cuando se pulsa una tecla. |
| `keyup` | Se produce cuando se suelta una tecla. |
| `input` | Se produce cuando cambia el valor de un campo de entrada. |
| `change` | Se produce cuando cambia el valor de un elemento y se confirma el cambio según el tipo de control. |
| `submit` | Se produce cuando se intenta enviar un formulario. |
| `load` | Se produce cuando se ha cargado un recurso o la ventana con sus recursos. |

### Método principal: `addEventListener()`

Permite asociar una función a un evento de un elemento HTML.

**Sintaxis:**

```javascript
elemento.addEventListener("evento", funcion);
```

| Parámetro | Descripción |
| :--- | :--- |
| `evento` | Nombre del evento que queremos detectar, como `"click"`. |
| `funcion` | Función que se ejecutará cuando ocurra el evento. |

### Ejemplo aplicado a la calculadora

```javascript
const boton = document.querySelector(".gris");

boton.addEventListener("click", () => {
    console.log("Se ha pulsado un botón");
});
```

En este ejemplo, cuando el usuario pulsa el botón seleccionado, se ejecuta la función.

---

## 4. Recorrer una lista de elementos con `forEach()`

Como la calculadora tiene muchos botones, no resulta práctico asignar un evento individualmente a cada uno.

Podemos seleccionar todos los botones con `querySelectorAll()` y recorrerlos mediante `forEach()`.

### Método `forEach()`

Ejecuta una función para cada elemento de una colección o array.

| Método | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `forEach()` | Recorre una colección y ejecuta una función para cada elemento. | `botones.forEach(boton => console.log(boton.textContent));` |

### Ejemplo aplicado a la calculadora

```javascript
const botones = document.querySelectorAll(".calculadora button");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        console.log(boton.textContent);
    });
});
```

De esta forma, todos los botones de la calculadora tienen asociado un evento `click`.

Cada vez que se pulsa uno, se muestra su texto en la consola.

---

## 5. Obtener información del evento

Cuando ocurre un evento, JavaScript puede proporcionar un objeto que describe lo que ha sucedido.

Este objeto suele recibirse como parámetro de la función gestora y permite acceder al elemento que ha provocado el evento.

### Propiedades importantes

| Propiedad | Descripción |
| :--- | :--- |
| `target` | Elemento en el que se originó el evento. |
| `currentTarget` | Elemento al que está asociado el gestor de eventos que se está ejecutando. |
| `type` | Nombre del evento que se ha producido. |

### Ejemplo aplicado a la calculadora

```javascript
const botones = document.querySelectorAll(".calculadora button");

botones.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
        console.log(evento.target.textContent);
    });
});
```

La propiedad `evento.target` permite identificar el elemento que originó el evento.

En este caso, podemos obtener el texto del botón pulsado para saber si el usuario ha elegido un número, una operación o el botón de resultado.

**Nota:** en este ejercicio también podemos utilizar directamente la variable `boton`, porque cada función se registra para un botón concreto.

---

## 6. Convertir cadenas de texto en números

El contenido de un campo `input` se obtiene normalmente como una cadena de texto (`String`), incluso cuando contiene números.

Para realizar operaciones matemáticas, necesitamos convertir esos valores en números.

### Funciones principales

| Función | Descripción | Ejemplo | Resultado |
| :--- | :--- | :--- | :--- |
| `Number()` | Convierte un valor en un número. | `Number("25");` | `25` |
| `parseFloat()` | Convierte una cadena en un número decimal, leyendo desde el principio de la cadena. | `parseFloat("3.5");` | `3.5` |
| `parseInt()` | Convierte una cadena en un número entero. | `parseInt("25");` | `25` |
| `isNaN()` | Comprueba si un valor convertido a número es `NaN` (no es un número válido). | `isNaN(Number("hola"));` | `true` |

### Ejemplo aplicado a la calculadora

```javascript
const pantalla = document.getElementById("input");

pantalla.value = "25";

const numero = Number(pantalla.value);

console.log(numero + 5); // 30
```

**Importante:** en JavaScript, el operador `+` también puede concatenar cadenas. Por ejemplo, `"2" + "3"` devuelve `"23"`. Si convertimos los valores a números, `2 + 3` devuelve `5`.

### Nota sobre la coma decimal

En la calculadora del profesor aparece una tecla con una coma `,`. JavaScript utiliza el punto como separador decimal en los números.

Por tanto, antes de convertir una cantidad como `"3,5"` en número, debemos sustituir la coma por un punto:

```javascript
const texto = "3,5";

const numero = Number(texto.replace(",", "."));

console.log(numero); // 3.5
```

El método `replace()` se explica más adelante.

---

## 7. Operaciones matemáticas

JavaScript dispone de operadores aritméticos que permiten realizar los cálculos de la calculadora.

### Operadores principales

| Operador | Operación | Ejemplo | Resultado |
| :--- | :--- | :--- | :--- |
| `+` | Suma | `5 + 3` | `8` |
| `-` | Resta | `5 - 3` | `2` |
| `*` | Multiplicación | `5 * 3` | `15` |
| `/` | División | `6 / 3` | `2` |
| `%` | Resto de una división | `7 % 3` | `1` |
| `**` | Potencia | `2 ** 3` | `8` |

### Ejemplo de uso

```javascript
const a = 10;
const b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
```

Para la calculadora necesitaremos identificar qué operación ha pulsado el usuario y aplicar el operador correspondiente.

Por ejemplo, el botón visual `x` representa la multiplicación, pero en JavaScript debemos utilizar `*`.

Del mismo modo, el botón `÷` representa la división, cuyo operador en JavaScript es `/`.

### Comprobación de división entre cero

Es conveniente comprobar que el divisor no sea cero antes de efectuar una división.

```javascript
if (b === 0) {
    console.log("No se puede dividir entre cero");
} else {
    console.log(a / b);
}
```

---

## 8. Condicionales para controlar los botones

Los condicionales permiten ejecutar diferentes instrucciones según el botón que se haya pulsado.

### `if`, `else if` y `else`

| Estructura | Descripción |
| :--- | :--- |
| `if` | Ejecuta un bloque si se cumple una condición. |
| `else if` | Comprueba otra condición si la anterior no se cumple. |
| `else` | Ejecuta un bloque si ninguna de las condiciones anteriores se cumple. |

### Ejemplo aplicado a la calculadora

```javascript
const valor = boton.textContent;

if (valor === "AC") {
    console.log("Borrar la pantalla");
} else if (valor === "=") {
    console.log("Calcular el resultado");
} else if (valor === "+") {
    console.log("Realizar una suma");
} else {
    console.log("Se ha pulsado un número u otra tecla");
}
```

En este ejemplo distinguimos algunas de las teclas de la calculadora.

Podemos utilizar esta estructura para decidir qué hacer con cada botón.

### Comparadores importantes

| Operador | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `===` | Comprueba si dos valores son iguales y del mismo tipo. | `valor === "="` |
| `!==` | Comprueba si dos valores son diferentes. | `valor !== "AC"` |
| `>` | Comprueba si un valor es mayor que otro. | `numero > 0` |
| `<` | Comprueba si un valor es menor que otro. | `numero < 0` |
| `>=` | Comprueba si un valor es mayor o igual que otro. | `numero >= 0` |
| `<=` | Comprueba si un valor es menor o igual que otro. | `numero <= 0` |

---

## 9. Modificar el contenido de la pantalla

Para mostrar los números introducidos y los resultados, utilizaremos la propiedad `value` del elemento `input`.

### Ejemplo aplicado a la calculadora

```javascript
const pantalla = document.getElementById("input");

pantalla.value = "123";

console.log(pantalla.value); // "123"

pantalla.value = "";
```

- `pantalla.value = "123"` muestra el valor `123`.
- `pantalla.value` permite consultar lo que se muestra en el campo.
- `pantalla.value = ""` deja el campo vacío.

En el ejercicio, esta propiedad será necesaria para mostrar los números, borrar el contenido con `AC` y enseñar el resultado al pulsar `=`.

### Diferencia entre `placeholder` y `value`

En el HTML del profesor encontramos:

```html
<input id="input" placeholder="0">
```

El atributo `placeholder` muestra un texto orientativo cuando el campo está vacío. No es el valor real del campo.

Por eso, para modificar lo que aparece como contenido de la pantalla, utilizaremos `value`, no `placeholder`.

---

## 10. Operaciones con cadenas de texto

Las cadenas de texto contienen métodos que permiten consultar, modificar o extraer partes de un texto.

Estos métodos son útiles para gestionar la entrada de números y la coma decimal de la calculadora.

### Métodos principales

| Método | Descripción | Ejemplo | Resultado |
| :--- | :--- | :--- | :--- |
| `replace()` | Sustituye la primera coincidencia de un texto o patrón por otro. | `"3,5".replace(",", ".");` | `"3.5"` |
| `includes()` | Comprueba si una cadena contiene un texto determinado. | `"123".includes("2");` | `true` |
| `startsWith()` | Comprueba si una cadena comienza por un texto determinado. | `"123".startsWith("1");` | `true` |
| `endsWith()` | Comprueba si una cadena termina por un texto determinado. | `"123".endsWith("3");` | `true` |
| `slice()` | Extrae una parte de una cadena. | `"123".slice(0, 2);` | `"12"` |
| `trim()` | Elimina los espacios en blanco del principio y del final. | `"  hola  ".trim();` | `"hola"` |
| `toString()` | Convierte un valor en una cadena de texto. | `(123).toString();` | `"123"` |

### Ejemplo de uso

```javascript
let texto = "3,5";

texto = texto.replace(",", ".");

const numero = Number(texto);

console.log(numero); // 3.5
```

---

## 11. Funciones matemáticas útiles

Además de los operadores aritméticos, JavaScript incluye el objeto `Math`, que proporciona funciones y constantes matemáticas.

### Métodos principales

| Método | Descripción | Ejemplo | Resultado |
| :--- | :--- | :--- | :--- |
| `Math.abs()` | Devuelve el valor absoluto de un número. | `Math.abs(-5);` | `5` |
| `Math.round()` | Redondea al entero más cercano. | `Math.round(3.6);` | `4` |
| `Math.floor()` | Redondea hacia abajo. | `Math.floor(3.9);` | `3` |
| `Math.ceil()` | Redondea hacia arriba. | `Math.ceil(3.1);` | `4` |
| `Math.max()` | Devuelve el mayor de los valores. | `Math.max(2, 8, 4);` | `8` |
| `Math.min()` | Devuelve el menor de los valores. | `Math.min(2, 8, 4);` | `2` |
| `Math.sqrt()` | Calcula la raíz cuadrada. | `Math.sqrt(25);` | `5` |
| `Math.pow()` | Calcula una potencia. | `Math.pow(2, 3);` | `8` |

Para la calculadora básica, las operaciones principales pueden hacerse con los operadores `+`, `-`, `*` y `/`. Los métodos de `Math` son útiles en ejercicios más avanzados.

---

## 12. Arrays y métodos para recorrer colecciones

En JavaScript, un array permite almacenar varios valores ordenados. En el ejercicio de la calculadora no es obligatorio utilizar un array para almacenar las operaciones, pero sí trabajaremos con una colección de botones devuelta por `querySelectorAll()`.

### Métodos importantes

| Método | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `forEach()` | Ejecuta una función para cada elemento de una colección o array. | `botones.forEach(boton => console.log(boton));` |
| `map()` | Crea un nuevo array transformando cada elemento. | `[1, 2, 3].map(n => n * 2);` |
| `filter()` | Crea un nuevo array con los elementos que cumplen una condición. | `[1, 2, 3, 4].filter(n => n > 2);` |
| `find()` | Devuelve el primer elemento que cumple una condición. | `[1, 2, 3].find(n => n > 1);` |
| `includes()` | Comprueba si un array contiene un valor. | `[1, 2, 3].includes(2);` |

### Ejemplo aplicado a los botones

```javascript
const botones = document.querySelectorAll(".calculadora button");

botones.forEach((boton) => {
    console.log(boton.textContent);
});
```

Aunque `querySelectorAll()` devuelve una `NodeList` y no un array convencional, esta colección permite utilizar `forEach()`.

---

## 13. Modificar clases CSS desde JavaScript

En otros ejercicios puede ser necesario cambiar la apariencia de los elementos en función de las acciones del usuario.

Para ello, podemos utilizar la propiedad `classList`.

### Métodos principales

| Método | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `classList.add()` | Añade una clase CSS. | `elemento.classList.add("activo");` |
| `classList.remove()` | Elimina una clase CSS. | `elemento.classList.remove("activo");` |
| `classList.toggle()` | Añade una clase si no existe y la elimina si ya existe. | `elemento.classList.toggle("activo");` |
| `classList.contains()` | Comprueba si un elemento tiene una clase. | `elemento.classList.contains("activo");` |

### Ejemplo de uso

```javascript
const boton = document.querySelector(".gris");

boton.classList.add("activo");
```

Estos métodos no son necesarios para realizar las operaciones básicas de la calculadora proporcionada, pero resultan útiles cuando queremos cambiar la apariencia de los botones o indicar cuál está seleccionado.

---

## 14. Crear y eliminar elementos HTML

JavaScript también permite crear nuevos elementos y añadirlos al documento.

### Métodos principales

| Método | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `document.createElement()` | Crea un nuevo elemento HTML. | `document.createElement("p");` |
| `append()` | Añade contenido o elementos al final de otro elemento. | `contenedor.append(elemento);` |
| `prepend()` | Añade contenido o elementos al principio de otro elemento. | `contenedor.prepend(elemento);` |
| `remove()` | Elimina un elemento del documento. | `elemento.remove();` |
| `removeChild()` | Elimina un elemento hijo de su elemento padre. | `padre.removeChild(hijo);` |

### Ejemplo de uso

```javascript
const parrafo = document.createElement("p");

parrafo.textContent = "Resultado de la operación";

document.body.append(parrafo);
```

En la calculadora del profesor no necesitamos crear botones nuevos, porque ya están definidos en el HTML. Sin embargo, estos métodos son importantes para ejercicios en los que haya que añadir elementos dinámicamente.

---

## 15. Controlar formularios y acciones predeterminadas

En ocasiones, un evento provoca una acción predeterminada del navegador. Por ejemplo, enviar un formulario puede provocar una recarga o navegación.

### Métodos principales

| Método | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `preventDefault()` | Evita la acción predeterminada de un evento cancelable. | `evento.preventDefault();` |
| `stopPropagation()` | Detiene la propagación del evento hacia otros elementos. | `evento.stopPropagation();` |

### Ejemplo de uso

```javascript
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
});
```

En el HTML de la calculadora, el formulario contiene el campo de entrada. Si en el futuro se añade un botón de envío o se decide gestionar la entrada mediante un formulario, `preventDefault()` puede evitar el envío tradicional.

Para los botones actuales de la calculadora, el evento principal será `click`.

---

## 16. Temporizadores

JavaScript permite programar la ejecución de una función después de un tiempo determinado.

### Funciones principales

| Función | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `setTimeout()` | Programa una función para ejecutarse después de un tiempo expresado en milisegundos. | `setTimeout(() => console.log("Hola"), 1000);` |
| `clearTimeout()` | Cancela un temporizador que todavía no se ha ejecutado. | `clearTimeout(id);` |
| `setInterval()` | Programa la ejecución repetida de una función a intervalos de tiempo. | `setInterval(() => console.log("Hola"), 1000);` |
| `clearInterval()` | Cancela un intervalo creado con `setInterval()`. | `clearInterval(id);` |

Estas funciones no son necesarias para la calculadora básica, pero son habituales en ejercicios que requieren retrasos, relojes, contadores o animaciones.

---

## 17. Otras funciones y conceptos importantes de JavaScript

Además de las funciones del DOM, conviene conocer algunos conceptos básicos del lenguaje.

### Funciones

Una función agrupa instrucciones que pueden ejecutarse cuando se necesita.

```javascript
function sumar(a, b) {
    return a + b;
}

console.log(sumar(2, 3)); // 5
```

| Elemento | Descripción |
| :--- | :--- |
| `function` | Permite declarar una función. |
| Parámetros | Valores que recibe la función. |
| `return` | Devuelve un resultado y finaliza la ejecución de la función. |
| Función flecha (`=>`) | Forma alternativa de definir funciones. |

### Variables

| Palabra clave | Descripción |
| :--- | :--- |
| `const` | Declara una variable que no puede reasignarse. |
| `let` | Declara una variable cuyo valor puede cambiar. |
| `var` | Forma antigua de declarar variables; normalmente se prefiere `let` o `const`. |

Ejemplo:

```javascript
const pantalla = document.getElementById("input");

let numero = 5;

numero = 10;
```

Aunque `pantalla` se declara con `const`, podemos modificar las propiedades del elemento al que hace referencia. Lo que no podemos hacer es reasignar la variable `pantalla` a otro elemento.

### Operadores lógicos

| Operador | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `&&` | AND: ambas condiciones deben cumplirse. | `numero > 0 && numero < 10` |
| `||` | OR: basta con que se cumpla una condición. | `numero < 0 || numero > 10` |
| `!` | NOT: invierte un valor booleano. | `!true` devuelve `false`. |

### Otras funciones útiles

| Función | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `console.log()` | Muestra información en la consola. | `console.log("Hola");` |
| `alert()` | Muestra un cuadro de diálogo con un mensaje. | `alert("Error");` |
| `prompt()` | Muestra un cuadro de diálogo para solicitar un texto. | `prompt("Introduce un número");` |
| `confirm()` | Muestra un cuadro de diálogo con opciones de aceptar o cancelar. | `confirm("¿Continuar?");` |

`console.log()` es especialmente útil mientras desarrollamos la calculadora para comprobar qué botón se ha pulsado, qué valores estamos utilizando y qué resultado obtenemos.

---

## 18. Resumen de las funciones necesarias para la calculadora

Esta tabla reúne las funciones y propiedades que conviene dominar para resolver el ejercicio con el HTML y CSS proporcionados por el profesor.

| Función, propiedad u operador | Utilidad en la calculadora |
| :--- | :--- |
| `document.getElementById()` | Seleccionar la pantalla mediante su identificador `input` o el botón `igual`. |
| `document.querySelectorAll()` | Seleccionar todos los botones de la calculadora. |
| `addEventListener()` | Detectar los clics sobre los botones. |
| `forEach()` | Recorrer todos los botones para asignarles un evento. |
| `textContent` | Obtener el texto del botón pulsado. |
| `value` | Leer o modificar el contenido de la pantalla. |
| `Number()` | Convertir el texto de la pantalla en un número. |
| `replace()` | Sustituir la coma decimal por un punto antes de convertir el texto. |
| `if`, `else if`, `else` | Distinguir entre números, operaciones, borrado y resultado. |
| `===` | Comparar el texto del botón con valores como `"+"`, `"AC"` o `"="`. |
| `+`, `-`, `*`, `/`, `%` | Realizar las operaciones aritméticas. |
| `isNaN()` | Comprobar si un valor convertido no es un número válido. |
| `console.log()` | Mostrar información de depuración durante el desarrollo. |

---

## 19. Ejemplo de selección y detección de clics

El siguiente ejemplo reúne varios de los conceptos anteriores sin implementar todavía toda la lógica de la calculadora.

```javascript
const pantalla = document.getElementById("input");

const botones = document.querySelectorAll(".calculadora button");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        console.log("Botón pulsado:", valor);

        if (valor === "AC") {
            pantalla.value = "";
        } else if (valor === "=") {
            console.log("Calcular resultado");
        } else {
            console.log("Valor seleccionado:", valor);
        }
    });
});
```

En este ejemplo:

1. Seleccionamos la pantalla de la calculadora.
2. Seleccionamos todos los botones.
3. Recorremos los botones con `forEach()`.
4. Registramos un evento `click` para cada botón.
5. Obtenemos su texto mediante `textContent`.
6. Utilizamos condicionales para distinguir entre borrar, calcular y seleccionar otros valores.

**Importante:** este código es un ejemplo de manejo del DOM y de eventos. Todavía no realiza las operaciones matemáticas completas ni gestiona todos los casos de entrada de la calculadora.

---

## 20. Conclusión

Para realizar el ejercicio de la calculadora no es necesario memorizar todas las funciones de JavaScript. Lo más importante es comprender cómo se relacionan los elementos HTML con el código JavaScript.

Los pasos fundamentales son:

1. **Seleccionar los elementos** de la página con `getElementById()` y `querySelectorAll()`.
2. **Detectar las pulsaciones** utilizando `addEventListener()`.
3. **Recorrer los botones** mediante `forEach()`.
4. **Obtener los valores** de los botones con `textContent`.
5. **Leer y actualizar la pantalla** utilizando `value`.
6. **Convertir las cadenas en números** con `Number()`.
7. **Identificar las operaciones** mediante condicionales.
8. **Calcular el resultado** con los operadores aritméticos.
9. **Mostrar el resultado** modificando `pantalla.value`.

El resto de métodos y funciones sirven para ampliar los conocimientos de JavaScript y afrontar ejercicios más avanzados.