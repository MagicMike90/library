import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sale-line-chart',
  templateUrl: './sale-line-chart.component.html',
  styleUrls: ['./sale-line-chart.component.css']
})
export class SaleLineChartComponent implements OnInit, OnChanges {

  @Input() private data: Array<any>;

  public lineChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChartType = 'line';
  private showLegend = false;

  private datasets = [{
    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
    label: 'Sale'
  }];

  public chartColors: Array<any> = [{ backgroundColor: 'rgba(54, 162, 235, 1)' }];

  private options: {
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    },
    tooltips: {
      mode: 'label',
    },
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          show: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          show: true,
          labelString: 'Value'
        },
        ticks: {
          suggestedMin: -10,
          suggestedMax: 250,
        }
      }]
    }
  };


  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log('change', this.data);
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
