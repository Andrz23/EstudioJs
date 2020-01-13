'use strict'

window.addEventListener('load',()=>{

//timers set interval, settimeout

function intervalo(){
    var tiempo = setInterval(()=>{
        console.log("set interval ejecutado");
        var encabezado = document.querySelector("h1");
        
        if(encabezado.style.fontSize =="50px") {
            //console.log("30");
            encabezado.style.fontSize ="30px"
        }else{
            //console.log("50");
            encabezado.style.fontSize ="50px"
        }
        
        },1000);

        return tiempo;
}

var tiempo = intervalo();

var stop = document.querySelector("#stop");

stop.addEventListener('click',()=>{
    alert("Has parado");
clearInterval(tiempo);
});


var start = document.querySelector("#start");

start.addEventListener('click',()=>{
    alert("Has iniciado");
    intervalo();
});

});