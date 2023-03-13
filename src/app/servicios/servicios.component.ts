import { Component, OnInit } from '@angular/core';
import { Servicios } from '../modelos/servicios';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  datosServicios: Servicios[] = [];
  selectedServicio: Servicios = new Servicios();

  constructor(private RestService:RestService){}

  ngOnInit(): void {
    
  }

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
