# El DOM en JavaScript

En este apartado vamos a ver los conceptos básicos del **DOM (Document Object Model)** en JavaScript. El DOM permite acceder a los elementos de una página HTML, modificarlos, crear nuevos elementos y gestionar los eventos que ocurren durante la interacción del usuario con la página.

---

## 1. Carga de scripts

Los scripts permiten ejecutar código JavaScript dentro de una página HTML. La forma en que se cargan determina cuándo se ejecuta el código.

### Tipos de carga de scripts

| Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `<script>` | El código se ejecuta cuando el navegador encuentra la etiqueta durante el procesamiento del HTML. | `<script>console.log("Hola");</script>` |
| `<script src="ejemplo.js">` | Carga y ejecuta un archivo JavaScript externo cuando el navegador encuentra la etiqueta. | `<script src="ejemplo.js"></script>` |
| `async` | Descarga el archivo en segundo plano y lo ejecuta cuando termina la descarga, sin garantizar el orden respecto a otros scripts. | `<script src="ejemplo.js" async></script>` |
| `defer` | Descarga el archivo en segundo plano y lo ejecuta cuando termina de procesarse el HTML, manteniendo el orden entre scripts diferidos. | `<script src="ejemplo.js" defer></script>` |
| `type="module"` | Permite utilizar módulos JavaScript. Los módulos se ejecutan de forma diferida por defecto. | `<script type="module" src="ejemplo.js"></script>` |

---

## 2. Interfaces importantes

El DOM proporciona diferentes interfaces para acceder al documento HTML y trabajar con sus elementos.

| Objeto | Descripción |
| :--- | :--- |
| `window` | Objeto global del navegador. Proporciona acceso a diferentes funcionalidades del navegador, incluidos los objetos del DOM y del BOM. |
| `document` | Representa el documento HTML cargado en el navegador y permite acceder a sus elementos y modificarlos. |

---

## 3. Funciones para buscar nodos

Los métodos de búsqueda permiten localizar elementos del documento HTML mediante su identificador, etiqueta, nombre, clase CSS o selector.

### Métodos principales de búsqueda

| Método | Descripción | Ejemplo | Retorno |
| :--- | :--- | :--- | :--- |
| `getElementById()` | Busca un elemento por su identificador (`id`). | `document.getElementById("titulo");` | `Element` o `null`. |
| `getElementsByTagName()` | Obtiene los elementos que tienen una etiqueta determinada. | `document.getElementsByTagName("p");` | `HTMLCollection` |
| `getElementsByName()` | Obtiene los elementos cuyo atributo `name` coincide con el indicado. | `document.getElementsByName("usuario");` | `NodeList` |
| `getElementsByClassName()` | Obtiene los elementos que tienen una clase CSS determinada. | `document.getElementsByClassName("activo");` | `HTMLCollection` |
| `querySelector()` | Devuelve el primer elemento que coincide con el selector CSS indicado. | `document.querySelector(".activo");` | `Element` o `null`. |
| `querySelectorAll()` | Devuelve todos los elementos que coinciden con el selector CSS indicado. | `document.querySelectorAll("p");` | `NodeList` |

### Ejemplo de uso

```javascript
const titulo = document.getElementById("titulo");
const parrafos = document.getElementsByTagName("p");
const activo = document.querySelector(".activo");
const elementos = document.querySelectorAll(".elemento");
```

**Nota:** `HTMLCollection` y `NodeList` permiten recorrer colecciones de nodos. Algunas colecciones son dinámicas y otras son estáticas. Por ejemplo, `getElementsByClassName()` devuelve una colección dinámica, mientras que `querySelectorAll()` devuelve una lista estática.

---

## 4. Atributos y propiedades de los nodos

Una vez localizado un elemento, podemos consultar o modificar su contenido y sus propiedades.

### Propiedades principales

| Propiedad | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `className` | Permite consultar o modificar el contenido del atributo `class` de un elemento. | `elemento.className = "activo";` |
| `innerText` | Obtiene o modifica el texto renderizado de un elemento. | `elemento.innerText = "Hola";` |
| `textContent` | Obtiene o modifica el texto del elemento y sus descendientes, sin interpretar el contenido como HTML. | `elemento.textContent = "Nuevo texto";` |
| `innerHTML` | Obtiene o modifica el contenido HTML interno de un elemento. | `elemento.innerHTML = "<strong>Hola</strong>";` |

### Ejemplo de uso

```javascript
const titulo = document.getElementById("titulo");

titulo.textContent = "Nuevo título";
titulo.className = "destacado";
titulo.innerHTML = "<strong>Título importante</strong>";
```

**Importante:** `innerHTML` interpreta el contenido como HTML y puede introducir vulnerabilidades si se utiliza con datos no confiables. Para insertar texto sin interpretarlo como HTML, es preferible utilizar `textContent`.

---

## 5. Gestión de eventos

Un evento es algo que ocurre durante la interacción con una página web o como consecuencia de las acciones del navegador.

Algunos ejemplos son hacer clic en un botón, pulsar una tecla, enviar un formulario o terminar de cargar una página.

JavaScript permite detectar estos eventos y ejecutar una función cuando se producen.

### Eventos principales

