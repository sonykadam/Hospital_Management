import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL = 'http://localhost:8085/api/v2/appointments'; // Update with your backend API URL
  
    constructor(private httpClient: HttpClient) {}
  
    getAllAppointments(): Observable<Appointment[]> {
      return this.httpClient.get<Appointment[]>(`${this.baseURL}`);
    }

    createAppointment(appointment:Appointment):Observable<Appointment>{
      return this.httpClient.post<Appointment>(`${this.baseURL}`,appointment);
    }
    
    deleteAppointment(id: number): Observable<object> {
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
    
}
