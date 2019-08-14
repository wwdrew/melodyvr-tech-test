/**
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

type Props = {
  loading: boolean,
};

const GridTemplate = ({loading}: Props) => (
  <SafeAreaView>
    <Text>Grid Screen</Text>
  </SafeAreaView>
);

export default GridTemplate;
