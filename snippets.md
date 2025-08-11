# Selectores js para manipular el DOM

## 1. Por ID

**Un ID es un identificador único que se asigna a un solo elemento en todo el documento HTML. Sirve para apuntar a ese elemento específico, y no debes repetirlo en la misma página.**

```html
<!-- Encabezado principal de la página -->
<h1 id="miId">Título principal</h1>
```

```javascript
document.getElementById('miId');
```


***

## 2. Por Clase

**Una clase es un atributo reutilizable que puedes asignar a múltiples elementos en la página. Permite agrupar elementos con características similares para aplicarles estilos o seleccionarlos juntos.**

```html
<!-- Párrafo con estilo especial -->
<p class="miClase">Párrafo 1</p>
<!-- Párrafo con estilo especial -->
<p class="miClase">Párrafo 2</p>
```

```javascript
document.getElementsByClassName('miClase');
```


***

## 3. Por Etiqueta

**La etiqueta (por ejemplo, div, p, h1) es el nombre del elemento HTML. Este selector selecciona todos los elementos de un tipo específico en la página.**

```html
<!-- Contenedor de contenido genérico -->
<div>Bloque 1</div>
<!-- Contenedor de contenido genérico -->
<div>Bloque 2</div>
```

```javascript
document.getElementsByTagName('div');
```


***

## 4. Primer elemento por selector CSS

**El selector CSS te permite acceder al primer elemento que cumple una condición (por clase, ID, etiqueta, atributo, etc.) usando la sintaxis de CSS directamente en JavaScript.**

```html
<!-- Este será el que selecciona -->
<p class="miClase">Primer párrafo</p>
<!-- Este se ignora por querySelector -->
<p class="miClase">Segundo párrafo</p>
```

```javascript
document.querySelector('.miClase');
```


***

## 5. Todos los elementos con un selector CSS

**Permite seleccionar todos los elementos que cumplen con una condición CSS, como una clase, atributo, o relación entre elementos. Devuelve una NodeList de todos los elementos encontrados.**

```html
<ul>
  <!-- Elemento de lista marcado -->
  <li class="seleccionado">Item 1</li>
  <!-- Elemento de lista sin clase -->
  <li>Item 2</li>
  <!-- Elemento de lista marcado -->
  <li class="seleccionado">Item 3</li>
</ul>
```

```javascript
document.querySelectorAll('li.seleccionado');
```


***

## 6. Selector de atributo

**Selecciona elementos por la presencia de un atributo HTML específico, como data-roles, title, alt, etc. Es útil para identificar elementos según metadatos personalizados.**

```html
<!-- Botón para rol administrador -->
<button data-rol="admin">Admin</button>
<!-- Botón para rol usuario -->
<button data-rol="usuario">Usuario</button>
```

```javascript
document.querySelectorAll('[data-rol]');
```


***

## 7. Selector por valor de atributo

**Selecciona elementos cuyo atributo concreto tiene un valor específico, como todos los inputs que sean de tipo texto.**

```html
<!-- Campo de texto -->
<input type="text" placeholder="Escribe tu nombre">
<!-- Campo de contraseña -->
<input type="password" placeholder="Contraseña">
```

```javascript
document.querySelectorAll('input[type="text"]');
```


***

## 8. Selector por pseudoclase

**Utiliza pseudoclases CSS para seleccionar elementos según su estado o posición, como el primer, último, hover, o focus.**

```html
<ul>
  <!-- Primer elemento de la lista -->
  <li>Primero</li>
  <!-- Segundo elemento -->
  <li>Segundo</li>
  <!-- Tercer elemento -->
  <li>Tercero</li>
</ul>
```

```javascript
document.querySelectorAll('li:first-child');
```


***

## 9. Selector de elementos hijos directos

**Selecciona elementos que son hijos directos de un elemento padre, lo que permite precisar aún más la relación estructural entre elementos.**

```html
<article>
  <!-- Hijo directo del artículo -->
  <p>Este párrafo será seleccionado</p>
  <div>
    <!-- Hijo del div, no del artículo -->
    <p>Este no será seleccionado</p>
  </div>
</article>
```

```javascript
document.querySelectorAll('article > p');
```


***

## 10. Selector múltiple

**Permite combinar varios criterios (etiqueta, clase, atributo, etc.) en una sola instrucción, para seleccionar diferentes tipos de elementos a la vez.**

```html
<!-- Encabezado principal -->
<h1>Título</h1>
<!-- Párrafo destacado -->
<p class="destacado">Texto importante</p>
<!-- Contenido oculto -->
<div hidden>Este div está oculto</div>
```

```javascript
document.querySelectorAll('h1, .destacado, [hidden]');
```
