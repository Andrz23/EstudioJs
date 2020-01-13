'use strict'

/*
 Realiza un programa que nos diga 
 si el numero es par o impar 
*/

var numero = parseInt(prompt("Ingrese el numero",0));


while (isNaN(numero)) {
    parseInt(prompt("Ingrese el numero",0));
}

if(numero%2 == 0){
    alert("El numero es impar")
}else{
    alert("numero es par ")
}
