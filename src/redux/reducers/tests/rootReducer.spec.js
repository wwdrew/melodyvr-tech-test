/**
 * @format
 * @flow
 */

import rootReducer from '../index';
import releaseFixtures from './releaseFixtures';

import type {State} from '../index';
import type {Action} from '../../actions';

const initialState: State = {
  display: 'grid',
  loading: false,
};

describe('root reducer', () => {
  it('returns the default state when action type is unknown', () => {
    const unknownAction = {
      type: 'UNKNOWN',
      display: 'something',
    };

    const expected = initialState;
    // $FlowFixMe
    const actual = rootReducer(initialState, unknownAction);

    expect(actual).toStrictEqual(expected);
  });

  describe('setting the display type', () => {
    it('sets the current display type', () => {
      const action = {
        type: 'SET_DISPLAY_TYPE',
        display: 'carousel',
      };

      const expected = {
        ...initialState,
        display: 'carousel',
      };
      const actual = rootReducer(initialState, action);

      expect(actual).toStrictEqual(expected);
    });
  });

  describe('setting loading state', () => {
    it('sets the loading state to true', () => {
      const action = {
        type: 'SET_LOADING',
        value: true,
      };

      const expected = {
        ...initialState,
        loading: true,
      };
      const actual = rootReducer(initialState, action);

      expect(actual).toStrictEqual(expected);
    });
  });

  describe('setting data', () => {
    it('sets the available releases', () => {
      const action: Action = {
        type: 'UPDATE_RELEASES',
        payload: releaseFixtures,
      };

      const expected: State = {
        ...initialState,
        allReleases: [
          releaseFixtures[0].feature_order,
          releaseFixtures[1].feature_order,
          releaseFixtures[2].feature_order,
          releaseFixtures[3].feature_order,
          releaseFixtures[4].feature_order,
        ],
        releasesByOrder: {
          '1': releaseFixtures[3],
          '2': releaseFixtures[1],
          '4': releaseFixtures[0],
          '5': releaseFixtures[4],
          '6': releaseFixtures[2],
        },
      };
      const actual = rootReducer(initialState, action);

      expect(actual).toStrictEqual(expected);
    });
  });
});
