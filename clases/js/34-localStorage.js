'use strict'


//localStorage

window.addEventListener('load',()=>{
// comprobar la disponibilidad del localStorage
if(typeof(Storage)!== 'undefined'){
    console.log("localStorage disponible");
}else{
    console.log("Incompatible con localStorage");
}


//guardar datos

localStorage.setItem("titulo", "curso de symfony");

//recuperar elmento 
document.querySelector("#animes").innerHTML = localStorage.getItem("titulo");
//guardar object json


var usuario ={
    nombre : "Andres morales",
    email: "Mrfelipe32@gmail.com",
    web : "andres.com"
};


localStorage.setItem("usuario", JSON.stringify(usuario));


// recuperar objeto

var useJs = JSON.parse(localStorage.getItem("usuario"));
console.log(useJs);

document.querySelector("#datos").append(" " + useJs.web+ "  " +useJs.nombre);



localStorage.removeItem("usuario");

// localStorage.clear();
});