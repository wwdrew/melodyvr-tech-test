/**
 * @format
 * @flow
 */

import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import type {ViewStyleProp} from 'StyleSheet';

const Loading = () => (
  <SafeAreaView style={styles.loading}>
    <ActivityIndicator />
  </SafeAreaView>
);

export default Loading;

const styles: {
  loading: ViewStyleProp,
} = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
