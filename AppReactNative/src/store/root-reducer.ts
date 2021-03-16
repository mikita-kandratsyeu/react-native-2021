import { combineReducers } from 'redux';
import { changeValueReducer } from '../reducers';

const createRootReducer = () =>
  combineReducers({
    defaultState: changeValueReducer,
  });

export default createRootReducer;
