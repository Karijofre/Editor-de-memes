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

const descarga = document.getElementById("descarga");

const front = document.getElementById("front");
const listBottom = document.getElementById("list-bottom");

const closeText = document.getElementById("close-text");
const closeImg = document.getElementById("close-img");

const effects = document.getElementById("effects");






//Eventos


//Linkeado de la url que ingresa el usuario/a
linkeado.addEventListener('keyup', (e)=>{
  e.preventDefault();
  const valueUrl = linkeado.value;
  meme.style.backgroundImage = `url("${valueUrl}")`;
  meme.style.backgroundPosition = 'center';
  meme.style.backgroundSize = "cover";
});

//Color y Fondo de la imágen del meme 

fondoDos.addEventListener('input', (e) =>{
  const backgroundColor = e.target.value;
  meme.style.backgroundColor = backgroundColor;
})




// Filtros de imágen.

 const filter = ()=>{
 meme.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${grises.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;};

brillo.addEventListener("change", filter);
opacidad.addEventListener("change", filter);
contraste.addEventListener("change", filter);
desenfoque.addEventListener("change", filter);
grises.addEventListener("change", filter);
sepia.addEventListener("change", filter);
hue.addEventListener("change", filter);
saturado.addEventListener("change", filter);
negativo.addEventListener("change", filter);


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


//Botón de descarga

descarga.addEventListener("click", ()=>{
  domtoimage.toBlob(meme)
  .then(function (blob) {
    window.saveAs(blob, "my-meme.png");
  });
});




//Botón Modo Oscuro


const darkPress = document.querySelector("#darkPress");
const body = document.querySelector("body");

darkPress.addEventListener("click", () =>{ 
  body.classList.toggle("darkmode");  
});

function load(){
  const darkmode = localStorage.getItem("darkmode");
  if (!darkmode) {
    store("false");
  }else if(darkmode == "true"){
    body.classList.add("darkmode");
  }
}

function store(){
  localStorage.setItem("darkmode",value);
}



// Probando Botón close (X) 

/* closeText.addEventListener("click", () =>{
  containerText.classList.add("hide");
});

closeImg.addEventListener("click", () =>{
  containerImage.classList.add("hide");
});
 */

/* 
transparente.addEventListener('click', (e) => {
  console.log(e.target.checked);
  if(e.target.checked){
    topText.style.backgroundColor = 'rgba(0,0,0,.9)';
    bottomEnd.style.backgroundColor = 'rgba(0,0,0,.9)';  
  }else{
      topText.style.backgroundColor = "cyan";
      bottomEnd.style.backgroundColor = "cyan";
  }
}) */

/* closeText.addEventListener("click", () =>{
  effects.style.display ="none";
})else

closeImg.addEventListener("click", () =>{
  effects.style.display ="none";
}) */

 
 closeText.addEventListener("click", (e)=>{
  if (e.target) {
    effects.style.display =  "none";
  }else{
    front.style.display = "flex"
  }
})

closeImg.addEventListener("click", (e)=>{
  if (e.target) {
    effects.style.display =  "none";
  }else{
    front.style.display = "flex"
  }
}) 



  const design = () =>{
  if (window.screen.width <= 700) {
    design.classList.add("design")
  }else{
    design.classList.remove("design")
  }
};