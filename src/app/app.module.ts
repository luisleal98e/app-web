import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { HomeComponent } from './home/home.component';
import { FacturaComponent } from './movimientos/factura/factura.component';
import { HclientesComponent } from './historial/hclientes/hclientes.component';
import { HserviciosComponent } from './historial/hservicios/hservicios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerClienteComponent } from './clientes/ver-cliente/ver-cliente.component';
import { VerServicioComponent } from './servicios/ver-servicio/ver-servicio.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ServiciosComponent,
    MovimientosComponent,
    HomeComponent,
    FacturaComponent,
    HclientesComponent,
    HserviciosComponent,
    NavbarComponent,
    VerClienteComponent,
    VerServicioComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
