import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule ,MatSidenavModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule
  ],
  declarations: [HeaderComponent, SidebarComponent],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
