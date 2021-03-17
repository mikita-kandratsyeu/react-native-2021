import { createSelector } from 'reselect';
import { ICounterState } from '../modules/interfaces';

export const getValueSelector = createSelector(
  (state: ICounterState) => state.counter.value,
  value => value,
);
