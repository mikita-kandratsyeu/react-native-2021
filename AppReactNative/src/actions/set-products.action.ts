import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import { ICategory } from '../modules/interfaces';

export const setProductsAction = createAction('SET_PRODUCTS_ACTION');

export const setProducts = (products: ICategory[]) => (dispatch: Dispatch) => {
  dispatch(setProductsAction(products));
};
