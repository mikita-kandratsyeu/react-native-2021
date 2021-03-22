// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({
  name: 'React Native App',
})
  .use(reactotronRedux())
  .useReactNative()
  .connect();

export default reactotron;
