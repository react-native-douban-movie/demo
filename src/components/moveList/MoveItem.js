import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MovieItemImg from './MoveItemImg';
import MovieItemDetail from './MovieItemDetail'

class MovieItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  linkToBtn = (id) => {
    this.props.navigation.navigate('MovieDetailScreen',{id:id})
  }

  render () {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <View  style={ styles.img }>
          <MovieItemImg 
            url={data.images.medium}
          />
        </View>
        <View style={ styles.detail }>
          <MovieItemDetail
            data={data}
          />
        </View>
        <View style={ styles.btn }>
          <Button
            color="#a00"
            onPress={()=>this.linkToBtn(data.id)}
            value="购票"
            title='购票'
            accessibilityLabel='购票'
          />
        </View>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'row',
    width:'100%',
    height:'auto',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 0.3,
    borderTopColor: '#cacaca'
  },
  img:{
    // flex:3,
    height:100,
  },
  detail:{
    flex: 5,
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
  btn:{
    flex:2,
    height:100,
    alignItems : 'center',
    justifyContent: 'center',
  }
})

export default MovieItem;