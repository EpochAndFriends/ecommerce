// Obtiene todos los contenedores de planetas
const planetContainers = document.querySelectorAll('.planet-container');

// Variables para controlar el estado del toque y clic
let touchStartTime = 0;
let touchEndTime = 0;
let clickCount = 0;

// Añade un controlador de eventos táctiles a cada contenedor de planeta
planetContainers.forEach((container) => {
  container.addEventListener('touchstart', (event) => {
    event.stopPropagation(); // Evita que el evento se propague al documento
    touchStartTime = new Date().getTime();
  });

  container.addEventListener('touchend', (event) => {
    event.stopPropagation(); // Evita que el evento se propague al documento
    touchEndTime = new Date().getTime();
    handleTouch();
  });

  container.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el evento se propague al documento
    clickCount++;
    handleClick();
  });
});

// Añade un controlador de eventos al documento para ocultar las descripciones al hacer clic o tocar en cualquier otra parte
document.addEventListener('click', hideDescriptions);
document.addEventListener('touchstart', hideDescriptions);

function handleTouch() {
  const touchDuration = touchEndTime - touchStartTime;

  // Oculta todas las descripciones de planetas
  const planetInfos = document.querySelectorAll('.planet-info');
  planetInfos.forEach((planetInfo) => {
    planetInfo.style.display = 'none';
  });

  // Remueve la clase "zoomed" de todos los contenedores de planetas
  planetContainers.forEach((container) => {
    container.classList.remove('zoomed');
  });

  if (touchDuration < 300) {
    // Redirecciona al usuario a otra página con un toque rápido
    const container = event.target.closest('.planet-container');
    const link = container.querySelector('a');
    const destination = link.getAttribute('href');
    window.location.href = destination;
  }
}

function handleClick() {
  if (clickCount === 1) {
    // Muestra la descripción y hace zoom en el planeta seleccionado con un solo clic
    const container = event.target.closest('.planet-container');
    container.classList.add('zoomed');
    const planetInfo = container.querySelector('.planet-info');
    planetInfo.style.display = 'block';
  }
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

  // Reinicia el estado del toque y el contador de clics
  touchStartTime = 0;
  touchEndTime = 0;
  clickCount = 0;
}

