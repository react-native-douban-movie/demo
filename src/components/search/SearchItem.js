import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

function SearchItem ({ data, navigation }) {
  const linkToBtn = (id) => {
    console.warn(id);
    navigation.navigate('MovieDetailScreen',{id:id})
  }
  return (
    <TouchableHighlight onPress={()=> linkToBtn(data.id)}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            source={{uri: `${data.images.small}`}}
            style={{height: 40,width:26}}
          />
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{data.title}sss</Text>
          <Text style={styles.text}>{data.rating.average > 0 ? data.rating.average : '暂无评'}分/{data.year}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
  left: {
    width: 26,
    marginRight: 10,
    backgroundColor: '#0f0'
  },
  right: {
    height: 'auto',
  },
  title: {
    height: 15,
    fontSize: 12,
    textAlign: 'left',
    marginBottom: 5,
  },
  text: {
    fontSize: 8,
    textAlign: 'left',
  }
})
export default SearchItem;