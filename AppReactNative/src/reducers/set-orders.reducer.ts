import { handleActions } from 'redux-actions';
import { setOrdersAction } from '../actions';

export const setOrdersReducer = handleActions(
  {
    [`${setOrdersAction}`]: (state, { payload }) => [...payload],
  },
  [],
);
