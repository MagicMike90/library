import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-line-chart',
  templateUrl: './visitor-line-chart.component.html',
  styleUrls: ['./visitor-line-chart.component.css']
})
export class VisitorLineChartComponent implements OnInit {

  // lineChart
  // public lineChartLabels: Array<any> = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];
  public chartLabels: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  public chartType = 'bar';

  public barChartType = 'bar';
  private showLegend = false;

  public datasets = [{
    data: [12, 19, 3, 5, 2, 3],
    label: '# of Votes',
    borderWidth: 1
  }];

  public chartColors:Array<any> = [{ backgroundColor: 'rgba(54, 162, 235, 1)'}];

  private options: {
    scaleShowVerticalLines: false,
    responsive: true
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };


  constructor() { }

  ngOnInit() {
  }


  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
