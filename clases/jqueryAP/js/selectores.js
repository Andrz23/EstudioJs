$(document).ready(function(){

//Selector de ID
 $("#rojo").css("background", "red")
           .css("color", "white");

  $("#amarillo").css("background", "yellow")
              .css("color","green");


  $("#verde").css("background", "green")
              .css("color","white");


 // Selectores de clases  
  var miclase =  $('.zebra');
  miclase.css("border", "5px dash black");

  //eq ->para tomar elemento del array
  //console.log(miclase[0]);


});