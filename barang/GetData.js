import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';

// type Props = {};

export default class GetData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barang: [],
    };
  }
  componentDidMount() {
    axios.get(`http://ama.mikom.online/api/printer`).then((res) => {
      const barang = res.data;
      console.log(res.data);
      this.setState({barang});
    });
  }

  keyExtractor = (item, index) => index.toString();
  renderItem = ({item}) => <ListItem title={item.brand} subtitle={item.name} />;
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtHeader}> List data barang </Text>
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.barang}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  header: {
    height: 70,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
