import { ICurrentProductState } from '../modules/interfaces';

export const getCurrentProductSelector = (state: ICurrentProductState) =>
  state.currentProduct;
