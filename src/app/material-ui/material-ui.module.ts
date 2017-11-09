import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatSelectModule, MatRadioModule, MatToolbarModule, MatSidenavModule,
  MatListModule, MatTooltipModule, MatMenuModule, MatTabsModule
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
    MatMenuModule,
    MatTabsModule
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
    MatMenuModule,
    MatTabsModule
  ],
  declarations: []
})
export class MaterialUiModule { }
