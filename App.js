import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [movies, setMovies] = useState([])

  console.log(movies)

  const getMovies = () => {
    try {
      const response = fetch('https://reactnative.dev/movies.json').then(
        (response) => response.json()
      ).then(
        (response) => console.log(response)
      )
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }

  const getMoviesAsync = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json')
      
      const json = await response.json()
      
      setMovies(json.movies)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
      data={movies}
      renderItem={({ item: movie }) => {
        return(
          <Text>{movie.title}</Text>
        )
      }}/>
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
});
