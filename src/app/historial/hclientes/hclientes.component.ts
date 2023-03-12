import { Component } from '@angular/core';
import { Servicios } from 'src/app/modelos/servicios';

@Component({
  selector: 'app-hclientes',
  templateUrl: './hclientes.component.html',
  styleUrls: ['./hclientes.component.css']
})
export class HclientesComponent {

  datosServicios: Servicios[] = [
    {id: 1, denominacion: 'Fibra Obtica', precio: 35.85},
    {id: 2, denominacion: 'Tecnico', precio: 15.85},
    {id: 3, denominacion: 'Antenas', precio: 5.85}
  ]

}
