// Práctica: Selectores de JavaScript con datos dinámicos de DummyJSON
// En este archivo aprenderás a usar selectores para manipular el DOM con datos reales de una API

// Variables de colores del CSS (mantenemos la funcionalidad original)
const colores = [
  getComputedStyle(document.documentElement).getPropertyValue('--color-negro').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-amarillo').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-amarillo-claro').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-amarillo-neon').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-blanco').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-gris').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--color-texto').trim()
];

// ========== FUNCIONES PARA TRABAJAR CON LA API ==========

// Variable con el endpoint de la API - aquí defines qué usuario quieres obtener
const endpoint = 'https://dummyjson.com/users/1';

// Función simple para hacer fetch a la API (sin control de errores para simplicidad)
function obtenerDatosUsuario() {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      mostrarDatosEnConsola(data);
      actualizarInterfaz(data);
    });
}

// Función que muestra la respuesta de la API en la consola
function mostrarDatosEnConsola(data) {
  console.log('Datos completos del usuario:', data);
  console.log('Solo el nombre:', data.firstName);
  console.log('Solo el email:', data.email);
  console.log('Dirección completa:', data.address);
  console.log('Solo la ciudad:', data.address.city);
  console.log('Color del cabello:', data.hair.color);
}

// ========== SELECTORES PARA ACTUALIZAR LA INTERFAZ ==========

// Función que usa selectores para actualizar los elementos del DOM con los datos de la API
function actualizarInterfaz(usuario) {
  // Selector por ID - Cambia el nombre del usuario
  document.getElementById('usuario-nombre').textContent = `${usuario.firstName} ${usuario.lastName}`;
  
  // Selector por ID - Actualiza email y teléfono
  document.getElementById('usuario-email').textContent = usuario.email;
  document.getElementById('usuario-telefono').textContent = usuario.phone;
  document.getElementById('usuario-edad').textContent = `${usuario.age} años`;
  
  // Selector por ID - Actualiza la imagen (notación del punto para acceder a propiedades)
  document.getElementById('usuario-imagen').src = usuario.image;
  document.getElementById('usuario-imagen').alt = `Foto de ${usuario.firstName}`;
  
  // Selectores por ID - Información de la dirección (usando notación del punto)
  document.getElementById('direccion-calle').textContent = usuario.address.address;
  document.getElementById('direccion-ciudad').textContent = usuario.address.city;
  document.getElementById('direccion-estado').textContent = usuario.address.state;
  document.getElementById('direccion-codigo').textContent = usuario.address.postalCode;
  document.getElementById('direccion-pais').textContent = usuario.address.country;
  
  // Selectores por ID - Información laboral
  document.getElementById('empresa-nombre').textContent = usuario.company.name;
  document.getElementById('empresa-puesto').textContent = usuario.company.title;
  document.getElementById('empresa-departamento').textContent = usuario.company.department;
  
  // Selectores por ID - Características físicas (notación del punto para objetos anidados)
  document.getElementById('cabello-color').textContent = `Cabello: ${usuario.hair.color}`;
  document.getElementById('cabello-tipo').textContent = `Tipo: ${usuario.hair.type}`;
  document.getElementById('ojos-color').textContent = `Ojos: ${usuario.eyeColor}`;
  document.getElementById('grupo-sanguineo').textContent = `Sangre: ${usuario.bloodGroup}`;
}

// ========== EVENTOS Y SELECTORES INTERACTIVOS ==========

// Selector por ID para agregar evento al botón
document.getElementById('cargar-usuario').addEventListener('click', obtenerDatosUsuario);

// Selector por clase - Resalta todos los elementos con clase 'destacado'
function resaltarDestacados() {
  const destacados = document.getElementsByClassName('destacado');
  for (let elemento of destacados) {
    elemento.style.backgroundColor = colores[2]; // amarillo claro
    elemento.style.color = colores[0]; // negro
    elemento.style.padding = '10px';
    elemento.style.borderRadius = '5px';
  }
}

// Selector por atributo - Cambia estilo de elementos con data-seccion
function cambiarEstiloSecciones() {
  const secciones = document.querySelectorAll('[data-seccion]');
  secciones.forEach(seccion => {
    seccion.style.border = `2px solid ${colores[1]}`; // amarillo
    seccion.style.margin = '10px 0';
    seccion.style.padding = '15px';
  });
}

// Selector de tipo - Cambia estilo de todos los párrafos
function estilizarParrafos() {
  const parrafos = document.getElementsByTagName('p');
  for (let p of parrafos) {
    p.style.lineHeight = '1.6';
    p.style.fontSize = '16px';
  }
}

// Selector múltiple - Aplica estilos a varios elementos diferentes
function aplicarEstilosMultiples() {
  const elementos = document.querySelectorAll('h2, h3, .badge');
  elementos.forEach(el => {
    el.style.textShadow = '1px 1px 2px rgba(0,0,0,0.3)';
  });
}

// Selector de hijo directo - Estiliza solo los elementos h3 que son hijos directos de div
function estilizarTitulosDirectos() {
  const titulosDirectos = document.querySelectorAll('div > h3');
  titulosDirectos.forEach(titulo => {
    titulo.style.borderBottom = `2px solid ${colores[3]}`; // amarillo neón
    titulo.style.paddingBottom = '5px';
  });
}

// Evento para el botón de cambiar estilo
document.getElementById('cambiar-estilo').addEventListener('click', () => {
  resaltarDestacados();
  cambiarEstiloSecciones();
  estilizarParrafos();
  aplicarEstilosMultiples();
  estilizarTitulosDirectos();
  
  // Selector de pseudoclase - Cambia el color del primer elemento de navegación
  const primerNavItem = document.querySelector('.nav-item:first-child');
  if (primerNavItem) {
    primerNavItem.style.fontWeight = 'bold';
    primerNavItem.style.backgroundColor = colores[4]; // blanco
  }
  
  console.log('Estilos aplicados usando diferentes selectores');
});

// ========== INICIALIZACIÓN ==========

// Al cargar la página, aplicamos algunos estilos iniciales
document.addEventListener('DOMContentLoaded', () => {
  // Selector por ID - Mensaje inicial en consola
  console.log('Página cargada. Haz clic en "Cargar Usuario desde API" para ver los datos.');
  
  // Selector por clase - Estilo inicial para elementos destacados
  const destacados = document.getElementsByClassName('destacado');
  for (let elemento of destacados) {
    elemento.style.fontWeight = 'bold';
  }
});

// Función auxiliar para obtener color aleatorio (funcionalidad original)
function colorAleatorio() {
  return colores[Math.floor(Math.random() * colores.length)];
}
