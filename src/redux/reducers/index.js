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
  production_type_code: 'production' | 'original',
  price?: string,
};

type Release = {
  feature_order: number,
  is_free: boolean,
  product: Product,
};

type Result = {
  result: {
    releases: Release[],
  },
};

type DisplayType = 'grid' | 'carousel';

export type State = {
  display: DisplayType,
  loading: boolean,
  data: Result,
};

const initialState: State = {};

const rootReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_DISPLAY_TYPE':
      return setDisplayType(state, action.display);

    default:
      return state;
  }
};

export default rootReducer;

const setDisplayType = (state: State, display: DisplayType): State => ({
  ...state,
  display,
});
