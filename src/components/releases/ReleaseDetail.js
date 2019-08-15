/**
 * @format
 * @flow
 */

import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native';
import HTML from 'react-native-render-html';
import FreeTag from '../atoms/FreeTag';

import type {ImageStyleProp, TextStyleProp, ViewStyleProp} from 'StyleSheet';
import type {Release} from '../../redux/reducers';

type Props = {
  release: Release,
  closeModal: () => mixed,
};

const ReleaseDetail = ({closeModal, release}: Props) => (
  <View style={styles.modalContainer}>
    <TouchableOpacity onPress={closeModal} style={styles.closeModal}>
      <Text style={styles.closeModalText}>Close</Text>
    </TouchableOpacity>
    <View
      style={[
        styles.container,
        {backgroundColor: `#${release.product.background_colour_code}`},
      ]}>
      <Image
        source={{uri: release.product.image_hero_url}}
        style={styles.image}
      />
      <View style={styles.textContent}>
        <View style={styles.priceContainer}>
          <Text
            style={[
              styles.heading,
              {color: `#${release.product.text_colour_code}`},
            ]}>
            {release.product.title}
          </Text>
          {release.is_free ? (
            <FreeTag />
          ) : (
            <Text
              style={[
                styles.price,
                {color: `#${release.product.text_colour_code}`},
              ]}>
              £{release.product.price}
            </Text>
          )}
        </View>
        <HTML
          html={release.product.description}
          tagsStyles={{i: {color: `#${release.product.accent_colour_code}`}}}
          baseFontStyle={{
            color: `#${release.product.text_colour_code}`,
          }}
        />
      </View>
    </View>
  </View>
);

export default ReleaseDetail;

const styles: {
  modalContainer: ViewStyleProp,
  closeModal: ViewStyleProp,
  closeModalText: TextStyleProp,
  container: ViewStyleProp,
  image: ImageStyleProp,
  textContent: ViewStyleProp,
  heading: TextStyleProp,
  priceContainer: ViewStyleProp,
  price: TextStyleProp,
  descriptionText: TextStyleProp,
} = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  closeModal: {
    position: 'absolute',
    top: 20,
    right: 10,
    padding: 10,
    paddingRight: 0,
  },
  closeModalText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  container: {
    width: '100%',
    borderRadius: 10,
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '50%',
  },
  textContent: {
    padding: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceContainer: {
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
  },
  descriptionText: {
    fontSize: 18,
  },
});
