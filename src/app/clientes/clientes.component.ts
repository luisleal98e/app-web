import { Component } from '@angular/core';
import { Clientes } from '../modelos/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  datosClientes: Clientes[] = [
    {id: 1, nombre: 'Luis', apellido: 'Leal', cedula: 27503872, correo: 'luisleal98e@gmail.com'},
    {id: 2, nombre: 'Juan', apellido: 'Sanchez', cedula: 26487951, correo: 'juan@gmail.com'},
    {id: 3, nombre: 'Maria', apellido: 'Diaz', cedula: 24852369, correo: 'maria@gmail.com'},
  ];

  selectedCliente: Clientes = new Clientes();


  agregar(){
    if(!this.selectedCliente.id){
      this.selectedCliente.id = this.datosClientes.length + 1;
      this.datosClientes.push(this.selectedCliente);
    }
    this.selectedCliente = new Clientes();
  };

  traerDatos(cliente: Clientes){
    this.selectedCliente = cliente;
  }

  borrarCliente(id: number){
    if(confirm('desea borrar este Cliente?')){
      this.datosClientes = this.datosClientes.filter((item) => item.id != id)
    }
  }
}
