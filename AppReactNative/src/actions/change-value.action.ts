import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';

export const changeValueAction = createAction('CHANGE_VALUE_ACTION');

export const changeValue = (value: number) => (dispatch: Dispatch) => {
  dispatch(changeValueAction({ value }));
};
