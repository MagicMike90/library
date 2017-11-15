import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-widget-toolbar',
  templateUrl: './widget-toolbar.component.html',
  styleUrls: ['./widget-toolbar.component.css']
})
export class WidgetToolbarComponent implements OnInit {
  favoriteSeason: string;
  selectedPeriod: string;
  selectedStartDate = new FormControl(new Date());
  selectedEndDate = new FormControl(new Date());

  periods = [
    { value: 'daily', viewValue: 'Today' },
    { value: 'weekly', viewValue: 'This Week' },
    { value: 'monthly', viewValue: 'This Month' },
    { value: 'yearly', viewValue: 'This Year' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
