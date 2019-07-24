'use strict'


/*
Hacer un progrma que muestre todos los numeros que hay 
entre dos numeros intrpoducidos por el usuario


*/


var numero1 = parseInt(prompt("Por favor ingrese el numero ", 0));
var numero2 = parseInt(prompt("por favor ingrese el segundo numero", 0));

document.write("<h1>De"+numero1+" a " + numero2+"Estan estos numeros:</h1");
for(var i= numero1;  i <= numero2; i++){
document.write(i + "<br/>");
}