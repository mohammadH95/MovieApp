const {Dimensions} = require('react-native');

const IMG_URL = 'https://image.tmdb.org/t/p/original';
const IMGRatio = 280 / 190;
const IMGWidth = Dimensions.get('window').width * 0.5 - 16 - 8;
const BackIcon = require('../asset/backIcon.png');
const colors = ['rgba(9,9,15, 0)', 'rgba(9,9,15, 0.3)', 'rgba(9,9,15, 1)'];

export {IMG_URL, IMGRatio, IMGWidth, colors, BackIcon};
