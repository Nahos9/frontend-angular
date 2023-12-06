import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ClientsComponent } from './clients/clients.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { FormationsComponent } from './formations/formations.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { AuthenticationGuard } from '../gaurds/authentication.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: AdminComponent,children:[
    {path:'',component:HomeComponent},
    {path:'clients',component:ClientsComponent},
    {path:'partenaires',component:PartenairesComponent},
    {path:'formations',component:FormationsComponent},
    {path:'certifications',component:CertificationsComponent}
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
