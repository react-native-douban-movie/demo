import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function DetailImage ({url}) {

  return (
    <View style={styles.container}>
      <Image 
        source={{uri: `${url}`}}
        style={{height: 250,width:170,}}
        resizeMode="cover"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor: '#2F393C',
    paddingTop: 15,
    paddingBottom: 15,
  }
})

export default DetailImage
