import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import MoviesSaga from './sagas/Movies';
import movies from './reducers/Movies';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(movies, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(MoviesSaga);

export default store;
