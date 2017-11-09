import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialUiModule } from '../material-ui/material-ui.module';
import { DashboardComponent } from './containers/dashboard.component';
import { SaleMapComponent } from './components/sale-map/sale-map.component';
import { SaleOverviewComponent } from './components/sale-overview/sale-overview.component';


export const COMPONENTS = [
  DashboardComponent,
  SaleMapComponent,
  SaleOverviewComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialUiModule
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class DashboardModule { }
