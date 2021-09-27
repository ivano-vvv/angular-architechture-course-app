import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from './input';
import { FormFieldModule } from './form-field';

@NgModule({
  declarations: [],
  imports: [CommonModule, InputModule, FormFieldModule],
  exports: [InputModule, FormFieldModule],
})
export class ControlsModule {}
