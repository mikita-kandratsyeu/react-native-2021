import { combineReducers } from 'redux';
import {
  changeValueReducer,
  setUserDataReducer,
  setProductsMockReducer,
  setCategoriesReducer,
  setProductsReducer,
  setCurrentProductReducer,
} from '../reducers';

const createRootReducer = () =>
  combineReducers({
    counter: changeValueReducer,
    user: setUserDataReducer,
    productsMock: setProductsMockReducer,
    categories: setCategoriesReducer,
    products: setProductsReducer,
    currentProduct: setCurrentProductReducer,
    // TODO: add data for Orders Page
    // orders: setOrdersReducer,
  });

export default createRootReducer;
