import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: insets => ({
    flex: 1,
    backgroundColor: '#09090F',
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left + 16,
    paddingRight: insets.right + 16,
  }),
});
