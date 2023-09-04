import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  I18nManager,
} from 'react-native';
import Container from '../components/Container';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackIcon, IMG_URL, colors} from '../constant';

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
      <View style={styles.view}>
        <Text style={styles.overviewTitle}>Overview</Text>
        <Text style={styles.overview}>{movie?.overview}</Text>
      </View>
    </Container>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4,
  },
  backIcon: insets => ({
    marginTop: insets.top + 16,
    marginLeft: insets.left + 16,
    width: 30,
    height: 30,
    transform: I18nManager?.isRTL ? [{rotate: '180deg'}] : [{rotate: '0deg'}],
  }),
  gradient: {
    flex: 1,
  },
  title: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    marginBottom: 4,
  },
  date: {
    color: '#A0A0A0',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  view: {
    marginLeft: 16,
  },
  overviewTitle: {
    color: '#ffff',
    fontWeight: '600',
    fontSize: 24,
    marginBottom: 8,
  },
  overview: {
    color: '#A0A0A0',
    fontWeight: '500',
    fontSize: 14,
  },
});
