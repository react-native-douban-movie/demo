import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, ScrollView, TouchableHighlight, Animated, Dimensions, PixelRatio, StyleSheet } from 'react-native';

import RowList from './../container/RowList';
import TopMovie from './../container/TopMovie';
import TopTV from './../container/TopTV';

const deviceWidth = Dimensions.get('window').width;

import { 
  getHotMovieList, 
  getHotTVList, 
  getNewMovieList, 
  getTopMovieList, 
  getChinaMovieList, 
  getColMovieList, 
  getNewTVList,
  getWestMovieList,
  getUSTVList,
  getUKTVList,
  getKOTVList,
  getHATVList,
} from './../services/top';
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      hotMovieList: [],
      hotTVList: [],
      left: new Animated.Value(0),
      newList: [],
      TopMovieList:[],
      value: true,
      getTopMovieList:[],
      getChinaMovieList:[],
      getColMovieList:[],
      getWestMovieList:[],
      getNewTVList: [],
      getUSTVList: [],
      getUKTVList: [],
      getKOTVList: [],
      getHATVList: []
    };
  }

  handleClick=(value) => {
    Animated.timing(                            // 随时间变化而执行的动画类型
      this.state.left,                      // 动画中的变量值
      {
        'toValue': value ? 0 : deviceWidth/2,                             // 透明度最终变为1，即完全不透明
      }
    ).start();
    this.setState({
      value: value
    })
  }

  getMovieList=async(func,type) => {
    const res = await func();
    if (res.subjects && res.subjects.length>0 ) {
      this.state[type] = res.subjects;
      this.setState({
        ...this.state
      })
    }
  }

  getHotMovie= async() => {
    const res = await getHotMovieList();
    if (res.subjects&&res.subjects.length>0) {
      this.setState({
        hotMovieList:res.subjects
      });
    }
  }

  getHotTV= async() => {
    const res = await getHotTVList();
    if (res.subjects&&res.subjects.length>0) {
      this.setState({
        hotMovieList:res.subjects
      });
    }
  }

  getList= async(type) => {
    const newList  = await getNewMovieList();
    
    const TopMovieList = await getTopMovieList();
    const ChinaMovieList = await getChinaMovieList();
    const ColMovieList = await getColMovieList();
    const WestMovieList = await getWestMovieList();
    this.setState({
      'newList': newList.subjects,
      'getTopMovieList': TopMovieList.subjects,
      'getChinaMovieList': ChinaMovieList.subjects,
      'getColMovieList': ColMovieList.subjects,
      'getWestMovieList': WestMovieList.subjects,
    });
  }

  componentDidMount() {
    this.getHotMovie();
    this.getHotTV();
    // this.getList();
    this.getMovieList(getTopMovieList,'getTopMovieList');
    this.getMovieList(getNewMovieList,'newList');
    this.getMovieList(getChinaMovieList,'getChinaMovieList');
    this.getMovieList(getColMovieList,'getColMovieList');
    this.getMovieList(getWestMovieList,'getWestMovieList');
    this.getMovieList(getNewTVList,'getNewTVList');
    this.getMovieList(getUSTVList,'getUSTVList');
    this.getMovieList(getUKTVList,'getUKTVList');
    this.getMovieList(getKOTVList,'getKOTVList');
    this.getMovieList(getHATVList,'getHATVList');
  }

  render() {
    const {
      value,
      left,
      hotMovieList,
      getTopMovieList,
      newList,
      getChinaMovieList,
      getColMovieList,
      getWestMovieList,
      getNewTVList,
      getUSTVList,
      getUKTVList,
      getKOTVList,
      getHATVList
    } = this.state;
    // console.warn(JSON.stringify(this.state))
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableHighlight
            underlayColor={'#F5FCFF'}
            style={styles.tab}
            onPress={() => this.handleClick(true)}
          >
            <Text style={{ color: `${value ? '#666' : '#aaa'}` }}>电影</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'#F5FCFF'}
            style={styles.tab}
            onPress={() => this.handleClick(false)}
          >
            <Text style={{ color: `${value ? '#aaa' : '#666'}` }}>电视剧</Text>
          </TouchableHighlight>
          <Animated.View
            style={{
              width: '50%',
              height: 3,
              backgroundColor: '#2aac5e',
              position: 'absolute',
              left: left,
              bottom: 0,
            }}
          >
          </Animated.View>
        </View>
        {this.state.value ? (
            <TopMovie
              data={{
                hotMovieList,
                getTopMovieList,
                newList,
                getChinaMovieList,
                getColMovieList,
                getWestMovieList,
              }} 
            />
          ) : (
            <TopTV
              data={{
                getNewTVList,
                getUSTVList,
                getUKTVList,
                getKOTVList,
                getHATVList
              }}
            />
          )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    width: '100%',
    height: 'auto',
  },
  tab: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default User;