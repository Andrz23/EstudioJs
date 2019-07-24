'use strict'

/* 
Programa que pieda dos numeros y que nos diga cual es el mayor y el menor y  si son iguales
PLus si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir 
*/


var entrada = true;

while (entrada) {
var numero1 =parseInt(prompt("Por favor ingrese el primer numero", 0));
var numero2 = parseInt(prompt("Por favor ingrese el segundo numero", 0));

if (numero1 > numero2) {
    
    alert("El numero " + numero1 + " es el mayor que "+ numero2 +"");
    entrada = false;
}else if (numero1 < numero2){
    alert("El numero " + numero2 + " es el mayor que "+ numero1 +"");
    entrada = false;
}else if (numero1 == numero2){
    alert("Los numeros"+ numero1 +" y "+ numero2 + " son iguales");
    entrada = false;
}else{
    alert("por favor ingrese un numero correcto. ")
}
}