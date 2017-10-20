import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    HeroesComponent
  ],
  exports: [
    DashboardComponent,
    HeroesComponent,
  ]
})
export class PagesModule { }
