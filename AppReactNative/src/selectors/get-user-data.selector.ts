import { createSelector } from 'reselect';
import { IUserState } from '../modules/interfaces';

export const getUserDataSelector = createSelector(
  (state: IUserState) => state.user,
  user => user,
);
