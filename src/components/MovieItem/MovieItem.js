import React from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMG_URL, colors} from '../../constant';
import styles from './MovieItem.styles';

const MovieItem = ({movie, onPress}) => {
  return (
    <TouchableOpacity style={styles.view} onPress={onPress}>
      <ImageBackground
        style={styles.image}
        source={{uri: `${IMG_URL}${movie?.poster_path}`}}>
        <LinearGradient style={styles.textView} colors={colors}>
          <Text style={styles.title}>{movie?.title}</Text>
          <Text numberOfLines={2} style={styles.overview}>
            {movie?.overview}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MovieItem;
