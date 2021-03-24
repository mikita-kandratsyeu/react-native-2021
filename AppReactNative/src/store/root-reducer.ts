import { combineReducers } from 'redux';
import {
  changeValueReducer,
  setUserDataReducer,
  setProductsReducer,
} from '../reducers';

const createRootReducer = () =>
  combineReducers({
    counter: changeValueReducer,
    user: setUserDataReducer,
    productsMock: setProductsReducer,
    // categoriesApi: setCategoriesApi,
  });

export default createRootReducer;
