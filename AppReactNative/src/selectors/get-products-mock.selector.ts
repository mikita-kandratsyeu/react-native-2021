import { createSelector } from 'reselect';
import { IProductsMockState } from '../modules/interfaces';

export const getProductsMockSelector = createSelector(
  (state: IProductsMockState) => state.productsMock,
  productsMock => productsMock,
);
