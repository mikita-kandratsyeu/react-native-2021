import { combineReducers } from 'redux';
import { changeValueReducer, setUserDataReducer } from '../reducers';

const createRootReducer = () =>
  combineReducers({
    counter: changeValueReducer,
    user: setUserDataReducer,
  });

export default createRootReducer;
