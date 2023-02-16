import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform, Button, Image, ImageBackground, TouchableOpacity, Switch, ActivityIndicator, ScrollView} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: '',
      isEnabled: false
    }
  }

mudouMensagem = msg => {
  this.setState({mensagem:msg})
}

  render() { 
    return (
      <ScrollView
      onScrollBeginDrag={() => alert('Rolou')}
      onScrollEndDrag={() => alert('Parou de rolar')}
      >
      <ImageBackground 
      //source = {{uri:'https://tntsports.com.br/__export/1668117182174/sites/esporteinterativo/img/2022/11/02/vini_jr_mxo_no_peito.png_1902800913.png'}}
      style={styles.container}
      resizeMode='repeat'>
        {Platform.OS === 'android' ? (<Text>Android</Text>) : (<Text style={styles.text}>iOS</Text>)}
        <Text style={styles.text}>Fiap</Text>
        <Text style={[styles.text, styles.textColor]}>portal do aluno</Text>
        <Image
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png'}}
        style={styles.image}
        resizeMode="contain"/>
        <TextInput
        placeholder='login'
        style={styles.textInput}
        onChangeText={this.mudouMensagem}
        />
        <TextInput
        placeholder='senha'
        style={styles.textInput}
        onChangeText={this.mudouMensagem}/>
        <Button
        title="Clique"
        onPress={() => alert(mensagem)}
        color="red"/>
        <TouchableOpacity
        onPress={() => alert("Esqueci minha senha")}
        style={styles.button}>
          <Text
          style={styles.textButton}>Esqueci minha senha</Text> 
        </TouchableOpacity>
        <Switch
          value={this.state.isEnabled}
          onValueChange={() => this.setState({isEnabled: !this.state.isEnabled})}
          thumbColor= '#000'
          trackColor={{false: '#d3d3d3', true: '#000'}}
        />
        {this.state.isEnabled ? (
        <ActivityIndicator
          color='red'
          size='large'
        />
        ) : <></>}
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    ...Platform.select({
      ios: {
        color: 'red'
      },
      android: {
        color: 'green'
      }
    })
  },
  textColor:{
    color: 'grey'
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    width: 200,
  },
  image: {
    width: 80,
    height: 80
  },
  button:{
    backgroundColor: "red",
    color: "#FFF",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10
  },
  textButton:{
    fontSize: 15,
    color: "#FFF"
  }
});
