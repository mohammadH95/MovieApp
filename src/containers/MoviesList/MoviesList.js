import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {moviesListFetch} from '../../store/actions/Movies';
import {MovieItem, Container} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './MoviesList.styles';

const MoviesList = ({navigation}) => {
  const dispatch = useDispatch();
  const MoviesListState = useSelector(state => state.moviesList);

  useEffect(() => {
    dispatch(moviesListFetch());
  }, []);

  const onPress = async (movie, index) => {
    const firstIndex = await AsyncStorage.getItem('firstIndex');
    !firstIndex && AsyncStorage.setItem('firstIndex', index.toString());
    navigation.push('movieDetails', {movie});
  };

  return (
    <Container>
      <Text style={styles.title}>Hello</Text>
      <FlatList
        data={MoviesListState?.results}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <MovieItem movie={item} onPress={() => onPress(item, index)} />
        )}
      />
    </Container>
  );
};

export default MoviesList;
