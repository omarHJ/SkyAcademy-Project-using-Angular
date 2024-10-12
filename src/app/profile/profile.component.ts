import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EmployeeProfileDetailsComponent } from "./employee-profile-details/employee-profile-details.component";
import { VacationHistory } from '../models/vacation-history.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent, CommonModule, HttpClientModule, EmployeeProfileDetailsComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isProfileBold = true;
  currentYear: Date = new Date();
  vacationHistoryCards: VacationHistory[] = []; // Use the interface here

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any>('../assets/historyData.json').subscribe(data => {
      this.vacationHistoryCards = data.vacationHistoryCards; 
    });
  }
}
