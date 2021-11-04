import { Action } from '@ngrx/store';

import { Collections } from './collections.models';
import {
  isReadAction,
  isReadErrorAction,
  isReadSuccessAction,
} from './collections.actions';

export interface CollectionsState {
  entities: Collections;
  loading: boolean;
  error: string | null;
}

const initialState: CollectionsState = {
  error: null,
  loading: false,
  entities: {
    qualifications: {
      controlItems: [],
      items: [],
    },
    roles: {
      controlItems: [],
      items: [],
    },
    skills: {
      controlItems: [],
      items: [],
    },
    specializations: {
      controlItems: [],
      items: [],
    },
    countries: {
      controlItems: [],
      items: [],
    }
  },
};

export function reducer(
  state: CollectionsState = initialState,
  action: Action
): CollectionsState {
  if (isReadAction(action)) {
    return { ...state, loading: true, error: null };
  }

  if (isReadSuccessAction(action)) {
    return { ...state, loading: false, entities: action.collections };
  }

  if (isReadErrorAction(action)) {
    return {
      ...state,
      loading: false,
      error: action.error,
      entities: initialState.entities,
    };
  }

  return { ...state };
}
