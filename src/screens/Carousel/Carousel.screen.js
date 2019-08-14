/**
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';

import {CarouselTemplate} from '../../components/templates';

import type {State} from '../../redux/reducers';

type Props = MappedProps;

const CarouselScreen = ({loading}: Props) => (
  <CarouselTemplate loading={loading} />
);

type MappedProps = {
  loading: boolean,
};

const mapStateToProps = (state: State) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(CarouselScreen);
