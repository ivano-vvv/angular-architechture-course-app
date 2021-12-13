import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  FormFieldModule,
  InputModule,
  PasswordModule,
} from '@app/shared/controls';
import { SpinnerModule } from '@app/shared/indicators';
import { ButtonModule } from '@app/shared/buttons';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    PasswordModule,
    SpinnerModule,
    ButtonModule,
  ]
})
export class LoginModule { }
