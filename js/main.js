/* -----JS del Formulario de Texto----- */
 
/* -Traigo los id del HTML del proyecto con innerHTML.
-Les doy los eventos para que el formulario interactúe junto al botón principal de imágen del main .
-Se les da la función correspondiente a cada sección del formulario TEXTO. */



//HTML-DOM.Elementos que disparan eventos.

const topText = document.getElementById("top-text");
//const bottom = document.getElementById("bottom");
const up = document.getElementById("up");
const topCheck = document.getElementById("top-check");
const bottomText = document.getElementById("bottom-text");
const downCheck = document.getElementById("down-check");
const bottomEnd = document.getElementById("bottom-end");

const textPress = document.getElementById("text-press");
const containerText = document.getElementById("container-text");

const imagePress = document.getElementById("image-press");
const containerImage = document.getElementById("container-image"); 
const imageMode = document.getElementById("image-mode");
const textMode = document.getElementById("text-mode");
const letter = document.getElementById("letter");

const size = document.getElementById("size");

const leftButtom = document.getElementById("left-buttom");
const centerBottom = document.getElementById("center-bottom");
const rightBottom = document.getElementById("right-bottom");

const darkPress = document.getElementById("dark-press");

const color = document.getElementById("color");
const fondo = document.getElementById("fondo");
const colorWord = document.getElementById("color-word");
const colorBack = document.getElementById("color-back");

const none = document.getElementById("none");
const light = document.getElementById("light");
const blackened = document.getElementById("blackened");

const espaciado = document.getElementById("espaciado");

const interlineado = document.getElementById("interlineado");




//EVENTOS

up.addEventListener("keyup",()=>{
    topText.innerHTML = up.value;
})

bottomText.addEventListener("keyup",()=>{
    bottomEnd.innerHTML = bottomText.value;
})


topCheck.addEventListener("click",()=>{
    console.log(topCheck.checked);
    if(topCheck.checked){
        topText.style.display = "none";
    }else{
        topText.style.display = "block";
    }
});

/* 
bottomText.addEventListener("keyup",()=>{
    bottom.innerHTML = bottomText.value;
}) */


downCheck.addEventListener("click",()=>{
    console.log(downCheck.checked);
    if(downCheck.checked){
        bottomEnd.style.display ="none";
    }else{
        bottomEnd.style.display ="block";
    }
})
//Probando las pestañas del menú Texto e Imágen:
/* imagePress.addEventListener("click",(e)=>{
    e.preventDefault();
    containerText.style.display ="none";
    containerImage.style.display ="flex";
}) */
/* textPress.addEventListener("click",(e)=>{
    e.preventDefault();
    containerImage.style.display ="none";
    containerText.style.display ="flex";
}) */


//No funciona de forma correcta aún:
 imagePress.addEventListener("click",()=>{
    imageMode.style.display = "block";
    textMode.style.display = "none";
})

textPress.addEventListener("click",()=>{
    alert("funciona");
    textMode.style.display = "block";
    imageMode.style.display = "none";
}) 


/* 
No funciona:  :( */
/* textPress.addEventListener("click",()=>{
    if(textPress.click){
        containerImage.classList.add("ocultar");
    }else{
        containerImage.classList.remove("ocultar");
    }
}) */



//Eventos para cambiar la fuente de letra de cada opción:

letter.addEventListener("change", ()=>{
    topText.style.fontFamily = `${letter.value}`;
    bottomEnd.style.fontFamily = `${letter.value}`;
})



/* Evento tamaño de letra: */

size.addEventListener("keyup", ()=>{
    topText.style.fontSize = `${size.value}px`;
    bottomEnd.style.fontSize = `${size.value}px`;
})
size.addEventListener("click", ()=>{
    topText.style.fontSize = `${size.value}px`;
    bottomEnd.style.fontSize = `${size.value}px`;
})



/* Evento a los botones de izquierda, centro y derecha. */

leftButtom.addEventListener("click", (e)=>{
    e.preventDefault();
    topText.style.textAlign = "left";
    bottomEnd.style.textAlign = "left";
})

centerBottom.addEventListener("click", (e)=>{
    e.preventDefault();
    topText.style.textAlign = "center";
    bottomEnd.style.textAlign = "center";
})

rightBottom.addEventListener("click", (e)=>{
    e.preventDefault();
    topText.style.textAlign = "right";
    bottomEnd.style.textAlign = "right";
})




//Color de letra y de fondo.

 color.addEventListener('input', (e) =>{
    const textColor = e.target.value;
    topText.style.color = textColor;
    bottomEnd.style.color = textColor;
  })
  
  fondo.addEventListener('input', (e) =>{
    const backgroundColor = e.target.value;
    topText.style.backgroundColor = backgroundColor;
    bottomEnd.style.backgroundColor = backgroundColor;
  })



//Fondo transparente

transparente.addEventListener('click', (e) => {
    console.log(e.target.checked);
    if(e.target.checked){
      topText.style.backgroundColor = 'rgba(0,0,0,.9)';
      bottomEnd.style.backgroundColor = 'rgba(0,0,0,.9)';  
    }else{
        topText.style.backgroundColor = "cyan";
        bottomEnd.style.backgroundColor = "cyan";
    }
  })



//Contorno de la letra


 light.addEventListener('click', (event) => {
    event.preventDefault();
    topText.style.webkitTextStroke = '1px white';
    bottomEnd.style.webkitTextStroke = '1px white';
  });
  
  blackened.addEventListener('click', (event) => {
    event.preventDefault();
    topText.style.webkitTextStroke = '2px black';
    bottomEnd.style.webkitTextStroke = '2px black';
  });
  
  none.addEventListener('click', (event) => {
    event.preventDefault();
    topText.style.webkitTextStroke = 'transparent';
    bottomEnd.style.webkitTextStroke = 'transparent';
  });



//Espaciado de texto

espaciado.addEventListener('input', (e) =>{
    let spacing = e.target.value;
    topText.style.letterSpacing = `${spacing}px`;
    bottomEnd.style.letterSpacing = `${spacing}px`;
    
});

  
 // Evento interlineado

interlineado.addEventListener('change', (e) =>{
    let lineValue = e.target.value;
    topText.style.lineHeight = lineValue;
    bottomEnd.style.lineHeight = lineValue;
});

//****FIN DE EVENTOS DE FORMULARIO DE TEXTO****







  
