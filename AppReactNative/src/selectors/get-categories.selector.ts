import { createSelector } from 'reselect';
import { ICategoriesState } from '../modules/interfaces';

export const getCategoriesSelector = createSelector(
  (state: ICategoriesState) => state.categories,
  categories => categories,
);
