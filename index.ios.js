'use strict';

var SearchPage = require('./SearchPage')

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AppRegistry,
  Text,
  NavigatorIOS,
 } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

class PropertyFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "Property Finder",
          component: SearchPage,
        }}/>
    )
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
