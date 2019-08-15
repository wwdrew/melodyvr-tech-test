/**
 * @format
 * @flow
 */

import React from 'react';
import Carousel from '../../layout/Carousel';
import CarouselRelease from '../../releases/CarouselRelease';

import type {Release} from '../../../types/releases';

type Props = {
  releases: Release[],
  onPress: (id: number) => mixed,
};

const CarouselTemplate = ({onPress, releases}: Props) => (
  <Carousel>
    {releases.map(release => (
      <CarouselRelease
        key={release.feature_order}
        release={release}
        onPress={onPress}
      />
    ))}
  </Carousel>
);

export default CarouselTemplate;
