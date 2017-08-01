import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native';
const {height, width} = Dimensions.get('window');

export default class Aqua extends Component {
  eachView() {
    return (
      <View>
        <View></View>
        <View style={{flex:1, flexDirection: 'row'}}>
          <View style={{flex:3}}>
            <View style={{flex:2}}>/</View>
            <View style={{flex:1}}>/</View>
          </View>
          <View style={{flex:1}}>/</View>
        </View>

      </View>
    )
  }
  navView() {
    return (
      <View style={{height:60, justifyContent:'center', alignItems: 'center', backgroundColor:'rgba(0,0,0,0.6)'}}>
        <Text style={{color: '#fff', fontSize:16, fontWeight:"300"}}>This is Water</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.navView()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#648bcc',
  },
});