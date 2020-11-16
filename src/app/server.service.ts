import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  serverUrl: 'http://localhost:8080';


  getCategoria(){
    return new Promise((resolve, reject)=>{
      this.http.get(`http://localhost:8080/categoria`).subscribe(
        (success: any)=>{
          resolve(success);
        }, (error: any)=>{
          reject(error);
        }
      )
    })
  }

  createCategoria(data){
    return this.http.post(`http://localhost:8080/categoria`, data);
  }

  deleteCategoria(categoria){
    return this.http.post(`http://localhost:8080/categoria/${categoria.descrizione}`, categoria);
  }

  updateCategoria(categoria)
  {
    return this.http.put(`http://localhost:8080/categoria/${categoria.descrizione}`, categoria)
  }

}
