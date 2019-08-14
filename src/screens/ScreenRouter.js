/**
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {CarouselScreen, GridScreen} from '../screens';

import type {DisplayType, State} from '../redux/reducers';

type Props = MappedProps;

const ScreenRouter = ({display = 'grid'}: Props) => {
  if (display === 'grid') {
    return <GridScreen />;
  } else {
    return <CarouselScreen />;
  }
};

type MappedProps = {
  display: DisplayType,
};

const mapStateToProps = (state: State) => ({
  display: state.display,
});

export default connect(mapStateToProps)(ScreenRouter);
