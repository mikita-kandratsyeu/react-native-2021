import { IShoppingCartState } from '../modules/interfaces';

export const getShoppingCartSelector = (state: IShoppingCartState) =>
  state.shoppingCart;
