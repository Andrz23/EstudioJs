import { Component } from '@angular/core';

@Component({

  selector : 'videojuego',
 templateUrl : './videoJuego.component.html'


})
export class videoJuegoComponent{

  public titulo: string;
  public listado: string;

  constructor(){
    this.titulo ="Componente de videoJuegos";
    this.listado = "Listado de los juegos mas populares";
    console.log("Se a cargado el compoonente");
  }
}
