import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ClientsComponent } from './clients/clients.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { FormationsComponent } from './formations/formations.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { AuthenticationGuard } from '../gaurds/authentication.guard';
import { HomeComponent } from './home/home.component';
import { EmployeComponent } from './employe/employe.component';
import { UpdateClientComponent } from './update-client/update-client.component';


const routes: Routes = [
  { path: '', component: AdminComponent,children:[
    {path:'',component:HomeComponent},
    {path:'clients',component:ClientsComponent},
    {path:'clients/:id',component:UpdateClientComponent},
    {path:'partenaires',component:PartenairesComponent},
    {path:'formations',component:FormationsComponent},
    {path:'certifications',component:CertificationsComponent},
    {path:'employes',component:EmployeComponent}
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
