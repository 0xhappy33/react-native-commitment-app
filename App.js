/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import EditingCommitment from './src/components/EditingCommitment';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <EditingCommitment />
      </View>
    );
  }
}

