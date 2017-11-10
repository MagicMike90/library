import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetProfitComponent } from './widget-profit.component';

describe('WidgetProfitComponent', () => {
  let component: WidgetProfitComponent;
  let fixture: ComponentFixture<WidgetProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
