import { Component, OnInit } from '@angular/core';
import { Clientes } from '../modelos/clientes';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  datosClientes:any = [];
  selectedCliente: Clientes = new Clientes();

  constructor(private RestService:RestService){}

  ngOnInit(): void {
    this.cargarDatos();
  }
  public cargarDatos(){
    this.RestService.get('http://localhost:5001/api/clients').subscribe(res => {
      this.datosClientes = res;
    })
  }

  public enviarDatos(){
    if(!this.selectedCliente.id){
      this.RestService.post('http://localhost:5001/api/clients/create', this.selectedCliente).subscribe( res => {
        this.cargarDatos();
        this.selectedCliente = new Clientes();
      }) 
    }else{
      this.RestService.put('http://localhost:5001/api/clients/update', this.selectedCliente.id, this.selectedCliente).subscribe( res => {
        this.cargarDatos();
        this.selectedCliente = new Clientes();
      }) 
    }
  }

  public eliminarCliente(id: number){
    if(confirm('desea borrar este Cliente?')){
      this.RestService.delete('http://localhost:5001/api/clients/delete', id).subscribe(res => {
        this.cargarDatos();
      })
    }
  }
  traerDatos(cliente: Clientes){
    this.selectedCliente = cliente;
  }
}
