import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialUiModule } from '../material-ui/material-ui.module';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainersComponent } from './containers/containers.component';


@NgModule({
  imports: [
    CommonModule, RouterModule, MaterialUiModule
  ],
  declarations: [ContainersComponent, HeaderComponent, SidebarComponent]
})
export class CoreModule { }
