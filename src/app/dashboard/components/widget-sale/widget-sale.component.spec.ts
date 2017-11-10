import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSaleComponent } from './widget-sale.component';

describe('WidgetSaleComponent', () => {
  let component: WidgetSaleComponent;
  let fixture: ComponentFixture<WidgetSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
