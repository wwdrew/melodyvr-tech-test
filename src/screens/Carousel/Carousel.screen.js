/**
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import type {DisplayType, State} from '../../redux/reducers';

type Props = MappedProps;

const CarouselScreen = ({display}: Props) => (
  <SafeAreaView>
    <Text>Carousel Screen</Text>
    <Text>Display: {display}</Text>
  </SafeAreaView>
);

type MappedProps = {
  display: DisplayType,
};

const mapStateToProps = (state: State) => ({
  display: state.display,
});

export default connect(mapStateToProps)(CarouselScreen);
