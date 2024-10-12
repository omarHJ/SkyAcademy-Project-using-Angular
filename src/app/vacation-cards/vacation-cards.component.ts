import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../highlight.pipe';

@Component({
  selector: 'app-vacation-cards',
  standalone: true,
  imports: [HighlightPipe, CommonModule],
  templateUrl: './vacation-cards.component.html',
  styleUrls: ['./vacation-cards.component.css']
})
export class VacationCardsComponent {
  @Input() vacationRequestCard: any
  @Output() toggleCheckbox = new EventEmitter<void>()

  @Input() searchTerm!: string

  onCheckboxChange() {
    this.toggleCheckbox.emit();
  }
}
