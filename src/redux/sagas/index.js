/**
 * @format
 * @flow
 */

import {all, call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {normaliseRelease} from '../../helpers/releases';

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
      payload: result.releases.map(normaliseRelease),
    });
  } catch (error) {
    yield call(console.log, error);
  }
}

export default function* allSagas() {
  yield all([takeLatest('GET_RELEASES', getReleases)]);
}
