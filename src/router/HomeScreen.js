import React from 'react';
import {StackNavigator} from 'react-navigation';
import MovieList from './../container/movieList';
import MovieDetailScreen from './MovieDetailScreen'

class HomeScreen extends React.Component{

  static navigationOptions = {
    title: '电影列表',//标题
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

const Home  = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  MovieDetailScreen: {screen: MovieDetailScreen},
})

export default Home;