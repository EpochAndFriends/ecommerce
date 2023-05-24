// Obtiene todos los contenedores de planetas
const planetContainers = document.querySelectorAll('.planet-container');

// Añade un controlador de eventos a cada contenedor de planeta
planetContainers.forEach((container) => {
  let clickCount = 0;

  container.addEventListener('click', (event) => {
    event.preventDefault();

    clickCount++;

    if (clickCount === 1) {
      // Hacer zoom en el planeta (agregar la lógica necesaria)
      container.classList.add('zoomed');
      const planetInfo = container.querySelector('.planet-info');
      planetInfo.style.display = 'block';
    } else if (clickCount === 2) {
      // Redireccionar al usuario a otro link
      const link = container.querySelector('a');
      const destination = link.getAttribute('href');
      window.location.href = destination;
    }
  });
});