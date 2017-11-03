import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [MatCardModule, MatButtonModule, MatCheckboxModule,
    MatFormFieldModule, MatInputModule,MatIconModule],
  declarations: []
})
export class MaterialUiModule { }
