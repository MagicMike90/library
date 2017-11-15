import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import {
  MatCardModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatSelectModule, MatRadioModule, MatToolbarModule, MatSidenavModule,
  MatListModule, MatTooltipModule, MatMenuModule, MatTabsModule, MatDatepickerModule,
  MatNativeDateModule, MatProgressBarModule
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
  MatNativeDateModule,
  MatProgressBarModule
];
@NgModule({
  imports: MODULES,
  exports: MODULES,
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class MaterialUiModule { }
