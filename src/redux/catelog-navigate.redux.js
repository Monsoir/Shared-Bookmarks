const UPDATE_CATEGORY = 'update_category';

/** Action Creators */
export function updateCategoryIndex(categoryIndex) {
  return {
    type: UPDATE_CATEGORY,
    categoryIndex,
  };
}

const initialState = {
  categoryIndex: 0,
};

/** Reducer */
export function CategoryNavigation(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CATEGORY:
      return {
        ...state,
        categoryIndex: action.categoryIndex,
      };
    default:
      return state;
  }
}
