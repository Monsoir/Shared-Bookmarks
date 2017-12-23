import { TreeData } from './testData';

const FETCH = 'fetch';
const UPDATE_BOOKMARKS = 'update_bookmarks';
const UPDATE_CATEGORIES = 'update_categories';

const initialState2 = TreeData;

const initialState = {
  title: '等待中...',
  catelogs: [],
  categories: [],
};

/** Action Creators */
export function updateCategories(categories) {
  return {
    type: UPDATE_CATEGORIES,
    categories,
  };
}

export function updateBookmarks(bookmarks) {
  return {
    type: UPDATE_BOOKMARKS,
    bookmarks,
  };
}

export function asycUpdateCategories() {
  return ((dispatch) => {
    setTimeout(() => {
      dispatch(updateBookmarks(initialState2));
    }, 2000);
  });
}

/** Reducer */
export function Categories(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        categories: action.categories,
      };
    case UPDATE_BOOKMARKS:
      return {
        ...state,
        ...action.bookmarks,
      };
    default:
      return state;
  }
}
