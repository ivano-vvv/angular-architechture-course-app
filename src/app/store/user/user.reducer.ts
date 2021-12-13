import { Action } from '@ngrx/store';

import { User } from '@app/models/backend';
import {
  isSignInAction,
  isSignInErrorAction,
  isSignInSuccessAction,
  isSignOutAction,
  isSignOutErrorAction,
  isSignOutSuccessAction,
  isSignUpAction,
  isSignUpErrorAction,
  isSignUpSuccessAction,
} from './user.actions';
import {
  isInitAction,
  isInitAuthorizedAction,
  isInitError,
  isInitUnauthorizedAction,
} from '.';

export type UserState = {
  entity: User | null;
  uid: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  entity: null,
  uid: null,
  loading: false,
  error: null,
};

export function reducer(
  state: UserState = initialState,
  action: Action
): UserState {
  // init

  if (isInitAction(action)) {
    return { ...state, loading: true, error: null };
  }

  if (isInitAuthorizedAction(action)) {
    return { ...state, loading: false, uid: action.uid, entity: action.user };
  }

  if (isInitUnauthorizedAction(action)) {
    return { ...state, loading: false, uid: null, entity: null };
  }

  if (isInitError(action)) {
    return { ...state, loading: false, error: action.error };
  }

  // sign in

  if (isSignInAction(action)) {
    return { ...state, loading: true, error: null };
  }

  if (isSignInSuccessAction(action)) {
    return {
      ...state,
      loading: false,
      uid: action.uid,
      entity: action.user,
    };
  }

  if (isSignInErrorAction(action)) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  // sign up

  if (isSignUpAction(action)) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (isSignUpSuccessAction(action)) {
    return {
      ...state,
      loading: false,
      error: null,
      uid: action.uid,
    };
  }

  if (isSignUpErrorAction(action)) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  // sign out

  if (isSignOutAction(action)) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (isSignOutSuccessAction(action)) {
    return {
      ...initialState,
    };
  }

  if (isSignOutErrorAction(action)) {
    return {
      ...state,
      error: action.error,
    };
  }

  return { ...state };
}
