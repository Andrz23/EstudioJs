'use strict'


var nombre = prompt("Ingresa el nombre ");
var apellido = prompt("ingresa el apellido");


//var texto = "mi nombre es " +nombre + "mis apellidos son :"+apellido;


var texto = `
<h1>Hola que tal</h1>
<h3>Mi Nombre es <${nombre}/h3>
<h3>Mi Apellido es <${apellido}/h3>
`;

document.write(texto);