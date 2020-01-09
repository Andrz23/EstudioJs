type alfanumericos = string | number;
//String 
let cadena: alfanumericos = "AndresMorales";


cadena = 12;
//number

let numero : number =12;

//bolean
let  verdadero_falso : boolean = true;


// Any -> Cualquiercosa

let Cualquiercosa : any = "Hola";
Cualquiercosa = 12;


// Arrays 
var lenguajes :Array<String> =["PHP", "JS","CSS"];

let years : number[]=[12,131,12];


// let vs var 

var number1=10;
var numero2=12;

if(number1 == 10){
    let number1 =44;
    var numero2 =55;

    console.log(number1, numero2);
}
console.log(number1, numero2);



console.log(numero, cadena, verdadero_falso, Cualquiercosa,lenguajes, years);