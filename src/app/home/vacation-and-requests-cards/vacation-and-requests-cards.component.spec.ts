import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationAndRequestsCardsComponent } from './vacation-and-requests-cards.component';

describe('VacationAndRequestsCardsComponent', () => {
  let component: VacationAndRequestsCardsComponent;
  let fixture: ComponentFixture<VacationAndRequestsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationAndRequestsCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationAndRequestsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
