import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseURL = 'http://localhost:8085/api/v3/medicines'; 

  constructor(private httpClient:HttpClient) { }

  getMedicines():Observable<Medicine[]>{

    return this.httpClient.get<Medicine[]>(`${this.baseURL}`);

  }

  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseURL}`,medicine);
  }

  getMedicineById(id:Number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseURL}${id}`);
  }

  updateMedicine(id:number,medicine:Medicine):Observable<object>{
    return this.httpClient.put<Medicine>(`${this.baseURL}/${id}`,medicine);
  }

  delete(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


    
}
