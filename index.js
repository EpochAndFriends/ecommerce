// Obtiene todos los contenedores de planetas
const planetContainers = document.querySelectorAll('.planet-container');

// Variables para controlar el estado del toque y el doble toque
let touchStartTime = 0;
let touchEndTime = 0;
let touchTimeout;

// Añade un controlador de eventos táctiles a cada contenedor de planeta
planetContainers.forEach((container) => {
  container.addEventListener('touchstart', (event) => {
    event.stopPropagation(); // Evita que el evento se propague al documento
    touchStartTime = new Date().getTime();
  });

  container.addEventListener('touchend', (event) => {
    event.stopPropagation(); // Evita que el evento se propague al documento
    touchEndTime = new Date().getTime();

    if (touchTimeout) {
      // Si hay un temporizador en espera, significa que se ha realizado un doble toque
      clearTimeout(touchTimeout);
      handleDoubleTap(container);
    } else {
      // Si no hay un temporizador en espera, se inicia uno para esperar un posible doble toque
      touchTimeout = setTimeout(() => {
        handleSingleTap(container);
        touchTimeout = null;
      }, 300);
    }
  });
});

// Añade un controlador de eventos al documento para ocultar las descripciones al hacer clic o tocar en cualquier otra parte
document.addEventListener('click', hideDescriptions);
document.addEventListener('touchstart', hideDescriptions);

function handleSingleTap(container) {
  // Oculta todas las descripciones de planetas
  const planetInfos = document.querySelectorAll('.planet-info');
  planetInfos.forEach((planetInfo) => {
    planetInfo.style.display = 'none';
  });

  // Remueve la clase "zoomed" de todos los contenedores de planetas
  planetContainers.forEach((container) => {
    container.classList.remove('zoomed');
  });

  // Muestra la descripción y hace zoom en el planeta seleccionado con un toque único
  container.classList.add('zoomed');
  const planetInfo = container.querySelector('.planet-info');
  planetInfo.style.display = 'block';
}

function handleDoubleTap(container) {
  // Redirecciona al usuario a otra página con un doble toque
  const link = container.querySelector('a');
  const destination = link.getAttribute('href');
  window.location.href = destination;
}

function hideDescriptions() {
  // Oculta todas las descripciones de planetas
  const planetInfos = document.querySelectorAll('.planet-info');
  planetInfos.forEach((planetInfo) => {
    planetInfo.style.display = 'none';
  });

  // Remueve la clase "zoomed" de todos los contenedores de planetas
  planetContainers.forEach((container) => {
    container.classList.remove('zoomed');
  });

  // Reinicia el estado del toque y el temporizador
  touchStartTime = 0;
  touchEndTime = 0;
  clearTimeout(touchTimeout);
  touchTimeout = null;
}
