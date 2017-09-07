import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true,
      })
    },0)
  }

  renderSwiper=() => {
    if (this.state.loading){
      return (
        <Swiper style={styles.container2}>
          <Image 
            source={{uri:'https://raw.githubusercontent.com/sharkwarn/sharkwarn.github.io/master/icon/banner1.jpg'}}
            style={styles.slide}
          />
          <Image 
            source={{uri:'https://raw.githubusercontent.com/sharkwarn/sharkwarn.github.io/master/icon/banner2.jpg'}}
            style={styles.slide}
          />
          <Image 
            source={{uri:'https://raw.githubusercontent.com/sharkwarn/sharkwarn.github.io/master/icon/banner1.jpg'}}
            style={styles.slide}
          />
        </Swiper>
      )
    } else {
      return (
        <View style={styles.container2}></View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSwiper()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 200,
    backgroundColor: '#0f0',
  },
  container2: {
    width: '100%',
    height: 200,
  },
  slide: {
    height: 200,
  },
  
})

export default Banner;
