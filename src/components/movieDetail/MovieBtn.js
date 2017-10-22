import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function MovieBtn ({rating}) {

  const linkToBtn = () => {
  }

  return (
    <View style={styles.container}>
      <Text style={styles.left}>想看</Text>
      <Text style={styles.right}>看过,评分{rating}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-around',
    paddingTop: 15,
    paddingBottom: 15,
  },
  right: {
    width: 150,
    height: 30,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 5,
    paddingTop: 5,
    color: '#FFCD22',
    borderColor: '#FFCD22',
  },
  left: {
    width: 100,
    height: 30,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 5,
    paddingTop: 5,
    color: '#FFCD22',
    borderColor: '#FFCD22',
  }
})



export default MovieBtn
