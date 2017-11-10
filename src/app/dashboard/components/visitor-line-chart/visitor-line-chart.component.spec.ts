import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorLineChartComponent } from './visitor-line-chart.component';

describe('VisitorLineChartComponent', () => {
  let component: VisitorLineChartComponent;
  let fixture: ComponentFixture<VisitorLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
