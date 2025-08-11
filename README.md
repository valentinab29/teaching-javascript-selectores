# Práctica: Manipulación del DOM con JavaScript y DummyJSON API

## Descripción de la actividad

En esta práctica, vas a aprender a usar selectores de JavaScript para manipular el DOM con datos reales obtenidos de la API de DummyJSON. Utilizarás fetch para obtener información de usuarios y aplicarás diferentes tipos de selectores para mostrar y modificar el contenido dinámicamente.

### Objetivos
- Aplicar selectores por ID, clase, etiqueta, atributos y pseudoclases con datos reales.
- Entender cómo hacer fetch a una API y usar los datos obtenidos.
- Aprender la notación del punto para acceder a propiedades de objetos JavaScript.
- Crear funciones que modifiquen el DOM basándose en datos externos.

### Conceptos clave: Notación del punto

Cuando obtienes datos de una API como DummyJSON, recibes objetos JavaScript con propiedades anidadas. Para acceder a estas propiedades usas la **notación del punto**:

#### Ejemplo de datos de usuario (ver `pruebas.json`):
```javascript
{
  "firstName": "Emily",
  "lastName": "Johnson", 
  "email": "emily.johnson@x.dummyjson.com",
  "address": {
    "city": "Phoenix",
    "state": "Mississippi",
    "country": "United States"
  },
  "hair": {
    "color": "Brown",
    "type": "Curly"
  },
  "company": {
    "name": "Dooley, Kozey and Cronin",
    "title": "Sales Manager"
  }
}
```

#### Cómo acceder a los datos:
```javascript
// Propiedades directas
data.firstName        // "Emily"
data.lastName         // "Johnson"
data.email           // "emily.johnson@x.dummyjson.com"

// Propiedades anidadas (objetos dentro de objetos)
data.address.city     // "Phoenix"
data.address.state    // "Mississippi"
data.address.country  // "United States"

// Objetos con múltiples niveles
data.hair.color       // "Brown"
data.hair.type        // "Curly"
data.company.name     // "Dooley, Kozey and Cronin"
data.company.title    // "Sales Manager"
```

### Instrucciones

1. **Explora el código base**: Revisa `script.js` para entender cómo funciona el fetch y la notación del punto.

2. **Prueba la funcionalidad**:
   - Abre la página en tu navegador
   - Haz clic en "Cargar Usuario desde API"
   - Abre la consola del navegador (F12) para ver los datos

3. **Experimenta con los selectores**:
   - Modifica el endpoint en la variable `endpoint` para cargar diferentes usuarios (1-30)
   - Observa cómo cada selector afecta diferentes elementos del DOM
   - Usa el botón "Cambiar Estilo" para ver todos los selectores en acción

4. **Tareas para practicar**:
   - Cambia el endpoint para cargar el usuario con ID 5: `'https://dummyjson.com/users/5'`
   - Agrega un nuevo selector que cambie el color de fondo de elementos con `data-tipo="personal"`
   - Crea una función que use `document.getElementsByTagName()` para estilizar todas las imágenes
   - Experimenta con selectores de pseudoclases como `:last-child` o `:nth-child(2)`

### Selectores utilizados en el proyecto

| Selector | Ejemplo | Descripción |
|----------|---------|-------------|
| `getElementById()` | `document.getElementById('usuario-nombre')` | Selecciona elemento por ID único |
| `getElementsByClassName()` | `document.getElementsByClassName('destacado')` | Selecciona elementos por clase CSS |
| `getElementsByTagName()` | `document.getElementsByTagName('p')` | Selecciona elementos por etiqueta HTML |
| `querySelector()` | `document.querySelector('.nav-item:first-child')` | Primer elemento que coincida con selector CSS |
| `querySelectorAll()` | `document.querySelectorAll('[data-seccion]')` | Todos los elementos que coincidan |
| Selector de atributo | `[data-seccion]` | Elementos con un atributo específico |
| Selector de hijo directo | `div > h3` | Elementos h3 que son hijos directos de div |
| Pseudoclases | `:first-child`, `:last-child` | Estados o posiciones especiales |
| Selector múltiple | `h2, h3, .badge` | Múltiples selectores separados por comas |

---

**Tip**: Usa siempre la consola del navegador para explorar la estructura de los datos antes de escribir tu código. Con `console.log(data)` puedes ver toda la información disponible.
