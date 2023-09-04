const {Dimensions} = require('react-native');

const IMG_URL = 'https://image.tmdb.org/t/p/original';
const IMGRatio = 280 / 190;
const IMGWidth = Dimensions.get('window').width * 0.5 - 16 - 8;
const BackIcon = require('../asset/backIcon.png');
const colors = ['rgba(9,9,15, 0)', 'rgba(9,9,15, 0.3)', 'rgba(9,9,15, 1)'];
const bearerToken =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzRlMGQ2MzQzOTM3MjFhNGY0YzQ5ZmQ2NjdkNTJiMiIsInN1YiI6IjY0ZjJhNjIyMWYzMzE5MDEzYTI1OTU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dTQkh2-cQddYsGde-_QNzcIPj_MR2k0OzDM-Sonxp5Q';
const starIcon = require('../asset/star.png');

export {IMG_URL, IMGRatio, IMGWidth, colors, BackIcon, bearerToken, starIcon};
