$(document).ready(function () {

    /*
    
    Realizar efectos en jQuery mostrar y ocultar
    elementos
    hide - oculta el elemento
    show - me muestra el elemento
    fadeIn - para mostrar 
    fadeOut - para ocultar 
    fadeTo - Nos permite que vaya a un estado a otro
   (1,0) - opacidad 1 para que se muestre y 0 para que se oculte
   toggle - para utilizar solo un boton para mostrar y ocultar un boton
   fadetoggle 
   slideToggle

fast
normal

*/
    var caja = $("#caja");
    var bottonMostrar = $("#mostrar");
    var bottonOcultar = $("#ocultar");
    var todoEnuno = $("#todoenuno");
    var animame =$("#animame");

    bottonMostrar.hide();
    bottonMostrar.click(function () {
        var that = $(this);
        that.hide();
        bottonOcultar.show();
        caja.fadeTo('slow', 1);
    });

    bottonOcultar.click(function () {
        var that = $(this);
        that.hide();
        bottonMostrar.show();
        caja.fadeTo('slow', 0);
    });

    todoEnuno.click(function(){
     caja.slideToggle('fast');
    });

    animame.click(function(){
        caja.animate({marginLeft : '500px'},'slow');
    });

});