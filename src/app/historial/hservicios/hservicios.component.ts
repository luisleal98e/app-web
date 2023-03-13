import { Component } from '@angular/core';
import { Clientes } from 'src/app/modelos/clientes';

@Component({
  selector: 'app-hservicios',
  templateUrl: './hservicios.component.html',
  styleUrls: ['./hservicios.component.css']
})
export class HserviciosComponent {
  datosClientes: Clientes[] = [];

}
