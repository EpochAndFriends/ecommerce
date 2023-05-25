// Obtiene todos los contenedores de planetas
const planetContainers = document.querySelectorAll('.planet-container');

// Añade un controlador de eventos táctiles a cada contenedor de planeta
planetContainers.forEach((container) => {
  let touchStart = 0;
  let touchEnd = 0;

  container.addEventListener('touchstart', (event) => {
    event.stopPropagation(); // Evita que el evento se propague al documento

    touchStart = new Date().getTime();
  });

  container.addEventListener('touchend', (event) => {
    event.stopPropagation(); // Evita que el evento se propague al documento

    touchEnd = new Date().getTime();

    const touchDuration = touchEnd - touchStart;

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
      // Muestra la descripción y hace zoom en el planeta seleccionado con un toque rápido
      container.classList.add('zoomed');
      const planetInfo = container.querySelector('.planet-info');
      planetInfo.style.display = 'block';
    } else if (touchDuration >= 300 && touchDuration < 1000) {
      // Redirecciona al usuario a otra página con un toque largo
      const link = container.querySelector('a');
      const destination = link.getAttribute('href');
      window.location.href = destination;
    }
  });
});

// Añade un controlador de eventos al documento para ocultar las descripciones al hacer clic o tocar en cualquier otra parte
document.addEventListener('click', hideDescriptions);
document.addEventListener('touchstart', hideDescriptions);

function hideDescriptions(event) {
  // Oculta todas las descripciones de planetas
  const planetInfos = document.querySelectorAll('.planet-info');
  planetInfos.forEach((planetInfo) => {
    planetInfo.style.display = 'none';
  });

  // Remueve la clase "zoomed" de todos los contenedores de planetas
  planetContainers.forEach((container) => {
    container.classList.remove('zoomed');
  });
}
