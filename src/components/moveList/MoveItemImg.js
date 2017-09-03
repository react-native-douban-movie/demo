import React from 'react';
import { View, Text, Image } from 'react-native';

function MovieItemImg (props) {
  return(
    <View>
      <Image
        source={{uri: `${props.url}`}}
        style={{height: 100,width:67}}
      />
    </View>
  )
}
export default MovieItemImg