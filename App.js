import React from 'react';
import { StyleSheet, View, TextInput, Alert, Button } from 'react-native';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            peso: 0.0,
            altura: 0.0
        }
    }

    calcular = () => {
        const imc = this.state.peso / (this.state.altura * this.state.altura);
        let categoria = ""
        if(imc < 18.5) {
            categoria = "Abaixo do Peso"
        } else if(imc < 25){
            categoria = "Peso Normal"
        } else if(imc < 30){
            categoria = "Acima do Peso"
        } else{
            categoria = "Obesidade"
        }
        const alerta = `IMC: ${imc}`
        Alert.alert(`${categoria}`, alerta)
    }

    render(){
        return (
            <View style={styles.container}>
                <TextInput
                placeholder='Peso'
                keyboardType='numeric'
                onChangeText={peso => this.setState({peso})}
                style={styles.inputText}/>
                <TextInput
                placeholder='Altura'
                keyboardType='numeric'
                onChangeText={altura => this.setState({altura})}
                style={styles.inputText}/>
                <Button
                title='Calcular'
                onPress={this.calcular}/>
            </View>
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
    inputText: {
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 100,
        paddingVertical: 15,
        marginBottom: 20
    }
});
