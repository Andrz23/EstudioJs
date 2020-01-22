import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({

  selector : 'videojuego',
 templateUrl : './videoJuego.component.html'


})
export class videoJuegoComponent implements OnInit, DoCheck, OnDestroy{

  public titulo: string;
  public listado: string;

  constructor(){
    this.titulo ="Componente de videoJuegos";
    this.listado = "Listado de los juegos mas populares";
    console.log("Se a cargado el compoonente");
  }

ngOnInit(){
console.log("OnInit ejecutado");
  }

ngDoCheck(){
console.log("DoCheck ejecutado");
}

ngOnDestroy(){
  console.log("OnDestroy ejecutado");
}

cambiarTitulo(){
  this.titulo ="Nuevo titulo del componente";
}


}
