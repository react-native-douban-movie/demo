import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieItem from './../components/moveList/MoveItem'
import { getList } from './../services/child'


class MovieList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[]
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
    return data.map(item=>{
      return <MovieItem key={ item.id } data={item} navigation={navigation} />
    })
  }

  render(){
    const {list} = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.title}><Text>电影列表</Text></View>
        {this.renderList(list)}
      </ScrollView>
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