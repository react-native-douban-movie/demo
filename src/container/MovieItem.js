import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import DetailImage from './../components/movieDetail/DetailImage';
import Title from './../components/movieDetail/Title'
import Rating from './../components/movieDetail/Rating'


class MovieItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    console.warn(JSON.stringify(this.props));
    if( !this.props.data.id ){
      return <Text>正在搜索。。。</Text>;
    }
    const { images, title, year, genres, rating, ratings_count } = this.props.data;
    return(
      <ScrollView style={styles.container}>
        <DetailImage url={images.large} />
        <View style={styles.title}>
          <View style={styles.right}>
            <Title 
              header = {{
                title,
                genres,
                year,
              }}
            />
          </View>
          <View  style={styles.left}>
            <Rating 
              rating={rating.average}
              ratings_count={ratings_count}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
  },
  title:{
    flex:1,
    height: 'auto',
    flexDirection: 'row',
  },
  right:{
    flex:3,
    height: 'auto',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 15,
  }
})

export default MovieItem;