import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients : any = []
  access_token : any =undefined

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.handleGetClients()
  }

  handleGetClients()
  {
    this.clientService.getAllClient()
    .subscribe({
      next:data=>{
        console.log(data)
      },error:error=>{
        console.log(error)
      }
    })
  }
}
