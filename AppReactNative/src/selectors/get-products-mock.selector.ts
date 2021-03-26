import { IProductsMockState } from '../modules/interfaces';

export const getProductsMockSelector = (state: IProductsMockState) =>
  state.productsMock;
