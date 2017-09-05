import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import DetailImage from './../components/movieDetail/DetailImage';
import Title from './../components/movieDetail/Title';
import Rating from './../components/movieDetail/Rating';
import MovieBtn from './../components/movieDetail/MovieBtn';
import Describe from  './../components/movieDetail/Describe';
import Actor from './../components/movieDetail/Actor';
 
class MovieItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    if( !this.props.data.id ){
      return <Text style={{textAlign:'center'}}>正在搜索。。。</Text>;
    }
    const { images, title, year, genres, rating, ratings_count, summary, casts, directors } = this.props.data;
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
        <View style={styles.movieBtn}>
          <MovieBtn rating={rating.average}></MovieBtn>
        </View>
        <View style={styles.sell}>
          <Text>选座购票</Text>
          <Text style={styles.price}>23￥ 起 ></Text>
        </View>
        <Describe text={summary}/>
        <Actor actor={[...casts,...directors]}/>
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
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 15,
  },
  movieBtn: {
    flex:1,
    height: 'auto',
    flexDirection: 'row',
    paddingTop:10,
    paddingBottom:10,
  },
  sell:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#aaa',
    marginLeft: 20,
    paddingBottom: 4,
  },
  price:{
    paddingRight: 7,
    color: '#D25252',
  }
})

export default MovieItem;