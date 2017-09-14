import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, ScrollView, TouchableHighlight, Animated, Dimensions, PixelRatio, StyleSheet } from 'react-native';

import RowList from './../container/RowList';

class TopMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }

  render() {
    const {
      hotMovieList,
      getTopMovieList,
      newList,
      getChinaMovieList,
      getColMovieList,
      getWestMovieList
    } = this.props.data;
    // console.warn(JSON.stringify(this.props.data.hotMovieList))
    return (
      <ScrollView style={styles.main}>
        <RowList key='1' title='最近热门电影' data={hotMovieList} />
        <RowList key='2' title='高分电影' data={getTopMovieList} />
        <RowList key='3' title='华语电影' data={getChinaMovieList} />
        <RowList key='4' title='冷门高分电影' data={getColMovieList} />
        <RowList key='5' title='欧美电影' data={getWestMovieList} />
        <RowList key='6' title='最新电影' data={newList} />
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

export default TopMovie;