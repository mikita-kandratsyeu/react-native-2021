import { createSelector } from 'reselect';
import { IProductsState } from '../modules/interfaces';

export const getProductsSelector = createSelector(
  (state: IProductsState) => state.products,
  products => products,
);
