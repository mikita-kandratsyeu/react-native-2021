import { AppRegistry } from 'react-native';
import App from './src/modules/App';
import { name as appName } from './app.json';

if (__DEV__) {
  import('./config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

AppRegistry.registerComponent(appName, () => App);
