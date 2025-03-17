import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DocComponent } from './doc/doc.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminlogComponent } from './adminlog/adminlog.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomeComponent,
    DocComponent,
    CreatePatientComponent,
    MedicineComponent,
    CreateMedicineComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    UpdateMedicineComponent,
    DocloginComponent,
    AdminlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
