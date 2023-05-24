// Obtiene todos los contenedores de planetas
const planetContainers = document.querySelectorAll('.planet-container');

// Añade un controlador de eventos a cada contenedor de planeta
planetContainers.forEach((container) => {
  container.addEventListener('click', (event) => {
    event.preventDefault();

    // Oculta todas las descripciones de planetas
    const planetInfos = document.querySelectorAll('.planet-info');
    planetInfos.forEach((planetInfo) => {
      planetInfo.style.display = 'none';
    });

    // Remueve la clase "zoomed" de todos los contenedores de planetas
    planetContainers.forEach((container) => {
      container.classList.remove('zoomed');
    });

    // Muestra la descripción y hace zoom en el planeta seleccionado
    container.classList.add('zoomed');
    const planetInfo = container.querySelector('.planet-info');
    planetInfo.style.display = 'block';
  });

  container.addEventListener('dblclick', (event) => {
    // Redirecciona al usuario a otra página al hacer doble clic
    const link = container.querySelector('a');
    const destination = link.getAttribute('href');
    window.location.href = destination;
  });
});
