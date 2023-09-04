import {Dimensions, I18nManager, StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  view: insets => ({
    padding: insets.left + 24,
  }),
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
  voteView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  starIcon: (star, voteAverage) => ({
    width: 24,
    height: 24,
    tintColor: star <= voteAverage ? 'gold' : null,
  }),
});
