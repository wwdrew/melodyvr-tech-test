/**
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';

import {GridScreen} from './screens';
import store from './redux/store';

const MelodyVRTest = () => (
  <Provider store={store}>
    <GridScreen />
  </Provider>
);

export default MelodyVRTest;
