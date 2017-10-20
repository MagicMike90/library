import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatCardModule,
  MatButtonModule,
  MatGridListModule
} from '@angular/material';

import { HttpModule, JsonpModule } from "@angular/http"
import { BookService, REST_URL } from "./services/book.service";
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
  ],
  providers: [BookService,
    { provide: REST_URL, useValue: "http://localhost:3500/" }]
})
export class PagesModule { }
