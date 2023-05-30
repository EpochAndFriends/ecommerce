function loadDescriptions() {
  fetch('planeta1.json')
    .then(response => response.json())
    .then(descriptions => {
      const selector1 = document.querySelector('.selector1');
      const selector2 = document.querySelector('.selector2');
      const selector3 = document.querySelector('.selector3');

      selector1.addEventListener('click', () => showOverlay('../../imagenes/planetas/fuego/terrenos/cueva/fuego-cueva.png', descriptions['fuego-cueva.png']));
      selector2.addEventListener('click', () => showOverlay('../../imagenes/planetas/fuego/terrenos/playa/fuego-playa.png', descriptions['fuego-playa.png']));
      selector3.addEventListener('click', () => showOverlay('../../imagenes/planetas/fuego/terrenos/montaña/fuego-montaña.png', descriptions['fuego-montaña.png']));
    })
    .catch(error => console.log(error));
}

function showOverlay(imageSrc, description) {
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlay-image');
  const overlayDescription = document.getElementById('overlay-description');

  overlayImage.src = imageSrc;
  overlayDescription.textContent = description;

  overlay.style.display = 'flex';

  // Desplazar hacia el centro de la página
  overlay.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function hideOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

function visitPage() {
  const overlayImage = document.getElementById('overlay-image');

  // Obtener el nombre de la imagen de la ruta de la imagen desplegada
  const imageName = overlayImage.src.split('/').pop();

  // Redirigir al usuario a diferentes páginas según el nombre de la imagen
  if (imageName === 'fuego-cueva.png') {
    window.location.href = 'planetaFuegoCueva.html';
  } else if (imageName === 'fuego-playa.png') {
    window.location.href = './playa/planetaFuegoPlaya.html';
  } else if (imageName === 'fuego-montaña.png') {
    window.location.href = 'planetaFuegoMontania.html';
  }
}


// Llama a la función para cargar las descripciones
loadDescriptions();
