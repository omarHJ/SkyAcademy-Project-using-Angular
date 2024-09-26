import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../highlight.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule,
    RouterModule, HighlightPipe, NavbarComponent], 
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

  sliderHead= "Best Spots For A Summer Vacation"
  sliderText = "Check out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!"

  viewMoreText: string = 'View More >'

  viewRequests() {
    this.viewMoreText = 'View More Requests >>'
  }

  resetText() {
    this.viewMoreText = 'View More >'
  }

  sliderPics: any[] = []
  vacationCards: any[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.http.get<any>('../assets/homeData.json').subscribe(data => {
      this.sliderPics = data.sliderPics
      this.vacationCards = data.vacationCards
    });
  }
  
}