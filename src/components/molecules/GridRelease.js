/**
 * @format
 * @flow
 */

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FreeTag from '../atoms/FreeTag';

import type {TextStyleProp, ViewStyleProp} from 'StyleSheet';
import type {Release} from '../../redux/reducers';

type Props = {
  onPress: (id: number) => mixed,
  release: Release,
};

const GridRelease = ({onPress, release}: Props) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPress(release.feature_order)}>
    <Image
      source={{uri: release.product.image_hero_url}}
      style={styles.imageBackground}
    />
    <View
      style={[
        styles.overlay,
        {backgroundColor: `#${release.product.background_colour_code}`},
      ]}
    />
    <View style={styles.description}>
      <Text
        style={[styles.title, {color: `#${release.product.text_colour_code}`}]}>
        {release.product.title}
      </Text>
      {release.is_free ? (
        <FreeTag />
      ) : (
        <Text style={{color: `#${release.product.text_colour_code}`}}>
          £{release.product.price}
        </Text>
      )}
    </View>
  </TouchableOpacity>
);

export default GridRelease;

const styles: {
  container: ViewStyleProp,
  imageBackground: ViewStyleProp,
  overlay: ViewStyleProp,
  title: TextStyleProp,
  description: ViewStyleProp,
} = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: 'flex-end',
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    opacity: 0.3,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    padding: 10,
  },
});