| Evento | Descripción |
| :--- | :--- |
| `load` | Se produce cuando se ha terminado de cargar un recurso, como una imagen, o la ventana y sus recursos. |
| `click` | Se produce cuando se hace clic en un elemento. |
| `dblclick` | Se produce cuando se hace doble clic en un elemento. |
| `mousedown` | Se produce cuando se pulsa un botón del ratón sobre un elemento. |
| `mouseup` | Se produce cuando se suelta un botón del ratón sobre un elemento. |
| `keydown` | Se produce cuando se pulsa una tecla. |
| `keyup` | Se produce cuando se suelta una tecla. |
| `submit` | Se produce cuando se intenta enviar un formulario. |
| `focusin` | Se produce cuando el foco entra en un elemento. |
| `change` | Se produce cuando cambia el valor de un elemento y se confirma el cambio según el comportamiento de ese control. |
| `focusout` | Se produce cuando el foco sale de un elemento. |
| `blur` | Se produce cuando un elemento pierde el foco. |

---

## 6. Asignar un gestor de eventos

Un gestor de eventos es una función que se ejecuta cuando ocurre un evento determinado.

Existen diferentes formas de asociar una función a un evento.

### Mediante atributos HTML

Podemos indicar la función directamente en el código HTML.

```html
<input id="entrada" onchange="miFuncion()">
```

Este método mezcla el código HTML con JavaScript, por lo que no suele ser la opción preferida.

### Mediante una propiedad del elemento

Podemos asignar una función a una propiedad del elemento.

```javascript
document.getElementById("entrada").onchange = miFuncion;
```

Esta forma permite asignar un gestor de eventos, pero una nueva asignación a la misma propiedad sustituye a la anterior.

### Mediante `addEventListener()`

Es la forma preferida para registrar gestores de eventos, ya que permite asociar varios gestores al mismo evento.

```javascript
document.getElementById("entrada").addEventListener("change", miFuncion);
```

También podemos pasar directamente una función flecha como segundo argumento.

```javascript
document.getElementById("entrada").addEventListener("change", (evento) => {
    console.log("El valor ha cambiado");
});
```

### Método principal

| Método | Descripción | Parámetros |
| :--- | :--- | :--- |
| `addEventListener()` | Registra una función para que se ejecute cuando ocurra un evento. | `type`, `listener` y opciones opcionales. |

---

## 7. Implementar un gestor de eventos

Un gestor de eventos es una función que puede recibir como argumento un objeto que describe lo ocurrido. Este objeto suele denominarse `evento` y proporciona información sobre el evento que se ha producido.

Por ejemplo, en un clic podemos consultar el elemento sobre el que se ha actuado.

```javascript
function onEntradaClick(evento) {
    console.log("Se ha producido un clic");
    console.log(evento.target);
}

document.getElementById("entrada").addEventListener("click", onEntradaClick);
```

### Propiedades importantes del objeto `Event`

| Propiedad | Descripción |
| :--- | :--- |
| `target` | Elemento en el que se originó el evento. |
| `currentTarget` | Elemento al que está asociado el gestor que se está ejecutando. |
| `type` | Tipo de evento que se ha producido. |
| `defaultPrevented` | Indica si se ha cancelado la acción predeterminada del evento. |

El objeto recibido puede ser una instancia de distintas clases, dependiendo del evento que se haya producido.

---

## 8. Funciones importantes en los eventos

Existen métodos que permiten controlar el comportamiento de los eventos.

| Método | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `preventDefault()` | Cancela la acción predeterminada de un evento cuando este permite cancelarla. | `evento.preventDefault();` |
| `stopPropagation()` | Detiene la propagación del evento hacia otros elementos. | `evento.stopPropagation();` |

### Ejemplo de uso

```javascript
document.getElementById("formulario").addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log("Se evita el envío tradicional del formulario");
});
```

En este ejemplo se evita que el formulario se envíe mediante su comportamiento predeterminado.

---

## 9. Otras funciones interesantes

Además de los métodos relacionados con el DOM y los eventos, JavaScript dispone de funciones útiles para ejecutar código y programar tareas.

| Función | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `eval()` | Evalúa una cadena como código JavaScript. Su uso debe evitarse cuando existen alternativas más seguras. | `eval("2 + 3"); // 5` |
| `setTimeout()` | Programa la ejecución de una función después de un tiempo determinado, expresado en milisegundos. | `setTimeout(() => console.log("Hola"), 1000);` |
| `clearTimeout()` | Cancela una ejecución programada con `setTimeout()` que todavía no se ha ejecutado. | `const id = setTimeout(miFuncion, 1000);`<br>`clearTimeout(id);` |

---

## 10. Resumen de conceptos principales

| Concepto | Utilidad |
| :--- | :--- |
| `document` | Acceder al documento HTML. |
| `getElementById()` | Buscar un elemento por su identificador. |
| `querySelector()` | Buscar el primer elemento que coincide con un selector CSS. |
| `querySelectorAll()` | Buscar todos los elementos que coinciden con un selector CSS. |
| `textContent` | Consultar o modificar el texto de un elemento. |
| `innerHTML` | Consultar o modificar el contenido HTML de un elemento. |
| `addEventListener()` | Asociar una función a un evento. |
| `event.target` | Obtener el elemento donde se originó el evento. |
| `preventDefault()` | Evitar la acción predeterminada de un evento cancelable. |
| `stopPropagation()` | Detener la propagación de un evento. |
| `setTimeout()` | Programar la ejecución de una función. |
| `clearTimeout()` | Cancelar un temporizador pendiente. |