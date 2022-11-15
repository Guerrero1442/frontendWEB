import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaRutasComponent } from './components/lista-rutas/lista-rutas.component';
import { FormsModule, NgSelectOption } from '@angular/forms';
import { RutaAddComponent } from './components/ruta-add/ruta-add.component';
import { ConductorAddComponent } from './components/conductor-add/conductor-add.component';
import { RutasService } from './services/rutas.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgSelectModule } from '@ng-select/ng-select'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    ListaRutasComponent,
    RutaAddComponent,
    ConductorAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [RutasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
