import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-img-slider',
  standalone: true,
  imports: [],
  templateUrl: './img-slider.component.html',
  styleUrl: './img-slider.component.css'
})
export class ImgSliderComponent {
  sliderHead= "Best Spots For A Summer Vacation"
  sliderText = "Check out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!"

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
