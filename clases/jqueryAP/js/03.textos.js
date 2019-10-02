$(document).ready(function(){
var agregarBoton = $('#add_button');
var agregarLink = $('#add_link');
var menu = $('#menu');

reloadLinks();

agregarBoton
.removeAttr('disabled')
.click(function(){
    menu.append('<li><a href="'+ agregarLink.val()+'"></a></li>');

    agregarLink.val('');
    reloadLinks();
});
/*
Metodos para agregar valores 

append - lo añade al final de la lista
prepend - lo añade al principio de la lista
hmtl - se puede meter introducir html
before - me añade el elemento afuera de la lista 
after - lo añade despues de la lista 

*/

});

function reloadLinks(){
    $('a').each(function(index){
        var that = $(this);
     var enlace = $(this).attr("href");
     that.attr('target', '_blank');
     that.text(enlace);
    });
}