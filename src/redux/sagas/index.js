/**
 * @format
 * @flow
 */

import {all, call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {normaliseRelease} from '../../helpers/releases';
import sortBy from 'lodash.sortby';

import type {Release} from '../reducers';

type GetReleasesResultType = {
  data: {
    result: {
      releases: Release[],
    },
  },
};

function* getReleases() {
  try {
    const {
      data: {result},
    }: GetReleasesResultType = yield call(
      axios.get,
      'http://demo6536168.mockable.io/products',
    );
    yield call(console.log, result);

    yield put({
      type: 'UPDATE_RELEASES',
      payload: sortBy(result.releases.map(normaliseRelease), 'feature_order'),
    });
  } catch (error) {
    yield call(console.log, error);
  }
}

export default function* allSagas() {
  yield all([takeLatest('GET_RELEASES', getReleases)]);
}
