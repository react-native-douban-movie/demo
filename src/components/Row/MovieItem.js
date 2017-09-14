import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { cover, rate, title } = this.props.data;
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: cover }}
          style={{ width: 70, height: 100 }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text  style={styles.rate}>{rate}分</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 'auto',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 8,
  },
  rate: {
    fontSize: 8,
    color: '#D25252',
  }
})

export default MovieItem;
