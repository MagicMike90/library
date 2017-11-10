import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleLineChartComponent } from './sale-line-chart.component';

describe('SaleLineChartComponent', () => {
  let component: SaleLineChartComponent;
  let fixture: ComponentFixture<SaleLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
