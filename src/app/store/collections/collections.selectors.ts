import { createSelector, createFeatureSelector } from '@ngrx/store';

import { CollectionsState } from './collections.reducer';

export const getCollectionsState =
  createFeatureSelector<CollectionsState>('collections');

export const getCollections = createSelector(
  getCollectionsState,
  (state) => state.entities
);

export const getLoading = createSelector(
  getCollectionsState,
  (state) => state.loading
);

export const getIsReady = createSelector(
  getCollectionsState,
  (state) => Boolean(state.entities) && !state.loading
);

export const getRoles = createSelector(getCollections, (state) => state.roles);

export const getQualifications = createSelector(
  getCollections,
  (state) => state.qualifications
);

export const getSkills = createSelector(
  getCollections,
  (state) => state.skills
);

export const getSpecializations = createSelector(
  getCollections,
  (state) => state.specializations
);
