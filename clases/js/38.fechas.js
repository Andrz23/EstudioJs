'use strict'


var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();
var textHora= `
   el año es: ${year}
  el mes es : ${mes}
  el dia es : ${dia}
  la hora es : ${hora}
`;

console.log(fecha);
console.log(textHora);