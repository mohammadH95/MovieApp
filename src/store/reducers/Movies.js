import {
  FETCH_MOVIES_LIST,
  LIST_API_CALLED,
  MOVIES_LIST_FETCHED,
} from '../actions/Movies';

const initialState = {
  isLoading: false,
  moviesList: null,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case MOVIES_LIST_FETCHED:
      return {
        ...state,
        moviesList: action.payload,
      };

    case LIST_API_CALLED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default movies;
