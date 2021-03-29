import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../../constans';

const styles = StyleSheet.create({
  loginButton: {
    width: 350,
    backgroundColor: defaultStyles.colors.blue,
    padding: defaultStyles.padding.medium,
    margin: defaultStyles.margin.large,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  loginButtonLoading: {
    width: 100,
  },

  loginText: {
    color: defaultStyles.colors.white,
    textTransform: 'uppercase',
    fontSize: defaultStyles.fontSize.medium,
  },
});

export default styles;
