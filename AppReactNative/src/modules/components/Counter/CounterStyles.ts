import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  counter: {
    fontSize: 36,
    fontWeight: '700',
  },
  buttons: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default styles;
