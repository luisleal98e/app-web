import { Component } from '@angular/core';
import { Servicios } from '../modelos/servicios';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  
  datosServicios: Servicios[] = [
    {id: 1, denominacion: 'Fibra Obtica', precio: 35.85},
    {id: 2, denominacion: 'Tecnico', precio: 15.85},
    {id: 3, denominacion: 'Antenas', precio: 5.85}
  ]

  selectedServicio: Servicios = new Servicios();

  agregar(){
    if(!this.selectedServicio.id){
      this.selectedServicio.id = this.datosServicios.length + 1;
      this.datosServicios.push(this.selectedServicio); 
    } 
   this.selectedServicio = new Servicios();
  }

  obtenerDatos(servicio: Servicios){
    this.selectedServicio = servicio;
  }

  borrarServivio(id: number){
    this.datosServicios = this.datosServicios.filter((item) => item.id != id)
  }
}
