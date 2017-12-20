import { combineReducers } from 'redux';
import { Categories } from './category.redux';
import { CategoryNavigation } from './catelog-navigate.redux';

export default combineReducers({
  Categories,
  CategoryNavigation,
});
