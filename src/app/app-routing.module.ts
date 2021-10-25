import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./screens/inicio/inicio.component" //importamos el screen de inicio
import {ServicioAlClienteComponent} from "./screens/servicio-al-cliente/servicio-al-cliente.component"

const routes: Routes = [
  {path:'', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'servicioAlCliente', component: ServicioAlClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
