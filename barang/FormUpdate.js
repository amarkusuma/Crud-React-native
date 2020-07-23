import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
} from 'react-native';
import axios from 'axios';

export default class FormUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barang: {
        kode_barang: '',
        nama_barang: '',
        deskripsi_barang: '',
        harga_satuan: '',
        stock: '',
      },
    };
  }

  postData = () => {
    axios.post(`http://192.168.43.187:3000/barang`, this.state.barang).then(
      (res) => {
        const barang = res.data;
        console.log(barang);
        this.setState({barang});
      },
      (err) => {
        console.log('error', err);
      },
    );
  };

  _onSubmit = () => {
    // console.log(this.state);
    this.postData();
    this.setState({kode_barang: ''});
    this.setState({nama_barang: ''});
    this.setState({deskripsi_barang: ''});
    this.setState({harga_satuan: ''});
    this.setState({stock: ''});
  };

  componentDidMount() {
    // this.postData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} adjustsFontSizeToFit={true} numberOfLines={1}>
          Input data barang
        </Text>
        <TextInput
          style={styles.inputText}
          placeholder="kode barang"
          value={this.state.kode_barang}
          // secureTextEntry={true}
          onChangeText={(text) =>
            this.setState({kode_barang: text})
          }></TextInput>
        <TextInput
          style={styles.inputText}
          placeholder="nama barang"
          value={this.state.nama_barang}
          onChangeText={(text) =>
            this.setState({nama_barang: text})
          }></TextInput>
        <TextInput
          style={styles.textArea}
          multiline={true}
          numberOfLines={4}
          placeholder="deskripsi barang"
          value={this.state.deskripsi_barang}
          onChangeText={(text) =>
            this.setState({deskripsi_barang: text})
          }></TextInput>
        <TextInput
          style={styles.inputText}
          placeholder="harga satuan"
          value={this.state.harga_satuan}
          onChangeText={(text) =>
            this.setState({harga_satuan: text})
          }></TextInput>
        <TextInput
          style={styles.inputText}
          placeholder="stock"
          value={this.state.stock}
          onChangeText={(text) => this.setState({stock: text})}></TextInput>
        <View style={styles.buttonSubmit}>
          <Button
            title="Submit"
            onPress={this._onSubmit}
            color="#841584"></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  image: {
    height: 100,
    width: 100,
  },
  inputText: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '90%',
    padding: 5,
    marginBottom: 10,
  },

  buttonSubmit: {
    width: '90%',
    marginBottom: 10,
  },
  textArea: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '90%',
    padding: 5,
    marginBottom: 10,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  text: {
    marginBottom: 40,
    fontSize: 20,
    color: 'white',
    fontFamily: 'Courier New',
  },
});
