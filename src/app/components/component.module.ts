
import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent
  ],
  imports: [
  ],
  exports: [
    AppHeaderComponent,
    AppSidebarComponent
  ],
  providers: []
})
export class ComponentModule { }
