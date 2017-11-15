import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTopReferralsComponent } from './widget-top-referrals.component';

describe('WidgetTopReferralsComponent', () => {
  let component: WidgetTopReferralsComponent;
  let fixture: ComponentFixture<WidgetTopReferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTopReferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTopReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
