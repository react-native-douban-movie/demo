import React from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import SearchItem from './../components/search/SearchItem';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (x, y) => x != y,
    })
    this.state={
      dataSource: ds,
    };
  }

  renderList=(item) => {
    const  {navigation} = this.props;
    return(
      <SearchItem key={item.id} navigation={navigation} data={item} />
    )
  }

  render() {
    const {data} = this.props;
    return(
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(data)}
        renderRow={(rowData, sectionId, rowId) => this.renderList(rowData)}
        horizontal={false}
        enableEmptySections={true}
        removeClippedSubviews={false}
      >
      </ListView>
    )
  }
}

export default SearchList;