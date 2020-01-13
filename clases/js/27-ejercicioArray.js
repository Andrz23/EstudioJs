'use strict'


/*
Realizar un programa que 
1.pida seis numeros por pantalla 
y los meta en una array 
2. tiene que mostrar el array completo
en el cuerpo de la pagina y la consola
3. Ordenar el array y mostralo
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos tiene el array 
6. realizar una busqueda por un valor introduccido por
el usuario y que  nos diga y lo encuentra.

*/

var numeros= [];


function mostrarArray(elementos, textoCustom= ""){
    document.write("<h1> Elementos Del Array " + textoCustom + " </h1>");
    document.write("<ul>"); 
    for(var c = 0; c < elementos.length; c++){
        document.write("<li>"+ elementos[c] + "</li>");
       }
    document.write("<ul>");
}

/*do {
    var numero = prompt("Por favor ingrese un numero para el array", 0);
    numeros.push(numero);
} while (numeros.length < 6);*/
// pide los numero 
for(var i = 0; i <=5; i++){
    numeros.push(parseInt(prompt("Por favor ingrese un numero para el array", 0)));
}

//mostrar el array 
mostrarArray(numeros);

/*lenguajes.forEach((elemento, indice, data)=>{
    document.write("<li>"+ indice +""+elemento+ "</li>");
});*/

// ordenar el array 
console.log(numeros.length);

//numeros.reverse();
numeros.sort(function(a,b){return b-a});
mostrarArray(numeros, "ordenado");

//invertir y mostrar 
numeros.reverse();
mostrarArray(numeros, "revertido");

//contar elementos
document.write("<h3> Elementos Del array :  " +numeros.length + "</h3>");

//busqueda del array

var busqueda = parseInt(prompt("Ingrese el numero a buscar", 0));

var buscado = numeros.findIndex(numero => numero == busqueda);

if(buscado && buscado != -1){
    document.write("<h1> ENCONTRADOS </H1>");
document.write("<h1> posicion de la busqueda :" + buscado+"</h1>");
}else{
document.write("<h1> ENCONTRADOS </H1>");
document.write("<h1> posicion no encontrada</h1>");
}
//var busqueda =  numeros.find(numero => numero == 10);

console.log(busqueda);