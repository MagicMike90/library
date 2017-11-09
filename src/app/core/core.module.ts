import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialUiModule } from '../material-ui/material-ui.module';

import { ContainersComponent } from './containers/containers.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DrawerComponent } from './components/drawer/drawer.component';


export const COMPONENTS = [
  ContainersComponent,
  ToolbarComponent,
  DrawerComponent
];

@NgModule({
  imports: [
    CommonModule, RouterModule, MaterialUiModule,
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class CoreModule { }
