'use strict'


/*
 Array multidimensionales


 Son array dentro de otros arrays 

*/

var categoria=["Accion", "Terror","Comedia"];

var anime=["One piece", "Naruto", "Dragon ball"];

var cine= [categoria, anime];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

var elemento ="";
do{
    elemento = prompt("Introduce tu anime");
    anime.push(elemento);
}while(elemento!= "Terminar");


//elimina el ultimo elemento del array
anime.pop();


console.log(anime);