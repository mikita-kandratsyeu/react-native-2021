import { StyleSheet } from 'react-native';
import { defaultStyles, margins } from '../../../constans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    ...margins,
    marginTop: 100,
    marginBottom: 100,
    backgroundColor: defaultStyles.colors.transparent,
    fontSize: defaultStyles.fontSize.large,
    textAlign: 'center',
    color: defaultStyles.colors.blue,
    fontWeight: '700',
  },

  input: {
    ...margins,
    marginTop: defaultStyles.margin.medium,
    alignSelf: 'stretch',
    backgroundColor: defaultStyles.colors.transparent,
    borderBottomWidth: 1,
    color: defaultStyles.colors.black,
    fontSize: defaultStyles.fontSize.medium,
  },

  registrationButton: {
    ...margins,
    alignSelf: 'center',
  },

  loginButton: {
    ...margins,
    marginTop: 50,
    alignSelf: 'stretch',
    backgroundColor: defaultStyles.colors.blue,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: defaultStyles.colors.white,
    fontWeight: 'bold',
    fontSize: defaultStyles.fontSize.small,
  },

  link: {
    color: defaultStyles.colors.link,
    fontSize: defaultStyles.fontSize.medium,
  },
});

export default styles;
