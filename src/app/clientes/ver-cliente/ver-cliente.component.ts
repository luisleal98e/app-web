import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit{
  public id_cliente:any;
  datos:any = []
  constructor(private RestService:RestService, private route:ActivatedRoute, private Router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap;
      this.id_cliente = params.id;
    })
    this.cargarCliente();
  }

  public cargarCliente(){
    this.RestService.getOne('http://localhost:5001/api/clients/find', this.id_cliente).subscribe(res => {
      this.datos = res; 
    })
  }

  public eliminarCliente(id:number){
    if(confirm('desea borrar este Cliente?')){
      this.RestService.delete('http://localhost:5001/api/clients/delete', id).subscribe(res => {})
      this.Router.navigate(['/clientes'])
    }
  }
}
