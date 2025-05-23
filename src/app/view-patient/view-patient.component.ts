import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-view-patient',
  standalone: false,
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {

  id:number=0;
  patient:Patient=new Patient();
  constructor(private patientService:PatientService,private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient=data;

    })
  }

}
