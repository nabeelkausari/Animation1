import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';
const {height, width} = Dimensions.get('window');

export default class Sky extends Component {
  nav() {
    return (
      <View style={{height:60, backgroundColor:'rgba(0,0,0,0.7)'}}>
        <Text style={{fontWeight:'600'}}>{this.state.selectedVals} ITEM(S)</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height,
    width: width/2,
    backgroundColor: '#354b71',
  },
});