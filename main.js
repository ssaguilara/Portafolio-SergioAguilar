// Funciones para manejar el menú responsive
const menu = document.querySelector(".menu");
const iconoNav = document.querySelector(".icono-nav");
const iconoClose = document.querySelector(".menu div");
const linkMenu = document.querySelectorAll(".menu a");

iconoNav.addEventListener("click", toggleMenu);
iconoClose.addEventListener("click", closeMenu);
linkMenu.forEach(element => element.addEventListener("click", closeMenu));
window.addEventListener("resize", () => {
  if (window.innerWidth > 500) closeMenu();
});

function toggleMenu() {
  menu.classList.toggle("responsive");
}

function closeMenu() {
  menu.classList.remove("responsive");
}

// Función para manejar el scroll
window.addEventListener("scroll", () => {
  const contacto = document.querySelector(".contacto");
  const contactoTitulo = document.querySelector(".contacto-titulo");
  const contactoContenido = document.querySelectorAll(".contacto-contenido");
  const footerLower = document.querySelector(".footer-lower");
  const scrollPosition = document.documentElement.scrollTop;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollPosition >= totalHeight - 10) {
    contacto.style.zIndex = 1;
    footerLower.style.display = "none";
    contactoTitulo.classList.add("titulo-animaciones");
    contactoContenido.forEach(element => {
      element.classList.add("contenido-animaciones");
    });
  } else {
    contacto.style.zIndex = -1;
    footerLower.style.display = "flex";
    contactoTitulo.classList.remove("titulo-animaciones");
    contactoContenido.forEach(element => {
      element.classList.remove("contenido-animaciones");
    });
  }
});

// Función para desplazarse al hacer clic en el enlace de contacto
linkMenu[3].addEventListener('click', contactoMove);


function contactoMove() {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  window.scrollTo({
    top: totalHeight,
    behavior: 'auto'
  });
}

// Funciones para cambiar el slider
const sliders = document.querySelectorAll(".slider__body");
const arrowNext = document.querySelector("#next");
const arrowBefore = document.querySelector("#before");
let currentElement = Number(document.querySelector(".slider__body--show").dataset.id);

arrowNext.addEventListener("click", () => changePosition(1));
arrowBefore.addEventListener("click", () => changePosition(-1));

function changePosition(change) {
  let value = currentElement + change;

  if (value === -1 || value === sliders.length) {
    value = (value === -1 ? sliders.length - 1 : 0);
  }

  sliders[currentElement].classList.toggle("slider__body--show");
  sliders[value].classList.toggle("slider__body--show");
  currentElement = value;
}

// Funciones para cambiar el tema
const themeBlue = document.querySelector(".theme--blue");
const themeGreen = document.querySelector(".theme--green");
const themeRed = document.querySelector(".theme--red");
const btnChangeTheme = document.querySelector(".change-theme");

themeBlue.addEventListener('click', () => changeTheme('--color-tono', '200'));
themeGreen.addEventListener('click', () => changeTheme('--color-tono', '150'));
themeRed.addEventListener('click', () => changeTheme('--color-tono', '355'));

btnChangeTheme.addEventListener("click", toggleTheme);

function toggleTheme() {
  btnChangeTheme.classList.toggle("uil-sun");
  const fondo = btnChangeTheme.classList.contains("uil-sun") ? '#000' : '#fff';
  const letra = btnChangeTheme.classList.contains("uil-sun") ? '#fff' : '#000';

  document.documentElement.style.setProperty('--color-fondo', fondo);
  document.documentElement.style.setProperty('--color-letra', letra);
}

function changeTheme(property, value) {
  document.documentElement.style.setProperty(property, value);
}