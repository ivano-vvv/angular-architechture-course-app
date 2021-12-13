import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { regex, regexErrors } from '@app/shared';
import { select, Store } from '@ngrx/store';
import { State } from '@app/store';
import * as fromUser from '@app/store/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading$: Observable<boolean>;

  form: FormGroup;

  regexErrors = regexErrors;

  constructor(private store: Store<State>) {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.maxLength(128),
          Validators.pattern(regex.email),
        ],
        updateOn: 'change',
      }),
      password: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(64),
          Validators.pattern(regex.password),
        ],
        updateOn: 'change',
      }),
    });
  }

  handleSubmit(): void {
    const credentials = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.store.dispatch(new fromUser.SignIn(credentials));
  }
}
