'use strict'


//arrays, arreglos, matrices

var nombre = "Andres Morales";
var nombre =["A","N","D"];

var lenguajes = new Array("PHP","JAVA","JS","C", "Pascal");


document.write("<h1> Lenguajes de programacion</h1>");
document.write("<ul>");
// for(var i=0; i <= lenguajes.length; i++){
// document.write("<li>" + lenguajes[i] + "</li>");
// }

//forma de recorrear el array en js
lenguajes.forEach((elemento, indice, data)=>{
    document.write("<li>"+ indice +""+elemento+ "</li>");
});

document.write("</ul>");

