'use strict'

//DOM - document object model


function cambiaColor(color){
caja.style.color = color;
}
//conseguir elementos con id concreto;
var caja = document.querySelector("#micaja")
//var caja = document.getElementById("micaja");

caja.innerHTML = "Hola no soy la caja";
caja.style.background ="red";
caja.style.padding ="20px";
caja.style.color ="white";
caja.className = "Hola";

// conseghir elementos por su etiqueta 
var todosLosDiv = document.getElementsByTagName("div");
var contenidoTexto = todosLosDiv[2];
contenidoTexto.innerHTML ="otros texto para el segundo elemeto";

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
var valor;
//todosLosDiv.array.forEach((valor, indice) => {
for(valor in todosLosDiv){
    if(typeof todosLosDiv[valor].textContent =="string"){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDiv[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
  // document.querySelector("#miseccion").prepend(parrafo);
    }
}

seccion.append(hr);
//});

// console.log(contenidoTexto);



// consegir elementos por su clase
console.log(caja);

var disvAmarillos = document.getElementsByClassName('amarillo'); 
var divsVerdes = document.getElementsByClassName('verde');
/*for(var i = 0; i< divsVerdes.length ; i++){
    divsVerdes[i].style.background ="red";
}*/
disvAmarillos[0].style.background="yellow";
var div;
for (div in divsVerdes){
if(divsVerdes[div].className =="verde"){
    divsVerdes[div].style.background ="green";
}
}

//query selector
var id = document.querySelector("#encabezado");
console.log(id);




var clas = document.querySelector(".verde");
console.log(clas);