import { ActionReducerMap } from '@ngrx/store';

import * as fromCollections from './collections';
import * as fromUser from './user';

export interface State {
  collections: fromCollections.CollectionsState;
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<State> = {
  collections: fromCollections.reducer,
  user: fromUser.reducer,
};

export const effects = [fromCollections.CollectionsEffects, fromUser.UserEffects];
