import { handleActions } from 'redux-actions';
import { changeValueAction } from '../actions';
import { ICounter } from '../modules/interfaces';

const initialState: ICounter = {
  value: 0,
};

export const changeValueReducer = handleActions(
  {
    [`${changeValueAction}`]: (state, { payload }) => ({
      ...state,
      value: state.value + payload.value,
    }),
  },
  initialState,
);
