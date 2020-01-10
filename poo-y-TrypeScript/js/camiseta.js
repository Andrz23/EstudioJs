//Clase(molde del objeto)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de : " + logo);
        };
    };
}
var Camiseta = /** @class */ (function () {
    //Metodos(funciones o acciones)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    /**
     * setColor
    color */
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    /**
     * getColor
     */
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    /**
     * setModelo
     */
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    /**
     * getModelo
     */
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    /**
     * setMarca
     */
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    /**
     * getModelo
     */
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    /**
     * setTalla
     */
    Camiseta.prototype.setTalla = function (talla) {
        this.talla = talla;
    };
    /**
     * getTalla
     */
    Camiseta.prototype.getTalla = function () {
        return this.talla;
    };
    /**
     * setPrecio
     */
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    /**
     * getPrecio
     */
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    Camiseta = __decorate([
        estampar('Gucci gang')
    ], Camiseta);
    return Camiseta;
}());
//Clase hija
var sudadera = /** @class */ (function (_super) {
    __extends(sudadera, _super);
    function sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return sudadera;
}(Camiseta));
var camiseta = new Camiseta("sds", "sds", "dsd", "dsds", 120);
var sudaderaNike = new sudadera("rojo", "sds", "sd", "sd", 10);
sudaderaNike.setCapucha(true);
sudaderaNike.setColor("verde");
console.log(sudaderaNike);
camiseta.estampacion();
console.log(camiseta);
