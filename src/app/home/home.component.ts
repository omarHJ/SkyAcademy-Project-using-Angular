import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../highlight.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { VacationAndRequestsCardsComponent } from './vacation-and-requests-cards/vacation-and-requests-cards.component';
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule,
    RouterModule, HighlightPipe, NavbarComponent, ImgSliderComponent, 
    VacationAndRequestsCardsComponent, EmployeeDetailsComponent, 
  EmployeeDetailsComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'My Angular App'
  name = 'Hazem'

  currentYear: Date =new Date()
  
  isHomeBold = true

  searchTerm: string = ''

  // onSearchChange() {
  //   console.log(this.searchTerm);
  // }

  viewMoreText: string = 'View More >'

  viewRequests() {
    this.viewMoreText = 'View More Requests >>'
  }

  resetText() {
    this.viewMoreText = 'View More >'
  }

  vacationCards: any[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.http.get<any>('../assets/homeData.json').subscribe(data => {
      this.vacationCards = data.vacationCards
    });
  }
  
}