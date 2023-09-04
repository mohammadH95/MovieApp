import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Container} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackIcon, IMG_URL, colors} from '../../constant';
import styles from './MovieDetails.styles';

const MovieDetails = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const {movie} = route?.params;

  return (
    <Container style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{uri: `${IMG_URL}${movie?.poster_path}`}}>
        <LinearGradient style={styles.gradient} colors={colors}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Image style={styles.backIcon(insets)} source={BackIcon} />
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
      <Text style={styles.title}>{movie?.title}</Text>
      <Text style={styles.date}>{movie?.release_date}</Text>
      <View style={styles.view(insets)}>
        <Text style={styles.overviewTitle}>Overview</Text>
        <Text style={styles.overview}>{movie?.overview}</Text>
      </View>
    </Container>
  );
};

export default MovieDetails;
