import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { VacationDaysLeftPipe } from '../vacation-days-left.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent, CommonModule, HttpClientModule, VacationDaysLeftPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isProfileBold = true

  currentYear: Date =new Date()

  vacationHistoryCards: any[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.http.get<any>('../assets/historyData.json').subscribe(data => {
      this.vacationHistoryCards = data.vacationHistoryCards
    });
  }

  totalVacationDays = 30
  vacationDaysTaken = 20

  totalSickDays = 20
  sickDaysTaken = 6
}
