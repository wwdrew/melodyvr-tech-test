/**
 * @format
 * @flow
 */

export const SET_DISPLAY_TYPE = 'SET_DISPLAY_TYPE';

type DisplayType = 'grid' | 'carousel';

type SetDisplayTypeAction = {
  type: 'SET_DISPLAY_TYPE',
  display: DisplayType,
};

export type Action = SetDisplayTypeAction;
