import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { configStore } from '../store';
import { Login } from './components';

const store: Store = configStore();

const App: React.FC = () => (
  <Provider store={store}>
    <Login />
    {/* <Registration /> */}
    {/* <Main /> */}
    {/* <ProductDetails /> */}
  </Provider>
);

export default App;
