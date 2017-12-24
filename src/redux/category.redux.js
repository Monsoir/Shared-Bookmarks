import { Source } from '../config/config';
import { addProtocolIfNeeded } from '../utils/utils';

const START_FETCHING = 'start_fetching';
const FETCH_SUCCESS = 'fetch_success';
const FETCH_FAILURE = 'fetch_failure';
const UPDATE_BOOKMARKS = 'update_bookmarks';
const UPDATING_BOOKMARKS_ADDRESS = 'updating_bookmarks_address';

export const FetchStatus = {
  suspend: -1,
  fetching: 0,
  success: 1,
  failure: 2,
};

const initialState = {
  bookmarksAddress: '',
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

export function fetchCategories(address) {
  return ((dispatch) => {
    dispatch(startFetchingBookmarks());
    fetch(addProtocolIfNeeded(address))
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(updateBookmarks(json));
      })
      .catch((e) => {
        dispatch(failFetchingBookmarks());
      });
  });
}

export function updatingBookmarksAddress(address) {
  return {
    type: UPDATING_BOOKMARKS_ADDRESS,
    bookmarksAddress: address,
  };
}

/** Reducer */
export function Categories(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        data: null,
        fetchResult: action.fetchResult,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        ...action,
        data: action.bookmarks,
        fetchResult: action.fetchResult,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        data: null,
        fetchResult: action.fetchResult,
      };
    case UPDATING_BOOKMARKS_ADDRESS:
      return {
        ...state,
        ...action,
        bookmarksAddress: action.bookmarksAddress,
      };
    default:
      return state;
  }
}
