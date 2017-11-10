import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-line-chart',
  templateUrl: './visitor-line-chart.component.html',
  styleUrls: ['./visitor-line-chart.component.css']
})
export class VisitorLineChartComponent implements OnInit {

  // lineChart
  // public lineChartLabels: Array<any> = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];
  public lineChartLabels: Array<any> = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  public lineChartType: string = 'line';


  private datasets = [{
    data: [12, 19, 3, 17, 6, 3, 7],
    label: "Vistors",
    borderColor: "#3cba9f",
    fill: false
  }];

  private options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  };


  constructor() { }

  ngOnInit() {
  }
  public randomizeType(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
