/**
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';

import type {Release} from '../../../redux/reducers';

type Props = {
  releases: Release[],
};

const CarouselTemplate = ({releases}: Props) => (
  <>
    <Text>Carousel Screen</Text>
  </>
);

export default CarouselTemplate;
