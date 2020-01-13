$(document).ready(function () {

    //Eventos

    //MouseOver y MouseOut
    var caja = $("#caja");

    // caja.mouseover(function(){
    //  $(this).css("background", "red");
    // });

    // caja.mouseout(function(){
    //   $(this).css("background", "green");  
    // });

    //Hover -jQuery

    function cambiaRojo() {
        $(this).css("background", "red");
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }

    caja.hover(cambiaRojo, cambiaVerde);


    //Click, doble click

    caja.click(function () {
        $(this).css("background", "blue")
            .css("color", "white");
    });

    caja.dblclick(function () {
        $(this).css("background", "pink")
            .css("color", "yellow");
    });


    // Focus y blur 

    var nombre = $("#nombre");
    var datos = $("#datos");
    var sigueme = $("#sigueme");
    nombre.focus(function () {
        $(this).css("border", "2px solid green");
    });

    nombre.blur(function () {
        $(this).css("border", "1px solid #ccc");


        datos.text($(this).val()).show();
    });


    //mousedown y mouseup
    datos.mousedown(function () {
        $(this).css("border-color", "gray");
    });


    datos.mouseup(function () {
        $(this).css("border-color", "black");
    });

    //mousemove
    $(document).mousemove(function () {
        /* console.log("En X : " + event.clientX);
        console.log("En Y : " + event.clientY); */
        $('body').css("cursor", "none");
        sigueme.css("left",event.clientX);
        sigueme.css("top", event.clientY);
    });

});