'use strict'


/*
 Array multidimensionales


 Son array dentro de otros arrays 

*/

var categoria=["Accion", "Terror","Comedia"];

var anime=["One piece", "Naruto", "Dragon ball"];


//Para ordenar el array sort(), reverse()
anime.reverse();
console.log(anime);

var cine= [categoria, anime];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

var elemento ="";
// do{
//     elemento = prompt("Introduce tu anime");
//     anime.push(elemento);
// }while(elemento!= "Terminar");


var indice = anime.indexOf("Dragon ball");

if(indice > -1){
    anime.splice(indice, 1);
} 


//elimina el ultimo elemento del array
//anime.pops();


// Para convertir el array en un String por medio de (,);
var animes_string = anime.join();


// para convertir un String a un array 
var cadena = "texto1,texto2,texto3";
var cadena_array = cadena.split(",");

console.log(cadena_array);