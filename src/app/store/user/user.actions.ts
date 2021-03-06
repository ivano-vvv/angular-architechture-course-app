import { User } from '@app/models/backend';
import { Action } from '@ngrx/store';
import { getActionGuard } from '../store.utils';
import { EmailPasswordCredentials } from './user.models';

export enum Types {
  INIT = '[User] Init : Start',
  INIT_AUTHORIZED = '[User] Init : Authorized',
  INIT_UNAUTHORIZED = '[User] Init : Unauthorized',
  INIT_ERROR = '[User] Init : Error',

  SIGN_IN = '[User] Sign In : Start',
  SIGN_IN_SUCCESS = '[User] Sign In : Success',
  SIGN_IN_ERROR = '[User] Sign In : Error',

  SIGN_UP = '[User] Sign Up : Start',
  SIGN_UP_SUCCESS = '[User] Sign Up : Success',
  SIGN_UP_ERROR = '[User] Sign Up : Error',

  SIGN_OUT = '[User] Sign Out : Start',
  SIGN_OUT_SUCCESS = '[User] Sign Out : Success',
  SIGN_OUT_ERROR = '[User] Sign Out : Error',
}

//

export class Init implements Action {
  readonly type = Types.INIT;
  constructor() {}
}
export const isInitAction = getActionGuard<Init>(Types.INIT);

export class InitAuthorized implements Action {
  readonly type = Types.INIT_AUTHORIZED;
  constructor(public uid: string, public user: User | null) {}
}
export const isInitAuthorizedAction = getActionGuard<InitAuthorized>(
  Types.INIT_AUTHORIZED
);

export class InitUnauthorized implements Action {
  readonly type = Types.INIT_UNAUTHORIZED;
  constructor() {}
}
export const isInitUnauthorizedAction = getActionGuard<InitUnauthorized>(
  Types.INIT_UNAUTHORIZED
);

export class InitError implements Action {
  readonly type = Types.INIT_ERROR;
  constructor(public error: string) {}
}
export const isInitError = getActionGuard<InitError>(Types.INIT_ERROR);

//

export class SignIn implements Action {
  readonly type = Types.SIGN_IN;
  constructor(public credentials: EmailPasswordCredentials) {}
}
export const isSignInAction = getActionGuard<SignIn>(Types.SIGN_IN);

export class SignInSuccess implements Action {
  readonly type = Types.SIGN_IN_SUCCESS;
  constructor(public uid: string, public user: User | null) {}
}
export const isSignInSuccessAction = getActionGuard<SignInSuccess>(
  Types.SIGN_IN_SUCCESS
);

export class SignInError implements Action {
  readonly type = Types.SIGN_IN_ERROR;
  constructor(public error: string) {}
}
export const isSignInErrorAction = getActionGuard<SignInError>(
  Types.SIGN_IN_ERROR
);

//

export class SignUp implements Action {
  readonly type = Types.SIGN_UP;
  constructor(public credentials: EmailPasswordCredentials) {}
}
export const isSignUpAction = getActionGuard<SignUp>(Types.SIGN_UP);

export class SignUpSuccess implements Action {
  readonly type = Types.SIGN_UP_SUCCESS;
  constructor(public uid: string) {}
}
export const isSignUpSuccessAction = getActionGuard<SignUpSuccess>(
  Types.SIGN_UP_SUCCESS
);

export class SignUpError implements Action {
  readonly type = Types.SIGN_UP_ERROR;
  constructor(public error: string) {}
}
export const isSignUpErrorAction = getActionGuard<SignUpError>(
  Types.SIGN_UP_ERROR
);

//

export class SignOut implements Action {
  readonly type = Types.SIGN_OUT;
}
export const isSignOutAction = getActionGuard<SignOut>(Types.SIGN_OUT);

export class SignOutSuccess implements Action {
  readonly type = Types.SIGN_OUT_SUCCESS;
}
export const isSignOutSuccessAction = getActionGuard<SignOutSuccess>(
  Types.SIGN_OUT_SUCCESS
);

export class SignOutError implements Action {
  readonly type = Types.SIGN_OUT_ERROR;
  constructor(public error: string) {}
}
export const isSignOutErrorAction = getActionGuard<SignOutError>(
  Types.SIGN_OUT_ERROR
);

export type All =
  | Init
  | InitAuthorized
  | InitUnauthorized
  | InitError
  | SignIn
  | SignInSuccess
  | SignInError
  | SignUp
  | SignUpSuccess
  | SignUpError
  | SignOut
  | SignOutSuccess
  | SignOutError;
