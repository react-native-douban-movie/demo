import React from 'react';
import { Text, StyleSheet } from 'react-native';
// import {connect} from 'react-redux';
// import {inject,observer} from 'mobx-react';
// import dashboardStore from './../store/DashboardStore'
import {getList} from './../services/child'
// const getList = async() => {
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//       resolve('yes')
//     },200)
//   })
// }

class Child extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  getData = async () => {
    const res = await getList();
    console.warn(JSON.stringify(res))
  }



  render(){
    // console.warn(JSON.stringify(this.props))
    this.getData()
    return(
      <Text style={styles.child_box}>
        hello world!
      </Text>
    )
  }
}




export default Child;
const styles = StyleSheet.create({
  child_box:{
    backgroundColor:"#0ff",
    color:"#ff0",
  }
})