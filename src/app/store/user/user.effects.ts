import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';

import { NotificationService } from '@app/services';
import { environment } from '@src/environments/environment';
import * as fromActions from './user.actions';
import { User } from '@app/models/backend';

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

  init: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.INIT),
      switchMap(() => this.fireAuth.authState.pipe(take(1))),
      switchMap((authState) => {
        if (authState) {
          return this.afs
            .doc<User>(`users/${authState.uid}`)
            .valueChanges()
            .pipe(
              take(1),
              map(
                (user) =>
                  new fromActions.InitAuthorized(authState.uid, user || null)
              ),
              catchError((err) => of(new fromActions.InitError(err.message)))
            );
        } else {
          return of(new fromActions.InitUnauthorized());
        }
      })
    )
  );

  signIn: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGN_IN),
      map((action: fromActions.SignIn) => action.credentials),
      switchMap(({ email, password }) =>
        from(this.fireAuth.signInWithEmailAndPassword(email, password)).pipe(
          switchMap((signInState) =>
            this.afs
              .doc<User>(`users/${signInState.user?.uid as string}`)
              .valueChanges()
              .pipe(
                take(1),
                map(
                  (user) =>
                    new fromActions.SignInSuccess(
                      signInState.user?.uid as string,
                      user || null
                    )
                ),
                catchError((error: unknown) => {
                  if (error instanceof Error) {
                    this.notification.error(error.message);
                    return of(new fromActions.SignInError(error.message));
                  }

                  return of(new fromActions.SignUpError('Unknown error'));
                })
              )
          )
        )
      )
    )
  );

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

                this.router.navigate(['auth/email-confirm']);
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

  signOut: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGN_OUT),
      switchMap(() =>
        from(this.fireAuth.signOut()).pipe(
          tap(() => this.router.navigate(['./auth/login'])),
          map(() => new fromActions.SignOutSuccess()),
          catchError((err: unknown) => {
            if (err instanceof Error) {
              this.notification.error(err.message);
              return of(new fromActions.SignOutError(err.message));
            }

            return of(new fromActions.SignOutError('Unknown error'));
          })
        )
      )
    )
  );
}
