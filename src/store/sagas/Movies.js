import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  listApiCalled,
  storeListData,
  FETCH_MOVIES_LIST,
} from '../actions/Movies';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzRlMGQ2MzQzOTM3MjFhNGY0YzQ5ZmQ2NjdkNTJiMiIsInN1YiI6IjY0ZjJhNjIyMWYzMzE5MDEzYTI1OTU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dTQkh2-cQddYsGde-_QNzcIPj_MR2k0OzDM-Sonxp5Q',
  },
};

const sort = async movies => {
  const temArray = movies?.results;

  const firstIndex = await AsyncStorage.getItem('firstIndex');

  firstIndex
    ? temArray?.unshift(temArray?.splice(parseInt(firstIndex), 1)[0])
    : temArray;

  return {...movies, results: temArray};
};

function* getMoviesList() {
  try {
    const response = yield axios.get(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc',
      config,
    );

    yield put(storeListData(yield sort(response.data)));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(listApiCalled());
  }
}

function* MoviesSaga() {
  yield takeLatest(FETCH_MOVIES_LIST, getMoviesList);
}

export default MoviesSaga;
