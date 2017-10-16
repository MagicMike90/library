
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { BookListComponent } from './book-list/book-list.component';
import { MatToolbarModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTableModule
  ],
  exports: [
    AppHeaderComponent,
    AppSidebarComponent,
    BookListComponent
  ],
  providers: []
})
export class ComponentModule { }
