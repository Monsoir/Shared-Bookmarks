import { TestData } from './testData';

const FETCH = 'fetch';
const UPDATE_CATEGORIES = 'update_categories';

const initialState = TestData.categories;

/** Action Creators */
export function updateCategories(categories) {
  return {
    type: UPDATE_CATEGORIES,
    categories,
  };
}

/** Reducer */
export function Categories(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
}
