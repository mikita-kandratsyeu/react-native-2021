import { handleActions } from 'redux-actions';
import { setCurrentProductAction } from '../actions';
import { IProduct } from '../modules/interfaces';

export const initialStateCurrentProduct: IProduct = {
  id: '',
  name: '',
  description: '',
  price: 0,
  source: {
    uri: 'http://',
  },
};

export const setCurrentProductReducer = handleActions(
  {
    [`${setCurrentProductAction}`]: (state, { payload }) => payload,
  },
  initialStateCurrentProduct,
);
