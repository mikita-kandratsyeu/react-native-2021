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
  });

export default createRootReducer;
