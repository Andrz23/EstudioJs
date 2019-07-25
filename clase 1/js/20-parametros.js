'use strict'

/*
Parametros REST y SPREAD


Para capturar un numero indefinido de 
parametros se puede capturar con (...) ->REST

 */


 function ListadoFrutas(Fruta1, fruta2, ...restoFrutas){
console.log("fruta1 : " + Fruta1);
console.log("fruta2 :" + fruta2);
console.log(restoFrutas);
 }

 ListadoFrutas("Manzana", "Mango", "Pera", "Melon", "coco");


 var frutas = ['manzana', 'naranja']
 ListadoFrutas(...frutas,"Manzana", "Mango", "Pera", "Melon", "coco");