# Estructuras de Datos en JavaScript

En este apartado vamos a ver las estructuras de datos básicas de JavaScript.

---

## 1. Arrays

Un array es una lista o caja dividida en casillas numeradas donde guardas varios datos ordenados. Se crea agrupando esos datos entre corchetes `[]` separados por comas, o usando un comando del lenguaje que reserva el espacio necesario en memoria para guardarlos. Permite almacenar una colección de datos a los que se puede acceder de forma aleatoria a través de sus índices.

### Métodos principales de Array

| Método | Descripción | Ejemplo | Parámetros |
| :--- | :--- | :--- | :--- |
| `push()` | Añade uno o más elementos al final del array. | `const lista = ["a"];`<br>`lista.push("b"); // ["a", "b"]` | Elemento(s) a añadir. |
| `splice()` | Añade, elimina o reemplaza elementos en una posición específica. | `const letras = ["a", "c"];`<br>`letras.splice(1, 0, "b"); // ["a", "b", "c"]` | `start`, `deleteCount`, `item1, item2...` |
| `at()` | Obtiene el valor almacenado en una posición (acepta índices negativos). | `const num = [10, 20, 30];`<br>`num.at(-1); // 30` | Índice (`index`). |
| `sort()` | Ordena los elementos del array *in-place* (modifica el original). | `const nums = [3, 1, 2];`<br>`nums.sort(); // [1, 2, 3]` | Función de comparación (opcional). |
| `find()` | Devuelve el primer elemento que cumple la condición dada. | `const nums = [5, 12, 8];`<br>`nums.find(x => x > 10); // 12` | Función callback. |
| `includes()` | Comprueba si el array contiene un determinado elemento. | `const frutas = ["manzana", "pera"];`<br>`frutas.includes("pera"); // true` | `elementToFind`, `fromIndex` (opcional). |
| `filter()` | Devuelve un nuevo array con todos los elementos que cumplen la condición. | `const nums = [1, 2, 3, 4];`<br>`nums.filter(x => x % 2 === 0); // [2, 4]` | Función callback. |

---

## 2. Set

El objeto **Set** permite almacenar valores únicos de cualquier tipo, ya sean valores primitivos o referencias a objetos. No permite elementos duplicados.

### Métodos y propiedades de Set

| Método / Propiedad | Descripción | Ejemplo | Parámetros |
| :--- | :--- | :--- | :--- |
| `size` | Devuelve el número de elementos únicos almacenados. | `const miSet = new Set([1, 2, 2]);`<br>`miSet.size; // 2` | Ninguno (Propiedad). |
| `add()` | Inserta un nuevo elemento con un valor especificado si no existe ya. | `const conjunto = new Set();`<br>`conjunto.add(10);` | `value` (valor a añadir). |
| `delete()` | Elimina un elemento específico del conjunto. | `conjunto.delete(10); // true` | `value` (valor a eliminar). |
| `has()` | Devuelve un bolano indicando si el elemento existe en el conjunto. | `conjunto.has(10); // false` | `value` (valor a buscar). |
| `clear()` | Elimina todos los elementos contenidos en el conjunto. | `conjunto.clear();` | Ninguno. |
| `forEach()` | Ejecuta una función por cada elemento presente en el Set. | `miSet.forEach(val => console.log(val));` | Función callback. |

---

## 3. Map

El objeto **Map** es equivalente al objeto `HashMap` de otros lenguajes como Java. Mantiene pares de **clave/valor** y recuerda el orden original de inserción de las claves. Cualquier valor (tanto objetos como valores primitivos) puede ser usado como clave o como valor.

### Métodos y propiedades de Map

| Método / Propiedad | Descripción | Ejemplo | Parámetros |
| :--- | :--- | :--- | :--- |
| `size` | Devuelve el número de parejas clave/valor en el mapa. | `const miMapa = new Map();`<br>`miMapa.size; // 0` | Ninguno (Propiedad). |
| `set()` | Establece o actualiza el valor para una clave dada. | `miMapa.set("nombre", "Juan");` | `key`, `value` |
| `get()` | Devuelve el valor asociado a la clave enviada, o `undefined` si no existe. | `miMapa.get("nombre"); // "Juan"` | `key` |
| `has()` | Devuelve un booleano indicando si la clave existe en el mapa. | `miMapa.has("nombre"); // true` | `key` |
| `delete()` | Elimina el par asociado a la clave especificada. | `miMapa.delete("nombre");` | `key` |
| `clear()` | Elimina todos los pares clave/valor del mapa. | `miMapa.clear();` | Ninguno. |

---

## 4. Cadenas como Arrays (Strings)

Las cadenas de texto (`String`) se comportan como arrays de caracteres UTF-16 de solo lectura. De modo que es posible acceder a los caracteres individuales de una cadena de los siguientes modos:

```javascript
let cadena = "hola mundo";
let h = cadena.charAt(0); // Obtengo la 'h' utilizando el método charAt
let o = cadena[1];        // Obtengo la 'o' utilizando el acceso con [] como si fuera un array