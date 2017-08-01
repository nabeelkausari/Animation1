import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  StatusBar,
} from 'react-native';

import Orange from './ui2/orange';
import Aqua from './ui2/aqua';
import Sky from './ui2/sky';

const {height, width} = Dimensions.get('window');
const orange = 'orange';
const aqua = 'aqua';
const sky = 'sky';

export default class Index extends Component {
  constructor(){
    super()
    this.state = {
      active: orange,
      aquaCover: { height, width },
      skyCover: { height, width }
    }
  }
  newActive(active) {
    this.setState({active})
    if(active === aqua) {
      this.setState({
        aquaCover: { height:0, width:0 },
        skyCover: { height, width }
      })
    } else if(active === sky) {
      this.setState({
        skyCover: { height:0, width:0 },
        aquaCover: { height, width }
      })
    }
  }
  render() {
    const { active, skyCover, aquaCover } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} barStyle="light-content"/>
        <Orange/>
        {/*<Aqua/>*/}
        {/*<Sky*/}
          {/*active={active}*/}
          {/*cover={skyCover}*/}
        {/*/>*/}
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