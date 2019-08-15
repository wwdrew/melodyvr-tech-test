/**
 * @format
 * @flow
 */

import type {Action} from '../actions';
import type {Release} from './../../types/releases';

export type State = {
  loading: boolean,
  allReleases?: number[],
  releasesByOrder?: {[id: string]: Release},
};

const initialState: State = {
  loading: true,
};

const rootReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'SET_LOADING':
      return setLoading(state, action.value);

    case 'UPDATE_RELEASES':
      return updateReleases(state, action.payload);

    default:
      return state;
  }
};

export default rootReducer;

const setLoading = (state: State, loading: boolean): State => ({
  ...state,
  loading,
});

const updateReleases = (state: State, releases: Release[]): State => ({
  ...state,
  loading: false,
  allReleases: releases.map(release => release.feature_order),
  releasesByOrder: releases.reduce((allReleases, release) => {
    allReleases[release.feature_order] = release;

    return allReleases;
  }, {}),
});
