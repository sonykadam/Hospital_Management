import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doc',
  standalone: false,
  templateUrl: './doc.component.html',
  styleUrl: './doc.component.css'
})
export class DocComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private patientService: PatientService,private router:Router,private docauth:DocauthService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatientList().subscribe((data: Patient[]) => {
      this.patients = data;
    });
  }

  update(id:number){

    this.router.navigate(['update-patient',id])

  }

  delete(id:number){
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }

  view(id:number){
    this.router.navigate(['view-patient',id]);
  }

  logout(){

    this.docauth.logout();
    this.router.navigate(['home'])
  }
}