import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialUiModule } from '../material-ui/material-ui.module';

import { ContainersComponent } from './containers/containers.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DrawerComponent } from './components/drawer/drawer.component';


@NgModule({
  imports: [
    CommonModule, RouterModule, MaterialUiModule
  ],
  exports: [ContainersComponent],
  declarations: [ContainersComponent, ToolbarComponent, DrawerComponent]
})
export class CoreModule { }
