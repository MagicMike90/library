import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent implements OnInit {
  color: string = 'primary';

  stats: Array<any> = [
    { label: 'Power', value: 89, class: 'power' },
    { label: 'Speed', value: 90, class: 'speed' },
    { label: 'Defence', value: 79, class: 'defence' },
    { label: 'Skill', value: 92, class: 'skill' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
