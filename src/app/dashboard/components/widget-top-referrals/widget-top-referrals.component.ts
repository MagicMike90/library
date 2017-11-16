import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-top-referrals',
  templateUrl: './widget-top-referrals.component.html',
  styleUrls: ['./widget-top-referrals.component.css']
})
export class WidgetTopReferralsComponent implements OnInit {
  private topReferrals = [
    { url: 'pinterest.com', amount: '485' },
    { url: 'www.facebook.com', amount: '285' },
    { url: 'm.facebook', amount: '85'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
