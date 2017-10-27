import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  moduleId: module.id,
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
  private chartData: Array<any> = [];
  private url: string = "../../../assets/geojson/custom.geo.json";

  constructor(private heroService: HeroService, private http: Http) { }

  ngOnInit() {
    // var randomCard = faker.helpers.createCard();
    // console.log('randomCard', randomCard);
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));

    this.http.get(this.url)
      .subscribe(res => this.chartData = res.json());
    // // give everything a chance to get loaded before starting the animation to reduce choppiness
    // setTimeout(() => {
    //   this.generateData();

    //   // change the data periodically
    //   setInterval(() => this.generateData(), 3000);
    // }, 1000);
  }


  // generateData() {
  //   this.chartData = [];
  //   for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
  //     this.chartData.push([
  //       `Index ${i}`,
  //       Math.floor(Math.random() * 100)
  //     ]);
  //   }
  // }
}
