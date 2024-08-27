const btnMenu = document.getElementById('btn-menu');
const menuDesplegable = document.getElementById('menu-desplegable');

// Agregar logo
const logo = document.createElement('img');
logo.src = '/imagenes/icon.png';
logo.className = 'logo';
document.getElementById('nav').appendChild(logo);

// Agregar links al nav
const links = [
  { texto: 'Inicio', href: '/index.html' },
  { texto: 'comparador', href: 'html/comparador.html' },
  { texto: 'conversion', href: 'html/conversion.html' },
];

links.forEach((link) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = link.texto;
  a.href = link.href;
  li.appendChild(a);
  menuDesplegable.appendChild(li);
});

btnMenu.addEventListener('click', () => {
  menuDesplegable.classList.toggle('mostrar');
});

window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    btnMenu.style.display = 'block';
  } else {
    btnMenu.style.display = 'none';
  }
});
