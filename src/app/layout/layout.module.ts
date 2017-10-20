import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule, MatButtonModule, 
  MatMenuModule, MatSidenavModule, MatListModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [HeaderComponent, SidebarComponent],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
