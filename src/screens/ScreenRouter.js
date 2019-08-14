/**
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {CarouselScreen, GridScreen} from '../screens';
import Loading from '../components/atoms/Loading';
import {getReleases} from '../redux/actions';

import type {DisplayType, Release, State} from '../redux/reducers';

type Props = MappedProps & MappedDispatch;

class ScreenRouter extends PureComponent<Props> {
  componentDidMount() {
    this.props.getReleases();
  }

  render() {
    const {display = 'grid', loading, releases} = this.props;

    if (loading) {
      return <Loading />;
    }

    if (display === 'grid') {
      return <GridScreen releases={releases} />;
    } else {
      return <CarouselScreen releases={releases} />;
    }
  }
}

type MappedProps = {
  display: DisplayType,
  loading: boolean,
  releases: Release[],
};

const mapStateToProps = (state: State) => ({
  display: state.display,
  loading: state.loading,
  releases:
    state.allReleases &&
    state.allReleases.map(releaseOrder => state.releasesByOrder[releaseOrder]),
});

type MappedDispatch = {
  getReleases: () => mixed,
};

const mapDispatchToProps = {
  getReleases,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenRouter);
