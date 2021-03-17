import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { configStore } from '../store';
import { Login } from './components/Login';

const store: Store = configStore();

const App: React.FC = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);

export default App;
