import { Component } from '@angular/core';
import { Clientes } from '../modelos/clientes';
import { Movimientos } from '../modelos/movimientos';
import { Servicios } from '../modelos/servicios';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent {
  datosClientes: Clientes[] = [];
  
  datosServicios: Servicios[] = [
    {id: 1, denominacion: 'Fibra Obtica', precio: 35.85},
    {id: 2, denominacion: 'Tecnico', precio: 15.85},
    {id: 3, denominacion: 'Antenas', precio: 5.85}
  ]

  datosMovimientos: Movimientos[] = [
    {id: 1, id_cliente: 1, id_servicio: 1},
    {id: 2, id_cliente: 1, id_servicio: 2},
    {id: 3, id_cliente: 1, id_servicio: 3},
    {id: 4, id_cliente: 2, id_servicio: 1},
    {id: 5, id_cliente: 2, id_servicio: 2},
    {id: 6, id_cliente: 3, id_servicio: 1},
    {id: 7, id_cliente: 3, id_servicio: 2},
    {id: 8, id_cliente: 3, id_servicio: 3},
    {id: 9, id_cliente: 3, id_servicio: 1},
    {id: 10, id_cliente: 4, id_servicio: 3}
  ]

  borrarRegistro(id: number){
    this.datosMovimientos = this.datosMovimientos.filter((item) => item.id != id)
  }
}
