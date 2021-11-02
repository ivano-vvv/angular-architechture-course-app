import { ActionReducerMap } from '@ngrx/store';

import * as fromCollections from './collections';

export interface State {
  collections: fromCollections.CollectionsState;
}

export const reducers: ActionReducerMap<State> = {
  collections: fromCollections.reducer,
};

export const effects = [fromCollections.CollectionsEffects];
