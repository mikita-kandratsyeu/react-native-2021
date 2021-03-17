import { handleActions } from 'redux-actions';
import { setUserDataAction } from '../actions';
import { IUser } from '../modules/interfaces';

const initialState: IUser = {
  username: '',
  token: '',
};

export const setUserDataReducer = handleActions(
  {
    [`${setUserDataAction}`]: (state, { payload }) => ({
      ...state,
      payload,
    }),
  },
  initialState,
);
