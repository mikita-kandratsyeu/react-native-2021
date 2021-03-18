import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { configStore } from '../store';
import { Registration } from './components';

const store: Store = configStore();

const App: React.FC = () => (
  <Provider store={store}>
    {/* <Login /> */}
    <Registration />
  </Provider>
);

export default App;
