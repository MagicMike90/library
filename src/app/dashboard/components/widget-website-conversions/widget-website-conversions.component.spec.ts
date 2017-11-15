import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWebsiteConversionsComponent } from './widget-website-conversions.component';

describe('WidgetWebsiteConversionsComponent', () => {
  let component: WidgetWebsiteConversionsComponent;
  let fixture: ComponentFixture<WidgetWebsiteConversionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetWebsiteConversionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetWebsiteConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
