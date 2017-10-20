import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageModule } from './messages/message.module';

@NgModule({
  imports: [
    CommonModule,
    MessageModule
  ],
  exports: [
    MessageModule
  ],
  declarations: []
})
export class SharedModule { }
