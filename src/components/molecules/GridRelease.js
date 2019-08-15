/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import type {ViewStyleProp} from 'StyleSheet';
import type {Release} from '../../redux/reducers';

type Props = {
  onPress: (id: number) => mixed,
  release: Release,
};

const GridRelease = ({onPress, release}: Props) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPress(release.feature_order)}>
    <Text>{release.product.title}</Text>
  </TouchableOpacity>
);

export default GridRelease;

const styles: {
  container: ViewStyleProp,
} = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'green',
  },
});
