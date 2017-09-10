import React from 'react';
import {StackNavigator} from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';

import Search from './../container/Search'
import { getMovieList } from '../services/search';
import SearchList from './../container/SearchList';
import MovieDetailScreen from './MovieDetailScreen'


class Found extends React.Component {
  static navigationOptions = {
    title: '电影',//标题
    headerTintColor :'#eee',
    fontSize:12,
    headerStyle :{
      backgroundColor:'#2F393C',
      height:0,
    }
  };
  constructor(props) {
    super(props);
    this.state={
      count: 0,
      searchList: [],
    };
  }

  getMovieList= async(value) => {
    const res = await getMovieList(value);
    // console.warn(JSON.stringify(res));
    if (res.subjects && res.count>0) {
      this.setState({
        searchList: res.subjects,
      })
    }
  }
  
  handleChange=(value) => {
    this.getMovieList(value);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Search onChange={this.handleChange}></Search>
        </View>
        <View style={styles.result_title}>
          <Text style={styles.result_title_text}>电影条目</Text>
        </View>
        <View style={styles.list}>
          <SearchList
            navigation={this.props.navigation}
            data={this.state.searchList}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    width: '100%',
    height: 44,
  },
  list: {
    flex: 1,
    height: 'auto',
    width: '100%',
  },
  result_title: {
    width: '100%',
    height: 30,
    backgroundColor: '#f1f1f1',
    paddingTop: 8,
    paddingLeft: 10,
  },
  result_title_text: {
    fontSize: 10,
    color: '#aaa',
  }
})
const FoundScreen  = StackNavigator({
  FoundScreen: {screen: Found},
  MovieDetailScreen: {screen: MovieDetailScreen},
},{
  initialRouteName: 'FoundScreen', // 默认显示界面
  mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
})
export default FoundScreen;