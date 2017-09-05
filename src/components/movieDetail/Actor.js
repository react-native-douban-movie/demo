import React from 'react';
import { View, Text, ListView, Image, StyleSheet } from 'react-native';

class Actor extends React.Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2,
    })
    this.state = {
      dataSource: ds,
      data:props.actor,
    }
  }

  renderImageList=(data,id) => {
    return (
      <View style={styles.List}>
        <Image
          source={{ uri: data.avatars.small }}
          style={{ width: 70, height: 100 }}
        />
        <Text style={styles.content}>{data.name.length > 7 ? `${data.name.slice(0,7)}...` : data.name}</Text>
      </View>
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>影人</Text>
        </View>
        <ListView style={styles.imageList}
          dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
          renderRow={(rowData, sectionId, rowId) => this.renderImageList(rowData, rowId)}
          horizontal={true}
        >
        </ListView>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 'auto',
  },
  title:{
    flex: 1,
    flexDirection: 'row',
    height: 'auto',
    fontSize: 12,
    color: '#999',
    textAlign: 'left',
    paddingLeft: 20,
  },
  imageList: {
    flex: 1,
    flexDirection: 'row',
    height: 'auto',
    paddingTop: 20,
  },
  imageContaienr: {
    flex: 1,
    flexDirection: 'column',
    height: 'auto',
  },
  List: {
    flex:1,
    flexDirection: 'column',
    height: 'auto',
    paddingLeft: 7,
    paddingRight: 7,
  },
  content: {
    fontSize: 10,
    color: '#666',
  }
})

export default Actor;