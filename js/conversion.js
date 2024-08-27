// Crear formulario
const formulario = document.createElement('form');
formulario.innerHTML = `
  <label for="precioUSD">Precio en USD:</label>
  <input type="number" id="precioUSD" required>
  <button type="submit">Convertir</button>
`;
document.body.appendChild(formulario);

// Valor del dólar fijo
const valorDolar = 800;

// Impuestos en formato JSON
const impuestos = {
  "IVA": 0.21,
  "PAIS": 0.08,
  "GANANCIAS": 0.30
};

// Evento para convertir precio
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const precioUSD = document.getElementById('precioUSD').value;
  const precioARS = convertirDolaresAPesos(precioUSD, valorDolar, impuestos);
  
  // Guardar precio en Local Storage
  localStorage.setItem('precioARS', precioARS);
  
  // Mostrar precio en HTML
  const resultado = document.createElement('p');
  resultado.textContent = `El precio en ARS es: $${precioARS.toFixed(2)}`;
  document.body.appendChild(resultado);
});

// Función para convertir dólares a pesos argentinos con impuestos
function convertirDolaresAPesos(precioUSD, valorDolar, impuestos) {
  const precioARS = precioUSD * valorDolar;
  const impuestoIVA = precioARS * impuestos.IVA;
  const impuestoPAIS = precioARS * impuestos.PAIS;
  const impuestoGANANCIAS = precioARS * impuestos.GANANCIAS;
  const precioFinal = precioARS + impuestoIVA + impuestoPAIS + impuestoGANANCIAS;
  return precioFinal;
}