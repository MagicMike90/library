import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatSelectModule, MatRadioModule, MatToolbarModule, MatSidenavModule,
  MatListModule, MatTooltipModule, MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
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
    MatMenuModule
  ],
  exports: [
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
    MatMenuModule
  ],
  declarations: []
})
export class MaterialUiModule { }
