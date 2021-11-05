import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { NotificationService } from '@app/services';
import { environment } from '@src/environments/environment';
import * as fromActions from './user.actions';

type Action = fromActions.All;

@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions,
    private fireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private notification: NotificationService
  ) {}

  signUp: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGN_UP),
      map((action: fromActions.SignUp) => action.credentials),
      switchMap(({ email, password }) =>
        from(
          this.fireAuth.createUserWithEmailAndPassword(email, password)
        ).pipe(
          tap(() => {
            this.fireAuth.currentUser.then((user) => {
              if (user) {
                user.sendEmailVerification(
                  environment.firebase.actionCodeSettings
                );
              }
            });
          }),
          map(
            (signUpState) =>
              new fromActions.SignUpSuccess(signUpState.user?.uid as string)
          ),
          catchError((err: unknown) => {
            if (err instanceof Error) {
              this.notification.error(err.message);
              return of(new fromActions.SignUpError(err.message));
            }

            return of(new fromActions.SignUpError('Unknown error'));
          })
        )
      )
    )
  );
}
