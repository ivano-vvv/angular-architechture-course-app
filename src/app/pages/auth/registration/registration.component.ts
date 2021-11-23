import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { regex } from '@app/shared';
import { State } from '@app/store';
import * as fromUser from '@app/store/user';

import { initPasswordRepeatValidator } from './utils/custom-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  loading$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));

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
