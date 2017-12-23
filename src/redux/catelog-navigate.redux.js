const UPDATE_CATEGORY = 'update_category';
const UPDATE_CATEGORY_NODE = 'update_category_node';

/** Action Creators */
export function updateCategoryIndex(categoryIndex) {
  return {
    type: UPDATE_CATEGORY,
    categoryIndex,
  };
}

export function updateCategoryNode(categoryNode) {
  return {
    type: UPDATE_CATEGORY_NODE,
    categoryNode,
  };
}

const initialState = {
  categoryIndex: 0,
  categoryNode: null,
};

/** Reducer */
export function CategoryNavigation(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CATEGORY:
      return {
        ...state,
        categoryIndex: action.categoryIndex,
      };
    case UPDATE_CATEGORY_NODE:
      return {
        ...state,
        categoryNode: action.categoryNode,
      };
    default:
      return state;
  }
}
