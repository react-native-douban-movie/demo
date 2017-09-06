import React from 'react';
import MovieList from './container/movieList';
import MovieItem from './container/MovieItem'
import HomeScreen from './router/HomeScreen'
import Tab from './router/Tab';
import IndexPage from './router/IndexPage'

class App extends React.Component{

  constructor(){
    super();
  }
  
  render(){
    return(
      <Tab/>
    )
  }
}

export default App;