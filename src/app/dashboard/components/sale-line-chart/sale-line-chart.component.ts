import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-line-chart',
  templateUrl: './sale-line-chart.component.html',
  styleUrls: ['./sale-line-chart.component.css']
})
export class SaleLineChartComponent implements OnInit {
  // lineChart

  public lineChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChartType = 'line';
  private showLegend = false;
  
  private datasets = [{
    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
    label: 'Africa',
    borderColor: '#3e95cd',
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
