/**
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import type {Node} from 'react';
import type {TextStyleProp, ViewStyleProp} from 'StyleSheet';

type TabProps = {
  label: string,
  children: Node,
};

class Tab extends PureComponent<TabProps> {
  render() {
    const {children} = this.props;

    return <>{children}</>;
  }
}

type Props = {
  children: Node[],
  onUpdate: (index: number) => mixed,
  selected: number,
  style: ViewStyleProp,
  testID?: string,
};

type State = {
  tabs: string[],
};

export default class TabDisplay extends PureComponent<Props, State> {
  static defaultProps = {
    selected: 0,
    style: {},
  };

  static Tab = Tab;

  tabs: string[] = React.Children.map<Node, string>(
    this.props.children,
    // $FlowFixMe
    (item: Tab) => item.props.label,
  );

  render() {
    const {children, onUpdate, selected, style, testID} = this.props;

    const containerStyle = StyleSheet.flatten([styles.container, style]);

    return (
      // $FlowFixMe
      <View style={containerStyle} testID={testID}>
        <View style={styles.tabsContainer}>
          {this.tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={styles.flexFix}
              disabled={selected === index}
              onPress={() => onUpdate(index)}>
              <View
                // $FlowFixMe
                style={StyleSheet.flatten([
                  styles.tab,
                  index === selected && styles.tabSelected,
                ])}>
                <Text
                  // $FlowFixMe
                  style={StyleSheet.flatten([
                    styles.tabText,
                    index === selected && styles.textSelected,
                  ])}>
                  {tab}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.contentContainer}>{children[selected]}</View>
      </View>
    );
  }
}

const styles: {
  container: ViewStyleProp,
  flexFix: ViewStyleProp,
  tabsContainer: ViewStyleProp,
  tab: ViewStyleProp,
  tabSelected: ViewStyleProp,
  tabText: TextStyleProp,
  textSelected: TextStyleProp,
  contentContainer: ViewStyleProp,
} = StyleSheet.create({
  container: {
    // backgroundColor: Colors.fills.default,
    flex: 1,
  },
  flexFix: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    // borderColor: Colors.tabs.borderUnselected,
    paddingBottom: 16,
  },
  tabSelected: {
    // borderColor: Colors.tabs.borderSelected,
  },
  tabText: {
    // color: Colors.tabs.textUnselected,
  },
  textSelected: {
    // color: Colors.tabs.textSelected,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
});
