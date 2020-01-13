'use strict'


/*
Utilizar un bucle y mostrar l amedia y la suma de los resultados
introducidos por el usuario. 

 */


 var contador = 0;
 var suma = 0;

 do {
     
    var numero = parseInt(prompt("Introduce los numeros hasta que ingrese es el negativo", 0));
    if (isNaN(numero)) {
        numero = 0;
    }else if(numero >= 0){
      suma += numero;

      contador++;
    }
 } while (numero >=0)

 alert("la suma de todos los numeros es "+suma)
 alert("la media de todos los numero es" + (suma/contador));