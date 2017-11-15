import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-widget-toolbar',
  templateUrl: './widget-toolbar.component.html',
  styleUrls: ['./widget-toolbar.component.css']
})
export class WidgetToolbarComponent implements OnInit {
  favoriteSeason: string;
  selectedStartDate = new FormControl(new Date());
  selectedEndDate = new FormControl(new Date());

  seasons = [
    'Today',
    'This Week',
    'This Month',
    'This Year',
  ];


  constructor() { }

  ngOnInit() {
  }

}
