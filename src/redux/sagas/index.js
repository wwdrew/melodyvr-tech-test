/**
 * @format
 * @flow
 */

import {all, call, takeLatest} from 'redux-saga/effects';

function* listenToAppState() {
  yield call(console.log, 'screen_view');
}

export default function* allSagas() {
  yield all([takeLatest('INIT', listenToAppState)]);
}
