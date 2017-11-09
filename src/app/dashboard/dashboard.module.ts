import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './containers/dashboard.component';
import { SaleMapComponent } from './components/sale-map/sale-map.component';
import { SaleOverviewComponent } from './components/sale-overview/sale-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'dashboard', component: DashboardComponent }]),
  ],
  declarations: [SaleMapComponent, SaleOverviewComponent]
})
export class DashboardModule { }
