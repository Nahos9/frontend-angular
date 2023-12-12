import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  BASE_URL = "http://localhost:9000/apiV1/"
  URL = "http://localhost:9000/api/"

  constructor(private http:HttpClient) { }

  getAllClient():Observable<any>
  {
    return this.http.get<any>(`${this.URL}clients`)
  }
  
  saveClient(client:any):Observable<any>{
    console.log("service",client)
    return this.http.post(`${this.URL}employe`,client)
    

  }

  saveEmploye(emp:any):Observable<any>
  {
    return this.http.post(`${this.URL}employe`,emp)
  }

  updateClient(clientId:number,emp:any):Observable<any>
  {
    return this.http.put(`${this.URL}clients/${clientId}`,emp)
  }

  getOneClient(id:number):Observable<any>
  {
    return this.http.get(`${this.URL}clients/${id}`)
  }

 
}
