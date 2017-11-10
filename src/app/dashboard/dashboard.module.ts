import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialUiModule } from '../material-ui/material-ui.module';
import { DashboardComponent } from './containers/dashboard.component';
import { WidgetVisitorComponent } from './components/widget-visitor/widget-visitor.component';
import { WidgetUserComponent } from './components/widget-user/widget-user.component';
import { WidgetSaleComponent } from './components/widget-sale/widget-sale.component';
import { WidgetProfitComponent } from './components/widget-profit/widget-profit.component';
import { SaleLineChartComponent } from './components/sale-line-chart/sale-line-chart.component';
import { SaleMapComponent } from './components/sale-map/sale-map.component';
import { SaleOverviewComponent } from './components/sale-overview/sale-overview.component';


export const COMPONENTS = [
  DashboardComponent,
  SaleMapComponent,
  SaleOverviewComponent,
  SaleLineChartComponent,
  WidgetVisitorComponent,
  WidgetUserComponent,
  WidgetSaleComponent,
  WidgetProfitComponent
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
