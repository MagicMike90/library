import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTopSalersComponent } from './widget-top-salers.component';

describe('WidgetTopSalesComponent', () => {
  let component: WidgetTopSalersComponent;
  let fixture: ComponentFixture<WidgetTopSalersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTopSalersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTopSalersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
