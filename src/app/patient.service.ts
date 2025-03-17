import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = 'http://localhost:8085/api/v1/patients'; // Update with your backend API URL

  constructor(private httpClient: HttpClient) {}

  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
  }

  delete(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  createPatient(patient:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseURL}`,patient);
  }

  getPatientById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);
  }

  updatePatient(id:number,patient:Patient):Observable<object>{
    return this.httpClient.put<Patient>(`${this.baseURL}/${id}`,patient);
  }
}
