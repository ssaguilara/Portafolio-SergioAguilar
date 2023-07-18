const iconoNav = document.querySelector(".icono-nav");
const menu = document.querySelector(".menu");
const iconoClose = document.querySelector(".menu div");
const linkMenu = [...document.querySelectorAll(".menu a")]

iconoNav.addEventListener("click", responsiveMenu);

function responsiveMenu() {
  menu.classList.toggle("responsive");
}

iconoClose.addEventListener("click", closeMenu);
linkMenu.forEach(element => {element.addEventListener("click", closeMenu)});
window.addEventListener("resize", function () {
  if (window.innerWidth > 500)
  closeMenu(); 

});

function closeMenu() {
  menu.classList.remove("responsive")
}


window.addEventListener("scroll", function () {
  const contacto = document.querySelector(".contacto");
  const contactoTitulo = document.querySelector(".contacto-titulo");
  const contactoContenido = [
    ...document.querySelectorAll(".contacto-contenido"),
  ];
  const footerLower = document.querySelector(".footer-lower");

let scrollPosition = document.documentElement.scrollTop;
let totalHeight = document.documentElement.scrollHeight - window.innerHeight;


  if (scrollPosition >= (totalHeight-10)) {
    contacto.style.zIndex = 1;
    footerLower.style.display = "none";
    contactoTitulo.classList.add("titulo-animaciones");
    contactoContenido.forEach((element) => {
      element.classList.add("contenido-animaciones");
    });
  } else {
    contacto.style.zIndex = -1;
    footerLower.style.display = "flex";
    contactoTitulo.classList.remove("titulo-animaciones");
    contactoContenido.forEach((element) =>
      element.classList.remove("contenido-animaciones")
    );
  }
});

linkMenu[3].addEventListener('click', contactoMove);

function contactoMove() {
  let totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  window.scrollTo({
    top: totalHeight,
    behavior: 'auto' 
  });
}

const sliders = [...document.querySelectorAll(".slider__body")];
const arrowNext = document.querySelector("#next");
const arrowBefore = document.querySelector("#before");

const currentElement = Number(document.querySelector(".slider__body--show").dataset.id);

arrowNext.addEventListener("click", () => changePosition(1));
arrowBefore.addEventListener("click", () => changePosition(-1));

function changePosition(change) {
  let value = currentElement;
  value += change;

  if (value == -1 || value == sliders.length) {
    value = (value == -1 ? sliders.length - 1 : 0)
  }

  sliders[currentElement].classList.toggle("slider__body--show");
  sliders[value].classList.toggle("slider__body--show");  
}


const themeBlue = document.querySelector(".theme--blue");
const themeGreen = document.querySelector(".theme--green");
const themeRed= document.querySelector(".theme--red");

themeBlue.addEventListener('click', function() {
  document.documentElement.style.setProperty('--color-tono', '200');
});

themeGreen.addEventListener('click', function() {
  document.documentElement.style.setProperty('--color-tono', '150');
});

themeRed.addEventListener('click', function() {
  document.documentElement.style.setProperty('--color-tono', '355');
});




const btnChangeTheme = document.querySelector(".change-theme");
btnChangeTheme.addEventListener("click", changeTheme);

function changeTheme() {
  btnChangeTheme.classList.toggle("uil-sun")

  if(btnChangeTheme.classList.contains("uil-sun")){
    document.documentElement.style.setProperty('--color-fondo', '#000');
    document.documentElement.style.setProperty('--color-letra', '#fff');
  }else{
    document.documentElement.style.setProperty('--color-fondo', '#fff');
    document.documentElement.style.setProperty('--color-letra', '#000');
  }

}

