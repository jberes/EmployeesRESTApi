import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {
  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/9ea1cc36e2344dd1bc12ae63151c021d`);
  }
}
