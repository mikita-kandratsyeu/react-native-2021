import { createSelector } from 'reselect';
import { ICurrentProductState } from '../modules/interfaces';

export const getCurrentProductSelector = createSelector(
  (state: ICurrentProductState) => state.currentProduct,
  currentProduct => currentProduct,
);
