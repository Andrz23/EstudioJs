$(document).ready(function () {


    //console.log("valor entrada");


    /*
    Metodo load : nos permite realizar peticiones 
    ajax por get y colocar el resultado en cualquier elemento de la pagina.
    
    metodo get : 
    
    metodo post :
    */

    //$("#datos").load("https://reqres.in");
    //peticion ajax por metodo get 
    $.get("https://reqres.in/api/users", {page: 2}, function (response) {
        response.data.forEach((element, index) => {
            $("#datos").append("<p>" + element.first_name+ " "+ element.last_name + "</p>");
        });
    });


    $("#formulario").submit(function(e){
     e.preventDefault();
        var usuario ={
            "name" :$('input[name="name"]').val(),
            "web" :$('input[name="web"]').val()
        };
           /*  $.post($(this).attr("action"), usuario, function(responde){
                console.log(responde);
            }).done(function(){
                alert("Usuario añadido correctamente");
            }); */
$.ajax({
    type :'POST',
   url : $(this).attr("action"),
   data : usuario,
   beforeSend : function(){
       console.log("Enviando usuario...");
   },
   success : function(responde){
       console.log(responde);
   },
   error :function(){
       console.log("A ocurrido un error");
   },
   timeout : 1000
});
            return false;
    });
});