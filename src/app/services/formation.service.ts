import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  URL = "http://localhost:9000/api/"

  constructor(private http:HttpClient) { }

  saveFormation(formation:any):Observable<any>
  {
    return this.http.post(`${this.URL}formations`,formation)
  }

  getAllFormation():Observable<any>
  {
    return this.http.get(`${this.URL}formations`)
  }
  deteleOneFormation(id:number)
  {
    return this.http.delete(`${this.URL}formations/${id}`)
  }
}
