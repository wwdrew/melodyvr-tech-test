/**
 * @format
 * @flow
 */

import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FreeTag from '../atoms/FreeTag';

import type {ImageStyleProp, TextStyleProp, ViewStyleProp} from 'StyleSheet';
import type {Release} from '../../types/releases';

const {width: screenWidth} = Dimensions.get('window');
const width = screenWidth - 25;

type Props = {
  onPress: (id: number) => mixed,
  release: Release,
};

const CarouselRelease = ({onPress, release}: Props) => (
  <View style={styles.carouselContainer}>
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: `#${release.product.background_colour_code}`},
      ]}
      onPress={() => onPress(release.feature_order)}>
      <Image
        source={{uri: release.product.image_hero_url}}
        style={styles.image}
      />
      <View style={styles.description}>
        <Text
          style={[
            styles.title,
            {color: `#${release.product.text_colour_code}`},
          ]}>
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
  </View>
);

CarouselRelease.WIDTH = width;

export default CarouselRelease;

const styles: {
  carouselContainer: ViewStyleProp,
  container: ViewStyleProp,
  image: ImageStyleProp,
  title: TextStyleProp,
  description: ViewStyleProp,
} = StyleSheet.create({
  carouselContainer: {
    justifyContent: 'center',
  },
  container: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: '75%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    padding: 10,
  },
});
