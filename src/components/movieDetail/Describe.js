import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight  } from 'react-native';

class Describe extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      all:false,
    }
  }

  handleClick=()=>{
    this.setState({
      all: !this.state.all,
    })
  }

  renderText=()=>{
    if( this.state.all ){
      return this.props.text;
    }else{
      return this.props.text.length > 0 ? `${this.props.text.slice(0,100)}...` : this.props.text;
    }
  }
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>剧情简介：</Text>
        <Text style={styles.content}>{this.renderText()}</Text>
        <TouchableHighlight onPressOut={this.handleClick} underlayColor="#ddd">
          <Text style={styles.text} >{this.state.all ? `收起` : `展开`}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    height: 'auto',
    paddingTop: 20,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
  },
  text: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#93C763',
  },
  content:{
    fontSize: 10,
  },
  title: {
    color: '#999',
    paddingBottom: 5,
  }
})

export default Describe;