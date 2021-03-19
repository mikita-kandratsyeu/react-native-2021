import { handleActions } from 'redux-actions';
import { setProductsAction } from '../actions';

export const setProductsReducer = handleActions(
  {
    [`${setProductsAction}`]: (state, { payload }) => [...payload],
  },
  [],
);
