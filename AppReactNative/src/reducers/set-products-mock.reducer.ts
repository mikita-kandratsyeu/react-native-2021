import { handleActions } from 'redux-actions';
import { setProductsMockAction } from '../actions';

export const setProductsMockReducer = handleActions(
  {
    [`${setProductsMockAction}`]: (state, { payload }) => [...payload],
  },
  [],
);
