import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatCardModule,
  MatButtonModule,
  MatGridListModule
} from '@angular/material';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
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
