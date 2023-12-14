import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  clientEdit!: any

  constructor(private clientService:ClientService,private fb:FormBuilder,private router:Router) { }

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
        this.clients = data.reverse()
      },error:error=>{
        console.log(error)
      }
    })
  }

  handleSubmit()
  {
  
    document.getElementById('close-modal')?.click()

    this.clientService.saveClient(this.formClient.value)
    .subscribe({
      next:resp=>{
       console.log(resp)
       this.formClient.reset()
       this.handleGetClients()
      },error:error=>{
        console.log(error)
      }
    })
  }

  editClient(client:any)
  {
    this.clientEdit = client
   /* this.formClient = this.fb.group(
      {
        firstname:this.fb.control(client.firstname),
        lastname:this.fb.control(client.lastname),
        email:this.fb.control(client.email),
        pays:this.fb.control(client.pays),
        ville:this.fb.control(client.ville),
        phone:this.fb.control(client.phone),
        job:this.fb.control(client.job),
      }
    )*/
  }

  handleUpadet(client:any)
  {
    this.clientService.updateClient(client)
    .subscribe({
      next:resp=>{
        console.log(resp)
      },error:error=>{
        console.log(error)
      }
    })
  }

  handleDelete(clientId:number)
  {
    return this.clientService.deleteClient(clientId)
    .subscribe({
      next:resp=>{
        console.log(resp)
        confirm("Vous levez vraiment supprimer ce client?")
        this.handleGetClients()
      },error:error=>{
        console.log(error)
      }
    })
  }
}
