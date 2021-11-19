import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  FormFieldModule,
  InputModule,
  PasswordModule,
} from '@app/shared/controls';
import { SpinnerModule } from '@app/shared/indicators';
import { ButtonModule } from '@app/shared/buttons';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    ButtonModule,
    CommonModule,
    FormFieldModule,
    InputModule,
    PasswordModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
    RouterModule,
    SpinnerModule,
  ],
})
export class RegistrationModule {}
