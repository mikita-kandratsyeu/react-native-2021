import { AppRegistry, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';
import App from './src/modules/App';
import { name as appName } from './app.json';
import { channelIdCart } from './src/constans';

if (__DEV__) {
  import('./config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

PushNotification.configure({
  onRegister(token) {
    console.log('TOKEN:', token);
  },

  onNotification(notification) {
    console.log('NOTIFICATION:', notification);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,

  requestPermissions: Platform.OS === 'ios',
});

PushNotification.createChannel(
  {
    channelId: channelIdCart,
    channelName: channelIdCart,
  },
  created => console.info(`createChannel returned '${created}'`),
);

AppRegistry.registerComponent(appName, () => App);
