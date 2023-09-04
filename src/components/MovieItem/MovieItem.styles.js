import {StyleSheet} from 'react-native';
import {IMGRatio, IMGWidth} from '../../constant';

export default StyleSheet.create({
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
