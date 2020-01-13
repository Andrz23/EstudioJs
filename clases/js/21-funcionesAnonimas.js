'use strict'

/*
Funciones anonimas Y callbacks

Es una funcion que no tiene nombre es decir
que es un conjunto de instrucciones no va a tener
ningun nombre y lo guardo en una  varible. 

*/
function sumame(numero1, numero2, sumaYmuestra, sumaPordos){
    var suma = numero1 + numero2;
sumaYmuestra(suma);
sumaPordos(suma*2);
    return suma;
}

sumame(6,7, function(dato){  //-> funciones anonimas 

console.log("La suma es :", dato);

},
function(dato){   //-> funciones anonimas 
    console.log("Suma por dos es :", (dato *2));
});


//funciones de flecha para callbacks

/*
sumame(
dato =>{

},
dato=>{

});  --> estructura de las funciones de flechas 


*/