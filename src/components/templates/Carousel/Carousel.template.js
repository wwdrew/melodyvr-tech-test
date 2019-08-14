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

const CarouselTemplate = ({loading}: Props) => (
  <SafeAreaView>
    <Text>Carousel Screen</Text>
  </SafeAreaView>
);

export default CarouselTemplate;