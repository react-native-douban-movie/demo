import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

function Title ({header}) {
  console.log(JSON.stringify(header))
  const renderTitle = () => {
    const { genres, year } = header;
    let str = `${year} `;
    [...genres].map(item => {
      str = `${str}/ ${item} `
    })
    return str;
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{header.title}</Text>
      <Text style={styles.detail}>{renderTitle()}</Text>
      <Text style={styles.detail}>上映日期：{header.year}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title:{
    fontSize: 16,
    color: '#333',
  },
  detail:{
    fontSize: 10,
    color: '#888',
  }
  
})

export default Title;