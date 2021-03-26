import { handleActions } from 'redux-actions';
import { setCategoriesAction } from '../actions';

export const setCategoriesReducer = handleActions(
  {
    [`${setCategoriesAction}`]: (state, { payload }) => [...payload],
  },
  [],
);
