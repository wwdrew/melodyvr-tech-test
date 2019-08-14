/**
 * @format
 * @flow
 */

import rootReducer from '../index';

import type {State} from '../index';

const initialState: State = {
  display: 'grid',
  loading: false,
  data: {
    result: {
      releases: [],
    },
  },
};

describe('root reducer', () => {
  it('returns the default state when action type is unknown', () => {
    const unknownAction = {
      type: 'UNKNOWN',
      display: 'something',
    };

    const expected = initialState;
    const actual = rootReducer(initialState, unknownAction);

    expect(actual).toBe(expected);
  });
});
