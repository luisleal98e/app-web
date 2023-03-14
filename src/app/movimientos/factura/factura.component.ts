import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  public id:any; 
  factura:any = []; 
  constructor(private RestService:RestService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap;
      this.id = params.id; 
      console.log(paramMap)
    })
    this.cargarDatos();
  }

  public cargarDatos(){
    this.RestService.getOne('http://localhost:5001/api/invoices/find', this.id).subscribe(res_factura => { 
      this.factura = res_factura;
    }) 
  }
}