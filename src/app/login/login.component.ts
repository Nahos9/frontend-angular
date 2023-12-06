import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup

  constructor(private fb:FormBuilder,private loginService:AuthService,private router:Router) { }

  ngOnInit(){

    this.formLogin = this.fb.group(
      {name: this.fb.control(''),password:this.fb.control('')},
    )
  }

  handleLogin()
  {
   let username = this.formLogin.value.name
   let password = this.formLogin.value.password

   this.loginService.login(username,password)
   .subscribe({
    next : data=>{
      
     this.loginService.loadProfile(data)
     this.router.navigate(["/admin"])
     
    },
    error:error=>{
      console.log(error)
    }
   })
  }
}
