import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import { IProduct, IShoppingCart } from '../modules/interfaces';

export const setShoppingCartAction = createAction('SET_SHOPPING_CART_ACTION');

export const setShoppingCart = (product: IProduct) => (dispatch: Dispatch) => {
  const shoppingCartItem: IShoppingCart = {
    productId: product.id,
    amount: 1,
    product,
  };

  dispatch(setShoppingCartAction(shoppingCartItem));
};
