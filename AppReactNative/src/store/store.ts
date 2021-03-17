import { applyMiddleware, createStore, Store, compose } from 'redux';
import thunk from 'redux-thunk';
import { AppState } from './types/app-state';
import createRootReducer from './root-reducer';
import ReactotronConfig from '../../config/ReactotronConfig';

export const configStore = (): Store<AppState> =>
  // @ts-ignore
  createStore(createRootReducer(), compose(applyMiddleware(thunk), ReactotronConfig.createEnhancer()));
