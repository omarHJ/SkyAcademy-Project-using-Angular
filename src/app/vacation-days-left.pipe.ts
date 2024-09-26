import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vacationDaysLeft',
  standalone: true
})
export class VacationDaysLeftPipe implements PipeTransform {

  transform(totalVacationDays: number, daysTaken: number): number {
    return totalVacationDays - daysTaken;
  }

}
