import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [MatCardModule, MatButtonModule, MatCheckboxModule,
    MatFormFieldModule, MatInputModule],
  declarations: []
})
export class MaterialUiModule { }
