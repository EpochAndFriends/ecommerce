// Obtener una referencia al elemento de descripción
const descripcionPlaneta = document.getElementById('descripcion-planeta');

// Agregar un evento de clic al documento
document.addEventListener('click', function(event) {
  // Verificar si el clic ocurrió fuera del elemento de descripción
  if (!descripcionPlaneta.contains(event.target)) {
    // Si el clic fue fuera del elemento, ocultar la descripción
    descripcionPlaneta.style.display = 'none';
  }
});

// Obtener una referencia a todos los elementos de planeta
const planetas = document.querySelectorAll('.planeta');

// Agregar un evento de clic a cada elemento de planeta
planetas.forEach(function(planeta) {
  planeta.addEventListener('click', function() {
    // Obtener el atributo "data-descripcion" del planeta seleccionado
    const descripcion = planeta.getAttribute('data-descripcion');

    // Actualizar la descripción del planeta
    descripcionPlaneta.textContent = descripcion;
    descripcionPlaneta.style.display = 'block';
  });
});
