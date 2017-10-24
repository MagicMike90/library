import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { Hero } from '../../models/hero.model';

@Component({
  moduleId: module.id,
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // heroes: Hero[];
  // selectedHero: Hero;
  @Input()
  heroes: Hero[];

  @Input()
  selectedHero: Hero;

  @Input()
  onSelect: Function;

  constructor() { }

  // getHeroes(): void {
  //   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  // }

  ngOnInit() {
    // this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }

}
