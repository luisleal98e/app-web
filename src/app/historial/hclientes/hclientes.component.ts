import { Component } from '@angular/core';
import { Servicios } from 'src/app/modelos/servicios';

@Component({
  selector: 'app-hclientes',
  templateUrl: './hclientes.component.html',
  styleUrls: ['./hclientes.component.css']
})
export class HclientesComponent {

  datosServicios: Servicios[] = []

}
