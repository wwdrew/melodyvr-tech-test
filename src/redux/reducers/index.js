/**
 * @format
 * @flow
 */

import type {Action} from '../actions';
type Product = {
  id: number,
  title: string,
  description: string,
  image_hero_url: string,
  image_landscape_url: string,
  accent_colour_code: string,
  background_colour_code: string,
  text_colour_code: string,
  production_type_code: 'performance' | 'original',
  price?: string,
};

export type Release = {
  feature_order: number,
  is_free: boolean,
  product: Product,
};

export type DisplayType = 'grid' | 'carousel';

export type State = {
  display: DisplayType,
  loading: boolean,
  allReleases?: number[],
  releasesByOrder?: {[id: number]: Release},
};

const initialState: State = {
  display: 'grid',
  loading: true,
};

const rootReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'SET_DISPLAY_TYPE':
      return setDisplayType(state, action.display);

    case 'SET_LOADING':
      return setLoading(state, action.value);

    case 'UPDATE_RELEASES':
      return updateReleases(state, action.payload);

    default:
      return state;
  }
};

export default rootReducer;

const setDisplayType = (state: State, display: DisplayType): State => ({
  ...state,
  display,
});

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
