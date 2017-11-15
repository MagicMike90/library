import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatSelectModule, MatRadioModule, MatToolbarModule, MatSidenavModule,
  MatListModule, MatTooltipModule, MatMenuModule, MatTabsModule, MatDatepickerModule,
  MatNativeDateModule
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
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule
];
@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialUiModule { }
