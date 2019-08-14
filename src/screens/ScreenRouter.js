/**
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';
import {CarouselTemplate, GridTemplate} from '../components/templates';
import Loading from '../components/atoms/Loading';
import {getReleases} from '../redux/actions';
import TabDisplay from '../components/molecules/TabDisplay';

import type {ViewStyleProp} from 'StyleSheet';
import type {DisplayType, Release, State as AppState} from '../redux/reducers';

type Props = MappedProps & MappedDispatch;

type State = {
  selectedTab: number,
};

class ScreenRouter extends PureComponent<Props, State> {
  state = {
    selectedTab: 0,
  };

  componentDidMount() {
    this.props.getReleases();
  }

  render() {
    const {loading, releases} = this.props;
    const {selectedTab} = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <SafeAreaView style={styles.container}>
        <TabDisplay
          style={styles.tabs}
          selected={selectedTab}
          onUpdate={selectedTab => this.setState({selectedTab})}>
          <TabDisplay.Tab label="Grid">
            <GridTemplate releases={releases} />
          </TabDisplay.Tab>
          <TabDisplay.Tab label="Carousel">
            <CarouselTemplate releases={releases} />
          </TabDisplay.Tab>
        </TabDisplay>
      </SafeAreaView>
    );
  }
}

type MappedProps = {
  display: DisplayType,
  loading: boolean,
  releases: Release[],
};

const mapStateToProps = (state: AppState) => ({
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

const styles: {
  container: ViewStyleProp,
  tabs: ViewStyleProp,
} = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    flex: 1,
    marginTop: 14,
  },
});
