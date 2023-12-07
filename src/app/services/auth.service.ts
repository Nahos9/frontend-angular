import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = "http://localhost:9000/"
  url = "http://localhost:9000/auth/login"

  isAuthenticated :boolean = false
  roles : any;
  username! : any
  access_token!: any;
 

  constructor(private http:HttpClient,private router:Router) { }

  
  public login(username:string,paswword:string)
  {
    let params = new HttpParams().set("username",username).set("password",paswword)

    let headers = {
      Headers: new Headers().set('Content-Type','application/x-www-form-urlencoded')
    }
    
   let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };
  
    return this.http.post(`${this.BASE_URL}auth/login`,params,httpOptions)
  }

  loadProfile(data:any)
  {
    this.isAuthenticated = true
    this.access_token = data['access-token']
    let decodeJwt = jwtDecode(this.access_token)
    this.username = decodeJwt.sub
  }
  logout()
  {
    this.isAuthenticated = false
    this.access_token = undefined
    this.username = undefined

    this.router.navigate(["/login"])
  }
}
