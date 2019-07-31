'use strict'


//JSON javascript object ntation 

window.addEventListener('load',()=>{
var anime={
    titulo: "One piece",
    year :1996,
    pais :"japon"
};


//coleccion de objectos 
var animes =[
    {titulo: "gold z one piece", year:2018, pais:"Japon"},
    anime
];

 var cajaAnimes = document.querySelector("#animes");
var index;
for(index in animes){
var parrafo = document.createElement("p");
parrafo.append(animes[index].titulo + " -" + animes[index].year);
cajaAnimes.append(parrafo);

}


});