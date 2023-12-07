import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  BASE_URL = "http://localhost:9000/apiV1/"
  URL = "http://localhost:9000/apiV1/clients"
  constructor(private http:HttpClient) { }

  getAllClient():Observable<any>
  {
    return this.http.get<any>(`${this.BASE_URL}clients`)
  }
}
