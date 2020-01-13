$(document).ready(function(){
//mover elemento por la pagina
$('.elementos').draggable();

var cajaMo = $(".caja-efectos");
//redimensionar elemetos por la pagina 
$('.elementos').resizable();

//seleccionar listar y ordenar elementos
//$(".lista-seleccionable").selectable();
$(".lista-seleccionable").sortable({update : function(event, ui){
console.log("La lista cambio");
console.log(event);
console.log(ui);
}

});
//Drop
$("#elemento-movido").draggable();
$("#area").droppable({
    drop :function(){
        console.log("has solatado algo dentro del area");
    }
});

//Efectos
$("#mostrar").click(function(){
    console.log(" A entrado al boton mostrar");
    console.log(cajaMo);
    cajaMo.toggle("shake", 4000);
});

//Tooltip
$(document).tooltip();

//Dialog
$("#lanzar-popup").click(function(){
    $("#popup").dialog();
});


//Datepicker

$("#calendario").datepicker();

//tabs
$("#pestanas").tabs();
});