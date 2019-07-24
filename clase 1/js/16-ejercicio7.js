'use strict'

/* 
Tabla de multilicar de n numero introduccido por pantalla

*/

var numero = parseInt(prompt("ingrese el numero de la tabla",0));
document.write("<h1>Tabla del" +numero+"</h1>")
for(var i=1; i<=10;i++){
    document.write(i +"x"+ numero + "="+(i*numero)+ "<br>");
}

//traer todas las tablas 
for(var c=1; c<=10;c++){
document.write("<h1>Tabla del" +c+"</h1>")
for(var i=1; i<=10;i++){
    document.write(i +"x"+ c + "="+(i*c)+ "<br>");
}
}
