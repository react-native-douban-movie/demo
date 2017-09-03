import React from 'react';
import {StackNavigator} from 'react-navigation';
import {getMovieDetail} from './../services/movieDetail'
import MovieItem from './../container/MovieItem';

class MovieDetailScreen extends React.Component{
  
  static navigationOptions = {
    title: '电影',//标题
  };

  constructor(props){
    super(props);
    this.state = {
      data:{},
    }
  }

  getMovie = async (id) => {
    const res =  await getMovieDetail(id);
    if( res.id ){
      this.setState({
        data:res
      })
    }
  }

  componentDidMount(){
    const {navigation} = this.props; 
    if( navigation.state && navigation.state.params && navigation.state.params.id ){
      this.getMovie(navigation.state.params.id);
    }
    
  }

  render () {
    return(
      <MovieItem data={this.state.data}/>
    )
  }

}


export default MovieDetailScreen;