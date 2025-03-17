import { Component } from '@angular/core';
import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hospital_management_system';


  }