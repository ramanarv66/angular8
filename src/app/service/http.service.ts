import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getEmployeeData():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/employees');
  }
  createEmployee(employee:Employee):Observable<any>{
    return this.http.post('http://localhost:8080/employees',employee);
  }
}
