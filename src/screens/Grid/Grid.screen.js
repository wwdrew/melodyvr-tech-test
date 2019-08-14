/**
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';

import {GridTemplate} from '../../components/templates';

import type {Release} from '../../redux/reducers';

type Props = {
  releases: Release[],
};

class GridScreen extends PureComponent<Props> {
  render() {
    const {releases} = this.props;

    return <GridTemplate releases={releases} />;
  }
}

export default GridScreen;
