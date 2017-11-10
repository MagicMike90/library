import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialUiModule } from '../material-ui/material-ui.module';
import { DashboardComponent } from './containers/dashboard.component';
import { SaleLineChartComponent } from './components/sale-line-chart/sale-line-chart.component';
import { SaleMapComponent } from './components/sale-map/sale-map.component';
import { SaleOverviewComponent } from './components/sale-overview/sale-overview.component';


export const COMPONENTS = [
  DashboardComponent,
  SaleMapComponent,
  SaleOverviewComponent,
  SaleLineChartComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialUiModule,
    ChartsModule,
    FlexLayoutModule
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class DashboardModule { }
