import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-ver-servicio',
  templateUrl: './ver-servicio.component.html',
  styleUrls: ['./ver-servicio.component.css']
})
export class VerServicioComponent implements OnInit{
  public id_servicio:any;
  datos:any = []
  constructor(private RestService:RestService, private route:ActivatedRoute, private Router:Router){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap;
      this.id_servicio = params.id;
    })
    this.cargarCliente();
  }

  public cargarCliente(){
    this.RestService.getOne('http://localhost:5001/api/services/find', this.id_servicio).subscribe(res => {
      this.datos = res; 
    })
  }

  public eliminarServicio(id:number){
    if(confirm('desea borrar este servicio?')){
      this.RestService.delete('http://localhost:5001/api/services/delete', id).subscribe(res => {})
      this.Router.navigate(['/servicios'])
    }
  }
}
