//**FORMULARIO DE IMAGEN */

//-Lograr poner la url de la imágen y que se refleje en la sección correspondiente.
//-Identificar y guardar el link que ingrese el usuario/a.
//Dar eventos y funcionalidad al usuario/a para que pueda modificar la imágen seleccionada en base a filtros.



//HTML-DOM.Elementos que disparan eventos.

const meme = document.getElementById("meme");
const linkeado = document.getElementById("linkeado");

const fondoDos = document.getElementById("fondo-dos");

const brillo = document.getElementById("brillo");
const opacidad = document.getElementById("opacidad");
const contraste = document.getElementById("contraste");
const desenfoque = document.getElementById("desenfoque");
const grises = document.getElementById("grises");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturado = document.getElementById("saturado");
const negativo = document.getElementById("negativo");
const imageFilter = document.getElementById("image-filter");

const reloadButton = document.getElementById("reload-button");












//Eventos


//Linkeado de la url que ingresa el usuario/a
linkeado.addEventListener('keyup', (e)=>{
  e.preventDefault();
  const valueUrl = linkeado.value;
  meme.style.backgroundImage = `url("${valueUrl}")`;
  meme.style.backgroundPosition = 'center';
});

//Color y Fondo de la imágen del meme 

fondoDos.addEventListener('input', (e) =>{
  const backgroundColor = e.target.value;
  meme.style.backgroundColor = backgroundColor;
})




// Filtros de imágen.

 const filtro = ()=>{
 meme.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${grises.value}%) sepia(${sepia.value}%) hue-rotate(${hue}deg) saturate(${saturado.value}%) invert(${negativo.value})`;
};

brillo.addEventListener("change", filtro);
opacidad.addEventListener("change", filtro);
contraste.addEventListener("change", filtro);
desenfoque.addEventListener("change", filtro);
grises.addEventListener("change", filtro);
sepia.addEventListener("change", filtro);
hue.addEventListener("change", filtro);
saturado.addEventListener("change", filtro);
negativo.addEventListener("change", filtro);


//Reestablecer los filtros

reloadButton.addEventListener("click", ()=>{
  brillo.value = "1"
  opacidad.value = "1"
  contraste.value = "100"
  desenfoque.value = "0"
  grises.value = "0"
  sepia.value = "0"
  hue.value = "0"
  saturado.value = "100"
  negativo.value = "1"
  filtro()
});


