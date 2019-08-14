/**
 * @format
 * @flow
 */

import type {DisplayType, Release} from '../reducers';

type SetDisplayTypeAction = {
  type: 'SET_DISPLAY_TYPE',
  display: DisplayType,
};

type SetLoadingAction = {
  type: 'SET_LOADING',
  value: boolean,
};

type UpdateReleasesAction = {
  type: 'UPDATE_RELEASES',
  payload: Release[],
};

export type Action =
  | SetDisplayTypeAction
  | SetLoadingAction
  | UpdateReleasesAction;
