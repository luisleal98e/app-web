import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get(url: string){
    return this.http.get(url);
  }

  public getOne(url: string, id: number){
    return this.http.get(url+'/'+id);
  }

  public post(url: string, body:any){
    return this.http.post(url, body);
  }

  public delete(url: string, id: number){
    return this.http.delete(url+'/'+id)
  }
  
  public put(url: string, id:number, body:any){
    return this.http.put(url+'/'+id, body);
  }
}
