import React from 'react';
import { View, Text, TouchableHighlight, Animated, Dimensions, PixelRatio, StyleSheet } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: new Animated.Value(0),
    };
  }
  handleClick=(value) => {
    this.props.onChange(value);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.left,                      // 动画中的变量值
        {
          toValue: 0,                             // 透明度最终变为1，即完全不透明
        }
      ).start(); 
    } else {
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.left,                      // 动画中的变量值
        {
          toValue: deviceWidth/2,                             // 透明度最终变为1，即完全不透明
        }
      ).start(); 
    }
     
  }

  render() {
    const { value } = this.props;
    const { left } = this.state;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={'#F5FCFF'}
          style={styles.tab}
          onPress={() => this.handleClick(true)}
        >
          <Text style={{ color: `${value ? '#666' : '#aaa'}` }}>正在热映</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'#F5FCFF'}
          style={styles.tab}
          onPress={() => this.handleClick(false)}
        >
          <Text style={{ color: `${value ? '#aaa' : '#666'}` }}>即将上映</Text>
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Tab;


