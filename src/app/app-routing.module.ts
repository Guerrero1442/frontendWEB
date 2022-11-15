import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConductorAddComponent } from './components/conductor-add/conductor-add.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaRutasComponent } from './components/lista-rutas/lista-rutas.component';
import { LoginComponent } from './components/login/login.component';
import { RutaAddComponent } from './components/ruta-add/ruta-add.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'inicio',component:InicioComponent},
  {path:'rutas',component:RutaAddComponent},
  {path:'conductores',component:ConductorAddComponent},
  {path:'lista-rutas',component:ListaRutasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
