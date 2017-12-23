import { Source } from '../config/config';

const START_FETCHING = 'start_fetching';
const FETCH_SUCCESS = 'fetch_success';
const FETCH_FAILURE = 'fetch_failure';
const UPDATE_BOOKMARKS = 'update_bookmarks';

export const FetchStatus = {
  suspend: -1,
  fetching: 0,
  success: 1,
  failure: 2,
};

const initialState = {
  // title: '等待中...',
  // catelogs: [],
  // categories: [],
  data: null,
  fetchResult: FetchStatus.suspend,
};

/** Action Creators */

export function startFetchingBookmarks() {
  return {
    type: START_FETCHING,
    fetchResult: FetchStatus.fetching,
  };
}

export function updateBookmarks(bookmarks) {
  return {
    type: FETCH_SUCCESS,
    fetchResult: FetchStatus.success,
    bookmarks,
  };
}

export function failFetchingBookmarks() {
  return {
    type: FETCH_FAILURE,
    fetchResult: FetchStatus.failure,
  };
}

export function fetchCategories() {
  return ((dispatch) => {
    dispatch(startFetchingBookmarks());
    fetch(Source)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(updateBookmarks(json));
      })
      .catch(() => {
        dispatch();
      });
  });
}

/** Reducer */
export function Categories(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        ...initialState,
        data: null,
        fetchResult: action.fetchResult,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        ...action.bookmarks,
        data: action.bookmarks,
        fetchResult: action.fetchResult,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        ...initialState,
        data: null,
        fetchResult: action.fetchResult,
      };
    default:
      return state;
  }
}
