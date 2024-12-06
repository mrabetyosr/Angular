import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceDetailsComponent } from './residence-details.component';


describe('ResidenceDetailsComponent', () => {
  let component: ResidenceDetailsComponent;
  let fixture: ComponentFixture<ResidenceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidenceDetailsComponent]
    });
    fixture = TestBed.createComponent(ResidenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
