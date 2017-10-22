import React from 'react';
import { Text } from 'react-native';
import {StackNavigator} from 'react-navigation';
import MovieList from './../container/movieList';
import MovieDetailScreen from './MovieDetailScreen'

class Home extends React.Component{
  static navigationOptions = {
    title: '电影',//标题
    headerTintColor :'#eee',
    fontSize:12,
    headerStyle :{
      backgroundColor:'#2F393C',
      height:30,
    }
  };

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    const { navigation } = this.props;
    return(
      <MovieList navigation = { navigation } />
    )
  }
}
const HomeScreen  = StackNavigator({
  HomeScreen: {screen: Home},
  MovieDetailScreen: {screen: MovieDetailScreen},
},{
  initialRouteName: 'HomeScreen', // 默认显示界面
  mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  onTransitionStart: ()=>{  },  // 回调
  onTransitionEnd: ()=>{  }  // 回调
})

export default HomeScreen;