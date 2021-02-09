//**FORMULARIO DE IMAGEN */

//-Lograr poner la url de la imágen y que se refleje en la sección correspondiente.
//-Identificar y guardar el link que ingrese el usuario/a.
//Dar eventos y funcionalidad al usuario/a para que pueda modificar la imágen seleccionada en base a filtros.



//HTML-DOM.Elementos que disparan eventos.

const meme = document.getElementById("meme");
const linkeado = document.getElementById("linkeado");









//Eventos

linkeado.addEventListener('keyup', (e)=>{
  e.preventDefault();
  const valueUrl = linkeado.value;
  meme.style.backgroundImage = `url("${valueUrl}")`;
  meme.style.backgroundPosition = 'center';
});

