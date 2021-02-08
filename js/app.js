/* -----JS de Formulario Imágen----- */


/* _Doy funcionalidad al input de URL.
_Traigo el ID de url (desde mi HTML) de la cual creo su variable y función.
_El usuario/a puede ingresar la url de la imágen elegida en la web por él mismo.*/

linkeado.addEventListener("keyup", ()=>{
    const url = linkeado.value;
    linkeado.innerHTML = `<img src=${url} alt="Imágen" class="image">`;
})




/* _Funcionalidad a los input de Mezcla de fondo de la imágen.
_Activar el range para su dicha progresión estipulada por default y la indicada del usuario/a. */








