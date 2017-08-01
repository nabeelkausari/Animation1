import React, { Component } from 'react';
import {
  StyleSheet,
  LayoutAnimation,
  Dimensions,
  StatusBar,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
let {height, width} = Dimensions.get('window');

export default class Orange extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidUpdate() {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <StatusBar hidden={true} barStyle="light-content"/>
          <Icon name="ac-unit" size={20} color="#ffdbbe"/>
          <Text style={styles.heading}>Tiger UI</Text>
          <Icon name="spa" size={20} color="#ffdbbe"/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9a37e',
    borderRightWidth:1,
    borderColor: 'rgba(0,0,0,0.4)'
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: '#e96459'
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '300'
  }
});