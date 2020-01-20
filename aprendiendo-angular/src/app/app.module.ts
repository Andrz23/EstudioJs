import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { videoJuegoComponent } from './videoJuegos/videoJuego.component';
import { TennisComponent } from './Tennis/tennis.component';

@NgModule({
  declarations: [
    AppComponent,
    videoJuegoComponent,
    TennisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
