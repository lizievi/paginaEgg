// PROBANDO LAS CONDICIONALES
// let contenidoTitulo = "Nombre";

// let titulo = document.querySelector(".logo .fuente-acento");
// titulo.innerHTML = contenidoTitulo;

// CONDICIONAL
// let textoTitulo = titulo.innerText;
// console.log(textoTitulo);

// if (textoTitulo == "Nombre") {
//     titulo.innerHTML = "Liz";
// } else {
//     console.log("no se cumple");
// }

//FUNCIONES
// let nombre = "Ani";
// let ciudad = "Huancayo";
// let gusto = "gomitas"
// let parrafo = document.querySelector(".parrafo2");

// function cambiarTexto(nombre, ciudad, gusto){

//     return contenido
// }

// parrafo.innerText = cambiarTexto("Evelyn", ciudad, gusto )

// PAR EL MENU BAR
let menu_responsive = document.querySelector(".fa-bars");

menu_responsive.onclick = function() {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};


// PARA VALIDAR EL FORMULARIO

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 3) {
    warnings += `El nombre debe contener más de 2 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

