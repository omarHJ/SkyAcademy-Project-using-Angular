import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../highlight.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { VacationCardsComponent } from "../vacation-cards/vacation-cards.component";
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-vacation-requests',
  standalone: true,
  imports: [NavbarComponent, CommonModule, HighlightPipe, FormsModule, HttpClientModule, VacationCardsComponent, PaginationComponent],
  templateUrl: './vacation-requests.component.html',
  styleUrls: ['./vacation-requests.component.css']
})
export class VacationRequestsComponent implements OnInit {
  currentYear: Date = new Date();
  searchTerm: string = '';
  vacationRequestsCards: any[] = [];
  
  isRequestsBold = true
  
  itemsPerPage = 12; 
  currentPage = 1;

  
  selectAllChecked = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any>('../../assets/vacationRequests.json').subscribe(data => {
      this.vacationRequestsCards = data.vacationCards.map((card: any) => ({ ...card, selected: false }));
    });
  }

  get totalPages(): number {
    return Math.ceil(this.vacationRequestsCards.length / this.itemsPerPage);
  }

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.vacationRequestsCards.slice(startIndex, startIndex + this.itemsPerPage);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  toggleSelectAll() {
    this.selectAllChecked = !this.selectAllChecked; 
    this.vacationRequestsCards.forEach(card => card.selected = this.selectAllChecked);
  }

  toggleIndividualCheckbox(card: any) {
    card.selected = !card.selected;
    this.selectAllChecked = this.vacationRequestsCards.every(card => card.selected);
  }
}