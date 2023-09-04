import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMGRatio, IMGWidth, IMG_URL, colors} from '../constant';

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

const styles = StyleSheet.create({
  view: {
    marginBottom: 16,
  },
  image: {
    width: IMGWidth,
    height: IMGRatio * IMGWidth,
    borderRadius: 19,
    overflow: 'hidden',
  },
  textView: {
    flex: 1,
    padding: 8,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#ffff',
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 4,
  },
  overview: {
    color: '#A0A0A0',
    fontSize: 12,
  },
});
