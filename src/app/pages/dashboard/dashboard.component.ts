import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  images = ['../../../assets/svg/hangouts.svg'];
  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // var randomCard = faker.helpers.createCard();
    // console.log('randomCard', randomCard);
    this.heroService.getHeroes()
    .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
