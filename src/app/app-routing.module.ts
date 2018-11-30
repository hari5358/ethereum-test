import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListComponent } from './UI/components/doctors/doctors-list/doctors-list.component';
import { DoctorDetailsComponent } from './UI/components/doctors/doctor-details/doctor-details.component';
import { PatientListComponent } from './UI/components/patients/patient-list/patient-list.component';
import { PatientDetailsComponent } from './UI/components/patients/patient-details/patient-details.component';
import { AddDoctorComponent } from './UI/components/doctors/add-doctor/add-doctor.component';
import { AddPatientComponent } from './UI/components/patients/add-patient/add-patient.component';
import { HomeComponent } from './UI/components/home/home.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'doctor-list', component: DoctorsListComponent},
    {path: 'doctors-details', component: DoctorDetailsComponent},
    {path: 'patient-list', component: PatientListComponent},
    {path: 'patient-details', component: PatientDetailsComponent},
    {path: 'add-doctor', component: AddDoctorComponent},
    {path: 'add-patient', component: AddPatientComponent},
    {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
