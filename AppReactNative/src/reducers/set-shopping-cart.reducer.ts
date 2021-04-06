import { handleActions } from 'redux-actions';
import { setShoppingCartAction } from '../actions';
import { IShoppingCart } from '../modules/interfaces';

export const setShoppingCartReducer = handleActions(
  {
    [`${setShoppingCartAction}`]: (state, { payload }: any) => {
      let newShoppingCart: IShoppingCart[];

      const findProduct = state.find(
        cartItem => cartItem.productId === payload.productId,
      );

      if (findProduct) {
        findProduct.amount += 1;

        newShoppingCart = [
          ...state.filter(
            cartItem => cartItem.productId !== findProduct.productId,
          ),
          findProduct,
        ];
      } else {
        newShoppingCart = [...state, payload];
      }

      return newShoppingCart;
    },
  },
  [] as IShoppingCart[],
);
