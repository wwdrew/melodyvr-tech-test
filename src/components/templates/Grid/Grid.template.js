/**
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import type {Release} from '../../../redux/reducers';

type Props = {
  releases: Release[],
};

const GridTemplate = ({releases}: Props) => (
  <SafeAreaView>
    <Text>Grid Screen</Text>
  </SafeAreaView>
);

export default GridTemplate;
