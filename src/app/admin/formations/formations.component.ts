import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations:any=[]
  constructor(private formationSer:FormationService) { }

  ngOnInit(): void {

   

    this.getAllFormations()
  }

  getAllFormations()
  {
    this.formationSer.getAllFormation()
    .subscribe({
      next:data=>{
        console.log(data)
        this.formations = data.reverse()
      },error:error=>{
        console.log(error)
      }
    })
  }

  handleDelete(id:number)
  {
    this.formationSer.deteleOneFormation(id)
    .subscribe({
      next:resp=>{
        console.log(resp)
        this.getAllFormations()
      },error:error=>{
        console.log(error)
      }
    })
  }
 
}
