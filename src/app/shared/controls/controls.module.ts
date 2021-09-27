import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from './input';
import { FormFieldModule } from './form-field';
import { PasswordModule } from './password';
import { SelectModule } from './select';
import { CheckboxesModule } from '@src/../course_sources/4_shared/src/app/shared';
import { RadiosModule } from './radios';
import { DateModule } from './date';
import { DateRangeModule } from './date-range';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    DateModule,
    DateRangeModule,
  ],
  exports: [
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    DateModule,
    DateRangeModule,
  ],
})
export class ControlsModule {}
