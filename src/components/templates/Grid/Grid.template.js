/**
 * @format
 * @flow
 */

import React from 'react';
import {FlatGrid} from 'react-native-super-grid';
import GridRelease from '../../releases/GridRelease';

import type {Release} from '../../../redux/reducers';

type Props = {
  releases: Release[],
  onPress: (id: number) => mixed,
};

const GridTemplate = ({onPress, releases}: Props) => (
  <FlatGrid
    itemDimension={130}
    items={releases}
    renderItem={({item}) => <GridRelease onPress={onPress} release={item} />}
  />
);

export default GridTemplate;
