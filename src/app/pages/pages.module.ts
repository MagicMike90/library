import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from "@angular/http"

import {
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
} from '@angular/material';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BookService } from "./services/book.service";
import { HeroService, HERO_REST_URL } from "./services/hero.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    BrowserModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
  ],
  declarations: [
    DashboardComponent,
    HeroesComponent
  ],
  exports: [
    DashboardComponent,
    HeroesComponent,
  ],
  providers: [
    BookService,
    HeroService,
    { provide: HERO_REST_URL, useValue: "http://localhost:3500/" }]
})
export class PagesModule { }
