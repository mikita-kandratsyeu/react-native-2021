import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';

export const setUserDataAction = createAction('SET_USER_DATA_ACTION');

export const setUserData = (username: string, token: string) => (
  dispatch: Dispatch,
) => {
  dispatch(setUserDataAction({ username, token }));
};
