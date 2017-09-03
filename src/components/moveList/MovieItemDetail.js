import React from 'react';
import { View, StyleSheet, Text } from 'react-native'



function MovieItemDetail ({data}) {

  const renderDirectors = () =>{
    let str = "导演：";
    data.directors.map((item,key)=>{
      str = `${str} ${ key == 0 ? item.name : ` / ${item.name}`}`;
    });
    return str;
  }

  const renderCasts = () => {
    let str = '演员：';
    data.casts.map((item,key)=>{
      str = `${str} ${ key == 0 ? item.name : `/ ${item.name}`}`
    })
    return str;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.rating}>评分：{data.rating.average}</Text>
      <Text style={styles.directors}>{renderDirectors()}</Text>
      <Text style={styles.casts}>{renderCasts()}</Text>
      <Text style={styles.view}>{data.collect_count}人看过</Text>
    </View>
  )
} 

const styles  = StyleSheet.create({
  container:{
    width:'100%',
    paddingBottom: 5,
  },
  title:{
    fontSize:16,
    color: '#666',
    marginTop:2,
  },
  rating:{
    fontSize:9,
    color:'#888',
    marginTop:2,
  },
  directors:{
    fontSize:9,
    color:'#888',
    marginTop:2,
  },
  casts:{
    fontSize:9,
    color:'#888',
    marginTop:3,
  },
  view:{
    fontSize:8,
    color:'#222',
    marginTop:2,
  }
})

export default MovieItemDetail