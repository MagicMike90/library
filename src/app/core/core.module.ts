import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainersComponent } from './containers/containers.component';


@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ContainersComponent, HeaderComponent, SidebarComponent]
})
export class CoreModule { }
