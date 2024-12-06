import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsByResidenceComponent } from './apartments-by-residence.component';

describe('ApartmentsByResidenceComponent', () => {
  let component: ApartmentsByResidenceComponent;
  let fixture: ComponentFixture<ApartmentsByResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentsByResidenceComponent]
    });
    fixture = TestBed.createComponent(ApartmentsByResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
