import { createSelector } from 'reselect';
import { IProductsMockState } from '../modules/interfaces';

export const getProductsSelector = createSelector(
  (state: IProductsMockState) => state.productsMock,
  products => products,
);
