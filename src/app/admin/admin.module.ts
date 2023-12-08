import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClientsComponent } from './clients/clients.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { FormationsComponent } from './formations/formations.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    ClientsComponent,
    PartenairesComponent,
    FormationsComponent,
    CertificationsComponent,
    TopbarComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
