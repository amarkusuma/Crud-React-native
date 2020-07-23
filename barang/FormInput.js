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

export default class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_product: '',
      brand: '',
      stock: '',
      harga: '',
    };
  }

  postData = () => {
    // axios
    //   .post(`http://192.168.43.187:8000/api/input-printer`, this.state.barang)
    //   .then(
    //     (res) => {
    //       const barang = res.data;
    //       console.log(barang);
    //       this.setState({barang});
    //     },
    //     (err) => {
    //       console.log('error', err);
    //     },
    //   );
    axios
      .post(
        'http://ama.mikom.online/api/input-printer',
        {
          name: this.state.nama_product,
          brand: this.state.brand,
          stock: this.state.stock,
          price: this.state.harga,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        console.log('response get details:', response.data);
      })
      .catch((error) => {
        console.log('axios error:', error);
      });
  };

  _onSubmit = () => {
    // console.log(this.state);
    this.postData();
    this.setState({nama_product: ''});
    this.setState({brand: ''});
    this.setState({stock: ''});
    this.setState({harga: ''});
  };

  componentDidMount() {
    // console.log(this.state.barang);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} adjustsFontSizeToFit={true} numberOfLines={1}>
          Input data barang
        </Text>
        <TextInput
          style={styles.inputText}
          placeholder="nama Product"
          value={this.state.nama_product}
          // secureTextEntry={true}
          onChangeText={(text) =>
            this.setState({nama_product: text})
          }></TextInput>
        <TextInput
          style={styles.inputText}
          placeholder="brand"
          value={this.state.brand}
          onChangeText={(text) => this.setState({brand: text})}></TextInput>

        {/* <TextInput
          style={styles.textArea}
          multiline={true}
          numberOfLines={4}
          placeholder="deskripsi barang"
          value={this.state.stock}
          onChangeText={(text) =>
            this.setState({stock: text})
          }></TextInput> */}

        <TextInput
          style={styles.inputText}
          placeholder="stock"
          value={this.state.stock}
          onChangeText={(text) => this.setState({stock: text})}></TextInput>

        <TextInput
          style={styles.inputText}
          placeholder="harga satuan"
          value={this.state.harga}
          onChangeText={(text) => this.setState({harga: text})}></TextInput>

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
