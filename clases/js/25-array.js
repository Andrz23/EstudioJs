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
/*lenguajes.forEach((elemento, indice, data)=>{
    document.write("<li>"+ indice +""+elemento+ "</li>");
});*/

//forma de recorrer de arrar for in 
for(let lenguaje in lenguajes){
    document.write("<li>"+ lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");


//busquedas 

/* var busqueda = lenguajes.find(function(lenguaje){
return lenguaje =="PHP7";
});*/


//forma de hacerlo

var numeros= [10,20,50,12,11];
var busqueda = numeros.some(precio => precio >=60);

//var busqueda = lenguajes.find(lenguaje => lenguaje =="PHP");



console.log(busqueda);
