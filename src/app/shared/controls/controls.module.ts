import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from './input';
import { FormFieldModule } from './form-field';
import { PasswordModule } from './password';

@NgModule({
  declarations: [],
  imports: [CommonModule, InputModule, FormFieldModule, PasswordModule],
  exports: [InputModule, FormFieldModule, PasswordModule],
})
export class ControlsModule {}
