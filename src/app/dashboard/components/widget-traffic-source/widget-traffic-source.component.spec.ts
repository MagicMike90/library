import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTrafficSourceComponent } from './widget-traffic-source.component';

describe('WidgetTrafficSourceComponent', () => {
  let component: WidgetTrafficSourceComponent;
  let fixture: ComponentFixture<WidgetTrafficSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTrafficSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTrafficSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
