import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Orange from './ui2/orange';
import Aqua from './ui2/aqua';
import Sky from './ui2/sky';

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Orange/>
        <Orange/>
        {/*<Aqua/>*/}
        {/*<Sky/>*/}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9a37e',
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});