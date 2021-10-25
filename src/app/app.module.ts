import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartaNoticiaComponent } from './components/carta-noticia/carta-noticia.component';
import { InicioComponent } from './screens/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicioAlClienteComponent } from './screens/servicio-al-cliente/servicio-al-cliente.component';
import {ReactiveFormsModule} from '@angular/forms' /* permite formuoarios reactivos*/

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartaNoticiaComponent,
    InicioComponent,
    FooterComponent,
    ServicioAlClienteComponent
    
  ],
  imports: [ //aqui se importan todos los modulos
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule /*tambien se importa el reactive forms*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
