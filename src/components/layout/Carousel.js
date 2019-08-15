/**
 * @format
 * @flow
 */
import React, {PureComponent} from 'react';
import {Dimensions, VirtualizedList, StyleSheet, View} from 'react-native';

import type {Node} from 'react';
import type {ScrollEvent} from 'CoreEventTypes';
import type {ViewStyleProp} from 'StyleSheet';

type Props = {
  children: Node[],
  testID?: string,
};

type State = {
  selectedIndex: number,
};

const {width: deviceWidth} = Dimensions.get('window');

type ScrollPositionProps = {
  length: number,
  selectedIndex: number,
};

const CarouselPosition = ({length, selectedIndex}: ScrollPositionProps) => {
  const dots = Array(length).fill();
  console.log({dots});
  console.log({selectedIndex});

  return (
    <View style={styles.positionContainer}>
      <View style={styles.positionItems}>
        {dots.map((_, i) => (
          <View
            key={i}
            style={[
              styles.positionItem,
              selectedIndex === i && styles.positionSelected,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default class Carousel extends PureComponent<Props, State> {
  state = {
    selectedIndex: 0,
  };

  scrollView: ?VirtualizedList;

  _handleScroll = (event: ScrollEvent) => {
    const selectedIndex = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );

    this.setState({selectedIndex});
  };

  render() {
    const {children} = this.props;
    const {selectedIndex} = this.state;
    const carouselSlides = React.Children.toArray(children);

    return (
      <View style={styles.carouselContainer}>
        <View style={styles.container}>
          <VirtualizedList
            data={carouselSlides}
            getItem={(data, index) => data[index]}
            getItemCount={data => data.length}
            onMomentumScrollEnd={this._handleScroll}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            keyExtractor={(item, index) => `${index}`}
            ref={ref => (this.scrollView = ref)}
            renderItem={({item}) => (
              <View style={styles.carouselItem}>{item}</View>
            )}
          />
        </View>
        <CarouselPosition
          length={children.length}
          selectedIndex={selectedIndex}
        />
      </View>
    );
  }
}

const styles: {
  carouselContainer: ViewStyleProp,
  container: ViewStyleProp,
  carouselItem: ViewStyleProp,
  positionContainer: ViewStyleProp,
  positionItems: ViewStyleProp,
  positionItem: ViewStyleProp,
  positionSelected: ViewStyleProp,
} = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    width: deviceWidth,
  },
  carouselItem: {
    width: deviceWidth,
    paddingHorizontal: 20,
  },
  positionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  positionItems: {
    flexDirection: 'row',
  },
  positionItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    marginHorizontal: 8,
  },
  positionSelected: {
    backgroundColor: 'black',
  },
});
