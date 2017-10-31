import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from "@angular/http"
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatListModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookService } from "./services/book.service";
import { CustomersComponent } from './customers/customers.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [
    DashboardComponent,

    CustomersComponent,
    AuthComponent
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [
    BookService
  ]
})
export class PagesModule { }
