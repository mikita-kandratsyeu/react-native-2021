// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  name: 'React Native App',
})
  .useReactNative()
  .connect();

export default reactotron;
