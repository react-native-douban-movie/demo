import React from 'react';
import { Text, View, Image } from 'react-native';
import {TabNavigator} from 'react-navigation'
import IndexPage from './IndexPage';
// import TabNavigator from 'react-native-tab-navigator';
import HomeScreen from './HomeScreen';
import User from './User';
import Found from './Found'
// 注册tabs
// class Tab extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedTab:'home',
//     };
//   }
//   render() {
//     return (
//       <TabNavigator>
//         <TabNavigatorItem
//           key='1'
//           selected={this.state.selectedTab === 'home'}
//           title="电影"
//           renderIcon={() => <Image source={{ uri: 'https://raw.githubusercontent.com/sharkwarn/sharkwarn.github.io/master/icon/movie.png' }}
//             style={{width:15,height:15}}
//           />}
//           onPress={() => this.setState({ selectedTab: 'home' })}
//         >
//           <View>
//             <IndexPage />
//           </View>
//         </TabNavigatorItem>
//         <TabNavigatorItem
//           key='2'
//           selected={this.state.selectedTab === 'detail'}
//           title="找片"
//           renderIcon={() => <Image source={{ uri: 'https://raw.githubusercontent.com/sharkwarn/sharkwarn.github.io/master/icon/eye.png' }}
//             style={{width:15,height:15}}
//           />}
//           onPress={() => this.setState({ selectedTab: 'detail' })}
//         >
//           <View>
//             <MovieDetailScreen/>
//           </View>
//         </TabNavigatorItem>
//         <TabNavigatorItem
//           key='3'
//           selected={this.state.selectedTab === 'user'}
//           title="我的"
//           renderIcon={() => <Image source={{ uri: 'https://raw.githubusercontent.com/sharkwarn/sharkwarn.github.io/master/icon/user.png' }}
//             style={{width:15,height:15}}
//           />}
//           onPress={() => this.setState({ selectedTab: 'user' })}
//         >
//           <View>
//             <Text>用户</Text>
//           </View>
//         </TabNavigatorItem>
//       </TabNavigator>
//     )
//   }
// }

const Tab = TabNavigator({
  IndexPage: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '热映',
        tabBarIcon: ({focused,tintColor}) => (
          <View style={{ flex: 1, flexDirection: 'column', height:'auto', justifyContent:'flex-end', alignItems:'flex-end',}}>
            <Image
              source={{ uri: 'https://raw.githubusercontent.com/sharkwarn/sharkwarn.github.io/master/icon/movie.png' }}
              style={{width:13,height:13}}
            />
            <Text style={{fontSize: 6,color: '#333'}}>热映</Text>
          </View>
        )
      })
  },
  Found: {
    screen: Found,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '找片',
      tabBarIcon: ({focused,tintColor}) => (
        <View style={{ flex: 1, flexDirection: 'column', height:'auto', justifyContent:'flex-end', alignItems:'flex-end',}}>
          <Image
            source={{ uri: 'https://raw.githubusercontent.com/sharkwarn/sharkwarn.github.io/master/icon/eye.png' }}
            style={{width:13,height:13}}
          />
          <Text style={{fontSize: 6,color: '#333'}}>找片</Text>
        </View>
      )
    })
  },
  User: {
    screen: User,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({focused,tintColor}) => (
        <View style={{ flex: 1, flexDirection: 'column', height:'auto', justifyContent:'flex-end', alignItems:'flex-end',}}>
          <Image
            source={{ uri: 'https://raw.githubusercontent.com/sharkwarn/sharkwarn.github.io/master/icon/user.png' }}
            style={{width:13,height:13}}
          />
          <Text style={{fontSize: 6,color: '#333'}}>我的</Text>
        </View>
        
      )
    })
  },

}, {
    animationEnabled: true, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarLabel: 'hehehL',
    labelStyle:{ height: 10},
    tabBarOptions: {
        activeTintColor: '#333', // 文字和图片选中颜色
        inactiveTintColor: '#333', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        }, 
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height: 40
        },
        labelStyle: {
            fontSize: 8, // 文字大小
        },
    },
});

export default Tab;