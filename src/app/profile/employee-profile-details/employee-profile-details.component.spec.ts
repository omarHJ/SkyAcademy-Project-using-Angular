import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileDetailsComponent } from './employee-profile-details.component';

describe('EmployeeProfileDetailsComponent', () => {
  let component: EmployeeProfileDetailsComponent;
  let fixture: ComponentFixture<EmployeeProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
