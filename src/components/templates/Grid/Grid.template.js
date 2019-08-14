/**
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';

import type {Release} from '../../../redux/reducers';

type Props = {
  releases: Release[],
};

const GridTemplate = ({releases}: Props) => (
  <>
    <Text>Grid Screen</Text>
  </>
);

export default GridTemplate;
