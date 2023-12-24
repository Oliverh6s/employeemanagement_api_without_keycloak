import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import { Employees } from '../shared/models/employees';
import {Employee} from "../Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8089/employees';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.apiUrl);
  }

  getEmployeeById(employeeId: number): Observable<Employees> {
    return this.http.get<Employees>(`${this.apiUrl}/${employeeId}`);
  }

  saveEmployee(Data:any){
    return this.http.post(this.apiUrl, Data)
  }

  deleteEmployeeById(employeeId: number){
    return this.http.delete<Employee>(`${this.apiUrl}/${employeeId}`)
  }
}
