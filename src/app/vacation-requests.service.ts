
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacationRequestsService {
  private apiUrl = './assets/vacationRequests.json';

  constructor(private http: HttpClient) {}

  getVacationRequests(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
