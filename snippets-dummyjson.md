# Snippets útiles para la práctica con DummyJSON

## Endpoints de DummyJSON que puedes usar

```javascript
// Usuarios específicos
const endpoint = 'https://dummyjson.com/users/1';    // Usuario con ID 1
const endpoint = 'https://dummyjson.com/users/5';    // Usuario con ID 5
const endpoint = 'https://dummyjson.com/users/10';   // Usuario con ID 10

// Otros endpoints interesantes
const endpoint = 'https://dummyjson.com/products/1';  // Producto específico
const endpoint = 'https://dummyjson.com/posts/1';     // Post específico
const endpoint = 'https://dummyjson.com/quotes/1';    // Cita específica
```

## Ejemplos de selectores para practicar

### Selectores básicos
```javascript
// Por ID
document.getElementById('mi-elemento');

// Por clase (devuelve HTMLCollection)
document.getElementsByClassName('mi-clase');

// Por etiqueta (devuelve HTMLCollection)
document.getElementsByTagName('div');

// Primer elemento que coincida
document.querySelector('.mi-clase');

// Todos los elementos que coincidan (devuelve NodeList)
document.querySelectorAll('.mi-clase');
```

### Selectores de atributo
```javascript
// Elementos con un atributo específico
document.querySelectorAll('[data-seccion]');

// Elementos con un valor específico de atributo
document.querySelectorAll('[data-seccion="address"]');

// Elementos con atributo que empiece con un valor
document.querySelectorAll('[data-seccion^="user"]');

// Elementos con atributo que termine con un valor
document.querySelectorAll('[data-seccion$="info"]');

// Elementos con atributo que contenga un valor
document.querySelectorAll('[data-seccion*="contact"]');
```

### Pseudoclases útiles
```javascript
// Primer hijo
document.querySelector('li:first-child');

// Último hijo
document.querySelector('li:last-child');

// Enésimo hijo (2do en este caso)
document.querySelector('li:nth-child(2)');

// Elementos pares
document.querySelectorAll('li:nth-child(even)');

// Elementos impares
document.querySelectorAll('li:nth-child(odd)');

// Primer elemento de su tipo
document.querySelector('p:first-of-type');
```

### Selectores de relación
```javascript
// Hijos directos
document.querySelectorAll('div > p');

// Todos los descendientes
document.querySelectorAll('div p');

// Hermano adyacente (siguiente)
document.querySelectorAll('h2 + p');

// Hermanos siguientes
document.querySelectorAll('h2 ~ p');
```

### Selectores múltiples
```javascript
// Varios selectores separados por comas
document.querySelectorAll('h1, h2, h3');
document.querySelectorAll('.destacado, .importante, .resaltado');
document.querySelectorAll('#titulo, .subtitulo, [data-especial]');
```

## Ejemplos de manipulación del DOM

### Cambiar contenido
```javascript
// Cambiar texto
elemento.textContent = 'Nuevo texto';

// Cambiar HTML interno
elemento.innerHTML = '<strong>Texto en negrita</strong>';

// Cambiar atributos
elemento.setAttribute('src', 'nueva-imagen.jpg');
elemento.alt = 'Nueva descripción';
```

### Cambiar estilos
```javascript
// Estilos individuales
elemento.style.color = 'red';
elemento.style.backgroundColor = 'yellow';
elemento.style.fontSize = '20px';

// Múltiples estilos
elemento.style.cssText = 'color: red; background: yellow; font-size: 20px;';
```

### Trabajar con clases
```javascript
// Agregar clase
elemento.classList.add('nueva-clase');

// Quitar clase
elemento.classList.remove('clase-vieja');

// Alternar clase
elemento.classList.toggle('activo');

// Verificar si tiene clase
if (elemento.classList.contains('destacado')) {
    // hacer algo
}
```

## Patrones útiles para trabajar con APIs

### Función fetch básica
```javascript
function obtenerDatos(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Usar los datos aquí
        });
}
```

### Función para actualizar elemento específico
```javascript
function actualizarElemento(selector, valor) {
    const elemento = document.querySelector(selector);
    if (elemento) {
        elemento.textContent = valor;
    }
}

// Uso:
actualizarElemento('#usuario-nombre', data.firstName);
```

### Función para aplicar estilos a múltiples elementos
```javascript
function aplicarEstiloAGrupo(selector, estilos) {
    const elementos = document.querySelectorAll(selector);
    elementos.forEach(elemento => {
        Object.assign(elemento.style, estilos);
    });
}

// Uso:
aplicarEstiloAGrupo('.destacado', {
    backgroundColor: 'yellow',
    color: 'black',
    padding: '10px'
});
```

## Ejercicios adicionales para practicar

1. **Cambiar endpoint**: Modifica la variable `endpoint` para cargar diferentes usuarios (IDs 1-30).

2. **Selector personalizado**: Crea un selector que cambie el estilo de todos los elementos que tengan un atributo `data-tipo`.

3. **Pseudoclases**: Usa `:nth-child(odd)` para cambiar el color de fondo de elementos alternos.

4. **Selectores de relación**: Usa `div > h3` para estilizar solo los h3 que son hijos directos de div.

5. **Función reutilizable**: Crea una función que reciba un selector y un objeto de estilos, y los aplique a todos los elementos que coincidan.

6. **Datos anidados**: Practica accediendo a datos anidados como `data.company.address.city` si existen en la respuesta de la API.
