import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

   navs : any = [
    {libelle:'Accueil',icon:'bi bi-house',route:'/admin'},
    {libelle:'Clients',icon:'bi bi-people',route:'/admin/clients'},
    {libelle:'Partenaires',icon:'bi bi-person-vcard',route:'/admin/partenaires'},
    {libelle:'Formations',icon:'bi bi-book',route:'/admin/formations'},
    {libelle:'Certifications',icon:'bi bi-clipboard-minus',route:'/admin/certifications'},
   ]
   
   currentAction : any

  constructor() { }

  ngOnInit(): void {
  }


  setCurrentAction(action:any)
  {
    this.currentAction = action
  }

}
