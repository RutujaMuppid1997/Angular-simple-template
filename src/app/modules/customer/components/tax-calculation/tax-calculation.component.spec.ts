import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculationComponent } from './tax-calculation.component';

describe('TaxCalculationComponent', () => {
  let component: TaxCalculationComponent;
  let fixture: ComponentFixture<TaxCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
