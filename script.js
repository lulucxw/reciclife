// script.js

// Función para mostrar la sección seleccionada y ocultar las demás
function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(section => {
      section.classList.add('hidden');
    });
    document.getElementById(seccionId).classList.remove('hidden');
  }
  
  // Función para calcular el ahorro de agua, energía y CO₂
  function calcularAhorro() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const tipoMaterial = document.getElementById('material').value;
  
    if (isNaN(cantidad) || cantidad <= 0) {
      alert('Por favor, ingresa una cantidad válida.');
      return;
    }
  
    let ahorroAgua, ahorroEnergia, reduccionCO2;
  
    switch (tipoMaterial) {
      case 'papel':
        ahorroAgua = cantidad * 5;
        ahorroEnergia = cantidad * 2;
        reduccionCO2 = cantidad * 3;
        break;
      case 'carton':
        ahorroAgua = cantidad * 4;
        ahorroEnergia = cantidad * 1.5;
        reduccionCO2 = cantidad * 2.5;
        break;
      case 'plastico':
        ahorroAgua = cantidad * 2;
        ahorroEnergia = cantidad * 1;
        reduccionCO2 = cantidad * 1.5;
        break;
      default:
        alert('Tipo de material no válido');
        return;
    }
  
    document.getElementById('resultados').innerHTML = `
      <p>Ahorro de Agua: ${ahorroAgua} litros</p>
      <p>Ahorro de Energía: ${ahorroEnergia} kWh</p>
      <p>Reducción de CO₂: ${reduccionCO2} kg</p>
    `;
  }
  