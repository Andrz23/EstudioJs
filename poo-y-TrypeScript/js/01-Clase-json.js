// clase con js 

var bicicleta = {
    color: "rojo",
    modelo :"bmx",
    frenos:"De disco",
    velocidadMaxima : "60km",
    cambiarColor : function(nuevo_color){
    //bicicleta.color = nuevo_color;
    this.color = nuevo_color;
    console.log(this);
    }
};

bicicleta.cambiarColor("Azul");