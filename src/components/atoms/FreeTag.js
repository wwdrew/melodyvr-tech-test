/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import type {ViewStyleProp, TextStyleProp} from 'StyleSheet';

const FreeTag = () => (
  <View style={styles.freeTag}>
    <Text style={styles.text}>Free</Text>
  </View>
);

export default FreeTag;

const styles: {
  freeTag: ViewStyleProp,
  text: TextStyleProp,
} = StyleSheet.create({
  freeTag: {
    flexDirection: 'row',
  },
  text: {
    backgroundColor: 'green',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 3,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
