function loadDescriptions() {
  fetch('planeta1.json')
    .then(response => response.json())
    .then(descriptions => {
      const selector1 = document.querySelector('.selector1');
      const selector2 = document.querySelector('.selector2');
      const selector3 = document.querySelector('.selector3');

      selector1.addEventListener('click', () => showOverlay('fuego/terrenos/fuego-cueva.png', descriptions['fuego/terrenos/fuego-cueva.png']));
      selector2.addEventListener('click', () => showOverlay('fuego/terrenos/fuego-playa.png', descriptions['fuego/terrenos/fuego-playa.png']));
      selector3.addEventListener('click', () => showOverlay('fuego/terrenos/fuego-montaña.png', descriptions['fuego/terrenos/fuego-montaña.png']));
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
  }
  
  function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }
  
  function visitPage() {
    // Redirigir al usuario a otra página
    window.location.href = 'otra_pagina.html';
  }
  
  // Llama a la función para cargar las descripciones
  loadDescriptions();
  