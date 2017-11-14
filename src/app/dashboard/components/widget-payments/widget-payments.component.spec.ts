import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPaymentsComponent } from './widget-payments.component';

describe('WidgetPaymentsComponent', () => {
  let component: WidgetPaymentsComponent;
  let fixture: ComponentFixture<WidgetPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
