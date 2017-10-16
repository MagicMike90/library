
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent,
    BookListComponent
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
