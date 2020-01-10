//Clase(molde del objeto)

/*
Interface 
es un contrato en el que definimos que propiedades 
y que metodos obligatorios va a tener una clase
*/




/** 
 * public -> podemos acceder a las propiedades y metodos  desde cualquier lugar 
 * 
 * protecte -> podemos acceder a las propiedades y 
 * metodos  desde la clase que lo define o desde 
 * otra clase que herede  esa misma clase.
 * 
 * 
 * private -> podemos acceder a las 
 * propiedades y metodos acceder desde 
 * la clase que los define 
 * asigna los valores desde dentro de la clase
 * 
 * 
 * 
 * 
 * constructor -> Es un metodo especial dentro de una clase
 * y se suele utilizar para darl un valor inicial a los atributos o 
 * propiedades del objeto al crearlo
 * 
 * 
 * */


 /*
 Decorador -> es un patron de diseño que nos permite
 mediante unos metadatos que se definen de acuerdo a una 
 clase(hacer una copia de la clase ) y modificarlas 
 
 */
interface camisetaBase{

    setColor(color);
    getColor();
    
    }


//Decorador
function estampar(logo:string) {
    return function (target:Function) {
        target.prototype.estampacion= function():void{
            console.log("Camiseta estampada con el logo de : " + logo);
        }
    }
}

@estampar('Gucci gang')
 class Camiseta implements camisetaBase {
    //Propiedades(caracteristicas del objecto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;


    //Metodos(funciones o acciones)


    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;

    }
    /**
     * setColor
    color */
    public setColor(color) {
        this.color = color;
    }


    /**
     * getColor
     */
    public getColor() {
        return this.color;
    }

    /**
     * setModelo
     */
    public setModelo(modelo) {
        this.modelo = modelo;
    }

    /**
     * getModelo
     */
    public getModelo() {
        return this.modelo;
    }

    /**
     * setMarca
     */
    public setMarca(marca) {
        this.marca = marca;
    }


    /**
     * getModelo
     */
    public getMarca() {
        return this.marca;
    }


    /**
     * setTalla
     */
    public setTalla(talla) {
        this.talla = talla;

    }

    /**
     * getTalla
     */
    public getTalla() {
        return this.talla;
    }

    /**
     * setPrecio
     */
    public setPrecio(precio) {
        this.precio = precio;
    }


    /**
     * getPrecio
     */
    public getPrecio() {
        return this.precio;
    }

} 


//Clase hija

class sudadera extends Camiseta{

public capucha :boolean;

setCapucha(capucha : boolean){
    this.capucha = capucha;
}


getCapucha(){
    return this.capucha;
}

}

var camiseta = new Camiseta("sds","sds","dsd","dsds",120);

var sudaderaNike = new sudadera("rojo","sds","sd","sd",10);
sudaderaNike.setCapucha(true);
sudaderaNike.setColor("verde");
console.log(sudaderaNike);
camiseta.estampacion();
console.log(camiseta);