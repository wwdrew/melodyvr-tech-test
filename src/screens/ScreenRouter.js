/**
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {CarouselScreen, GridScreen} from '../screens';
import Loading from '../components/atoms/Loading';

import type {DisplayType, State} from '../redux/reducers';

type Props = MappedProps;

class ScreenRouter extends PureComponent<Props> {
  render() {
    const {display = 'grid', loading} = this.props;

    if (loading) {
      return <Loading />;
    }

    if (display === 'grid') {
      return <GridScreen />;
    } else {
      return <CarouselScreen />;
    }
  }
}

type MappedProps = {
  display: DisplayType,
  loading: boolean,
};

const mapStateToProps = (state: State) => ({
  display: state.display,
  loading: state.loading,
});

export default connect(mapStateToProps)(ScreenRouter);
