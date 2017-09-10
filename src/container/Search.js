import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      value: '',
    };
  }
  
  onFocus=(value) => {
    this.setState({
      focus:value,
    })
  }

  handleClick=() => {
    this.refs.textInput.blur();
  }

  handleChange=(value) => {
    this.setState({
      value:value,
    });
    if (this.props.onChange) {
      const str = value;
      setTimeout(() => {
        if (str===this.state.value) {
          this.props.onChange(this.state.value);
        }
      },400)
      
    }
  }
  renderCancel=() => {
    if (this.state.focus) {
      return (
        <Button
          color="#2aac5e"
          onPress={()=>this.handleClick()}
          value={'取消'}
          title={'取消'}
          accessibilityLabel={'取消'}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return(
      <View style={styles.contaienr}>
        <View style={styles.title}>
          <View style={styles.input_container}>
            <TextInput
              ref="textInput"
              placeholder ='电影/电视剧/影人'
              style={styles.input}
              underlineColorAndroid='transparent'
              onFocus={() => this.onFocus(true)}
              onBlur={() => this.onFocus(false)}
              onChangeText ={this.handleChange}
              value={this.state.value}
            />
          </View>
          {this.renderCancel()}
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contaienr: {
    width: '100%',
    height: 44,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    height: 44,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  input_container: {
    width: '100%',
    height: 35,
    flex: 1,
    marginRight: 3,
  },
  input: {
    width: '100%',
    height: 35,
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#aaa',
    borderRadius: 5,
  },
  btn: {
    width: 60,
    height: 35,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Search;