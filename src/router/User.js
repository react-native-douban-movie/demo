import React from 'react';
import {StackNavigator} from 'react-navigation';
import { View, Text } from 'react-native';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    return (
      <View>
        <Text>user</Text>
      </View>
    )
  }
}

export default User;