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






//FUNCIONES