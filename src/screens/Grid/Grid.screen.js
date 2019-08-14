/**
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {GridTemplate} from '../../components/templates';

import type {State} from '../../redux/reducers';

type Props = MappedProps;

class GridScreen extends PureComponent<Props> {
  render() {
    const {loading} = this.props;

    return <GridTemplate loading={loading} />;
  }
}

type MappedProps = {
  loading: boolean,
};

const mapStateToProps = (state: State) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(GridScreen);
