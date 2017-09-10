import React from 'react';
import { View, ScrollView, Text, ListView, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieItem from './../components/moveList/MoveItem';
import Banner from './../components/Banner';
import Tab from './../components/moveList/Tab';
import { getList } from './../services/child';
import { getComingMovie } from './../services/movieDetail';


class MovieList extends React.Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2,
    })
    this.state = {
      dataSource:ds,
      list:[],
      isHot: true,
      comingList: [],
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

  getComingMovie= async() => {
    const res = await getComingMovie();
    if(res&&res.subjects) {
      this.setState({
        comingList: res.subjects,
      })
    }
  }

  componentDidMount(){  
    this.getListData();
    this.getComingMovie();
  }

  isHotChange=(value) => {
    this.setState({
      isHot: value,
    })
  }

  renderList = (data) => {
    const  {navigation} = this.props;
    if (data.name === 'banner') {
      return (
        <View style={styles.banner}>
          <Banner/>
        </View>
      )
    } else if (data.name === 'tab') {
        return (
          <View>
            <Tab onChange={this.isHotChange} value={this.state.isHot} />
          </View>
          
        )
    } else {
      return <MovieItem value={this.state.isHot} key={ data.id } data={data} navigation={navigation} />
    }
  }
  render(){
    const { list, isHot, comingList } = this.state;
    const arr = isHot ? list : comingList;
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows([{ 'name': 'banner' },{ 'name':'tab' }, ...arr])}
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