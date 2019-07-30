'use strict'

//eventos de raton 

window.addEventListener('load', ()=>{



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


//focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus', function(){
    console.log("esta adentro");
    //input.style.background ="black";
    });

//blur
input.addEventListener('blur', function(){
    console.log("esta fuera");
    //input.style.background ="black";
    });
//keydown
input.addEventListener('keydown', function(event){
    console.log("pulsando esta tecla", String.fromCharCode(event.keyCode));
    //input.style.background ="black";
    });
//keypress
input.addEventListener('keypress', function(){
    console.log("tecla presionada", String.fromCharCode(event.keyCode));
    //input.style.background ="black";
    });
//keyup
input.addEventListener('keyup', function(){
    console.log("tecla soltada", String.fromCharCode(event.keyCode));
    //input.style.background ="black";
    });

});// final del load
