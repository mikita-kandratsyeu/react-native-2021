import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import { ICategoryMock } from '../modules/interfaces';

export const setProductsMockAction = createAction('SET_PRODUCTS_MOCK_ACTION');

export const setProducts = (products: ICategoryMock[]) => (
  dispatch: Dispatch,
) => {
  dispatch(setProductsMockAction(products));
};
