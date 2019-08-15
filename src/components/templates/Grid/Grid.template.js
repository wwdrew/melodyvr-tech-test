/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import GridRelease from '../../molecules/GridRelease';

import type {ViewStyleProp} from 'StyleSheet';
import type {Release} from '../../../redux/reducers';

type Props = {
  releases: Release[],
  onPress: (id: number) => mixed,
};

const GridTemplate = ({onPress, releases}: Props) => (
  <FlatGrid
    style={styles.container}
    itemDimension={130}
    items={releases}
    renderItem={({item}) => <GridRelease onPress={onPress} release={item} />}
  />
);

export default GridTemplate;

const styles: {
  container: ViewStyleProp,
} = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
