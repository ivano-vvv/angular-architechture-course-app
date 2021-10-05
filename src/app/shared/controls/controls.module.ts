import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from './input';
import { FormFieldModule } from './form-field';
import { PasswordModule } from './password';
import { SelectModule } from './select';
import { CheckboxesModule } from './checkboxes';
import { RadiosModule } from './radios';
import { DateModule } from './date';
import { DateRangeModule } from './date-range';
import { AutocompleteModule } from './autocomplete';

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
    AutocompleteModule,
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
    AutocompleteModule
  ],
})
export class ControlsModule {}
