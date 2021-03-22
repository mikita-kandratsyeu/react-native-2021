import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { configStore } from '../store';
import { Application } from './components';

const store: Store = configStore();

const App: React.FC = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

export default App;
