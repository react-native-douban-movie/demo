import React from 'react';
import { View, ScrollView, Text, ListView, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieItem from './../components/moveList/MoveItem'
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
    return <MovieItem key={ data.id } data={data} navigation={navigation} />
  }

  render(){
    const {list} = this.state;
    return (
      <ListView style={styles.imageList}
        dataSource={this.state.dataSource.cloneWithRows(this.state.list)}
        renderRow={(rowData, sectionId, rowId) => this.renderList(rowData, rowId)}
        horizontal={false}
        enableEmptySections={true}
      >
      </ListView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems:'center',
    justifyContent:'flex-start',
    paddingLeft : 10
  },
});

export default MovieList;