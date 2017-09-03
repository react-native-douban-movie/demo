import React from 'react';
import MovieList from './container/movieList';
import MovieItem from './container/MovieItem'
import HomeScreen from './router/HomeScreen'

class App extends React.Component{

  constructor(){
    super();
  }
  
  render(){
    return(
      <HomeScreen/>
    )
  }
}

export default App;