
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppHeaderComponent } from './app-header/header.component';
import { AppSidebarComponent } from './sidebar/sidebar.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent,
    BookListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AppHeaderComponent,
    AppSidebarComponent,
    BookListComponent
  ],
  providers: []
})
export class ComponentModule { }
