/**
 * @format
 * @flow
 */

import type {Release} from '../../types/releases';

type SetLoadingAction = {
  type: 'SET_LOADING',
  value: boolean,
};

type UpdateReleasesAction = {
  type: 'UPDATE_RELEASES',
  payload: Release[],
};

type GetReleasesAction = {
  type: 'GET_RELEASES',
};
export const getReleases = (): GetReleasesAction => ({
  type: 'GET_RELEASES',
});

export type Action =
  | SetLoadingAction
  | UpdateReleasesAction
  | GetReleasesAction;
