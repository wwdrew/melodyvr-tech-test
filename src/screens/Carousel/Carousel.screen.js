/**
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';

import {CarouselTemplate} from '../../components/templates';

import type {Release} from '../../redux/reducers';

type Props = {
  releases: Release[],
};

class CarouselScreen extends PureComponent<Props> {
  render() {
    const {releases} = this.props;

    return <CarouselTemplate releases={releases} />;
  }
}

export default CarouselScreen;
