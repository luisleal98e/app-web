import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { HclientesComponent } from './historial/hclientes/hclientes.component';
import { HserviciosComponent } from './historial/hservicios/hservicios.component';
import { HomeComponent } from './home/home.component';
import { FacturaComponent } from './movimientos/factura/factura.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/:id', component: HclientesComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'servicios/:id', component: HserviciosComponent},
  {path: 'movimientos', component: MovimientosComponent},
  {path: 'movimientos/:id', component: FacturaComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
