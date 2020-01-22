import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 public title = 'aprendiendo-angular';
 public descripcion : string;
public mostrar_videoJuego: boolean = true;

constructor(){
  this.title = configuracion.titulo;
  this.descripcion = configuracion.descripcion;
}

ocultarVideoJuegos(value){
  this.mostrar_videoJuego = value;
}
}
