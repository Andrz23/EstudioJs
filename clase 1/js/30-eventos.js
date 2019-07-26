'use strict'

//eventos de raton 



function cambiarColor() {
    console.log("Me has dado clic");
var bg = boton.style.background;
    if(bg =="green"){
        boton.style.background ="red";
    }else{
        boton.style.background ="green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solic #ccc";

    return true;
}
// eveneto click
var boton = document.querySelector("#boton");

boton.addEventListener('click',function(){
    cambiarColor();
});

//mouse over
boton.addEventListener('mouseover', function(){
 boton.style.background = "yellow";
});

//mouseout
boton.addEventListener('mouseout', function(){
boton.style.background ="black";
});