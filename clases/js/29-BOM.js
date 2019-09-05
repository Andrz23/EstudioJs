'use strict'

//BOM - browser object model


function getBoom(){
    console.log(screen.width);
    console.log(window.location);
    console.log(screen.height);
}

/*function redirect(url){
window.location.href = url;
}*/

function abrirVentana(url){
 window.open(url, "","width=400, heidgt=300");
}
getBoom();
