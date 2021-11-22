import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { regex } from '@app/shared';
import { State } from '@app/store';

import { initPasswordRepeatValidator } from './utils/custom-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        email: new FormControl(null, {
          validators: [
            Validators.required,
            Validators.maxLength(128),
            Validators.pattern(regex.email),
          ],
          updateOn: 'blur',
        }),
        password: new FormControl(null, {
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(64),
            Validators.pattern(regex.password),
          ],
          updateOn: 'blur',
        }),
        passwordRepeat: new FormControl(null, {
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(64),
            Validators.pattern(regex.password),
          ],
          updateOn: 'blur',
        }),
      },
      {
        validators: [initPasswordRepeatValidator(this.form)],
      }
    );
  }
}
