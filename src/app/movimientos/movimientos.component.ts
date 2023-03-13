import { Component, OnInit } from '@angular/core';
import { Movimientos } from '../modelos/movimientos';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  datosClientes: any = [];
  datosServicios: any = [];
  datosFacturas: any = [];
  selectedFacturas: Movimientos = new Movimientos();

  constructor(private RestService:RestService){}

  ngOnInit(): void {
    this.cargarDatos();
  }

  public cargarDatos(){
    this.RestService.get('http://localhost:5001/api/clients').subscribe(res => {this.datosClientes = res})
    this.RestService.get('http://localhost:5001/api/services').subscribe(res => {this.datosServicios = res})
    this.RestService.get('http://localhost:5001/api/invoices').subscribe(res => {this.datosFacturas = res})
  }

  public enviarDatos(){
    this.RestService.post('http://localhost:5001/api/invoices/add-invoice', this.selectedFacturas).subscribe(res =>{
    this.cargarDatos();
    this.selectedFacturas = new Movimientos;
    })
  }

  public borrarDatos(id: number){
    this.RestService.delete('http://localhost:5001/api/invoices/delete', id).subscribe(res => {
      this.cargarDatos();
    })
    this.datosFacturas = this.datosFacturas.filter((item: { id: number; }) => item.id != id)
  }

  borrarRegistro(id: number){
    this.datosFacturas = this.datosFacturas.filter((item: { id: number; }) => item.id != id)
  }
}
