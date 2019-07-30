'use strict'


window.addEventListener('load',()=>{


var formulario = document.querySelector("#formulario");

var box_dashed = document.querySelector(".dashed");

box_dashed.style.display ="none";


formulario.addEventListener('submit',()=>{
console.log("Evento submit capturado");

var nombre = document.querySelector("#nombre").value;
var apellido = document.querySelector("#apellido").value;
var edad =parseInt(document.querySelector("#edad").value);

if(nombre.trim() == null || nombre.length == 0 ){
   alert("Nombre no valido");
    return false;
}

if(apellido.trim() == null || apellido.length == 0 ){
    alert("apellido no valido");
     return false;
 }

 if(edad == null || edad <=0 || isNaN(edad)){
    alert("edad no valido");
     return false;
 }


box_dashed.style.display ="block";
var datos_usuarios = [nombre, apellido, edad];


var p_nombre = document.querySelector("#p_nombre span");
var p_apellido = document.querySelector("#p_apellido span");
var p_edad = document.querySelector("#p_edad span");

p_nombre.innerHTML = nombre;
p_apellido.innerHTML = apellido;
p_edad.innerHTML = edad;



/*
var indice;
for(indice in datos_usuarios){
    var parrafo = document.createElement("p");
    parrafo.append(datos_usuarios[indice]);
    box_dashed.append(parrafo);
}*/

});

});