/**
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';

import ScreenRouter from './screens/ScreenRouter';

import store from './redux/store';

const MelodyVRTest = () => (
  <Provider store={store}>
    <ScreenRouter />
  </Provider>
);

export default MelodyVRTest;
