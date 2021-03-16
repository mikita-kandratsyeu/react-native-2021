import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AppState } from './types/app-state';
import createRootReducer from './root-reducer';

export const configStore = (): Store<AppState> =>
  createStore(createRootReducer(), composeWithDevTools(applyMiddleware(thunk)));
