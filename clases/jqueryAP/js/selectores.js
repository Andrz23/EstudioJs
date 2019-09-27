$(document).ready(function () {

    //Selector de ID
    $("#rojo").css("background", "red")
        .css("color", "white");

    $("#amarillo").css("background", "yellow")
        .css("color", "green");


    $("#verde").css("background", "green")
        .css("color", "white");


    // Selectores de clases  
    var miclase = $('.zebra').css("padding", "5px");

    //eq ->para tomar elemento del array
    //console.log(miclase[0]);

    $('.sin_borde').click(function () {
        console.log("click");
        $(this).addClass('zebra');
    });
    //selectores de etiquetas 

    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function () {
        var This = $(this);
        if (!This.hasClass('grande')) {
            This.addClass('grande');
        }else{
            This.removeClass('grande');
        }

        // selectores de atributos
      $('[title = Google]').css('background', '#ccc');
      $('[title = Udemy]').css('background', 'blue');
    });

});