import React from 'react';
import { View, ScrollView, Text, ListView, StyleSheet } from 'react-native';
import MovieItem from './../components/Row/MovieItem';

class RowList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2,
    })
    this.state={
      dataSource: ds,
      data: props.data,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state.data = nextProps.data;
  }
  renderImageList=(data, key) => {
    return(
        <MovieItem data={data}></MovieItem>
    );
  }

  render() {
    return(
      <View>
        <View style={styles.titContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.more}>全部999+</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
          renderRow={(rowData, sectionId, rowId) => this.renderImageList(rowData, rowId)}
          horizontal={true}
          enableEmptySections={true}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({

  titContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 12,
  },
  more: {
    fontSize: 10,
    color: '#7FB347',
  }
})

export default RowList;
