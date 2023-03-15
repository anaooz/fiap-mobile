import { useEffect, useState } from 'react';
import { Button, Image } from 'react-native';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const [dog, setDog] = useState([])

  console.log(dog)

  const getDogs = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      
      const json = await response.json()
      
      setDog(json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDogs()
  }, [])
  return (
    <View style={styles.container}>
      <Image source={{uri: dog.message}} style={styles.dogImage}/>
      <Button title='Novo Dog' onPress={getDogs}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dogImage: {
    width: 150,
    height: 150
  }
});