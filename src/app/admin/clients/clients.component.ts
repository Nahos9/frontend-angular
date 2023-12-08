import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients : any = []
  access_token : any =undefined
  formClient! : FormGroup 

  constructor(private clientService:ClientService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.handleGetClients()
    this.formClient = this.fb.group(
      {
        firstname:this.fb.control(''),
        lastname:this.fb.control(''),
        email:this.fb.control(''),
        pays:this.fb.control(''),
        ville:this.fb.control(''),
        phone:this.fb.control(''),
        job:this.fb.control('')
      }
    )
  }

  handleGetClients()
  {
    this.clientService.getAllClient()
    .subscribe({
      next:data=>{
        this.clients = data
      },error:error=>{
        console.log(error)
      }
    })
  }

  handleSubmit()
  {
  

    this.clientService.saveClient(this.formClient.value)
    .subscribe({
      next:resp=>{
       console.log(resp)
      },error:error=>{
        console.log(error)
      }
    })
  }
}
