import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './UI/components/home/home.component';
import { DoctorsListComponent } from './UI/components/doctors/doctors-list/doctors-list.component';
import { DoctorDetailsComponent } from './UI/components/doctors/doctor-details/doctor-details.component';
import { PatientListComponent } from './UI/components/patients/patient-list/patient-list.component';
import { PatientDetailsComponent } from './UI/components/patients/patient-details/patient-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddDoctorComponent } from './UI/components/doctors/add-doctor/add-doctor.component';
import { AddPatientComponent } from './UI/components/patients/add-patient/add-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorsListComponent,
    DoctorDetailsComponent,
    PatientListComponent,
    PatientDetailsComponent,
    AddDoctorComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
