import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

function Rating ({rating,ratings_count}) {

  return(
    <View style={styles.container}>
      <Text style={styles.comment}>豆瓣评分</Text>
      <Text  style={styles.rating}>{rating}</Text>
      <Text style={styles.count}>{ratings_count}人</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    height: 50,
    width: 50,
    shadowOffset: {width: 10, height: 51},  
    shadowOpacity: 0.5,  
    shadowRadius: 5,  
    shadowColor: "#000",  
    //注意：这一句是可以让安卓拥有灰色阴影  
    elevation: 4,  
  },
  comment:{
    fontSize:8,
    color: '#aaa',
    flex:1,
    textAlign:'center',  
    justifyContent: 'center',
  },
  rating:{
    fontSize: 16,
    flex:1,
    textAlign:'center',  
    justifyContent: 'center',
  },
  count:{
    fontSize: 8,
    color: '#333',
    flex:1,
    textAlign:'center',  
    justifyContent: 'center',
  }
})

export default Rating;