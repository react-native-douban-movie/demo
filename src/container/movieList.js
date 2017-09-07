import React from 'react';
import { View, ScrollView, Text, ListView, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieItem from './../components/moveList/MoveItem';
import Banner from './../components/Banner';
import { getList } from './../services/child'


class MovieList extends React.Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2,
    })
    this.state = {
      dataSource:ds,
      list:[],
    }
  };
  
  getListData = async() => {
    const res = await getList();
    if( res && res.subjects ){
      this.setState({
        list:res.subjects,
      })
    }
  }

  componentDidMount(){  
    this.getListData();
  }

  renderList = (data) => {
    const  {navigation} = this.props;
    if (data.name === 'banner') {
      return (
        <View style={styles.banner}>
          <Banner/>
        </View>
      )
    } else {
      return <MovieItem key={ data.id } data={data} navigation={navigation} />
    }
  }
  render(){
    const {list} = this.state;
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows([{ 'name': 'banner' },...this.state.list])}
          renderRow={(rowData, sectionId, rowId) => this.renderList(rowData, rowId)}
          horizontal={false}
          enableEmptySections={false}
          removeClippedSubviews={false}
        >
        </ListView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  banner: {
    width: '100%',
    height: 200,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  }
});

export default MovieList;