import React, { Component } from 'react';
import {
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
  ListView,
  Dimensions,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
let {height, width} = Dimensions.get('window');
import mockRapper from '../../data/mock';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Orange extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(mockRapper),
      listStyle: {
        firstName: {
          backgroundColor: '#e75d63',
          color: '#fff',
          padding: 5,
          borderRadius: 15,
          fontSize: 15,
          fontWeight: '600',
          width: 120
        },
        lastName: {
          color: '#e75d63',
          fontSize: 15,
          fontWeight: '800'
        }
      }
    }
  }

  componentDidUpdate() {

  }

  eachIconView(item) {
    return (
      <View style={styles.listItem}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={styles.img}
        />
        <View style={{flex:1}}>
          <Text style={this.state.listStyle.firstName}>{item.first_name}</Text>
          <Text style={this.state.listStyle.lastName}>{item.last_name}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="more-vert" size={30} color="#e75d63"/>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <Icon name="ac-unit" size={20} color="#ffdbbe"/>
          <Text style={styles.heading}>Tiger UI</Text>
          <Icon name="spa" size={20} color="#ffdbbe"/>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.eachIconView(rowData)}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top:0,
    height: height,
    width: width-50,
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
  },
  listItem: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth: 1,
    borderColor: '#e75d63',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  img: {
    height:55,
    width:55,
    margin:10,
    borderRadius:10
  }
});