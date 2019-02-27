import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Transaction from '../actions/transaction';
import * as dashboard from '../reducers';

const map_geo_json = '../../../assets/geojson/custom.geo.json';
@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  transaction: Observable<any>;
  transactionSummary: Array<any>;

  private geojson: GeoJSON.FeatureCollection<any>;
  private selected: string;

  date = new FormControl(new Date());

  constructor(private http: Http, private store: Store<dashboard.State>) {
    this.transaction = this.store.select(dashboard.getTransactions);
    this.transaction.subscribe(
      transactions => (this.transactionSummary = transactions)
    );
  }

  ngOnInit() {
    this.selected = 'sales';
    this.http.get(map_geo_json).subscribe(res => (this.geojson = res.json()));
    // // give everything a chance to get loaded before starting the animation to reduce choppiness
    // setTimeout(() => {
    //   this.generateData();

    //   // change the data periodically
    //   setInterval(() => this.generateData(), 3000);
    // }, 1000);

    // this.store.dispatch(new Transaction.GetTransactions());
  }
  showSales() {
    return this.selected === 'sales';
  }
  showVisitors() {
    return this.selected === 'visitors';
  }
  onSelected(menu) {
    this.selected = menu;
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
