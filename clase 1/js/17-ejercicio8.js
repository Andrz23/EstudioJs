'use strict'

/**
 
calculadora que pida dos nuemros 
por pantalla y si esta mal que lo vuelva a 
pedir y en cuerpo de la pagina en una 
alerta y por consola sumar, restar, multiplicar y dividir la dos cifras 

 */


var numero = parseInt(prompt("ingrese el numero1",0));
var numero2 = parseInt(prompt("ingrese el numero2",0));


while (numero < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    var numero = parseInt(prompt("ingrese el numero1",0));
    var numero2 = parseInt(prompt("ingrese el numero2",0));
     
}
var resultado = "La suma es : " + (numero + numero2) + "<br/>" +
                 "La resta es :" +(numero - numero2)  + "<br/>" +
                 "la multaplicacion :" + (numero * numero2) + "<br/>" +
                 "la divicion :" + (numero/ numero2) + "<br/>" 