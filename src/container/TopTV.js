import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, ScrollView, TouchableHighlight, Animated, Dimensions, PixelRatio, StyleSheet } from 'react-native';

import RowList from './../container/RowList';

class TopTV extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }

  


  render() {
    // const {value, left, getTopMovieList } = this.state;
    const {
      getNewTVList,
      getUSTVList,
      getUKTVList,
      getKOTVList,
      getHATVList
    } = this.props.data;
    return (
      <ScrollView style={styles.main}>
        <RowList key='1' title='最近热门电影' data={getNewTVList} />
        <RowList key='2' title='高分电影' data={getUSTVList} />
        <RowList key='3' title='华语电影' data={getUKTVList} />
        <RowList key='4' title='冷门高分电影' data={getKOTVList} />
        <RowList key='5' title='欧美电影' data={getHATVList} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: 'auto',
  },
})

export default TopTV;