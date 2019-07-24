'use strict'

/*
hacer un programa que muestre 
todos los numeros divisores 
de un numero introducido en un prompt
 */

 var numero = parseInt(prompt("Por favor ingrese un numero",0));


 for(i=1; i<= numero; i++){
     if(numero%1 == 0){
        console.log("Divisor :" + 1);
     }
 }