import { Component } from '@angular/core';
import { VacationDaysLeftPipe } from '../../vacation-days-left.pipe';

@Component({
  selector: 'app-employee-profile-details',
  standalone: true,
  imports: [VacationDaysLeftPipe],
  templateUrl: './employee-profile-details.component.html',
  styleUrl: './employee-profile-details.component.css'
})
export class EmployeeProfileDetailsComponent {

  totalVacationDays = 30
  vacationDaysTaken = 20

  totalSickDays = 20
  sickDaysTaken = 6

}
