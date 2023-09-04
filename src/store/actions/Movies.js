const FETCH_MOVIES_LIST = 'FETCH_MOVIES_LIST';
const MOVIES_LIST_FETCHED = 'MOVIES_LIST_FETCHED';
const LIST_API_CALLED = 'LIST_API_CALLED';

const moviesListFetch = () => ({
  type: FETCH_MOVIES_LIST,
});

const storeListData = result => ({
  type: MOVIES_LIST_FETCHED,
  payload: result,
});

const listApiCalled = () => ({
  type: LIST_API_CALLED,
});

export {
  FETCH_MOVIES_LIST,
  MOVIES_LIST_FETCHED,
  LIST_API_CALLED,
  moviesListFetch,
  storeListData,
  listApiCalled,
};
