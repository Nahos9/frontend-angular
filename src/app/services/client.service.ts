import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  BASE_URL = "http://localhost:9000/apiV1/"
  URL = "http://localhost:8080/employe"

  constructor(private http:HttpClient) { }

  getAllClient():Observable<any>
  {
    return this.http.get<any>(`${this.BASE_URL}clients`)
  }
  saveClient(client:any):Observable<any>{
    /*console.log("service",client)
    return this.http.post(`${this.BASE_URL}clients`,client)*/
    return this.http.post("http://localhost:8080/employe",client)

  }
}
