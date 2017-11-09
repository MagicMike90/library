import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatSelectModule, MatRadioModule, MatToolbarModule, MatSidenavModule,
  MatListModule, MatTooltipModule, MatMenuModule, MatTabsModule
} from '@angular/material';

export const MODULES = [
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatRadioModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatMenuModule,
  MatTabsModule
];
@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialUiModule { }
