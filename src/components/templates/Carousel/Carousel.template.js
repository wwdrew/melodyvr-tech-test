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

const CarouselTemplate = ({releases}: Props) => (
  <SafeAreaView>
    <Text>Carousel Screen</Text>
  </SafeAreaView>
);

export default CarouselTemplate;
