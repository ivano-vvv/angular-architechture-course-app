import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from './input';
import { FormFieldModule } from './form-field';
import { PasswordModule } from './password';
import { SelectModule } from './select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
  ],
  exports: [InputModule, FormFieldModule, PasswordModule, SelectModule],
})
export class ControlsModule {}
