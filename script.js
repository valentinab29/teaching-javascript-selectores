// Funciones para manipular el DOM usando selectores



// Array de variables de color definidas en styles.css
const colores = [
  getComputedStyle(document.documentElement).getPropertyValue('--color-negro').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-amarillo').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-amarillo-claro').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-amarillo-neon').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-blanco').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-gris').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-texto').trim()
];

// Cambia el título de la marca por el nombre que elijas
document.getElementById('brand-title').textContent = 'Mi Marca Elegida';

// Resalta el primer elemento de navegación
const primerNav = document.querySelector('.nav-item');
primerNav.style.backgroundColor = colores[2]; // --color-amarillo-claro
primerNav.style.color = colores[6]; // --color-texto

// Cambia el color de todos los elementos con la clase 'destacado'
const destacados = document.getElementsByClassName('destacado');
for (let el of destacados) {
  el.style.color = colores[0]; // --color-negro
  el.style.backgroundColor = colores[2]; // --color-amarillo-claro
}

// Oculta el div con el atributo hidden (si existiera)
const ocultos = document.querySelectorAll('[hidden]');
ocultos.forEach(el => el.style.display = 'none');



// Función para obtener un color aleatorio del array de colores
function colorAleatorio() {
  return colores[Math.floor(Math.random() * colores.length)];
}

// Función para obtener texto aleatorio para la imagen
function textoAleatorio() {
  const textos = [
    'Imagen+Marca',
    'Producto',
    'Oferta',
    'Nuevo',
    'Destacado',
    'Promo',
    'Exclusivo'
  ];
  return textos[Math.floor(Math.random() * textos.length)];
}

// Evento para el botón Call to Action
document.getElementById('call-to-action').addEventListener('click', () => {
  // Cambia colores y src de las imágenes
  const imgMarca = document.getElementById('img-marca');
  const imgProducto = document.getElementById('img-producto');
  const textoMarca = document.getElementById('texto-marca');
  const textoProducto = document.getElementById('texto-producto');

  // Colores aleatorios
  const fondo = colorAleatorio();
  const texto = colorAleatorio();
  const fondo2 = colorAleatorio();
  const texto2 = colorAleatorio();

  // Cambia fondo y color de texto de los bloques
  textoMarca.style.backgroundColor = fondo;
  textoMarca.style.color = texto;
  textoProducto.style.backgroundColor = fondo2;
  textoProducto.style.color = texto2;

  // Cambia el src de las imágenes con texto aleatorio
  imgMarca.src = `https://placehold.co/300x150.png?text=${textoAleatorio()}`;
  imgProducto.src = `https://placehold.co/200x100.png?text=${textoAleatorio()}`;
});

// Resalta el primer elemento de la lista de navegación usando pseudoclase
const primerLi = document.querySelector('li:first-child');
primerLi.style.fontSize = '1.2em';
primerLi.style.color = colores[1]; // --color-amarillo

// Selecciona y cambia el color de los botones por rol
const botonesAdmin = document.querySelectorAll('button[data-rol="admin"]');
botonesAdmin.forEach(btn => {
  btn.style.backgroundColor = colores[1]; // --color-amarillo
  btn.style.color = colores[6]; // --color-texto
  btn.style.borderColor = colores[3]; // --color-amarillo-neon
});

// Ejemplo de selector de hijo directo
const hijosDirectos = document.querySelectorAll('article > p');
hijosDirectos.forEach(p => p.style.border = `2px dashed ${colores[2]}`); // --color-amarillo-claro

// Selector múltiple: cambia el fondo de h1, .destacado y [hidden]
const multi = document.querySelectorAll('h1, .destacado, [hidden]');
multi.forEach(el => el.style.background = colores[5]); // --color-gris
