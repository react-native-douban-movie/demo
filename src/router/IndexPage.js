import React from 'react';
import {StackNavigator} from 'react-navigation';
import { View, Text } from 'react-native';

import HomeScreen from './HomeScreen';


class IndexPage extends React.Component {
  static navigationOptions = {
    title: '电影',//标题
    headerTintColor :'#eee',
    headerStyle :{
      backgroundColor:'#2F393C'
    }
  }
  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    return (
      <View>
        <HomeScreen />
      </View>
    )
  }
}

export default IndexPage;