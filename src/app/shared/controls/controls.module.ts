import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from './input';

@NgModule({
  declarations: [],
  imports: [CommonModule, InputModule],
  exports: [InputModule],
})
export class ControlsModule {}
