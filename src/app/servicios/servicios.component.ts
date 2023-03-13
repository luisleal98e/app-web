import { Component, OnInit } from '@angular/core';
import { Servicios } from '../modelos/servicios';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  datosServicios:any = [];
  selectedServicio: Servicios = new Servicios();

  constructor(private RestService:RestService){}

  ngOnInit(): void {
    this.cargarDatos();
  }

  public cargarDatos(){
    this.RestService.get('http://localhost:5001/api/services').subscribe(res => {
      this.datosServicios = res;
    })
  }

  public enviarDatos(){
    if(!this.selectedServicio.id){
      this.RestService.post('http://localhost:5001/api/services/create', this.selectedServicio).subscribe(res => {
      this.cargarDatos();
      this.selectedServicio = new Servicios();
      })
    }else{
      this.RestService.put('http://localhost:5001/api/services/update', this.selectedServicio.id, this.selectedServicio).subscribe(res => {
      this.cargarDatos();
      this.selectedServicio = new Servicios();
      })
    }
  }

  public borrarDatos(id: number){
    if(confirm('Seguro que desea borrar este servicio?')){
      this.RestService.delete('http://localhost:5001/api/services/delete', id).subscribe(res => {
      })
      this.datosServicios = this.datosServicios.filter((item: { id: number; }) => item.id != id);
    }
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
}
