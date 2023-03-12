import { Component } from '@angular/core';
import { Clientes } from 'src/app/modelos/clientes';

@Component({
  selector: 'app-hservicios',
  templateUrl: './hservicios.component.html',
  styleUrls: ['./hservicios.component.css']
})
export class HserviciosComponent {
  datosClientes: Clientes[] = [
    {id: 1, nombre: 'Luis', apellido: 'Leal', cedula: 27503872, correo: 'luisleal98e@gmail.com'},
    {id: 2, nombre: 'Juan', apellido: 'Sanchez', cedula: 26487951, correo: 'juan@gmail.com'},
    {id: 3, nombre: 'Maria', apellido: 'Diaz', cedula: 24852369, correo: 'maria@gmail.com'},
  ];

}
