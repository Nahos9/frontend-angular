import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  clientId:number = this.activeRoute.snapshot.params["id"]
  editForm!: FormGroup
  client!:any
  constructor(private activeRoute:ActivatedRoute,private serviceClient:ClientService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.editForm = this.fb.group(
      {
        firstname:this.fb.control(''),
        lastname:this.fb.control(''),
        email:this.fb.control(''),
        pays:this.fb.control(''),
        ville:this.fb.control(''),
        phone:this.fb.control(''),
        job:this.fb.control(''),
      }
    )

    this.getOneClient()

  }

  getOneClient()
  {
    return this.serviceClient.getOneClient(this.clientId)
    .subscribe({
      next:data=>{
        this.editForm.patchValue(data)
        this.client = data
      },error:error=>{
        console.log(error)
      }
    })
  }

  handleUpdate()
  {
   /* let Form = JSON.stringify(this.editForm.value);*/
  
    this.serviceClient.updateClient(this.clientId,this.editForm.value)
    .subscribe({
      next:data=>{

        setTimeout(
          ()=>{
            this.router.navigate(["/admin/clients"])
          },1500
         )
      },error:error=>{
        console.log(error)
      }
    })
  }


}
