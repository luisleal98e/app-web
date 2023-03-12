import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { HomeComponent } from './home/home.component';
import { FacturaComponent } from './movimientos/factura/factura.component';
import { HclientesComponent } from './historial/hclientes/hclientes.component';
import { HserviciosComponent } from './historial/hservicios/hservicios.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ServiciosComponent,
    MovimientosComponent,
    HomeComponent,
    FacturaComponent,
    HclientesComponent,
    HserviciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
