import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from "@angular/http"

import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BookService } from "./services/book.service";
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    PageNotFoundComponent,
    CustomersComponent,

  ],
  exports: [
    CustomersComponent
  ],
  providers: [
    BookService
  ]
})
export class PagesModule { }
