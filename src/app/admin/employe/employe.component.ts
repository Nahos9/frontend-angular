import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employeForm!:FormGroup
  constructor(private fb:FormBuilder,private service:ClientService) { }

  ngOnInit(): void {
    this.employeForm = this.fb.group({
      firstname:this.fb.control(''),
      lastname:this.fb.control(''),
      email:this.fb.control(''),
      pays:this.fb.control(''),
      ville:this.fb.control(''),
      phone:this.fb.control(''),
      job:this.fb.control('')
    })
  }
handleSubmit()
{
  console.log(this.employeForm.value)
  this.service.saveEmploye(this.employeForm.value)
  .subscribe({
    next:resp=>{
      console.log(resp)
    },error:error=>{
      console.log(error)
    }
  })
}
}
