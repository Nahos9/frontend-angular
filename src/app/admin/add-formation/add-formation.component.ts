import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  formationForm!:FormGroup

  constructor(private fb:FormBuilder,private formaServ:FormationService,private router:Router) { }

  ngOnInit(): void {
    this.formationForm = this.fb.group(
      {
        libelle:this.fb.control(""),
        lieux:this.fb.control(""),
        tarif:this.fb.control(""),
        description:this.fb.control(""),
      }
    )
  }

  handleSubmit()
  {
    this.formaServ.saveFormation(this.formationForm.value)
    .subscribe({
      next:data=>{
        console.log(data)
        this.router.navigate(["/admin/formations"])
      },error:error=>{
        console.log(error)
      }
    })
  }
}
