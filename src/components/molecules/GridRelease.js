/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FreeTag from '../atoms/FreeTag';

import type {ViewStyleProp} from 'StyleSheet';
import type {Release} from '../../redux/reducers';

type Props = {
  onPress: (id: number) => mixed,
  release: Release,
};

const GridRelease = ({onPress, release}: Props) => (
  <TouchableOpacity
    style={[
      styles.container,
      {backgroundColor: `#${release.product.background_colour_code}`},
    ]}
    onPress={() => onPress(release.feature_order)}>
    <Text style={{color: `#${release.product.text_colour_code}`}}>
      {release.product.title}
    </Text>
    {release.is_free ? (
      <FreeTag />
    ) : (
      <Text style={{color: `#${release.product.text_colour_code}`}}>
        £{release.product.price}
      </Text>
    )}
  </TouchableOpacity>
);

export default GridRelease;

const styles: {
  container: ViewStyleProp,
} = StyleSheet.create({
  container: {
    borderRadius: 2,
    padding: 10,
  },
});
